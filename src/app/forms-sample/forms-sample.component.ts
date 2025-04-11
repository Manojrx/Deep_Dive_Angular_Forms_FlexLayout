import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { concatMap, debounceTime, delay, exhaustMap, map, mergeMap, Observable, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-forms-sample',
  imports: [ReactiveFormsModule, CommonModule,FormsModule],
  templateUrl: './forms-sample.component.html',
  styleUrl: './forms-sample.component.scss'
})
export class FormsSampleComponent {

  myForm = new FormGroup({
    taskName: new FormControl('', [Validators.required]),
    taskDetails: new FormControl('', [Validators.required]),
  })
  taskDetails: any[] = [];
  constructor() {
    // this.myForm = new FormGroup({
    //   nameField : new FormControl('',[Validators.required]),
    //   taskDetails : new FormControl('',[Validators.required]),
    // })
  }
  submit() {
    if (this.myForm.valid) {
      this.taskDetails.push({ taskName: this.myForm.controls['taskName'].value, taskDetails: this.myForm.controls['taskDetails'].value })
    }
  }
  submitTemplate(form: any) {
    console.log(" temp form", form.controls);
    
  }


  ngOnInit() {


}

  dummyApi(res: any) {
    if (res === 'abc') {
      return of(['abc']).pipe(delay(4000))
    } else if (res === 'abcd') {
      return of(['abcd']).pipe(delay(2000))
    } else {
      return of(['random']).pipe(delay(2000))
    }
  }

  currentValue: any = Observable;

  //using Map - retrieves data from observable and we can transform from oneform to another.

  mapSearch(form: any) {     
    form.controls['search'].valueChanges.pipe(debounceTime(400), map(x => {       //map used to transform the data
      console.log("x",x);     // valueChanges is an observable it reteives data from observable.      
      return this.dummyApi(x)         // it transforms and also returns an observable that why using subscrib inside subscibe.
    })
    ).subscribe((res: any) => {
      console.log("res", res);    // logs observable
      res.subscribe((secSub: any) => {
        console.log("secSub", secSub);   // logs data
      })
    })
  }

  
  //
  mergeSearch(form: any) {     
    form.controls['search'].valueChanges.pipe(debounceTime(100) , mergeMap(x => {     //merge two observable into one so we use single observable.
     return this.dummyApi(x);
    })).subscribe((merge:any) =>{   // mergeMap will emits value first it returns and don't follow the sequence.
      console.log("merge",merge);     
    })
  }

  concatSearch(form: any) {     
    form.controls['search'].valueChanges.pipe( concatMap(x => {    
     return this.dummyApi(x);
    })).subscribe((merge:any) =>{   // concatMap will return search value based on sequence and process other value once completeing the previos value.
      console.log("concatMap",merge);     
    })
  }

  switchMap(form: any) {     
    form.controls['search'].valueChanges.pipe( switchMap(x => {     
     return this.dummyApi(x);
    })).subscribe((merge:any) =>{   // switchMap will return the current value by avoiding previous one and if we using in search box we will get response for latest value.
      console.log("concatMap",merge);     
    })
  }

  exhauust(form: any) {         //Exhaust map will take the current value and if any other value comes in before completing the previous values it will ignore.
    form.controls['search'].valueChanges.pipe( exhaustMap(x => {     
     return this.dummyApi(x);
    })).subscribe((merge:any) =>{   
      console.log("concatMap",merge);     
    })
  }


}

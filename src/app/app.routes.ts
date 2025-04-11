import { Routes } from '@angular/router';
import { ResponsiveCheckComponent } from './responsive-check/responsive-check.component';
import { FormsSampleComponent } from './forms-sample/forms-sample.component';

export const routes: Routes = [

       {path:"",redirectTo:"forms" , pathMatch:'full'},
       {path:"forms",component:FormsSampleComponent},
        {path:"responsiveness",component:ResponsiveCheckComponent}
];



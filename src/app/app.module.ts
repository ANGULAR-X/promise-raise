import { Routes }               from '@angular/router';
import { HelloWorldComponent}   from "./pages/raise-home/hello-world.component";
import {PersonalComponent} from "./pages/raise-personal/raise-personal.component";


export const ROUTES: Routes = [
  {
    path: 'home',
    component: HelloWorldComponent
  },
  {
    path:'personal',
    component:PersonalComponent
  },
  {
    path : '',
    redirectTo : 'home',
    pathMatch : 'full'
  }
];

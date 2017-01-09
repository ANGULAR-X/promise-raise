import { Routes }               from '@angular/router';
import { HelloWorldComponent}   from "./pages/raise-home/hello-world.component";


export const ROUTES: Routes = [
  {
    path: 'home',
    component: HelloWorldComponent
  },
  {
    path : '',
    redirectTo : 'home',
    pathMatch : 'full'
  }
];

import { NgModule }                         from '@angular/core';
import { FormsModule }                      from '@angular/forms';
import { HttpModule  }                      from '@angular/http';
import { RouterModule, PreloadAllModules }  from "@angular/router";
import { BrowserModule }                    from '@angular/platform-browser';

import { AppComponent }                     from "./app.component";

import { ROUTES } from "./app.routes";
import { HelloWorldComponent } from "./pages/raise-home/hello-world.component";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    HelloWorldComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, {preloadingStrategy: PreloadAllModules })
  ],
  providers: []
})
export class MainModule {

}

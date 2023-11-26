import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcboutComponent } from './acbout/acbout.component';
import { AboutComponent } from './about/about.component';

@NgModule({
    declarations: [AppComponent, AboutComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AcboutComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

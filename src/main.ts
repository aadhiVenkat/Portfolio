import { enableProdMode, importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import {AngularFireModule} from '@angular/fire/compat'
import { environment } from './environments/environment.development';
import { initializeApp } from 'firebase/app';
if (environment.production) {
  enableProdMode();
}

const firebaseApp = initializeApp(environment.firebase);

bootstrapApplication(AppComponent, {
    providers: [provideAnimations()]
  })
  .catch(err => console.error(err));

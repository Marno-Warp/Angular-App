import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideAnimationsAsync()]
};

const firebaseConfig = {
  apiKey: "AIzaSyBgaWX-Vv7lR69etSumF933mRhIgGAEXoU",
  authDomain: "vehicle-shop-e2981.firebaseapp.com",
  projectId: "vehicle-shop-e2981",
  storageBucket: "vehicle-shop-e2981.firebasestorage.app",
  messagingSenderId: "373508164027",
  appId: "1:373508164027:web:490ec40d54eeb0049e1c9e"
};
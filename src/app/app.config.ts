import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { authInterceptorProvider } from './Interceptors/Auth/auth-interceptor.interceptor';
import { LoggingInterceptorProvider } from './Interceptors/Logging/logging.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    importProvidersFrom(HttpClientModule),
    authInterceptorProvider,
    LoggingInterceptorProvider
  ]
};


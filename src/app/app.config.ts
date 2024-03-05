import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { routes, routesAuth } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { authInterceptorProvider } from './Interceptors/Auth/auth-interceptor.interceptor';
import { LoggingInterceptorProvider } from './Interceptors/Logging/logging.interceptor';

const combinedRoutes = [...routes, ...routesAuth];

console.log(combinedRoutes)
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(combinedRoutes),
    provideClientHydration(),
    importProvidersFrom(HttpClientModule),
    authInterceptorProvider,
    LoggingInterceptorProvider
  ]
};


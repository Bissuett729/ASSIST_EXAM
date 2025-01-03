import { Routes } from '@angular/router';
import * as modules from './index-modules'

export const modulesRoutes: Routes = [
  { path: 'profile', component: modules.ProfileComponent },
  { path: 'users', component: modules.UserComponent },
  { path: 'generate-exam', component: modules.GenerateExamComponent },
  { path: 'performance', component: modules.PerformanceComponent }
];

import { Routes } from '@angular/router';
// Layout
import { LayoutComponent } from './core/layout/layout.component';

export const routes: Routes = [
  { path: '', redirectTo: 'assist-exam/v1', pathMatch: 'full' },
  { 
    path: 'assist-exam/v1', 
    component: LayoutComponent, 
    loadChildren: () => import('./modules/modules.routes').then(m => m.modulesRoutes) 
  }
];

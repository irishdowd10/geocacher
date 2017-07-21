import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeocacherFormComponent } from './geocacher-form/geocacher-form.component';

const appRoutes: Routes = [
  {
    path: '',
    component: GeocacherFormComponent
  },
]


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

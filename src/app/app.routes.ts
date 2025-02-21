import { Routes } from '@angular/router';
import { HomePageComponent } from './home/pages/home-page/home-page.component';
export const routes: Routes = [
  { path: '', component: HomePageComponent },
  {
    path: 'users',
    loadChildren: () =>
      import('./users/users.module').then((m) => m.UsersModule),
  },
];

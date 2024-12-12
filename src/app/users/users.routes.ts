import { Route } from '@angular/router';
import { ListPageComponent } from './pages/list-page/list-page.component';

export const USERS_ROUTES: Route[] = [
  {
    path: 'list',
    component: ListPageComponent,
  },
];

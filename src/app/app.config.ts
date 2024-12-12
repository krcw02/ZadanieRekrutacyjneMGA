import { importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './home/pages/home-page/home-page.component';
import { ListPageComponent } from './users/pages/list-page/list-page.component';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig = {
  providers: [
    importProvidersFrom(
      RouterModule.forRoot([
        { path: '', component: HomePageComponent },
        {
          path: 'users',
          loadChildren: () =>
            import('./users/users.module').then((m) => m.UsersModule),
        },
      ])
    ),
    provideHttpClient(withFetch()),
  ],
};

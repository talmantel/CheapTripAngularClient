import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { NoPageComponent } from './no-page/no-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  {
    path: 'search',
    //   canActivate: [SearchResultGuard],
    loadChildren: () =>
      import('./trip-direction/trip-direction.module').then(
        (m) => m.TripDirectionModule
      ),
  },
 /*  {
    path: '',
    component: HeaderComponent,
    children: [
      {
        path: 'search',
        //   canActivate: [SearchResultGuard],
        loadChildren: () =>
          import('./trip-direction/trip-direction.module').then(
            (m) => m.TripDirectionModule
          ),
      },
    ],
  }, */

  { path: '**', component: NoPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

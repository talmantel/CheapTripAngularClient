import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DataTableComponent } from './authors/data-table/data-table.component';
import { HeaderComponent } from './header/header/header.component';
import { LandingComponent } from './landing/landing.component';
import { LinksComponent } from './links/links.component';
import { NoPageComponent } from './no-page/no-page.component';
import { BudgetTravelComponent } from './budget-travel/budget-travel.component';
import { TipCityComponent } from './budget-travel/tip-city/tip-city.component';

const routes: Routes = [
  { path: 'landing', component: LandingComponent },
  //  { path: 'main',component: HeaderComponent},
  { path: '', redirectTo: '/search/myPath/logo', pathMatch: 'full' },
  {
    path: 'search',
    //   canActivate: [SearchResultGuard],
    loadChildren: () =>
      import('./trip-direction/trip-direction.module').then(
        m => m.TripDirectionModule
      ),
  },

  { path: 'links', component: LinksComponent },
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
  { path: 'city', component: TipCityComponent },
  { path: 'travel', component: BudgetTravelComponent },
  { path: '**', component: NoPageComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      relativeLinkResolution: 'legacy',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

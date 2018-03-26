import { Routes } from '@angular/router';
import { LookupComponent } from './dictionary/lookup/lookup.component';
import { DashboardComponent } from './dashboard/dashboard.component';


export const AppRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'dictionary', component: LookupComponent },
    { pathMatch: 'full', path: '', component: DashboardComponent },
    { path: '**', redirectTo: 'dashboard' , pathMatch: 'full'}

];
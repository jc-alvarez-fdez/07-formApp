import { Routes } from '@angular/router';
import { ReactiveModule } from './reactive/reactive.module';

export const routes: Routes = [
    {
        path: "reactive",
        loadChildren: () => import ("./reactive/reactive.module").then( m => m.ReactiveModule ),
    },
    {
        path: "auth",
        loadChildren: () => import ("./auth/auth.module").then( m => m.AuthModule ),
    },
    {
        path: "**",
       redirectTo: "reactive",
    },

];

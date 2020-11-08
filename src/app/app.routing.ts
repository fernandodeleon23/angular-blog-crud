import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'post/:id', component: SinglePostComponent }
];

export const appRoutingModule = RouterModule.forRoot(routes);
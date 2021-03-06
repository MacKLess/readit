import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SplashComponent } from './splash/splash.component';
import { AboutComponent} from './about/about.component';
import { BBComponent } from './bb/bb.component';
import { DetailPostComponent } from './detail-post/detail-post.component';

const appRoutes: Routes = [
  {
    path: '',
    component: SplashComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'bb',
    component: BBComponent
  },
  {
    path: 'categories/:id',
    component: DetailPostComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

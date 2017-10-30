import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SplashComponent } from './splash/splash.component';
import { AboutComponent} from './about/about.component';
import { BulletinBoardComponent } from './bulletin-board/bulletin-board.component';

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
    path: 'bulletin-board',
    component: BulletinBoardComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

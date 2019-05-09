import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SizeFinderComponent } from './size-finder/size-finder.component';

const routes: Routes = [
  {
    path: 'size-finder',
    component: SizeFinderComponent,
    data: { title: 'Size Finder' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { DetailsComponent } from './details/details.component';


const routes: Routes = [
  { path: '', component: ContentComponent, pathMatch: 'full' },
  {path:'details/:artistName/:albumName',component:DetailsComponent}

];
@NgModule({


  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule],
  declarations: [

  ]
})
export class AppRoutingModule { }

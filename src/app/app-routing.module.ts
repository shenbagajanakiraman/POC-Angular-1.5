import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { OnClickComponent } from './on-click/on-click.component';


const routes: Routes = [
  { path: '', component: ContentComponent, pathMatch: 'full' },
  { path: 'click', component: OnClickComponent }

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

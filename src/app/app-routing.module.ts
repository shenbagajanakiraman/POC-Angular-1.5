import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { DetailsComponent } from './details/details.component';
import { FavouriteTracksComponent } from './favourite-tracks/favourite-tracks.component';


const routes: Routes = [
  { path: '', component: ContentComponent, pathMatch: 'full' },
  {path:'details/:artistName/:albumName',component:DetailsComponent},
  {path:'home', component:ContentComponent},
  {path:'addTrack/:albumName/:artistName/:playcount', component:FavouriteTracksComponent}

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

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CelebrationComponent } from './celebration/celebration.component';
import { MemoriesComponent } from './memories/memories.component';


const routes: Routes = [
  {path: 'celebration', component: CelebrationComponent},
  {path: 'memories', component: MemoriesComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

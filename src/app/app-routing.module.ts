import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./view-layer/home/home.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'messages',
    loadChildren: () => import(`../app/modules/messages.module`).then(m => m.MessagesModule)
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {MessagesComponent} from "../view-layer/messages/messages.component";

const routes: Routes = [
  {path: '', component: MessagesComponent},

];


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessagesModule {
}

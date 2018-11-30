import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyWidgetComponentComponent } from './my-widget-component/my-widget-component.component';

const routes: Routes = [
  {path:'next', component: MyWidgetComponentComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

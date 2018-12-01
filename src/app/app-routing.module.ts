import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyWidgetComponentComponent } from './my-widget-component/my-widget-component.component';
import { DateComponent } from './date/date.component';
import { ButtonsComponent } from './buttons/buttons.component';

const routes: Routes = [
  {path:'next', component: MyWidgetComponentComponent},
  {path:'date', component: DateComponent},
  {path:'buttons', component: ButtonsComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

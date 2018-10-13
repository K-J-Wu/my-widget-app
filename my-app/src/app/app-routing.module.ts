import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WidgetComponent } from './components/widget/widget.component';
import { WidgetShowComponent } from './components/widget/widget-show/widget-show.component';
import { WidgetNewComponent } from './components/widget/widget-new/widget-new.component';
import { WidgetUpdateComponent } from './components/widget/widget-update/widget-update.component';
import { MachineComponent } from './components/machine/machine.component';
import {SizeComponent} from "./components/size/size.component";

const routes: Routes = [
	{ path: '', redirectTo: '/widgets', pathMatch: 'full' },
	{ path: 'widgets', component: WidgetComponent },
	{ path: 'widgets/new', component: WidgetNewComponent },
	{ path: 'widgets/:id', component: WidgetShowComponent },
	{ path: 'widgets/:id/edit', component: WidgetUpdateComponent },
	{ path: 'machines', component: MachineComponent },
  { path: 'sizes', component: SizeComponent },
];

@NgModule ({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})

export class AppRoutingModule {}

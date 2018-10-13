import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { WidgetComponent } from './components/widget/widget.component';
import { WidgetShowComponent } from './components/widget/widget-show/widget-show.component';
import { WidgetNewComponent } from './components/widget/widget-new/widget-new.component';
import { WidgetUpdateComponent } from './components/widget/widget-update/widget-update.component';

import { MachineComponent } from './components/machine/machine.component';

import { SizeComponent } from './components/size/size.component';

import { AppComponent } from './components/app.component';
import { FilterPipe } from './pipes/filter.pipe';
import { SortPipe } from './pipes/sort.pipe'

@NgModule({
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		FormsModule
		],
	declarations: [
		AppComponent,
		WidgetComponent,
		WidgetShowComponent,
		WidgetUpdateComponent,
		WidgetNewComponent,
		MachineComponent,
		SizeComponent,
		FilterPipe,
    SortPipe
		],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

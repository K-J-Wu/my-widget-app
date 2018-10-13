import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Widget } from '../../models/widget';
import { WidgetService } from '../../services/widget.service';

@Component({
	selector: 'app-widget',
	templateUrl: './widget.component.html',
	styleUrls: ['./widget.component.css']
})
export class WidgetComponent implements OnInit {
	widgets: Widget[];
	currentFlag: boolean = true;

	constructor(
	  private widgetService: WidgetService,
    private router: Router) {
	}

	ngOnInit() {
		this.getWidgets();
	}

	getWidgets(): void {
		this.widgetService.getWidgets()
		.subscribe(widgets => this.widgets = widgets);
	}

  deleteWidget(id:number): void {
	  this.widgetService.deleteWidget(id)
        .subscribe( data => this.getWidgets()
      );
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Widget } from '../../../models/widget';
import { WidgetService } from '../../../services/widget.service';

@Component({
	selector: 'app-widget-show',
	templateUrl: './widget-show.component.html',
	styleUrls: ['./widget-show.component.css']
})
export class WidgetShowComponent implements OnInit{
	@Input() widget: Widget;

	constructor(
		private activatedRoute: ActivatedRoute,
		private widgetService: WidgetService
	) {}

	ngOnInit() {
		this.getWidget();
	}

	getWidget(): void {
		const id = +this.activatedRoute.snapshot.paramMap.get('id');
		this.widgetService.getWidget(id)
		.subscribe(widget => this.widget = widget);
	}
}

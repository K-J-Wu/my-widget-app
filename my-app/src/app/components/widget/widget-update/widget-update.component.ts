import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Widget } from '../../../models/widget';
import { WidgetService } from '../../../services/widget.service';

@Component({
	selector: 'app-widget-update',
	templateUrl: './widget-update.component.html',
	styleUrls: ['./widget-update.component.css']
})
export class WidgetUpdateComponent implements OnInit{
	widget: Widget;

	constructor(
		private activatedRoute: ActivatedRoute,
		private router: Router,
		private widgetService: WidgetService,
	) {}

	ngOnInit() {
		this.getWidget();
	}

	getWidget(): void {
		const id = +this.activatedRoute.snapshot.paramMap.get('id');
		this.widgetService.getWidget(id)
		.subscribe( data => this.widget = data);
	}

	update(): void {
		this.widgetService.updateWidget(this.widget).subscribe( data => {
      this.router.navigate(['widgets/:id', {id:data.id}]);
		});

	}
}

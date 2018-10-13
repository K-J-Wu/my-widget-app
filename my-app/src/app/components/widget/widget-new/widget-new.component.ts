import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { Widget } from '../../../models/widget';
import { WidgetService } from "../../../services/widget.service";

@Component({
	selector: 'app-widget-new',
	templateUrl: './widget-new.component.html',
})
export class WidgetNewComponent {
  widget: Widget = new Widget();

	constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private location: Location,
    private widgetService: WidgetService
	) {}

  add(widget:Widget): void {
	  this.widgetService.addWidget(this.widget)
      .subscribe(data =>{
        this.router.navigate(['widgets/:id', {id:data.id}]);
      });
  }

}

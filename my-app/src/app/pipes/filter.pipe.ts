import { Pipe, PipeTransform } from '@angular/core';
import { Widget } from './../models/widget';

@Pipe(
	{name: "filter"}
)

export class FilterPipe implements PipeTransform {
  transform(array: any[], filter: string): any[] {
	if (!array) return [];
	if (!filter) return array;

	filter = filter.toLowerCase();

    return array.filter(data => data.color.toLowerCase().indexOf(filter) != -1);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Widget } from '../models/widget';
import {SortPipe} from "../pipes/sort.pipe";

const httpOptions = {
	headers: new HttpHeaders({ 'Content-type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class WidgetService {

	constructor (
		private http: HttpClient
	) {}

	widgetDataUrl = 'https://walles-widgets.herokuapp.com/widgets';

	/** GET Widgets */
	getWidgets(): Observable<Widget[]> {
		const url = this.widgetDataUrl +'.json';
		return this.http.get<Widget[]>(url)
		.pipe(
			catchError(this.handleError('getWidget', []))
		);
	}

	/** GET Widgets by id */
	getWidget(id: number): Observable<Widget> {
		const url = `${this.widgetDataUrl}/${id}.json`;
		return this.http.get<Widget>(url)
		.pipe(
			catchError(this.handleError<Widget>('getWidget id=${id}'))
		);
	}

	/** POST Widget */
	addWidget (widget: Widget): Observable<Widget> {
		const url = `${this.widgetDataUrl}.json`;
		return this.http.post<Widget>(url, widget, httpOptions)
		.pipe(
			catchError(this.handleError<Widget>('addWidget'))
		);
	}

	/** DELETE Widget */
	deleteWidget (id: number): Observable<Widget> {
		const url = `${this.widgetDataUrl}/${id}.json`;

		return this.http.delete<Widget>(url, httpOptions)
		.pipe(
			catchError(this.handleError<Widget>('deleteWidget'))
		);
	}

	/** PUT: Update Widget */
	updateWidget (widget: Widget): Observable<any> {
    widget.size_id = widget.size.id;
    widget.machine_id = widget.machine.id;
		const url = `${this.widgetDataUrl}/${widget.id}.json`;
		return this.http.put(url, widget, httpOptions)
		.pipe(
			catchError(this.handleError<any>('updateWidget'))
		);
	}

	/**
	* Handle Http operation that failed.
	* Let the app continue.
	* @param operation - name of the operation that failed
	* @param result - optional value to return as the observable result
	*/

	private handleError<T> (operation = 'operation', result?: T) {
		return (error: any): Observable<T> => {

		// TODO: send the error to remote logging infrastructure
		console.error(error); // log to console instead

		// TODO: better job of transforming error for user consumption
		console.log(`${operation} failed: ${error.message}`);

		// Let the app keep running by returning an empty result.
		return of(result as T);
		};
	}
}

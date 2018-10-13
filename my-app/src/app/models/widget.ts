import { Size } from './size';
import { Machine } from './machine';

export class Widget {
	id: number;
	name: string;
	description: string;
	color: string;
	size: Size;
	machine: Machine;
	size_id: number;
	machine_id: number;
	created_at: string;
	updated_at: string;
	url: string;
}

import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

import { Size } from "../../models/size";
import { SizeService} from "../../services/size.service";

@Component({
	selector: 'app-size',
	templateUrl: './size.component.html',
	styleUrls: ['./size.component.css']
})
export class SizeComponent implements OnInit{

  @Output() sizeChange: EventEmitter<number> = new EventEmitter<number>();
  @Input() size: number;
  sizes: Size[];

	constructor(private sizeService: SizeService) {}

	ngOnInit() {
	  this.getSizes();
  }

  getSizes(): void {
    this.sizeService.getSizes()
      .subscribe(data => {
        this.sizes = data;
        if (!this.size) {
          this.size = this.sizes[0].id;
          setTimeout(() => {this.sizeChange.emit(this.size)});
        }
      });
  }

  onChange(): void {
	  this.sizeChange.emit(this.size);
  }

}

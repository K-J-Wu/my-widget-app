import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Machine } from "../../models/machine";
import { MachineService} from "../../services/machine.service";

@Component({
	selector: 'app-machine',
	templateUrl: './machine.component.html',
	styleUrls: ['./machine.component.css']
})
export class MachineComponent implements OnInit{
  @Input() machine: number;
  @Output() machineChange: EventEmitter<number> = new EventEmitter<number>();
  machines: Machine[];

  constructor(private machineService: MachineService ) {}

  ngOnInit() {
    this.getMachines();
  }

  getMachines(): void {
    this.machineService.getMachines()
      .subscribe(data => {
          this.machines = data;
          if (!this.machine) {
            this.machine = this.machines[0].id;
            setTimeout(() => {
              this.machineChange.emit(this.machine)
            })
          }
        }
      );
  }

  onChange():void {
    this.machineChange.emit(this.machine);
  }
}

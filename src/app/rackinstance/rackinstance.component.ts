import { Component, OnInit } from '@angular/core';
import { Rack } from '../rack';
import{ RACKS } from '../mock-rack';
import { RackService } from '../rack.service';



@Component({
  selector: 'app-rackinstance',
  templateUrl: './rackinstance.component.html',
  styleUrls: ['./rackinstance.component.css']
})
export class RackinstanceComponent implements OnInit {
  rack: Rack = {
    name: 'Rack1'
  }
  selectedRack: Rack;
  onSelect(rack : Rack): void{
    this.selectedRack = rack;
  }
  racks : Rack[];
  constructor(private rackService: RackService) { }

  ngOnInit() {
    this.getRacks();
  }
  getRacks():void{
    this.rackService.getRacks()
    .subscribe(racks => this.racks = racks);
  }

}

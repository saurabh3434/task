import { Component, OnInit, Input } from '@angular/core';
import { Rack } from '../rack';

@Component({
  selector: 'app-rackdetail',
  templateUrl: './rackdetail.component.html',
  styleUrls: ['./rackdetail.component.css']
})
export class RackdetailComponent implements OnInit {
  @Input() rack : Rack;
  constructor() { }
  
  ngOnInit() {
  }

}

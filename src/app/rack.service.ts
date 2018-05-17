import { Injectable } from '@angular/core';
import { Rack } from './rack';
import { RACKS } from './mock-rack';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class RackService {

  constructor(private messageService: MessageService) { }
  getRacks(): Observable<Rack[]>{
    this.messageService.add('RackService: fetched racks');
    return of(RACKS);
  }
}

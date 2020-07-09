import { Injectable } from '@angular/core';
import { Leader,LEADERS } from '../shared/leader';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }
  getLeaders() : Leader[]{
    return LEADERS;
  }

  getFeaturedLeader() :Leader{
    return LEADERS.filter((leader) => (leader.featured))[0];
  }
}

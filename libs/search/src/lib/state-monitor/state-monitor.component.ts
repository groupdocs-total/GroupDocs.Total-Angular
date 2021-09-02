import { Component, OnInit } from '@angular/core';
import { StateMonitorService } from '../state-monitor.service';

@Component({
  selector: 'gd-state-monitor',
  templateUrl: './state-monitor.component.html',
  styleUrls: ['./state-monitor.component.less']
})
export class StateMonitorComponent implements OnInit {

  constructor(public state: StateMonitorService) { }

  ngOnInit() {
  }

  getBackgroundColor(status: string) {
    switch (status) {
      case 'Unknown': return '#AAA';
      case 'NotIndexed': return '#AAA';
      case 'Pending': return '#ADF';
      case 'Indexing': return '#FFA';
      case 'Removing': return '#FFA';
      case 'Merging': return '#AFF';
      case 'SuccessfullyProcessed': return '#AFA';
      case 'Skipped': return '#AAA';
      case 'ProcessedWithError': return '#FAA';
      default: return '#AAA';
    }
  }
}

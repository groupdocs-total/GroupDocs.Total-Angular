import { Component, OnDestroy, OnInit } from '@angular/core';
import { IndexingStatusService } from '../indexing-status.service';
import { SearchConfigService } from '../search-config.service';

@Component({
  selector: 'gd-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.less']
})
export class StatusBarComponent implements OnInit, OnDestroy {

  constructor(public indexingStatusService: IndexingStatusService,
              private _configService: SearchConfigService) {
  }

  ngOnInit() {
    this.indexingStatusService.start(this._configService.folderName);
  }

  ngOnDestroy() {
    this.indexingStatusService.stop();
  }
}

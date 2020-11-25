import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TooltipComponent implements OnInit {
  @Input() config;
  constructor() { }

  ngOnInit(): void {
  }

  get runChangeDetection() {
    console.log('Checking the view');
    return true;
  }
 

}

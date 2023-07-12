import { Component, Input } from '@angular/core';
import { ChartData, ChartEvent ,ChartType } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: [

  ]
})
export class DonaComponent {

  @Input() title: string = 'sin titulo';

  // Doughnut
  public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ 350, 450, 100 ] },

    ]
  };
  public doughnutChartType: ChartType = 'doughnut';

}

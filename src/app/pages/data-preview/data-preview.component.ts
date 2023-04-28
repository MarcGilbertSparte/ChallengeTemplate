import { ChangeDetectionStrategy, Component } from '@angular/core';
import challengeData from '../../dataset.json';

interface DataTableInterface {
  tableName: string;
  tableKeys: string[];
  tableData: any[];
}

@Component({
  selector: 'app-data-preview',
  templateUrl: './data-preview.component.html',
  styleUrls: ['./data-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataPreviewComponent {
  //WARN: Ne pas modifier ce component ou ses méthodes, il sert uniquement à la visualisation des données
  public tables: DataTableInterface[];
  constructor() {
    this.tables = [];
    Object.keys(challengeData).forEach(model => {
      if (model !== 'timeframe') {
        this.tables.push({
          tableName: model,
          tableKeys: Object.keys((challengeData as any)[model][0]),
          tableData: (challengeData as any)[model]
        })
      }
    });
  }
}

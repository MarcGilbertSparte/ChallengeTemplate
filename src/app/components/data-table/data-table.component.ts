import { Component } from '@angular/core';

@Component({
  selector: "data-table",
  templateUrl: "./data-table.component.html",
  styleUrls: ["./data-table.component.scss"],
})
export class DataTableComponent {
  //TODO: 2b. Récupérer les données des tables du parent
  public table: any;
  constructor() { }

  /**
   * Récupère les données d'une cellule
   * (pas besoin de toucher à cette fonction)
   * @param dataLine : ligne de données
   * @param key : clé de la donnée
   * @returns string formatté
   */
  getDataForCell = (dataLine: any, key: string) => {
    if (typeof dataLine[key] === "object") {
      return dataLine[key].map((data: any) => !!data.values ? `${data.name} (${data.values.length})` : data).join(", ")
    }
    else return dataLine[key];
  }
}
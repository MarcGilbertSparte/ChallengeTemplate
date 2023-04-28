import { ChangeDetectionStrategy, Component } from '@angular/core';

interface ChallengeData {
  name: string,
  challenges: string[]
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent {
  //ATTENTION: Ne pas modifier ce component ou ses méthodes
  public challengeData: ChallengeData[];

  constructor() {
    this.challengeData = [
      {
        name: 'Routing',
        challenges: [
          '<b>TODO 1 :</b> Configurer la route <a href="./challenge">/challenge</a> dans app-routing.module.ts pour accéder à l\'épreuve.'
        ]
      },
      {
        name: 'Communication Parent Enfant',
        challenges: [
          '<b>TODO 2 (a et b) :</b> Afficher les données des tables <b>Environnements</b>, <b>Systems</b> et <b>Assets</b> dans le composant <b>DataTableComponent</b> (src/app/components/data-table/data-table.component.ts).',
        ]
      },
      {
        name: 'Graphiques',
        challenges: [
          '<b>TODO 3 :</b> Un <b><a href="https://echarts.apache.org/examples/en/editor.html?c=pie-doughnut" target="_blank">Pie Chart</a></b> représentant le nombre de systèmes par Environnement (parents et enfants confondus).',
          '<b>TODO 4 :</b> Un <b><a href="https://echarts.apache.org/examples/en/editor.html?c=pie-doughnut" target="_blank">Pie Chart</a></b> représentant le nombre d\'assets pour les Systèmes entre les ids [sys005...sys013] (this.systemsIdsForAssetPieChart)',
          '<b>TODO 5 :</b> Un <b><a href="https://echarts.apache.org/examples/en/editor.html?c=line-stack" target="_blank">Stacked Line Chart</a></b> \
           représentant l\'évolution des températures <b>par heure</b> (seulement les 24 premières) et par asset pour chacun des systèmes suivant : <br/>\
          <ol><li>sys002: Eau</li> <li>sys005: Ligne Production</li> <li>sys006: Haute Tension</li> <li>sys007: Basse Tension</li></ol>\
          Avec en abcisse les heures et en ordonnée les températures.<br/>',
          '<b>TODO 6 :</b> Attention, la fonction <b>get recursiveAssets()</b> du modèle System n\'est pas récursive.',
          '<b>TODO 7 et 8 :</b> Un <b><a href="https://echarts.apache.org/examples/en/editor.html?c=bar-y-category-stack" target="_blank">Stacked <u>Vertical</u> Bar Chart</a></b> représentant le nombre d\'éléments produits (data.name === "output") par Machine <b>par jour</b><br/>\
          <ul><li>Avec en abcisse les jours</li> <li>En ordonnée la somme des éléments <b>produits par Machine</b> chaque jour</li></ul>\
          <b>Attention :</b> dans l\'exemple en lien les axes sont inversés par rapport à l\'exercice demandé.'
        ]
      },
      {
        name: 'Conseils',
        challenges: [
          'Prendre le temps de bien comprendre la structure du projet et les exercices.',
          'Recherchez les commentaires comportant des <b>TODO:</b> (au nombre de 9) pour coder vos réponses. Il n\'y a pas besoin de coder ailleurs.',
          'Il est possible de compléter ce challenge avec une vingtaine de lignes de code, sans impacter la lisibilité du projet.',
          'N\'oubliez pas que vous devez être capable d\'expliquer votre code.'
        ]
      },
      {
        name: 'Ressources',
        challenges: [
          '<a href="./dataset" target="_blank">Dataset Preview</a>',
          '<a href="https://echarts.apache.org/en/option.html" target="_blank">Configuration Echart</a>',
          '<a href="https://momentjs.com/" target="_blank">Moment.js</a>',
        ]
      }
    ]
  }
}

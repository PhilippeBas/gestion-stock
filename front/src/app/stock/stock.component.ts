import { Component } from '@angular/core';
import {
  faPlus,
  faRotateRight,
  faTrashCan,
} from '@fortawesome/free-solid-svg-icons';
import { Article } from '../interfaces/article';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss'],
})
export class StockComponent {
  faRotateRight = faRotateRight;
  faPlus = faPlus;
  faTrashCan = faTrashCan;
  articles: Article[] = [
    { id: 'a1', name: 'Tounevis', price: 25, qty: 500 },
    { id: 'a2', name: 'Disqueuse', price: 250, qty: 50 },
    { id: 'a3', name: 'Marteau', price: 55, qty: 69 },
  ];

  getArticleId(index: number, a: Article) {
    return a.id;
  }
}

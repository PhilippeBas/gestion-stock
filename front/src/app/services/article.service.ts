import { Injectable } from '@angular/core';
import { Article } from '../interfaces/article';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  articles: Article[] = [
    { id: 'a1', name: 'Tounevis', price: 25, qty: 500 },
    { id: 'a2', name: 'Disqueuse', price: 250, qty: 50 },
    { id: 'a3', name: 'Marteau', price: 55, qty: 69 },
  ];

  constructor() {}
}

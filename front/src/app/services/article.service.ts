import { Injectable } from '@angular/core';
import { Article, NewArticle } from '../interfaces/article';
import { BehaviorSubject, Observable, of } from 'rxjs';

//* déclaration de Article pour l'observable
const articles: Article[] = [
  { id: 'a1', name: 'Tounevis', price: 25, qty: 500 },
  { id: 'a2', name: 'Disqueuse', price: 250, qty: 50 },
  { id: 'a3', name: 'Marteau', price: 55, qty: 69 },
];

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  // * La ligne ci dessous en un observable
  articles$ = new BehaviorSubject<Article[]>(articles);

  constructor() {}

  add(newArticle: NewArticle): Observable<void> {
    // throw new Error('Method not implemented.');
    return of(undefined);
  }

  refresh(): Observable<void> {
    throw new Error('Method not implemented.');
  }
}

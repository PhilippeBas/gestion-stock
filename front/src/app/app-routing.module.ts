import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LegalComponent } from './routes/legal/legal.component';
import { HomeComponent } from './routes/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'HomePage',
  },
  {
    path: 'legal',
    component: LegalComponent,
    title: 'Mention légales',
  },
  { path: 'stock', loadChildren: () => import('./stock/stock.module').then(m => m.StockModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

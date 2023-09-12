import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'research', pathMatch: 'full' },
  {
    path: 'templateform',
    loadChildren: () =>
      import('./features/forms/forms.module').then((m) => m.FormsModule),
  },
  {
    path: 'research',
    loadChildren: () =>
      import('./research/research.module').then((m) => m.ResearchModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

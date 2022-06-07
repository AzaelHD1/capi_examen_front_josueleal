import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablaUsuariosComponent } from './tabla-usuarios/tabla-usuarios.component';
 /* creamos la ruta */
const routes: Routes = [
  {
     path: '',
  children: [
   { path:'usuarios', component: TablaUsuariosComponent},
   { path:'**', redirectTo: 'usuarios'}
  ]
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class UsuariosRoutingModule { }

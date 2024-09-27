import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { InformacionComponent } from './pages/informacion/informacion.component';
import { ContactosComponent } from './pages/contactos/contactos.component';
import { Error404Component } from './component/error404/error404.component';
import { TablaComponent } from './component/tabla/tabla.component';
import { DetallesComponent } from './pages/detalles/detalles.component';

export const routes: Routes = [
    {path:'inicio', component:InicioComponent},
    {path: 'informacion',component:InformacionComponent},
    {path: 'contactos', component: ContactosComponent},
    {path: 'tabla', component: TablaComponent},
    {path:'', redirectTo:'inicio', pathMatch:'full'},
    {path:'informacion/:id', component: DetallesComponent},
    {path:'**', component:Error404Component}

];

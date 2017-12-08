import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

//Firebase Configuration
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
//Añadir modulos individuales
import { AngularFirestoreModule } from 'angularfire2/firestore';
//Importar las rutas
import {APP_ROUTING} from './app.routes';
//Importar los componentes creados
import {CargaComponent} from './components/carga/carga.component';
import {FotosComponent} from './components/fotos/fotos.component';

@NgModule({
  declarations: [
    AppComponent,
    CargaComponent,
    FotosComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

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
//Import service
import {CargaImagenesService} from './services/carga-imagenes.service';
// Solucionar ERROR de " No provider for AngularFireDatabase!"
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';
import { AngularFireAuthModule } from 'angularfire2/auth';
//Import Directive
import { NgDropFilesDirective } from './directives/ng-drop-files.directive';


@NgModule({
  declarations: [
    AppComponent,
    CargaComponent,
    FotosComponent,
    NgDropFilesDirective
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    APP_ROUTING,
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [CargaImagenesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

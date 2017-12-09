import { Injectable } from '@angular/core';
//Añadir las las clases de las siguientes librerias
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database-deprecated";
//Importar el modelo creado
import { FileItem } from '../models/file-item';

import * as firebase from "firebase";

// 1. Carga de Imagenes
// 2. Poder mostrar informacion

@Injectable()
export class CargaImagenesService {

  private CARPETA_IMAGENES:string = 'img';

  constructor( public af: AngularFireDatabase ) {

  }

  //Preguntarle al usuario cuantas imagenes quiere ver de las últimas cargadas
  listaUltimasImagenes( numeroImagenes:number ):FirebaseListObservable<any[]>{
      return this.af.list( `/${ this.CARPETA_IMAGENES }`, {
        query: {
          limitToLast: numeroImagenes
        }
      });
  }

  //Cargar imagenes hacia Firebase
  cargar_imagenes_firebase(archivos: FileItem[]){
	 	 console.log( archivos );
  }

  //Guardar imagen en la base de datos
  private guardarImagen ( imagen: any){
		 this.af.list(`/${ this.CARPETA_IMAGENES } `)
		 		    .push( imagen );
  }

}

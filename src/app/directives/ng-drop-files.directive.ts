import { Directive, EventEmitter, ElementRef,
         HostListener, Input, Output } from '@angular/core';

// EventEmitter: Mandar informacion al padre que ya se hizo algo
// ElementRef: Tener la referencia al elemento HTML al cual estoy adjuntando esta directiva
// HostListener: Adjuntar eventos
// Input: Recibir informacion que viene del Padre
// Output: Para mandarle informacion al padre

import { FileItem } from '../models/file-item';

@Directive({
  selector: '[NgDropFiles]'
})
export class NgDropFilesDirective {

  //Crear la relacion entre el padre y el hijo con los archivos
  @Input() archivos:FileItem[] = []
  //Emitir algo  cuando tenemos el cursor sobre la caja del DropZone
  @Output() archivoSobre: EventEmitter<any> = new EventEmitter()

  constructor( public elemento:ElementRef ) { }

  //Manejar el evento y luego recibir la funcion
  @HostListener('dragenter', ['$event'])
  public ondragenter( event:any ){
    this.archivoSobre.emit(true);
  }
  //Cuando el mouse sale del DropZone
  @HostListener('dragleave', ['$event'])
  public ondragleave( event:any ){
    this.archivoSobre.emit(false);
  }
  //El mouse esta pasando sobre el objeto
  @HostListener('dragover', ['$event'])
  public ondragover( event:any ){
    let transferencia = this._getTransferencia( event );
    transferencia.dropEffect = 'copy';

    //Prevenir cualquier comportamiento por defecto no deseado
    this._prevenirYdetener( event );

    this.archivoSobre.emit(true);
  }
  //Cuando se hace un Dropp (cuando agarramos un elemento y lo soltamos en un html)
  @HostListener('drop', ['$event'])
  public ondrop( event:any){
    let transferencia = this._getTransferencia( event );

    if(!transferencia){
      return;
    }

    this._agregarArchivos( transferencia.files )

    this._prevenirYdetener( event );
  }

  //Si hay informacion que enviar
  private _getTransferencia( event:any ){
    return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer;
  }

  //Extraer los archivos que quiero droppear de todo ese eventos
  private _agregarArchivos( archivosLista:FileList ){
    console.log( archivosLista );

  }

  //Ayudar a prevenir el comportamiento por defecto
  private _prevenirYdetener( event:any ){
    event.preventDefault();
    event.stopPropagation();
  }

  // Si el archivo puede ser cargado
  private _ArchivoPuedeSerCargado( archivo:File ){
    if( !this._archivoYaFueDroppeado( archivo.name ) && this._esImagen(archivo.type) ){
      return true;
    }
    return false;
  }

  //Saber si el archivo ya fue Droppeado
  private _archivoYaFueDroppeado( nombreDelArchivo:string ):boolean{
    for( let i in this.archivos ){

      let arch = this.archivos[i];

      if( arch.archivo.name === nombreDelArchivo ){
        console.log("Archivo ya existe en la lista", nombreDelArchivo);
        return true;
      }
    }
    return false;
  }

  //Restringirlo para que sean imagenes
  private _esImagen( tipoArchivo:string ):boolean {
    return ( tipoArchivo == '' || tipoArchivo == undefined ) ? false : tipoArchivo.startsWith("image");
  }

}

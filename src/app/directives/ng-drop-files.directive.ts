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
    this.archivoSobre.emit(true);
  }


}

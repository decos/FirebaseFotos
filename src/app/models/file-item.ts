export class FileItem {

  public archivo:File; //el archivo
  public nombreArchivo:string; //el nombre del archivo
  public url:string = '';
  public estaSubiendo:boolean = false; //si esta subiendo o ya esta cargado
  public progreso:number = 0; // que tanto se ha subido del archivo

  constructor( archivo:File ){
    this.archivo =  archivo;
    this.nombreArchivo = archivo.name;
  }

}

# Firebasefotos

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## INICIO DEL PROYECTO

	Recursos:
		- https://github.com/angular/angularfire2/blob/master/docs/install-and-setup.md
		- https://console.firebase.google.com/
		- https://console.firebase.google.com/project/fir-fotos-1b755/database/fir-fotos-1b755/rules
		- https://console.firebase.google.com/project/fir-fotos-1b755/storage/fir-fotos-1b755.appspot.com/rules
		- https://getbootstrap.com/

1. Crear el proyecto
	- ng new firebasefotos

2. Añadir el estilo y los scripts de `Bootstrap` en el indice del proyecto

3. Instalar AngularFire y Firebase
	- npm install angularfire2@5.0.0-rc.3 --save

4. Ir al segundo recurso y añadir un nuevo proyecto llamado `FirebaseFotos`5. 

5. Ir al tercer recurso y asegurarse que las reglas esten asi:
~~~	
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
~~~
	
6. Ir al cuarto recurso (Storage > Reglas) y asegurarse que las reglas esten asi:
~~~
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read, write: if true;
    }
  }
}
~~~

7. Añadir la configuracion de Firebase al siguiente archivo:
	- src/environments/environment.ts

8. Agregar en la fichero `app.module.ts` las siguientes lineas, para usar la configuracion de firebase:
	- import { AngularFireModule } from 'angularfire2';
	- import { environment } from '../environments/environment';
	- AngularFireModule.initializeApp(environment.firebase), // imports firebase/app needed for everything

9. Agregar en la fichero `app.module.ts` los siguientes modulos individuales:
	- import { AngularFirestoreModule } from 'angularfire2/firestore';
	- AngularFirestoreModule, // imports firebase/firestore, only needed for database features

## COMPONENTES, RUTAS Y EL MODELO QUE USAREMOS

	Recursos:
		- https://getbootstrap.com/docs/4.0/components/navbar/#supported-content

1. Descargar el archivo adjunto y descomprimirlo
	- Copiar el archivo `styles.css` en el proyecto
	- La imagen `drop-images.png` copiarla y cortalarla en: (assets > img)

2. Crear el componente de `Carga` y `Fotos`
	- ng g c components/carga -is
	- ng g c components/fotos -is

3. Crear el archivo de rutas `app.routes.ts`
	- Importar el archivo en el modulo principal

4. Importar los componentes creados en el modulo principal

5. Añadir un navbar (primer recurso) a la vista del componente principal
	- Personalizar el navbar
	- Añadir las directivas: router-outlet, routerLinkActive y routerLink

6. Crear el modelo `FileItem`
	- src/app/models/file-item.ts

## CONFIGURACIÓN DE FIREBASE Y SERVICIO DE CARGA

1. Crear el servicio `cargaImagenes`
	- ng g s services/cargaImagenes

2. Importar el servicio `cargaImagenes` en el modulo principal e inyectarlo en `providers`

~~~
En Firebase tenemos que hacer dos cosas:
	- Storage: Cargar la imagen fisicamente
	- Database: Agregar una referencia 
~~~

~~~
ERROR: angularfire2 found version 4, expected 3
	- Eliminar del archivo `package.json` la linea "angularfire2": "^5.0.0-rc.4",
	- Eliminar los ficheros que estan dentro de  `node_modules`
	- Ejecutar el comando `npm i`
	- Ejecutar el comando: npm install angularfire2@5.0.0-rc.3 --save
~~~

3. Importar lo siguiente en el servicio:
	- import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database-deprecated";
	- import { FileItem } from '../models/file-item';
	- import * as firebase from "firebase";

4. Añadir una dirección donde vamos almacenar nuestras imagenes al servicio
	- private CARPETA_IMAGENES:string = 'img';

5. Inyectar la clase `AngularFireDatabase` en el constructor

6. Codear los metodos del servicio

## COMPONENTE DE CARGA - HTML

1. Codear la vista del componente `Carga`
	- Añadir dos botones
	- Añadir una tabla

2. Codear el componente `Carga`
	- Importar `FileItem` y `CargaImagenesService`
	- Inyectar el servicio en el constructor

~~~
Para solucionar el ERROR de "No provider for AngularFireDatabase!" debes añadir en el modulo principal lo siguiente:
	- import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';
	- import { AngularFireAuthModule } from 'angularfire2/auth';
~~~

3. Codear la función `cargarImagenesFirebase` en el componente `carga`

4. Codear la función `limpiarArchivos` en el componente `carga`

## DIRECTIVA DEL DROPZONE

~~~
Crear directiva que se encargara de hacer el DROP de archivos
~~~

1. Crear la directiva `ngDropFIles`
	- ng g d directives/ngDropFiles
 
2. Añadir el `selector` de la directiva creada en la vista del componente `carga`

3. Realizar las importaciones correspondientes en la directiva `ngDropFIles`
	- Importar `Directive`, `EventEmitter`, `ElementRef`, `HostListener`, `Input`, `Output` del paquete `@angular/core`
	- Importar el modelo `FileItem`

~~~
EventEmitter: 	Mandar informacion al padre que ya se hizo algo
ElementRef: 	Tener la referencia al elemento HTML al cual estoy adjuntando esta directiva
HostListener: 	Adjuntar eventos
Input: 		Recibir informacion que viene del Padre
Output: 	Para mandarle informacion al padre
~~~

4. Añadir la directiva `ngClass` a la vista del componente `carga`

5. Añadir la función `archivoSobreDropZone` al componente `carga`	
	
6. Codera la directiva `ngDropFiles`
	
## VALIDACIONES DEL ARCHIVO DESDE LA DIRECTIVA

1. Codear las siguientes validaciones en la directiva

~~~
	_getTransferencia: Si hay informacion que enviar
	_prevenirYdetener: Ayudar a prevenir el comportamiento por defecto
	_ArchivoPuedeSerCargado: Si el archivo puede ser cargado
	_archivoYaFueDroppeado: Saber si el archivo ya fue Droppeado
	_esImagen: Restringirlo para que sean imagenes
~~~
	
2. Codear el evento `ondrop` en la directiva

3. Modificar el evento `ondragover` en la directiva

4. Codear la función `_agregarArchivos` en la directiva

## OBTENER ARCHIVOS, VALIDARLOS Y MOSTRARLOS EN PANTALLA

	Recursos:
		- https://getbootstrap.com/docs/4.0/components/progress/#how-it-works

1. Modificar la función `_agregarArchivos` en la directiva

2. Modificar el evento `ondrop` en la directiva

~~~
Relacionar `archivos` de la directiva con los archivos del componente `carga`
~~~

3. Codear la tabla de la vista del componente `carga` con los `archivos`




















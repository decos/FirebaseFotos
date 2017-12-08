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
	- npm install angularfire2 firebase --save

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
	




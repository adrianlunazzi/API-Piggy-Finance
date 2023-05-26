### Piggy Finance API REST
Api rest desarrollada en NEST JS. Esta api permite el registro de usuarios y que cada uno de los usuarios pueda registrar en su cuenta sus ingresos / egresos personales.


# *Instalación de dependencias*

```bash
$ npm install
```
## *Variables de entorno*
El template trae los distintos entornos para su posterior configuracion. En caso de querer arrancar el servidor bajo alguno de estos entornos, se debera ingresar:

```
npm run start:nombre_del_entorno
```
 
# Entornos

# Develop
$ npm run start:develop

# Production
$ npm run start:production

# Test
$ npm run start:test
```

De no ingresar un nombre de entorno, al ejecutar npm run start:dev (# watch mode), tomará como variables de entorno por defecto el entorno develop

# *Correr el servidor*

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

# *CORS*
El template ya tiene habilitada la opción de CORS (la misma se encuentra en el archivo **main.ts**). De ser necesario se pueden agragar más parametros a la función **enableCorse()** en caso de necesitar especificar las distintas opciones que acepta. 

En el siguiente link se encuentran las opciones disponibles que se le puede pasar a la funcion => [link](https://github.com/expressjs/cors#configuration-options)


# *Documentación*
Si accedemos a la ruta principal + /swagger (ej: **localhosts:3000/swagger**), podremos ingresar al módulo de swagger para poder ver los endpoints generados y dejar un registro de los nuevos endpoints que se vayan generando.
En el siguiente link, estan los decoradores disponibles para realizar la documentacion de la API => [link](https://docs.nestjs.com/openapi/decorators)

# *Docker*
Este templete contiene una imagen de docker para poder levantar tanto el back como la base de datos en un contenedor. Para ejecutarlo se debe correr el script que se deja a continuacion. 

## Deploy Conteiner
Antes de desplegar la aplicacion en docker, cambiar en la configuracion del data-source (src/framework/config/db-config/data-source.ts), por default, el HOST tiene configurada una variable de entorno local, que debera modificarse a una variable de entorno para el contenedor.
```
docker-compose -f docker-compose.yaml up -d --build
```

Rebuild
```
docker-compose up -d --build
```

## *Desarrollado por:*

- Adrian Lunazzi

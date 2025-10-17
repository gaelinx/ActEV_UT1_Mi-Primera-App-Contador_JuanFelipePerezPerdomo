# Actividad Evaluativa UT1 Mi Primera App Contador 
Autor: Juan Felipe Perez Perdomo


Fecha: 17/10/2025


Version del Programa - Expo 6.1.12 npm 11.6.2

## Tecnologia Elegida

React Native, Usando Expo

## Configuracion de Entorno y Ejecucion

- Tener Instalado Node.js y Expo
- Al Clonar el Repositorio en tu Dispositivo debes tener en cuenta que las dependencias de expo no estaran habilitadas, para ello tienes que ir a la carpeta donde se encuentra el proyecto y hacer el comando
   ```bash
   npm install
   ```
- Luego de ello ya podras ejecutar el proyecto normalmente con
   ```bash
   npx expo start
   ```
- El Proyecto fue probado tanto en un movil fisico con Expo Go (Android 13) y desde el emulador de Android Studio (emulador de Android 14)

## Estructura del proyecto

El Proyecto cuenta con la estructura por defecto cuando usas
   ```bash
    npx create-expo-app 
   ```
y luego reseteas el proyecto con
   ```bash
   npm run reset-project
   ```
Por lo que solamente cuenta con la Carpeta app con un index.tsx donde esta el codigo de la app y de resto las configuraciones por defecto de la aplicacion de expo que no estan en uso, como seria los asssets, app.json, etc.

## Perfil de despliegue 

Se Uso el SDK mas reciente de la que dispone el android studio en este momento, mas un emulador de android (pixel 8 API 34)

## Funcionamiento de la app 

https://github.com/user-attachments/assets/406ed16d-1980-4bb3-955d-ed7a27b63578


Es una App de Contador, tiene 3 botones interactuables para incrementar, decrementar o resetear el contador respectivamente, hay tres metas a alcanzar, al llegar a el numero 10, al llegar al numero 20 y al llegar al numero -5, estas metas envian una mensaje
de Alert que felicita a el usuario por llegar a ellas


## Conclusión y limitaciones

Esto es una toma de contacto de Expo creada por un principiante en el desarrollo movil, no hay muchas conclusiones que puedo sacar mas que en lo personal Expo me a parecido mucho mas eficiente, intuitivo y comodo que JetPack Compose y disfrute mucho el desarrollar esta aplicacion, tal vez por ya saber de base JavaScript o por que sencillamente es bastante satisfactorio ver como se hacen los cambios en la aplicacion a tiempo real, ahora es una aplicacion demasiado basica y se puede mejorar de muchas formas, ademas de que no termino de controlar los useState y es una aplicacion muy basica que tampoco da para mucho, pero como experimentacion fue bastante gratificante.




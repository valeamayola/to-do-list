Instrucciones para ejecutar el proyecto 

Para ejecutar este proyecto necesitarás tener instalados los siguientes programas en tu computadora:

Node.js: https://nodejs.org/en/download/package-manager
npm (Node Package Manager): Viene incluido con la instalación de Node.js
MongoDB: [Descargar MongoDB](https://www.mongodb.com/try/download/community)
Un editor de código: Visual Studio Code, Sublime Text, Atom, etc.

Clonación del repositorio
1. Clona este repositorio en tu computadora local usando Git:
git clone [https://github.com/](https://github.com/valeamayola/to-do-list.git)

2. Navega al directorio del proyecto clonado:
cd to-do-list

Instalación de dependencias
1.Instala las dependencias del proyecto para el backend y el frontend:
npm install

Configuración de MongoDB
1.Inicia el servidor de MongoDB:
mongod

2.Asegúrate de que MongoDB esté corriendo en segundo plano. Puedes verificar esto ejecutando:
mongod --v

Ejecución del proyecto
1. Backend:
   Ejecuta en la raíz del proyecto el comando
npm run dev

El servidor backend se iniciará en el puerto 3000. Puedes acceder a la API en la siguiente URL:
http://localhost:3000/

2. Frontend:
   En una terminal separada, navega al directorio client:
   cd client

Ejecuta el comando
npm run dev

El servidor frontend se iniciará en el puerto 5173. Puedes acceder a la aplicación en la siguiente URL:
http://localhost:5173/






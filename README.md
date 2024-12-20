# API de Personajes y Cortes de Elfhame

Bienvenide al interesante mundo de Elfhame, creado por Holly Black. En esta ocasión solo he recogido unos cuantos datos sobre las Cortes de Elfhame y personajes súper típicos y conocidos, es una API en construcción así que tú también puedes editar y aportar datos nuevos si quieres <3

## Concepto de esta BBDD

Se basa en la siguiente relación:
  - **Personajes**: Cada personaje pertenece a una corte específica (relación de clave foránea).
  - **Cortes**: Cada corte puede tener varios personajes asociados.

---

## Herramientas utilizadas

Para crear esta API he utilizado:
  -**Node.js**: para el manejo del backend
  -**Express**: para crear el servidor
  -**MySQL**: para gestionar la BBDD

---

## Pasos a seguir para utilizar esta API

1. **Clonar el repositorio:**   
  ``` git clone https://github.com/Adalab/modulo-4-evaluacion-final-bpw-krsalvarez.git ```
2. **Instalar dependencias locales**
   ```npm install```
3. **Configurar la base de datos**
   - Copia el esquema de la base de datos desde la carpeta db y ejecútalo en MySQL Workbench o una herramienta similar.
   - Crea un archivo .env en la raíz del proyecto y define las variables necesarias basándote en .env_example.
4. **Inicia el servidor**
   ```npm run dev```
5. **Prueba los endpoints**
  - Usa postman o una herramienta similar para interactuar con los endpoints de la API.

## Endpoints disponibles

1. **Listar todos los personajes con sus cortes**
   - Ruta ```http://localhost:4005/api/personajes```
   - Descripción: Devuelve una lista de todos los personajes y las cortes a las que pertenecen
2. **Actualizar un personaje**
   - Ruta: ```http://localhost:4005/api/personajes/:id```
   - Descripción: Permite actualizar los datos de un personaje existente.
3. **Añadir un personaje nuevo**
   - Ruta ```http://localhost:4005/api/personajes```
   - Descripción: Permite añadir un personaje nuevo.
4. Eliminar un personaje
   - Ruta ```http://localhost:4005/api/personajes/:id```
   - Descripción: Elimina un personaje en específico por su ID.

¡Espero que te sea de utilidad! 

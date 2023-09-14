# Informe de obligatorio ISA

---------------------------------------------------------------------------

## Materia: INGENIERIA DE SOFTWARE AGIL 2

### Equipo 5 - Mini proyecto

### Estudiantes:  Sebastian Silveira

---------------------------------------------------------------------------

### Herramienta para gestión del proyecto

#### Azure Devops: 

### Versionado

#### Repositorio Github: <https://github.com/IngSoft-ISA2-2023-2/obligatorio-montes-de-oca-rositto-silvera>

---------------------------------------------------------------------------

## Definición del marco de trabajo

### Marco general de trabajo KANBAN

El resultado del proyecto es poder mejorar y ofrecerle mantenimiento a una aplicacion ya desarrollada por otro equipo con el objetivo de incrementar el valor que se entrega a los usuarios.

Dicho marco de trabajo es desconocido para los integrantes del equipo por lo que va a haber una cierta curva de aprendizaje dentro del desarrollo de la aplicación.


El equipo de desarrollo va a utilizar la forma de trabajo basada en Kanban y además optamos por seguir un ciclo de vida incremental del producto:

Kanban es una metodología de gestión visual que se utiliza comúnmente en entornos de trabajo para mejorar la eficiencia y la productividad. Su objetivo principal es optimizar el flujo de trabajo y la entrega de productos o servicios al eliminar el exceso de trabajo en proceso y minimizar los cuellos de botella.

Tablero Kanban
![pngegg](https://github.com/IngSoft-ISA2-2023-2/obligatorio-montes-de-oca-rositto-silvera/assets/62801065/83b9c5ec-6110-41e6-a8a2-ebe84cb1f28e)

Respecto al tablero:

Para esta iteracion se promueve la utilizacion de un
Tablero Kanban Simple:

    Columna 1: Por Hacer (To Do): En esta columna, se enumeran todas las tareas o elementos de trabajo que aún no han comenzado. Representa las tareas pendientes que deben abordarse.

    Columna 2: En Progreso (In Progress): Las tareas que están en proceso se mueven a esta columna. Aquí, los miembros del equipo trabajan activamente en estas tareas. El objetivo es limitar la cantidad de tareas en esta columna para evitar la sobrecarga. Y limitar el numero WIP.

    Columna 3: Completado (Done): Cuando una tarea se ha finalizado o completado, se traslada a esta columna. Aquí, se muestra claramente qué tareas se han terminado y están listas para su revisión o entrega.

     Respecto a la definicion of done:
       Código Escrito: Todo el código necesario para la nueva función de inicio de sesión ha sido escrito y revisado.

Pruebas Unitarias: Se han realizado pruebas unitarias exhaustivas para asegurarse de que el código funcione correctamente. Todas las pruebas unitarias han pasado con éxito.

Integración Completa: La nueva función de inicio de sesión se ha integrado con éxito en el repositorio principal del proyecto.

Pruebas de Integración: Se han realizado pruebas de integración para garantizar que la nueva función no cause conflictos con otras partes de la aplicación. Todas las pruebas de integración han pasado con éxito.

Pruebas de Aceptación: Se han realizado pruebas de aceptación para garantizar que la nueva función cumple con los requisitos especificados en el documento de diseño. Todas las pruebas de aceptación han pasado con éxito.

Revisión de Pares: La implementación ha sido revisada por al menos un compañero de equipo para verificar la calidad del código y cumplir con los estándares de codificación.

Documentación Actualizada: Se ha actualizado la documentación relevante, como manuales de usuario o documentación técnica, para reflejar la nueva función de inicio de sesión.

Revisión por el Product Owner: El Propietario del Producto o el interesado ha revisado la nueva función y la ha aprobado.

Despliegue en Entorno de Pruebas: La nueva función se ha desplegado en un entorno de pruebas y se ha verificado su correcto funcionamiento en un entorno similar al de producción.

Despliegue en Producción: La nueva función se ha desplegado en el entorno de producción de la aplicación y está disponible para los usuarios finales.

Cómo funciona:

    Las tareas se escriben en tarjetas individuales, cada una con una breve descripción y, posiblemente, detalles adicionales.

    Inicialmente, todas las tarjetas se colocan en la columna "Por Hacer" To do.

    Cuando un miembro del equipo comienza a trabajar en una tarea, la mueve a la columna "En Progreso".

    A medida que se avanza en una tarea y se completa y se cumple con la definicion of done, se traslada a la columna "Completado".

    Se limita la cantidad de tarjetas que pueden estar en la columna "En Progreso" para evitar la congestión y fomentar la finalización de tareas antes de agregar nuevas. Es decir limitar el WIP.

    El equipo se reúne regularmente para revisar el tablero Kanban, identificar cuellos de botella y ajustar las prioridades según sea necesario. 
    
    Límites de WIP: En cada columna se establece un límite de cuántas tarjetas pueden estar en esa etapa al mismo tiempo. Esto evita la congestión y garantiza un flujo de trabajo constante.

### Roles

---- Cargar tabla con roles

### Políticas de trabajo

#### Definición de Ready

Antes de que una historia de usuario pueda ser incluida en una iteración, es necesario que cumpla con ciertas condiciones previas.
Estas condiciones incluyen que el equipo de desarrollo debe tener una comprensión compartida de lo que la historia de usuario significa y qué se espera de ella.
También se debe presentar una estimación relativa del trabajo necesario para completar la historia de usuario, y los criterios de aceptación deben ser claros y representados en escenarios para que puedan ser comprobados.
Además, la historia de usuario debe ser valiosa y no depender de otras historias de usuario para su completitud.
En resumen, estas condiciones previas aseguran que el equipo de desarrollo tenga toda la información necesaria y comprenda completamente lo que se espera de la historia de usuario antes de comenzar a trabajar en ella.

La definición de lista de requisitos previos para una historia de usuario entrar en una iteración incluye que:

1. El título debe ser breve y muy descriptivo.
2. La narrativa debe tener una estructura que explique qué hace el usuario, qué quiere y por qué lo quiere.
3. La estimación de tiempo debe estar en horas ideales de trabajo y estar en valores predefinidos.
4. Los criterios de aceptación deben ser claros y presentados como escenarios, explicando el contexto, el evento y los resultados esperados.

#### Definición de Done

Los criterios para determinar qué historias terminaron con éxito su proceso de implementación serán:

1. Las validaciones correspondiente con el cliente, ajustando su correspondiente feedback.
2. El elemento ha sido revisado por un par o por el equipo de desarrollo.
3. El elemento ha sido probado y se ha verificado que funciona correctamente en diferentes entornos.
4. Todo el trabajo debe estar integrado a main.
5. La documentación ha sido actualizada y se ha revisado para asegurarse de que esté completa y precisa.
6. Debe ser probada por usuarios reales, ajustando su correspondiente feedback.

### Control de versiones

Se crea el repositorio <https://github.com/ORT-ISA1/pascale-rabunal-silvera>

Se trabaja con dos ramas “main” y “develop”, en esta última cada miembro del equipo trabajará de acuerdo a las buenas prácticas aprendidas.

Trabajaremos sobre “develop”, donde cada miembro creara sus ramas y trabaja sobre ellas. Una vez completado el desarrollo deberá mergear a “develop”.

Al finalizar cada sprint “develop” será mergeada a “main”.

Borrar las ramas que ya integradas

![Repositorio del proyecto_01](https://github.com/ORT-ISA1/pascale-rabunal-silvera/assets/22498383/df8a0c9e-c365-4b71-922a-aac28feb8582)

#### Descripción de los PRs

En función a las recomendaciones utilizaremos el siguiente articulo para definir como deben ser las descripciones de los PRs

Articulo: <https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/creating-a-pull-request-template-for-your-repository>

Puntos clave para redactar la descripción de los PRs:

- Propósito del PR: Explicar de manera clara el propósito del PR, describiendo el problema que soluciona, la función que agrega o la mejora que implementa. Esto brinda contexto a los revisores y colaboradores.

- Cambios realizados: Detallar específicamente los cambios efectuados, junto con cualquier detalle relevante.

- Impacto y dependencias: Es importante mencionar si el PR tiene algún impacto en otras partes de las funcionalidades existentes.

- Si el PR depende de otros PRs, debe ser informado.

- Instrucciones para revisores: Proporciona orientación clara a los revisores sobre cómo evaluar y probar los cambios. Esto puede incluir detalles sobre la configuración necesaria, comandos específicos que deben ejecutarse u otros requisitos relevantes.

- Capturas de pantalla (opcional): Si es relevante, incluir capturas de pantalla que muestren visualmente los cambios realizados. Esto puede ser especialmente útil en cambios relacionados con la interfaz de usuario.

#### Nombre de ramas, commits y PRs

En función a las recomendaciones utilizaremos el siguiente articulo para definir como deben ser los nombre de ramas, commits y PRs

<https://code.erpenbeck.io/git/2021/03/01/git-naming-conventions/>

1.Para nombrar las ramas:

    - Los nombres deben ser descriptivos y concisos.
    - Utilizar minúsculas y separa las palabras con guiones.
    - Agregar prefijos como "feature/" para nuevas características, "bugfix/" para correcciones de errores, "hotfix/" para soluciones urgentes, entre otros.
    - Evitar nombres genéricos o ambiguos y eligir nombres que reflejen el propósito o contenido de la rama.

![Repositorio del proyecto_02](https://github.com/ORT-ISA1/pascale-rabunal-silvera/assets/22498383/be2e62d1-75c2-4efc-8eb0-a28738105797)

2.Para nombrar los commits:

    - Los nombres deben ser claros y descriptivos.
    - Utilizar verbos en tiempo presente para indicar la acción realizada, seguidos de una breve descripción del cambio.
    - Limitar la longitud a unos 50 caracteres.
    - Evitar agregar información innecesaria o detalles irrelevantes.

3.Para nombrar los Pull Requests:

    - Comenzar con un prefijo que indique el propósito, como "Feature:", "Fix:", "Docs:", etc.
    - Continuar con una breve descripción del cambio o problema que aborda.
    - Utilizar un estilo conciso y claro.
    - Evitar incluir información técnica compleja en el título del PR, reservar esos detalles para la descripción del PR.

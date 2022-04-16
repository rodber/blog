---
date: 2013-09-19T00:44:00Z
title: Pre-Presentando Junkstr
tags:
    - 🤯show
    - 🤭fat-rodolfo
author: Rodolfo
summary: Junkstr es un sistema de compra/venta por lotes que he estado creando junto a Patricio Vidal.
image: /photos/2013-fat-rodolfo-next-to-the-ducky.jpg
---

Durante este mes hemos iniciado la etapa final de desarrollo de Junkstr, el sistema de compra/venta por lotes que he estado creando junto a [Patricio Vidal](https://twitter.com/trikio). Quería aprovechar el tiempo libre de las celebraciones de Septiembre para hablar sobre el producto que estamos creando y compartir con todos lo que estamos planificando lanzar pronto.

### Es por lotes

Una de las principales características diferenciadoras de Junkstr es que ha sido creado desde el principio para abarcar las publicaciones por lotes. Los lotes son publicaciones donde tratas de ofrecer más de un articulo, sean de la misma categoría o no, en un único proceso. En lugar de crear cinco o diez avisos tu simplemente sacas una foto de todo el conjunto de cosas que tienes y creas un único aviso, el cual puede contener todos los artículos que necesites describir etiquetando la foto (tal cual como etiquetas en Facebook).

Nos enfocamos en lotes por que por lotes usualmente encontramos los cachureos y cosas de ese tipo. Junkstr esta ideado para abarcar el tipo de artículos que encuentras en una feria de las pulgas o en una venta de garage. Cosas únicas y que te traen recuerdos de otros tiempos y que sólo encuentras ahí.

### Interacciones insuperables

Uno de los objetivos fue digitalizar la experiencia de visitar una feria de las pulgas, venta de garage o persa. Diseñamos el sistema para que tanto la exploración y el listado de lotes sea como transportarte a este entorno. Cada usuario tiene su “puesto” con sus cosas, las personas preguntan, interactúan, negocian, etc.

Una carencia universal en los sistemas de clasificados son interacciones en la capa social. Quizás por que los sistemas populares (eBay entre otros) en realidad encajan mejor para las tiendas que para las personas que quieren vender sus cachureos. Una simple apreciación diría que da lo mismo, que el sistema es aplicable. La verdad no podría estar más lejos de esa afirmación.

Los artículos usados son altamente susceptibles a la negociación dado que rara vez valen lo mismo para dos distintas personas. Por esta razón en Junkstr elaboramos una solución que abarca la compra directa, las ofertas y las consultas sobre el articulo. En Junkstr todo es ofertable, todo se puede negociar. Las ofertas se pueden aceptar o rechazar y se puede indicar el motivo de esta elección.

El sistema de ofertas esta íntimamente conectado con el sistema de preguntas. ¿Acaso “me lo dejas en cinco lucas” no es una pregunta?. Elaboramos el sistema para que cada pregunta y oferta sea un hilo donde se mantiene una conversación entre quien pregunta y quien responde, de tal manera de generar un orden y no un hilo eterno desordenado de preguntas y respuestas.

Tanto preguntas como ofertas tienen un único punto de entrada. Queríamos mantenerlo simple y alejado de distracciones, que mejor que interactuar siempre en el mismo lugar.

Las preguntas son todas públicas pero las ofertas son todas privadas. Esto es para que las ofertas no se condicionen y que el vendedor no caiga en un bucle donde los compradores exigen respetar el acuerdo que ya había realizado con otra persona en otras circunstancias. Cada acuerdo o instancia de negociación es distinto.

### Un concepto diferente

En Junkstr no sólo los procesos e interacciones son diferentes sino que todo el concepto es completamente distinto. Si las personas están usando Facebook u otras soluciones que nunca fueron concebidas para solucionar el problema es por que las soluciones actuales están haciendo las cosas mal y las personas buscan un cambio. Hemos descubierto esta increíble oportunidad donde los usuarios ya nos están diciendo que quieren en una plataforma ya existente y simplemente estamos formalizando esas necesidades y requerimientos.

Esto nos ha llevado a enfocarnos en crear un sistema para la web de hoy y no para la web del 2002 o incluso la web de 1998 como es la realidad de todos los sistemas actuales. Los sistemas actuales no han cambiado nada, siguen siendo lo mismo que eran hace más de una década.

### Es la expresión de simplicidad

Simplificar procesos siempre es complejo y lograr que un proceso tome menos tiempo que antes es lejos la parte más complicada de todo un proyecto. Esto es por que tienes que salir a buscar nuevas soluciones, crear nuevos caminos. En Junkstr nos tomamos en serio esto y logramos reducir en un 90% el tiempo necesario para publicar diez artículos en MercadoLibre.

Pero no todo es tiempo ni potencia o rapidez. Tanto más importante es como lograr que el usuario tenga una experiencia fantástica usando el sistema, algo que lo haga amar el producto. No sirve de nada ahorrar 90% del tiempo si ese ahorro implica más esfuerzo y molestia.

Consideramos ambos escenarios y diseñamos e ideamos todo el sistema para ser increíblemente simple e intuitivo de usar. Elevamos la barra al nivel de “esto es lo que queremos” no “esto es lo que podemos hacer” y obtuvimos un producto realmente increíble, logrando cosas realmente notables como el etiquetado de artículos, el publicador y el sistema de preguntas y ofertas. Al ponernos en el “querer” elaboramos un sistema de ensueño desde el punto de vista del usuario.

### Inteligencia aplicada

Junkstr esta rodeado de funciones que nunca notaras que están ahí pero que harán que tu experiencia sea mejor. Por ejemplo, cuando agregas una foto el sistema inmediatamente comienza a subir silenciosamente la imagen así mientras agregas etiquetas o detalles tu foto ya se subió y al hacer click en “Publicar lote” todo ocurrirá instantáneamente.

También hemos puesto un dimensionador de fotos el cual ajusta la imagen del lote a la altura de tu ventana, así el lote siempre estará visible al 100%.

Pequeños detalles como ese están en todo el sistema. Junkstr es una galería de detalles y pequeñas cosas que te hacen más agradable usar Junkstr.

### Dispositivos móviles

Hemos logrado que la versión de escritorio funcione impecablemente y sin limitaciones en tablets, todas las funciones de la versión normal funcionan perfectamente. Tanto así que todas las capturas en este post fueron tomadas en un iPad. A futuro el plan es agregar una versión optimizada para móviles con pantallas más pequeñas, eso incluso ya esta en borrador. Como el Junkstr aun esta en etapa de experimentación debemos esperar la validación de un par de elementos del sistema para iniciar esta etapa.

### La base tecnológica

Para poder hacer posible Junkstr debí crear dos frameworks que nos permitieran implementar rápidamente cambios y mejoras. Fue asi como nació Peafowl y G.

Derivando mi trabajo en Chevereto v3 logré realizar un framework frontend llamado Peafowl, el cual es un framework especialmente dedicado para sitios donde lo más importante es el contenido multimedia y contiene un montón de elementos que ayudan a este proceso. Tiene grillas, listados infinitos, pestañas, alertas emergentes, modal boxes, etc. Por otra parte, el backend esta alimentado por una versión beta de la Librería G\.

Tanto Peafowl como G\ serán liberados con licencia código abierto para la alegría de todos los que me habían consultado previamente.

Tecnológicamente hablando Junkstr quizás no es el hype. No usamos ninguna tecnología nueva, no le pusimos node.js o ember y nos quedamos con jQuery, PHP, MySQL etc. Pero eso da lo mismo, llega un punto en lo que importa es como aplicas la tecnología no que herramientas usas. Me he sentido más cómodo desarrollando el producto y la inteligencia del mismo que armando la base tecnológica del sistema por que a la larga eso es lo que trasciende.

### Palabras finales

Este post en parte es para dejar un registro de mis expectativas y de como pusimos toda la carne a la parrilla en Junkstr. De como llegamos a las soluciones que estamos proponiendo y del por que implementamos algo de cierta manera y no de otra.

Espero que todo el trabajo realizado y la experiencia aplicada converja en lo que es mas importante para mi y que es usuarios felices.

Esperemos que el tiempo nos de la razón.


// Ciclo de vida del SW

self.addEventListener('install', event =>{

  // Descargar los assets
// Creamos un cahe

  console.log('SW: Instalñando SW');

  const instalacion = new Promise( (resolve, reject) =>{

    setTimeout(() => {
      console.log('SW: Instalaciones terminadas');
      self.skipWaiting();
      resolve();
    }, 1);

  } );

  // Para esperar hasta ( en nuestro caso hasta que se resulelva nuestra promesa )
  event.waitUntil( instalacion );

  // Para que se active el nuevo SW directamente
  // self.skipWaiting();

});

// Cuando el SW toma el control de la App

self.addEventListener('activate', event =>{

  // Borrar cache viejo
  console.log('SW2: Activo y listo para controlar la App');

});

// FETCH: Manejo de peticione HTTP
self.addEventListener('fetch', event =>{

  //Aplicar estrategias del Cache 

  // console.log('SW: ', event.request.url);

  // if ( event.request.url.includes( 'https://reqres.in/' ) ) {
  //   const respuesta = new Response(`{ok:false, mensaje: 'jajaja'}`);
  //   event.respondWith( respuesta );
  // }

});

// SYNC: Recuperamos la conexión a internet
self.addEventListener('sync', event =>{

  console.log('Recuperamos conexión');
  console.log(event);
  console.log(event.tag);

});

// PUSH: Manejar las push notifications
self.addEventListener('push', event =>{

  console.log('Notificación recivida');


});


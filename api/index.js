const server = require("./src/app.js");
const { conn } = require("./src/db.js");

// Syncing all the models at once.

// Para la precarga cuando se levanta el server, ejecutar la funcion getEpisodes(). Al ser una peticion vamos a usar async await.

conn.sync({ force: true }).then(() => {
  // getEpisodes();  //esta funcion es para hacer una precarga de los episodio. esta comentada porque si se descomenta rompe ! y por que rompe? porque todavia no la crearon. cuando la creen la importan y la descomentan (OJO en la funcion que van a crear de getEpisodes no tiene que mandar una respuesta al servidor osea un res.send() sino que tendrian que hacer un return con todos los episodios y de esa forma la van a poder utilizar aca. ahora si quieren pueden hacer una copia de la funcion tambien para cambiar el return por un res.send() con el fin de tener una ruta para consumir por si quieren hacer un get de los episodios que no haria falta porque con la funcion que tiene el return al importarla aca y estar llamandola ya les va a levantar los episodios junto con el servidor.)
  server.listen(3001, () => {
    console.log("Listening at 3001"); // eslint-disable-line no-console
  });
});

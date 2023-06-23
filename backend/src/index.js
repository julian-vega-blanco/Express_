import app from "./app.js";

app.set("port", 5000);

const main = () => {
  app.listen(app.get('port'));
  console.log(`Hola, la aplicación está escuchando en el puerto ${app.get("port")}`);
}

main();
import app from "./app.js";
import {connectDB} from './database/database.js';


const main = () => {
    connectDB();
    app.listen(app.get("port"));
    console.log(`El servidor esta corriendo en el puerto ${app.get("port")}`);
};

main();
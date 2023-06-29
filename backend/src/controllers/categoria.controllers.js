import getConnection from "../db/database.js"

const getCategorias = async (req, res) => {
    const connection = await getConnection();

    const result = await connection.query("SELECT CategoriaID, CategoriaNombre, Descripcion, Imagen FROM categorias");

    res.json(result);
}

const addCategories = async (req, res) =>{
    try{
        const{categoriaNombre,Descripcion, Imagen} = console.log(req.body);

        console.log(categoriaNombre);
        console.log(Descripcion);
        console.log(Imagen);

        const category =  {categoriaNombre,Descripcion, Imagen};
 
        const connection = await getConnection();

        const result = await connection.query("INSERT INTO categorias SET ?",)

        res.json(result);

    }catch (error){

        res.status(500);

        res.send(error.message);
    }
}


export const methodsHTTP = {
    getCategorias,
    addCategories

}
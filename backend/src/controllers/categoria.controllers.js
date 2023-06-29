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


const getCategoria = async (req, res) => {
    try {
      const { id } = req.params;
      const connection = await getConnection();
      const result = await connection.query("SELECT * FROM categorias WHERE CategoriaID = ?", [id]); // Agrega [id] para asignar el valor del parámetro
      console.log(result);
      res.json(result);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  }

  const deleteCategoria = async (req, res) => {
    try {
      const { id } = req.params;
      const connection = await getConnection();
      const result = await connection.query("DELETE FROM categorias WHERE CategoriaID = ?", [id]);
      console.log(result);
      res.json(result);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  }

  const updateCategories = async (req, res) =>{
    try{
        const {id} = req.params;

        const {CategoriaNombre,Descripcion, Imagen} = req.body;

        const category =  {CategoriaNombre,Descripcion, Imagen};
 
        const connection = await getConnection();

        const result = await connection.query("UPDATE categorias SET ? WHERE CategoriaID = ?",[category,id])

        res.json(result);

    }catch (error){

      
        
        res.send(error.message);
    }
}


export const methodsHTTP = {
    getCategorias,
    addCategories,
    getCategoria,
    deleteCategoria,
    updateCategories

}
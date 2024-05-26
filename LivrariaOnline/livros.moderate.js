use("LivrariaOnline")

db.runCommand({collMod:"Livros",
    validator:  {
            $jsonSchema:   {
            bsonType: "object",
            required:["_id","Título","Páginas","Gênero","Preço"],
            properties:{
                _id:{
                    bsonType: "objectId",
                    description:"informe corretamente o objectId do livro"
                },
                Título:
                    {
                        bsonType: "string",
                        description:"informe corretamente o título do livro"
                    },
                    Páginas:
                        {
                            bsonType: "int",
                            description:"informe corretamente o número de páginas"
                            
                        },
                    Gênero:
                        {
                            bsonType: "string",
                            description:"informe corretamente o gênero do livro"
                        },
                    Preço:
                        {
                            bsonType: "double",
                            description:"informe corretamente o preço do livro"
                        }
                  }
            }  
        },
        validationLevel:"moderate"
})
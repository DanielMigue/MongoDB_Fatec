db.createCollection("Editora",  { 
        validator:   {
            $jsonSchema:     {
             bsonType: "object",
                  required:["_id","Nome","Telefone"],
                  properties:  {
                    _id:{
                    bsonType: "objectId",
                    description:"informe corretamente o objectId da editora"
                },
                    Nome:
                        {bsonType: "string"},
                    Telefone:
                        {bsonType: "string"}
                  }
            }  
        }          
    })
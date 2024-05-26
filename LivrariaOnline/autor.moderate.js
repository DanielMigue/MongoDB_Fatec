db.runCommand({collMod:"Autor",
    validator:  {
            $jsonSchema:     {
             bsonType: "object",
                  required:["_id","Nome","Data_Nascimento","Email","Telefone"],
                  properties:   {
                      _id:{
                    bsonType: "objectId",
                    description:"informe corretamente o objectId do autor"
                },
                    Nome:
                        {bsonType: "string"},
                    Data_Nascimento:
                        {bsonType: "string"},
                    Email:
                        {bsonType: "string"},
                    Telefone:
                        {bsonType: "string"}
                  }
            }  
        },
    validationLevel:"moderate"
})
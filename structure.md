# STRUCTURE DATA
```json
{
    id VARCHAR(16),
    title VARCHAR(50),
    description TEXT,
    isFinished BOOLEAN DEFAULT FALSE,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updateAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

}
```

## ADD TODO
method:  <b>POST</b>  
URL:  <b>/add</b>  

response success:   
```json
{
    "status": "success",
    "message": "todo added successfully",
    "data": {
        "id": "xxx"
    }
}
```

response fail:  
```json
{
    "status": "error",
    "message": "error added todo"
}
```

## GET TODOS
method: <b>GET</b>    
URL: <b>/todos</b>   

response success: 
```json
{
    "status": "success",
    "data": {
        "todos": [
            {
                "id": "xxx",
                "title": "xxx",
                "description": "xxx",
                "isFinished": "xxx",
                "createdAt": "xxx",
                "updatedAt": "xxx",
            }
            ....
        ]
    }
}
```
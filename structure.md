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
request body: 
```json 
{
    "title": "string",
    "isFinished": "boolean",
    "description": "string"
}
```

response success: 
1. status code <b>201</b>   
2. response body: 
```json
{
    "status": "success",
    "message": "todo added successfully",
    "data": {
        "id": "string"
    }
}
```

response fail:  
1. client does not attach title property on body request
2. status code <b>400</b>   
```json
{
    "status": "error",
    "message": "error added todo, please add title correctly"
}
```

## GET TODOS
method: <b>GET</b>    
URL: <b>/todos</b>   

response success: 
1. status code <b>200</b>   
2. response body <b>ORDER BY updatedAt</b>: 
```json
{
    "status": "success",
    "data": {
        "todos": [
            {
                "id": "string",
                "title": "string",
                "description": "string",
                "isFinished": boolean,
                "createdAt": "string",
                "updatedAt": "string",
            }
            ....
        ]
    }
}
```
response fail: 
1. status code <b>400</b>  
2. response body
```json 
{
    "status": "error",
    "message": "error fetching todos"
}
```

## GET SPESIFIC TODO    
method: <b>GET</b>   
URL: <B>/todos/{id}</B>   

response success:   
1. status code <b>200</b>      
2. response body: 
```json
{
    "status": "success",
    "data": {
        "todo": {
                
                "id": "string",
                "title": "string",
                "description": "string",
                "isFinished": boolean,
                "createdAt": "string",
                "updatedAt": "string",
        }
    }
}
```   

response fail:    
1. status code <b>404</b>   
2. response body:    
```json 
{
    "status": "error",
    "message": "error todo not found"

}
```   
## UPDATE TODO   
method: <b>PUT</b>   
URL: <b>/todos/{id}</b>   
body request: 
```json
{
    "title": "string",
    "description": "string",
    "isFinished": "boolean"
}
```

response success:   
1. status code <b>200</b>  
2. response body: 
```json
{
    "status": "success",
    "message": "todo updated successfully",
}
```
response fail:
1. client does not attach property title:
   1. status code <b>400</b>     
   2. response body: 
```json
{
    "status": "error",
    "message": "error updating todo, please add title correctly"
}
```
2. client attach id not found   
    1. status code <b>400</b>
    2. response body: 
    ```json 
    {
        "status": "error",
        "message": "error updated todo, id not found"
    } 
    ```

## DELETE TODO
method: <b>DELETE</b>   
URL: <b>/todos/{id}</b>  

response success: 
1. status code <b>200</b>  
2. response body: 
```json
{
    "status": "success",
    "message": "todo deleted successfullly"
}
```

response error: 
1. status code <b>400</b>   
2. response body: 
```json
{
    "status": "error",
    "message": "error deleted todo, id not found"
}
```
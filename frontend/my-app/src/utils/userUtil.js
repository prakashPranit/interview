import axios from 'axios'

export const fetchUsers = async ()=>{
    try{
        const response = await axios.get("http:localhost:5000/users")
        return response
    }catch(err){
        return err
    }
  
}
export const createUsers = async (body)=>{
    try{
     const response = await axios.post("http://localhost:5000/users",{
         name:body?.name,
         email:body?.email
     })
     return response 
    }catch(err){
        return err
    }
}
import React,{useState,useEffect} from "react";
import {Row,Col} from "antd"
import { UserList } from "./UserList";
import { UserForm } from "./UserForm";
import { fetchUsers } from "../utils/userUtil";



export  const Landing = ()=>{
    const [users,setUsers] = useState([])
    const fetchUserData = async ()=>{
          const response = await fetchUsers()
          setUsers(response.data)
    }
    useEffect(()=>{
        
    })
    return (
        <>

        <Row  style={{display:"flex",alignItems:"center",justifyContent:"center" ,margin:"2rem",border:"2px solid black"}}>
         <Col lg={24}>
             <p>User create Form</p>
             <UserForm></UserForm>
         </Col>
        </Row>
        <Row  style={{display:"flex",alignItems:"center",justifyContent:"center" ,margin:"2rem",border:"2px solid green"}}>
             <UserList></UserList>
         </Row>
    
        </>
    )
}




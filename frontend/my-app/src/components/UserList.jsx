import React from "react";
import {Row,Col} from "antd"

export  const   UserList = ( {users})=>{
    return (
        <>
        <Row>
         <Col lg={24}>
             <p>Total created users {users?.length}</p>
             <ul>
             {
                users? users?.map((user)=>{
                    return (
                      <li>{`Name: ${user?.name} , Contact: ${user.email}`}</li>
                    )
                }):<p> "No user created till now create one to view"</p>
               
           }
             </ul>
         
         </Col>
        </Row>
        </>
    )
}


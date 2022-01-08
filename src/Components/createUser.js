import "./components.css";
//import axios from "axios";
import {useState,useContext} from "react";
import {Context} from "../Context";

import EditAndCreateUser from "./subComponents/EditAndCreateUser";
function CreateUser()
{
  
     const [name,setName] = useState("");
     const[email,setEmail] = useState("");
     const[location,setLocation] = useState("");
     const[phone,setPhone] = useState("");
     const context = useContext(Context);
     const[useradded,setUseradded] = useState(true);
    //to post user to API
   let postuser= async()=>{
      const userdata = await fetch("https://611f24619771bf001785c6fb.mockapi.io/user/",{
          method:"POST",
          headers:{
              "content-type":"application/json"
          },
          body:JSON.stringify({
            name:name,
            email:email,
            location:location,
            phone:phone,
          })
      });
      const data = await userdata.json();
      console.log(data);
      let tempusers = [...context.users];
      tempusers.push(data);
      console.log(tempusers);
      context.setUsers(tempusers);
      setUseradded(false);
   }



     //handling the form submit
     let handleSubmit =(event)=>{
           event.preventDefault();
          
           postuser();
     }

    
    

    return(
        <>
        <div className="container">
        {useradded ? (<>
            <h1 className="text-center text-info">Create User</h1>
            <EditAndCreateUser
              name={name}
              email={email}
              location={location}
              phone={phone}
              setName={setName}
              setEmail={setEmail}
              setLocation={setLocation}
              setPhone={setPhone}
              handleSubmit={handleSubmit}
            />
        </>)
        :
        (
        <>
        <div className="confirmtext">
        <h1>User added</h1>
        <i className="fas fa-check-circle"></i>
        </div>
        </>)}
       
        </div>
        </>
    );
}
export default CreateUser;

//import axios from "axios";
import { useState,useContext ,useEffect} from "react";
import { Context } from "../Context";
import "./components.css";
import EditAndCreateUser from "./subComponents/EditAndCreateUser";

export default function EditUser({match})
{
    const[name,setName]= useState("");
    const[email,setEmail] = useState("");
    const[location,setLocation]= useState("");
    const[phone,setPhone]=useState("");
    const context = useContext(Context);
    const [userNotEdited,setUserNotEdited] = useState(true);
    let setInput = async()=>{
        let uservalue = context.users.filter((user)=>user.id===match.params.id)
         if(uservalue.length===0)
         {
          const userdata = await fetch(`https://611f24619771bf001785c6fb.mockapi.io/user/${match.params.id}`);
           const data = await userdata.json();
            uservalue.push(data);
         }
        uservalue.forEach((user)=>{
            setName(user.name);
            setEmail(user.email);
            setLocation(user.location);
        })
    }

    useEffect(()=>{
      setInput();
    },[])
  let PutUser = async()=>{
        const userdata = await fetch(`https://611f24619771bf001785c6fb.mockapi.io/user/${match.params.id}`,{
            method:"PUT",
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
        let index = context.users.findIndex((user)=>user.id === match.params.id);
        tempusers[index] = data;
        context.setUsers(tempusers);
        setUserNotEdited(false);

    }

     //to handle sumbmit and call put method
     let handleSubmit =(event)=>{
          event.preventDefault();
          PutUser();
     }

    
    return(
        <>
        <div className="container">
           { userNotEdited ? 
           (<> 
        <h1 className="text-center text-info">Update User{match.params.id}</h1>
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
        (<>
         <div className="confirmtext">
        <h1>User Details Updated</h1> 
        <i className="fas fa-check-circle"></i>
        </div>
        </>)}
        </div>
        </>
    );
}

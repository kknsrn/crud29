//import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Context } from "../Context";
import "./components.css";
import ProfileEdit from "./subComponents/profileEdit";
export default function EditProfile({match})
{

    const[name,setName] = useState("");
    const[id,setId] = useState("");
    const[role,setRole]=useState("");
    const[email,setEmail] = useState("");
    const[avatar,setAvatar] = useState("");
    const[location,setLocation] = useState("");
    const[phone,setPhone] = useState("");
    const context = useContext(Context);
    const[profileNotedited,setProfileNotEdited] = useState(true);
    let setInput = async()=>{
        let uservalue = context.users.filter((user)=>user.id===match.params.id);
        if(uservalue.length===0)
        {
           const userdata = await fetch(`https://611f24619771bf001785c6fb.mockapi.io/user/${match.params.id}`);
           const data = await userdata.json();
           uservalue.push(data);
        }
        uservalue.forEach((user)=>{
            setName(user.name);
            setId(user.id);
            setRole(user.role);
            setEmail(user.email);
            setRole(user.role);
            setAvatar(user.avatar);
            setLocation(user.location);
            setPhone(user.phone);
        })
    }

      useEffect(()=>{
          setInput();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      },[])
   
      
      let putuser = async()=>{
      
          const userdata = await fetch(`https://611f24619771bf001785c6fb.mockapi.io/user/${match.params.id}`,{
            method:"PUT",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify({
                name:name,
                email:email,
                id:id,
                role:role,
                avatar:avatar,
                location:location,
                phone:phone,
               
            })
        });
        const data = await userdata.json();
          let tempusers = [...context.users];
          let index = context.users.findIndex((user)=>user.id === match.params.id);
          tempusers[index] = data;
          context.setUsers(tempusers);
          setProfileNotEdited(false);
      }
      
     let handleSubmit =(event)=>{
           event.preventDefault();
           putuser();
     }
return(
        <>
          <div className="container">
          {profileNotedited ? 
          (<>    
        <h1 className="text-center text-info">Edit Profile - {match.params.id}</h1>
        <ProfileEdit 
        name={name}
        email={email}
        id={id}
        role={role}
        avatar={avatar}
        location={location}
        phone={phone}
        setName={setName}
        setEmail={setEmail}
        setId={setId}
        setRole={setRole}
        setAvatar={setAvatar}
        setLocation={setLocation}
        setphone={setPhone}
        handleSubmit={handleSubmit}
        />
        </>)
        :
        (
            <>
            <div className="confirmtext">
           <h1>Profile Updated</h1> 
           <i className="fas fa-check-circle"></i>
           </div>
           </>
        )
        }
        </div>
        </>
    );
}

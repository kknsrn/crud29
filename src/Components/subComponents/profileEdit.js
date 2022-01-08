function ProfileEdit(props){
      let handleChange=({target:{name,value}})=>{
        if(name==="name"){ props.setName(value);}
        if(name==="email"){props.setEmail(value);}
        if(name==="location"){props.setLocation(value);}
        if(name==="avatar"){props.setAvatar(value);}
        if(name==="phone"){props.setPhone(value);}
      }
      
return(
        <>
         <div className="card editcard mx-auto mb-5 createuser" >
            <div className="card-body">
             <form className="form">
                 <div className="form-group">
                    <label className="font-weight-bold">Name:</label><br/>
                    <input className="form-control" type="text" placeholder="Enter Your Name"
                    value={props.name}
                    name="name"
                    onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label className="font-weight-bold">Email:</label><br/>
                    <input className="form-control" type="email" placeholder="Enter Your Email"
                    value={props.email}
                    name="email"
                    onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label className="font-weight-bold">Location:</label><br/>
                    <input className="form-control" type="text" placeholder="Enter Your Location"
                    value={props.location}
                    name="location"
                    onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label className="font-weight-bold">Avatar:</label><br/>
                    <input className="form-control" type="text" placeholder="Enter Your Avatar"
                    value={props.avatar}
                    name="avatar"
                    onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label className="font-weight-bold">Phone:</label><br/>
                    <input className="form-control" type="text" placeholder="Enter Your Phone No"
                    value={props.phone}
                    name="phone"
                    onChange={handleChange}
                    />
                </div>

                <br/>
                        
                <div className="text-center">
                <button className="mx-auto btn btn-primary" type="submit" onClick={props.handleSubmit}>Submit</button>
                </div>
             </form>
            </div>
        </div>
        </>
    );
}

export default ProfileEdit;

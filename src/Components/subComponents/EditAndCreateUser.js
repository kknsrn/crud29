function EditAndCreateUser(props){
   let handleInput =({target:{value,name}})=>{
        if(name==="name"){props.setName(value);}
        if(name==="email"){props.setEmail(value);}
        if(name==="location"){props.setLocation(value);}
   }
return(
        <>
        <div className="card mx-auto createuser" >
            <div className="card-body">
             <form className="form">
                 <div className="form-group">
                    <label className="font-weight-bold">Name:</label><br/>
                    <input className="form-control" type="text" placeholder="Enter Your Name"
                     value={props.name} 
                     onChange={handleInput}
                     name="name"
                    />
                </div>
                <div className="form-group">
                    <label className="font-weight-bold">Email:</label><br/>
                    <input className="form-control" type="email" placeholder="ENter Your Email" 
                    value={props.email} 
                    onChange={handleInput}
                    name="email"
                    />
                </div>
                <div className="form-group">
                    <label className="font-weight-bold">Location:</label><br/>
                    <input className="form-control" type="text" placeholder="Enter Your Location" 
                    value={props.location} 
                    onChange={handleInput}
                    name="location"
                    />
                </div>
               
                <br/>
                <div className="text-center">
                <button className="mx-auto btn btn-sucess"  type="submit" onClick={props.handleSubmit}>Submit</button>
                </div>
             </form>
            </div>
        </div> 
        </>
    );
}

export default EditAndCreateUser;

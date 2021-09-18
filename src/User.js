import React,{useState} from 'react'

 const User = () => {
     const [name,setName] = useState("");
     const [email,setEmail] = useState(" ");
     const [data,setData] = useState(null);

     const submit = (e) =>{
         e.preventDefault();
         const fetchApi = async () =>{
             const url = `https://jsonplaceholder.typicode.com/posts`;
             const response = await fetch(url);
             const resJsoe = await response.json();
             console.log(resJsoe);

         }
         
         fetchApi();
      

     }
    return (
        <>
            <div className = "login">
                <form>
                <div>
                    <h1>Login</h1>
                    <label>Name</label>
                    <input type = "text" 
                    placeholder = "enter your name"
                     value = {name} onChange = {(e) =>setName(e.target.value)} /><br></br>
                      <label>Password</label>
                      <input type = "password" 
                    placeholder = "enter your password"
                    value = {email} onChange = {(e) =>setEmail(e.target.value)}
                    /><br></br>
                    <button type= "submit" className = "sub"  onClick = {submit}>Submit it </button>
                </div>
                </form>
            </div>
        </>
    )
}

export default User;
import { useState } from "react"

export default function CreateToDo()
{
    const[title,setTitle]=useState("");
    const[description,setDescription]=useState("");

    function fn()
    {
        fetch("http://localhost:3000/todo",{
            method:"POST",
            body:JSON.stringify({
                title,description
            }),
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then(async function(res)
    {
        let val=await res.json();
        alert(val)
    })
    }


    return(
        <div>
            <input style={{padding:10,margin:10}} type="text" placeholder="title" onChange={function(e)
            {
                setTitle(e.target.value);
            }}></input><br /><br/><br />
            <input style={{padding:10,margin:10}} type="text" placeholder="Description" onChange={function(e)
            {
                setDescription(e.target.value);
            }}></input><br /><br/><br />

            <button style={{padding:10,margin:10}}  onClick={fn}>Add a Todo</button>

        </div>
    )
}
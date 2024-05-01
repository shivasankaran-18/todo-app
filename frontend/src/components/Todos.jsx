export default function Todos({todos})
{
    function compl(obj)
    {
        if(obj.completed==true)
        {
            return "Completed"

        }
        return "Mark As completed"
    }
    function fn(obj)
    {
        console.log(obj._id);
        if(obj.completed===false)
        {
            fetch("http://localhost:3000/completed",{
                method:"PUT",
                body:JSON.stringify({_id:obj._id}),
                headers:{
                    "Content-Type":"application/json"
                }
            })
            .then(()=>
        {
            alert("done");
        })
        }
    }

    return(
        <div>
            {todos.map((obj)=>
            {
                return(
                    <div >
                        <h1>{obj.title}</h1>
                        <h2>{obj.description}</h2>

                        <button onClick={()=>{
                            fn(obj)
                        }}>{compl(obj)}</button>
                    </div>
                )

            })}
            

        </div>
    )

}
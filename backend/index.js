const express=require("express");
const {createTodo,updateTodo}=require("./type")
const todo=require("./db")
const cors =require('cors');

const app=express()

app.use(express.json());
app.use(cors())


app.post("/todo",async (req,res)=>
{
    let parsed=createTodo.safeParse(req.body);
    if(!parsed.success)
    {
        res.status(401).json({
            msg:"input is not valid"
        })
        return;
    }
    await todo.create(
        {
            title:req.body.title,
            description:req.body.description,
            completed:false
        }
    )

    res.json({
        msg:"todo added"
    })

    

})

app.get("/todos",async (req,res)=>
{
    let todos=await todo.find({})
    
    res.json({
        todos
    })
})

app.put("/completed",async(req,res)=>
{
    console.log(req.body)
    let parsed=updateTodo.safeParse(req.body);
    console.log(parsed)
    if(!parsed.success)
    {
        res.status(401).json({
            msg:"input is not valid"
        })
        return;
    }
    console.log('hello');
    await todo.updateOne({
        _id:req.body.id
    },{completed:true})
    console.log('hello');
    res.json({
        msg:"updated"
    })

    
})






app.listen(3000,()=>
{
    console.log("listening");
})
"use client"
import { useState } from "react";
import "../style.css";
const Page = () => {
    const [name,setName] = useState("");
    const [price,setPrice] = useState("");
    const [company,setCompany] = useState("");
    const [color,setColor] = useState("");
    const [category,setCategory] = useState("");

    const addProduct  = async ()=>{
        let result = await fetch("http://localhost:3000/api/products",{
            method:"POST",
            body:JSON.stringify({name,price,company,color,category})
        })
        result = await result.json() 
        if(result.success){
            alert("new product added")
        }   
    }

    const clearField = ()=>{
        setName(""),
        setPrice(""),
        setCategory(""),
        setColor(""),
        setCompany("")
       
   
    }
  
    

  return (
    <div>
      <h1>Add Products</h1>
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter a name' className="input"/>
      <input type="text" value={color} onChange={(e)=>setColor(e.target.value)} placeholder='Enter a color' className="input"/>
      <input type="text" value={category} onChange={(e)=>setCategory(e.target.value)} placeholder='Enter a category' className="input"/>
      <input type="text" value={price} onChange={(e)=>setPrice(e.target.value)} placeholder='Enter a price' className="input"/>
      <input type="text" value={company} onChange={(e)=>setCompany(e.target.value)} placeholder='Enter a company' className="input"/>
      <button onClick={addProduct} className="btn">Add Product</button>
      <button onClick={clearField} className="btn">clear</button>
      
    </div>
  )
}

export default Page

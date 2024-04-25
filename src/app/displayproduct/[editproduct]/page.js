"use client"
import { useEffect, useState } from "react";
import "../../style.css";
import { useRouter } from "next/navigation";
const Page = (props) => {
    const [name,setName] = useState("");
    const [price,setPrice] = useState("");
    const [company,setCompany] = useState("");
    const [color,setColor] = useState("");
    const [category,setCategory] = useState("");

    useEffect(()=>{
        getProductDetails()
    },[]);

    const getProductDetails = async ()=>{
        let productId = props.params.editproduct
        let productData = await fetch(`http://localhost:3000/api/products/${productId}`)
        productData = await productData.json()
        if(productData.success){
            let result = productData.result;
            setName(result.name)
            setColor(result.color)
            setCategory(result.category)
            setPrice(result.price)
            setCompany(result.company)
        }
    }

    const clearField = ()=>{
        setName(""),
        setPrice(""),
        setCategory(""),
        setColor(""),
        setCompany("")
       
   
    }

    
    let routerr = useRouter();
    const updateProduct = async ()=>{
        
        let productId = props.params.editproduct
        let data = await fetch(`http://localhost:3000/api/products/${productId}`,{
            method:"PUT",
            body:JSON.stringify({name,color,category,price,company})
        });
        data = await data.json()
        if(data.result){
            alert("Product has been updated")
            
        }
        routerr.push('/displayproduct')
        

        
        
    }
  
    

  return (
    <div>
      <h1>Update Products</h1>
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter a name' className="input"/>
      <input type="text" value={color} onChange={(e)=>setColor(e.target.value)} placeholder='Enter a color' className="input"/>
      <input type="text" value={category} onChange={(e)=>setCategory(e.target.value)} placeholder='Enter a category' className="input"/>
      <input type="text" value={price} onChange={(e)=>setPrice(e.target.value)} placeholder='Enter a price' className="input"/>
      <input type="text" value={company} onChange={(e)=>setCompany(e.target.value)} placeholder='Enter a company' className="input"/>
      <button  className="btn" onClick={updateProduct} >edit Product</button>
      <button onClick={clearField} className="btn">clear</button>
      
    </div>
  )
}

export default Page

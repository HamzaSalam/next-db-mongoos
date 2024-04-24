import {connectionStr} from "@/lib/db"
import { Product } from "@/lib/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(){
    let data =[]
    let success =true;
    try{
    await mongoose.connect(connectionStr)
    // console.log("Connected to MongoDB");
    data = await Product.find();
    // console.log(data);
    }
    catch (error){
    data = {result:"error"};
    success = false

    }
    return NextResponse.json({result:data,success})
}



export async function POST(reqesut){
    const payload = await reqesut.json();
    await mongoose.connect(connectionStr)
    let product = new Product( payload
    //     {
    //     name:"iphone 15",
    //     category: "mobile",
    //     color:"black",
    //     price:"10000",
    //     company:"apple"
    // }
)

    const result  =  await product.save();
    return NextResponse.json({result,success:true})
}
import { connectionStr } from "@/lib/db";
import { Product } from "@/lib/model/product";
import mongoose from "mongoose";
import { Averia_Gruesa_Libre } from "next/font/google";
import { NextResponse } from "next/server";

export async function PUT(reqesut,content){
    console.log(content)
    const productId = content.params.productid;
    const filter = {_id:productId}
    const payload = await reqesut.json()
    await mongoose.connect(connectionStr);
    const result = await Product.findOneAndUpdate(filter,payload)
    return NextResponse.json({result,success:true})
}

export async function GET(reqesut,content){
    console.log(content)
    const productId = content.params.productid;
    const filter = {_id:productId}
    await mongoose.connect(connectionStr);
    const result = await Product.findById(filter)
    return NextResponse.json({result,success:true})
}
const getProduct = async ()=>{
    let data = await fetch("http://localhost:3000/api/products")
    data = await data.json();
    if(data.success){
        return data.result
    }else{
        return {success:false}
    }
}

const Page = async () => {
    const products = await getProduct();

  return (
    <div>
      <h1>Products</h1>
      <table border={1}>
      <thead>
      <tr>
        <td>Name</td>
        <td>Price</td>
        <td>company</td>
        <td>color</td>
        <td>category</td>
      </tr>
      </thead>
      <tbody>
      {
        products.map((item)=>(<tr key={item.id}>
            <td>{item.name}</td>
        <td>{item.price}</td>
        <td>{item.company}</td>
        <td>{item.color}</td>
        <td>{item.category}</td>
        </tr>))
      }
      </tbody>
      </table>
    </div>
  )
}

export default Page

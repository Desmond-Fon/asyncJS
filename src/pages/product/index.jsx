
function Product() {
  return (
    <div className="w-[80%] mx-auto py-20 flex flex-col gap-4">
      <input className="input-field" type="text" placeholder="Enter your product name" />
      <input className="input-field" type="number" placeholder="Enter your product price" />
      <input className="input-field bg-gray-200" type="text" placeholder="Enter your product description" />
      <input className="input-field" type="text" placeholder="Enter your product image" />
      <input className="input-field" type="text" placeholder="Enter your product category" />
      <input className="input-field" type="text" placeholder="Enter your product stock" />
      <input className="input-field" type="text" placeholder="Enter your product brand" />
      <input className="input-field" type="text" placeholder="Enter your product size" />
      <input className="input-field" type="text" placeholder="Enter your product color" />
      <input className="input-field" type="text" placeholder="Enter your product material" />
    </div>
  )
}

export default Product
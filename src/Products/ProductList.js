import Products from "./Products"
function ProductList(){
    var products =[
        {
          id:1,
          name: "IPhone 14 Pro Max",
          price: 50000,
          description:"Telefon",
          colors:["silver","red","white","black"]
        },
        {
          id:2,
          name: "IPhone 13",
          price: 30000,
          description:"Telefon",
          colors:["mavi","yeşil","sarı"]
        },
        {
          id:3,
          name: "IPhone 11",
          price: 20000,
          description:"Telefon",
          colors:["Siyah","Beyaz","sarı"]
        }
      ]
    return(
        <>
            {
                products.map((product,index)=>(
                    <div className="product-details" key={index}>
                      {<h2>{product.name}</h2>}
                      {product.price}
                    </div>
                  ))
            }
        </>
    );
}

export default ProductList;
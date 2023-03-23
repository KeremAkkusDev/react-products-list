import Products from "./Products";

function ProductForm(){
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
    
    function saveProduct(e){
        var p_name = e.target.elements.p_name.value;
        var p_price = e.target.elements.p_price.value;
        var product={
          name:p_name,
          price:p_price
        }
        products.push(product);
        e.target.elements.p_name.value="";
        e.target.elements.p_price.value="";
        e.preventDefault();
    }
    return(
        <>
            <form onSubmit={saveProduct}>
            <input type="text" name="p_name" id="p_name"/>
            <input type="text" name="p_price" id="p_price"/>
            <button type="submit">Add Product</button>
        </form>
        </>
    );
}

export default ProductForm;
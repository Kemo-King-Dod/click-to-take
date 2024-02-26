const cart_section = document.getElementById("cart_section");
const cartItems=document.getElementById('btn_cart');
let fa_basket_shopping =document.querySelector('.fa-basket-shopping');
// -----------------------------------------------------

   
function drowUICart(allProducts=[]){




    let productsInCart= JSON.parse(localStorage.getItem('CartProducts'))||allProducts;
let products= productsInCart.length>0?
productsInCart.map((item)=>{
        
    
       return` <div class="add_to">
        <img src="${item.image}" alt="" class="succ_pro_add" height="100px" width="auto">
        <h3>${item.name}</h3>
        <button class="cancel-from-cart" onclick="removeitem(${item.id})"><i class="fa-solid fa-close"></i></button>
    </div>`;}

  ):
  `<h3 id="notfound-cart" style="text-align:center;">&#128542;لا توجد منتجات في المفضلة</h3>`;
  

    cart_section.innerHTML=products;
    conslog(productsInCart.length)
    


}
drowUICart();
function removeitem(id) {
    productsInCart=JSON.parse(localStorage.getItem('CartProducts'));
    let index = productsInCart.filter((item)=> item.id!==id);
   productsInCart=index;
    localStorage.setItem('CartProducts',JSON.stringify(productsInCart));
    drowUICart(productsInCart);
}


function conslog(a){
    console.log(a);
}
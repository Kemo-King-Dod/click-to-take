let favPro = JSON.parse(localStorage.getItem("Favorites"));
const row_of_pro = window.document.getElementById('row_of_pro');
const col_of_pro = window.document.getElementById('col_of_pro');

row_of_pro.style.justifyContent= 'center';
const notfound= window.document.getElementById('notfound-favorite');



if(favPro==""){notfound.style.display="flex";}
else{
    favPro.forEach((product)=>{
    row_of_pro.innerHTML+=` 
<div class="product" id="col-of-pro">

<div class="product_img">
<img src="${product.image}" alt="">
 
<div class="prod description">${product.name}</div>
<div class="prod price"><i class="fa-regular fa-heart favorite" onclick="favorite(${product.id})"></i><span class="price_num">السعر : ${product.price}  دينار</span></div>

<button type="button" class="btn_add_to_cart" onclick="addToCart(${product.id})">اضافة الى السلة</button>
</div>
</div>`
});}
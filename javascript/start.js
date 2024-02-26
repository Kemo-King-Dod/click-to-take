
// ----------------------------------------------------------------------
// -----------------------تعريف المتغيرات ---------------

const row_of_pro = window.document.getElementById('row_of_pro');
const col_of_pro = window.document.getElementById('col_of_pro');

let allproducts=JSON.parse(localStorage.getItem('products'));

let rows=[row_of_pro,row1_of_pro,row2_of_pro,row3_of_pro,row4_of_pro,row5_of_pro];









function dorwpro(){
    cart.map(item=>item.id).forEach(id=>allproducts.map((alitem)=>{if(alitem.id==id){alitem.inCart=true;}}));
    favoriteItems.map(item=>item.id).forEach(id=>allproducts.map((alitem)=>{if(alitem.id==id){alitem.isfav=true;}}));
    row_of_pro.innerHTML="";
  let temp=0;

  for(let i=0; i<rows.length; i++){
    for(let j=0; j<allproducts.length; j++)

    {rows[i].innerHTML+=` 
    <div class="product" id="col-of-pro">
    
    <div class="product_img">
    <img src="${allproducts[temp].image}" alt="">
     
    <div class="prod description">${allproducts[temp].name}</div>
    <div class="prod price"><i class="fa-regular fa-heart favorite" onclick="favorite(${allproducts[temp].id})"  style="color: ${allproducts[temp].isfav===true?"red":""};"></i><span class="price_num">السعر : ${allproducts[temp].price}  دينار</span></div>
    
    <button type="button" class="btn_add_to_cart" onclick="addToCart(${allproducts[temp].id})">${allproducts[temp].inCart==true?"تمت الاضافة":"اضافة الى السلة"}</button>
    </div>
    </div>`
    temp++;
    if(temp%5==0){
       break;
    }
  }
      
    };

}



// ---------------دالة الاضافة الى السلة-----------
let cart = localStorage.getItem("CartProducts")
?JSON.parse(localStorage.getItem("CartProducts"))
: [];  //recupera
function addToCart(id){
    allproducts.forEach(item => {if(item.id == id)item.inCart=true;});
    

    let proadd= allproducts.find((item)=> item.id === id);
    cart=[...cart,proadd];
    cart=getOne(cart,"id");
    dorwpro();

  localStorage.setItem('CartProducts' , JSON.stringify(cart));
  
}








// ----------------------------------------------------------------------------------
let favoriteItems =localStorage.getItem("Favorites")?JSON.parse(localStorage.getItem("Favorites")):[];



function favorite(id){

  let favorite = allproducts.find((item)=> item.id === id);
  
    if(!favorite.isfav){
        allproducts.map((item)=>
        {if (favorite.id===item.id) item.isfav = true;
        
        favoriteItems=[...favoriteItems,favorite];
        favoriteItems=getOne(favoriteItems,"id");
        localStorage.setItem("Favorites",JSON.stringify(favoriteItems)) ;
        dorwpro();
       
      }
      
      );
    }
    else{allproducts.map(item=>
        {
            if (favorite.id===item.id) item.isfav = false;
        favoriteItems=favoriteItems.filter(item=>item.id!==id);
        favoriteItems=getOne(favoriteItems,"id");
        localStorage.setItem("Favorites",JSON.stringify(favoriteItems)) ;
        dorwpro();
        })}
  }
 


dorwpro();


// ----------------اختيار واحد--------------
function getOne(arrey,id){
   let one= arrey.map(item =>item[id]).map((item,i,arr)=>{return arr.indexOf(item)===i&&i}).filter(item => arrey[item]).map(item =>arrey[item]);
return one;


}
// ------------------------------------------------







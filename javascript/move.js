
// --- المتغيرات تعريف --


// ----تعريف السكشنات  ----
const homePage =document.getElementById("home_page");
const notefication =document.getElementById("notefication");
const product_section = document.getElementById("products_sec");
const stores_section = document.getElementById('stories')
const cart_section = document.getElementById("cart_e");



// ------------------------------------------------------------
// ----الازرار الرئيسية  ----
const btn_note = document.getElementById("btn_note");
const btn_home = document.getElementById("btn_home");
const btn_products = document.getElementById("btn_products");
const cartItems=document.getElementById('btn_cart');
const btn_stores =document.getElementById("btn_stores");
const search =document.getElementById("search");

// ----------------------------------------------------------------------


// عد الاشعارات وزر الاضافة الى المفضلة
let btn_add_to_cart = document.querySelectorAll(".btn_add_to_cart");
let add = 0 ;

let carting_cancel;

let note_Conter=0;
// -----------------------------------------------------------------------------



// ----------------------متغيرات  المنتجات-----------------

let product_name=document.querySelectorAll(".products .product .product_img .description");


// الايقونات الرئيسية
let fa_bell =document.querySelector('.fa-bell');
let fa_home =document.querySelector('.fa-home');
let fa_shop =document.querySelector('.fa-shop');
let fa_bag_shopping =document.querySelector('.fa-bag-shopping');
let fa_basket_shopping =document.querySelector('.fa-basket-shopping');
let fa_bars = document.querySelector('.fa-bars');
// ----------------------------------------------------------------------
 

// الازرار الفرعية

// زر الطلب في السلة
// عد عناصر السلة
var Cart_Element =0;
// -----------------------------------------------------








// ------ الانتقال الى الصفحة الرئيسية------
function move_to_home()

{       
    homePage.style.display="flex";
    cart_section.style.display="none";
    stores_section.style.display="none";
    product_section.style.display="none";
    notefication.style.display="none";
    fa_bell.style.color="#000";
    fa_home.style.color="#e74c3c";
    fa_shop.style.color="#000";
    fa_bag_shopping.style.color="#000";
    fa_basket_shopping.style.color="#000";
    fa_bars.style.color="#000";
}
btn_home.onclick = move_to_home;
// ------------------------------------------------------------

// -------الانتقال الى صفحة المنتجات-------
function move_to_products(){
    cart_section.style.display="none";
    stores_section.style.display="none";
    homePage.style.display = "none";
    notefication.style.display="none";
    product_section.style.display ="flex";


    fa_bell.style.color="#000";
    fa_home.style.color="#000";
    fa_shop.style.color="#000";
    fa_bag_shopping.style.color="#e74c3c";
    fa_basket_shopping.style.color="#000";
    fa_bars.style.color="#000";

}
btn_products.onclick = move_to_products;

// ----------------------------------------------------------

// ---- الاشعارت صفحة الى الانتقال ----
btn_note.onclick = move_to_note;

function move_to_note()
{
    homePage.style.display="none";
    product_section.style.display="none";
    stores_section.style.display="none";
    cart_section.style.display="none";
    notefication.style.display="flex";
    fa_bell.style.color="#e74c3c";
    fa_home.style.color="#000";
    fa_shop.style.color="#000";
    fa_bag_shopping.style.color="#000";
    fa_basket_shopping.style.color="#000";
    fa_bars.style.color="#000";
    note_zero();
}
// ----------------------------------------------------------

// -------الانتقال الى صفحة السلة-------

function move_to_cart(){
    homePage.style.display = "none";
    notefication.style.display="none";
    product_section.style.display ="none";
    stores_section.style.display="none";
    cart_section.style.display ="flex";


    fa_bell.style.color="#000";
    fa_home.style.color="#000";
    fa_shop.style.color="#000";
    fa_bag_shopping.style.color="#000";
    fa_basket_shopping.style.color="#e74c3c";
    fa_bars.style.color="#000";
   
    appendBtn();
    cancelbtns();
   

}
cartItems.onclick = move_to_cart;

// ----------------------------------------------------------

// -------الانتقال الى ��فحة المنتجات-------

function move_to_stores(){
    homePage.style.display = "none";
    notefication.style.display="none";
    product_section.style.display ="none";
    stores_section.style.display ="flex";

    fa_bell.style.color="#000";
    fa_home.style.color="#000";
    fa_shop.style.color="#e74c3c";
    fa_bag_shopping.style.color="#000";
    fa_basket_shopping.style.color="#000";
    fa_bars.style.color="#000";

}

btn_stores.onclick = move_to_stores;

// ----------------------------------------------------------




// دالة المرور على كل ازرار الاضافة
btn_add_to_cart.forEach(function(btn) {
    btn.onclick = (e) => {
        addToNote(e);
        addToCart(e);
        
        add++;

      };
});


// --------------------دالة انشاء الاشعارات--------------------
function addToNote(e){
    let btn = e.target;
    
    let firstChild = btn.parentElement.children[0];

    
    let crs =firstChild.getAttribute("src")
    notefication.innerHTML+= `<div class="add_note">
    <img src="${crs}" alt="" class="succ_pro_add" height="100px" width="auto">
    <h3>تمت اضافة هذا العنصر بنجاح الى السلة</h3>
    </div>`
    btn.innerText="تمت الاضافة ";
    note_increamnt();

    
}
// -----------------------------------------
// -----------------دالة الازالة من الاشعارات--------------
function canceledFromNote(e){
    let btn = e.target;
    let img = btn.parentElement.children[0];
    let crs =img.getAttribute("src")
    notefication.innerHTML+= `<div class="add_note">
    <img src="${crs}" alt="" class="succ_pro_add" height="100px" width="auto">
    <h3>تمت الغاء هذا العنصر هذا العنصر بنجاح الى السلة</h3>
    </div>`;


}
// -------------------------------------------------------


// --------------دالة زيادة الاشعارات--------------
function note_increamnt(){
    note_Conter+=1;
    document.body.style.counterIncrement = 'bellCounter '+note_Conter;
}

// -------------دالة تصفير الاشعارات-------
function note_zero(){
    note_Conter=0;
    document.body.style.counterIncrement = 'bellCounter '+note_Conter;

}



// ---------------دالة الاضافة الى السلة-----------
function addToCart(e){

    let btn = e.target;
    
    let img = btn.parentElement.children[0];
    let name = btn.parentElement.children[2].innerText;
    let price = btn.parentElement.children[3].innerText;

    cart_section.innerHTML+=`<div class="add_to"> <img src="${img.getAttribute("src")}" alt="" class="cart_img" height="100px" width="auto"><h3>${name}</h3>
    <button class="cancel_carting">x</button>
</div>`;

}


// ----------------------------------------------------------------------------------


// -------------------دالة ظهور زر الطلب----------------------
function appendBtn(){
    let orderNowBtn = document.getElementById("orderNow");
    if(add>0){
        orderNowBtn.style.display="block";
    }
    else{
        orderNowBtn.style.display="none";

    }
    orderNowBtn.onclick=function()
{console.log(carting_cancel);}
    
    
}
// ---------------------------------------------------------------

// --------------------------دالة البحث عن العنصر -------------------
let a = document.getElementById("search");
function search_product(e){
    let str =e.target.value;
    for(let i=0;i<product_name.length;i++){
        if(product_name[i].innerText.includes(str)){
            product_name[i].style.display="flex";
        }
        else{
            product_name[i].parentElement.parentElement.style.display="none";
        }
    }

}

// ---------------------------------------------------------------

// --------------------دالة الضغط على البحث لتفعيل البحث------------------
search.addEventListener("keyup",function(e){
    if(e.key === "Enter")
    {search_product(e);}
});
// ------------------------------------------------------------------------------

// -------------------إعادة عرض العناصر بعد إلغاء البحث------------
btn_home.addEventListener("click", function() {
    for (let i = 0; i < product_name.length; i++) {
        product_name[i].parentElement.parentElement.style.display="flex";

    }
});
// ----------------------------------------------------------------------------------


// ------------------زر الغاء العنصر من السلة--------------------

function cancelbtns (){
    carting_cancel = document.querySelectorAll("#cart_e >.add_to>.cancel_carting");
    carting_cancel.forEach(function(btnx){
        btnx.addEventListener("click",function(e){
            btnx.parentElement.style.display="none";
            note_increamnt();
            canceledFromNote(e);
            add--;
           appendBtn();
        });
    });
};
// ----------------------------------------------------

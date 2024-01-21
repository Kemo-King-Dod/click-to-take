
// --- المتغيرات تعريف --


// ----تعريف السكشنات  ----
let homePage =document.getElementById("home_page");
let notefication =document.getElementById("notefication");
let product_section = document.getElementById("products_sec");


// ------------------------------------------------------------
// ----الازرار الرئيسية  ----
let btn_note = document.getElementById("btn_note");
let btn_home = document.getElementById("btn_home");
let btn_products = document.getElementById("btn_products");
// ----------------------------------------------------------------------


// عد الاشعارات وزر الاضافة الى المفضلة
let btn_add_to_cart = document.querySelectorAll(".btn_add_to_cart");
let Conter=0;
// -----------------------------------------------------------------------------

// الايقونات الرئيسية
let fa_bell =document.querySelector('.fa-bell');
let fa_home =document.querySelector('.fa-home');
let fa_shop =document.querySelector('.fa-shop');
let fa_bag_shopping =document.querySelector('.fa-bag-shopping');
let fa_basket_shopping =document.querySelector('.fa-basket-shopping');
let fa_bars = document.querySelector('.fa-bars');
// ----------------------------------------------------------------------


// دالة المرور على كل ازرار الاضافة
btn_add_to_cart.forEach(
    function(btn){
        btn.onclick=addToCart;
        
    }

)
function addToCart(e){
    var adad = 0;
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
function note_increamnt(){
    Conter+=1;
    document.body.style.counterIncrement = 'bellCounter '+Conter;
}
function note_zero(){
    Conter=0;
    document.body.style.counterIncrement = 'bellCounter '+Conter;

}
// ---- الاشعارت صفحة الى الانتقال ----
btn_note.onclick = move_to_note;

function move_to_note()
{
    homePage.style.display="none";
    product_section.style.display="none";

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

// ------ الانتقال الى الصفحة الرئيسية------
function move_to_home()

{   
    product_section.style.display="none";
    homePage.style.display="flex";
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





// --- المتغيرات تعريف --


// ----تعريف السكشنات  ----
const homePage =document.getElementById("home_page");
const notefication =document.getElementById("notefication");
const product_section = document.getElementById("news_sec");
const stores_section = document.getElementById('stories')



// ------------------------------------------------------------


// ----------------------------------------------------------------------

// -------------------------------------------------------------------------


// عد الاشعارات وزر الاضافة الى المفضلة
let btn_add_to_cart = document.querySelectorAll(".btn_add_to_cart");
let add = 0 ;
let carting_cancel;
let note_Conter=0;
// -----------------------------------------------------------------------------



// ----------------------متغيرات  المنتجات-----------------


// الايقونات الرئيسية
let fa_bell =document.querySelector('.fa-bell');
let fa_home =document.querySelector('.fa-home');
let fa_shop =document.querySelector('.fa-shop');
let fa_bag_shopping =document.querySelector('.fa-newspaper');
let fa_bars = document.querySelector('.fa-bars');
// ----------------------------------------------------------------------
 // ------------------------زر الخيارات وخياراته------------------------
let main_bars=document.querySelector("header>.continer >.logo >.btn_bars");
let bars_option = document.getElementById("bars-list");
let close_option = document.getElementById("close-option");

// الازرار الفرعية

// ----------------------دوال مساعدة----------------------
let flex=(e)=>e.style.display="flex";
let hide=(e)=>e.style.display="none";




// --------------------------دالة البحث عن العنصر -------------------
// let a = document.getElementById("search");
// function search_product(e){
//     let str =e.target.value;
//     products.filter(product => product.name.indexOf(str)!==-1);
    
   
//     }



// ---------------------------------------------------------------

// --------------------دالة الضغط على البحث لتفعيل البحث------------------
search.addEventListener("keyup",function(e){
    search_product(e);
});
// ------------------------------------------------------------------------------





// --------------------دالة اخفاء واظهار اسم المستخدم----------------

let user_name=localStorage.getItem("username");

function usercheck(){
    if(user_name != null){
        return true;

    }else{return false;}
}

function registerOrNot(){
    let notRegister = document.querySelector('.notRegister');
    let Register = document.querySelector('.Register');
    if(usercheck()){
        hide(notRegister);
        flex(Register);


    }else{
        flex(notRegister);
        hide(Register);
    }
}
registerOrNot();

function startRegisterBtn(){
    window.location="login.html";
}



// --------------------------دوال الخيارات ----------------
// --------------الفتح-----------------
main_bars.addEventListener("click",function(e){
    flex(bars_option);

});

// ------------------الاغلاق---------------

close_option.addEventListener("click",function(e){
    hide(bars_option);
});
// ------------------------------------------------------------

// ----------------دالة الملف الشخصي----------------
function profile(){
    if(usercheck()){
        window.location="profile.html";
    }else{
        window.location="login.html";
    }
}



function signOut(){
    localStorage.clear();
    window.location="login.html";
  }
  
  
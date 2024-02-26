
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
    let img = btn.parentElement.parentElement.children[0];
    let crs =img.src;
    notefication.innerHTML+= `<div class="add_note">
    <img src="${crs}" alt="" class="succ_pro_add" height="100px" width="auto">
    <h3>تمت الغاء هذا العنصر بنجاح من السلة</h3>
    </div>`;
    console.log(img);


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

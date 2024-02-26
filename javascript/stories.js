let stories= [{
id: 1,
name:"الكرم",
owner:'mohmmed',
postion:"gorda",
image:"../image/محل\ الكرم.jpg",
products:[],
},{
id:2,
name:"الضيافة",
owner:'mohmmed',
postion:"mahdia",
image:"../image/مقهى البركة.jpg",
products:[],
},{
    id :3 ,
    name : "شهرة",
    owner :'mohmmed',
    postion : "mahdia",
image:"../image/محل نور.jpg",
products:[],

},{
id:4,
name:"الطيبات",
owner:"ibrahim",
postion:"el-manfalouty",
image:"../image/محل رد جل.jpg",
products:[],

},{
    id:5,
    name:"سنابل الخير",
    owner:"ibrahim",
    postion:"el-manfalouty",
    image:"../image/محل الاخوة.jpg" ,
    products:[],
},{
    id:6,
    name:"روفان",
    owner:"ibrahim",
    postion:"el-manfalouty",
    image: "../image/محل\ الكرم.jpg" ,
    products:[],
},{
    id:7,
    name:"مول الجديد",
    owner:"ibrahim",
    postion:"el-manfalouty",
    image: "../image/محل\ الكرم.jpg" ,
    products:[],
},{
    id:8,
    name:"مول القرضة",
    owner:"ibrahim",
    postion:"el-manfalouty",
    image:"../image/محل\ الكرم.jpg" ,
    products:[],
}]


 storiesProduct=JSON.parse(localStorage.getItem("products"));
stories.forEach(item => {
    storiesProduct.forEach(item2 => {
        
        if(item.name ==item2.storeName){
            item.products.push(item2);
        
            

            
        }
        
    })
    
})



let stores= document.getElementById("stores");
function getStories(){
    
    stories.forEach(item => {
        stores.innerHTML +=`
        <div id="store" class="store"><img class="storeImg" src="${item.image}" alt="">
        <h3>${item.name}</h3>
        </div>`        
        
    });
}
localStorage.setItem("stories",JSON.stringify(stories));

let stories2=JSON.parse(localStorage.getItem("stories"));

getStories();

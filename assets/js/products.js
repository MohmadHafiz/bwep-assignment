// manually add product details
var products = [
    {
        "product_name" : "Massage Gun",
        "image" : "massage-guns.jpg",
        "type" : "appliances",
        "price" : 5,
    },
    {
        "product_name" : "Rubberband",
        "image" : "rubberband.jpg",
        "type" : "appliances",
        "price" : 10,
    },
    {
        "product_name" : "JellyWorm",
        "image" : "jelllyworm.jpg",
        "type" : "snacks",
        "price" : 10,
    },
    {
        "product_name" : "egg plant",
        "image" : "eggplant.jpg",
        "type" : "vagies",
        "price" : 5,
    },
]

var product_row = 0;
var element_row;

var product_col = 0;
const box = document.getElementById("products-box");
var slider = document.getElementById('price-range');
var price = document.getElementById('max-price');
var search_val = null;
slider.onchange = function(){
    // box.value = slider.value;
    price.innerHTML = "$"+slider.value
}

function cat_click(){
    var cat = document.querySelector('input[name="category"]:checked').value;
    var link = window.location.href.split("?")[0]
    window.location.href = link + "?cat=" + cat ;
}
function name_click(){
    var name = document.querySelector('input[name="productsearch"]').value;
    var link = window.location.href.split("?")[0]
    window.location.href = link + "?name=" + name ;
}
function price_click(){
    var price = document.querySelector('input[name="price-range"]').value;
    var link = window.location.href.split("?")[0]
    window.location.href = link + "?price=" + price ;
}

function reset_search(){
    window.location.href = window.location.href.split("?")[0];
}

function add_product(search){
    box.innerHTML = "<div id=\"product-row-0\" class=\"row d-xxl-flex justify-content-xxl-center align-items-xxl-center\"></div>";
    element_row = document.getElementById("product-row-0");
    // automatically add products into the 
    for (const [key] of Object.entries(products)){
        // console.log(key, val);
        if (product_col == 3){
            product_row += 1
            box.innerHTML += "<div id=\"product-row-"+product_row+"\" class=\"row d-xxl-flex justify-content-xxl-center align-items-xxl-center\"></div>" 
            element_row = document.getElementById("product-row-"+product_row);
            product_col = 0;
        }
        var pn = products[key]["product_name"];
        var i = products[key]["image"];
        var t = products[key]["type"];
        var p = products[key]["price"];

        var template = "<div class=\"col-md-4 col-xxl-3 d-flex justify-content-center align-items-center justify-content-sm-center align-items-sm-center justify-content-xxl-center align-items-xxl-center\" style=\"margin-top: 5px;margin-bottom: 5px;\">";
        template += "    <div class=\"d-flex flex-column product-box\" style=\"width: 100%;height: 300px;background: #ffffff;border-radius: 15px;max-width: 250px;margin: 20px;\">";
        template += "        <div class=\"d-xxl-flex align-items-xxl-start\" style=\"width: 100%;height: 60%;background: url('"+i+"') center / contain no-repeat;\"></div>";
        template += "        <div class=\"d-flex flex-column justify-content-between\" style=\"width: 100%;height: 40%;\">";
        template += "            <div><span class=\"text-nowrap d-block\" style=\"width: 100%;font-size: 20px;padding-left: 10px;\">"+pn+"</span>";
        template += "<span class=\"d-block\" style=\"width: 100%;color: rgba(33,37,41,0.62);padding-left: 10px;\">"+t+"</span></div>";
        template += "<span class=\"fw-bolder\" style=\"text-align: right;padding-right: 10px;font-family: Inter, sans-serif;font-size: 37px;\">$"+p+"</span></div></div></div>";

        // console.log(template);
        if(search == "all"){
            element_row.innerHTML += template;
            product_col += 1;
        }else if(search == "cat"){
            console.log(search_val)
            if(t == search_val){
                element_row.innerHTML += template;
                product_col += 1;
            }
        }else if(search == "name"){
            if(pn.includes(search_val)){
                element_row.innerHTML += template;
                product_col += 1;
            }
        }else if(search == "price"){
            if(p <= parseInt(search_val)){
                element_row.innerHTML += template;
                product_col += 1;
            }
        }


    }   
}

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
// console.log(urlParams.has('cat'));
// console.log(urlParams.has('price'));
// console.log(urlParams.has('name'));
if(urlParams.has('cat') || urlParams.has('price') || urlParams.has('name')){
   
    if(urlParams.has('cat')){
        search_val = urlParams.get('cat')
        add_product("cat");
        
    }
    
    if(urlParams.has('name')){
        search_val = urlParams.get('name')
        add_product("name");
    }
    
    if(urlParams.has('price')){
        search_val = urlParams.get('price')
        document.querySelector('input[name="price-range"]').value = search_val;
        price.innerHTML = "$"+search_val;
        add_product("price");
    }
   }else{
       add_product("all");
   }
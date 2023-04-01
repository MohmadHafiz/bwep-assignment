$("#product-view").empty();
// manually add products details
// 

var product_row = 0;
var element_row;

var product_col = 0;
const box = document.getElementById("products-box");
var search_val = null;

// this is for price filter to set the slider range
// to its price filter value
var slider = document.getElementById('price-range');
var price = document.getElementById('max-price');
slider.onchange = function(){
    // box.value = slider.value;
    price.innerHTML = "$"+slider.value
}

// filter click for category search
function cat_click(){
    var cat = document.querySelector('input[name="category"]:checked').value;
    var link = window.location.href.split("?")[0]
    window.location.href = link + "?cat=" + cat ;
}
// filter click for name search
function name_click(){
    var name = document.querySelector('input[name="productsearch"]').value;
    var link = window.location.href.split("?")[0]
    window.location.href = link + "?name=" + name ;
}

// filter click for price search
function price_click(){
    var price = document.querySelector('input[name="price-range"]').value;
    var link = window.location.href.split("?")[0]
    window.location.href = link + "?price=" + price ;
}

// reset the url
function reset_search(){
    window.location.href = window.location.href.split("?")[0];
}

function show_product(product_name){
    for (const [key] of Object.entries(products)){


        // get the product data
        var pn = products[key]["product_name"];
        var i = products[key]["image"];
        var t = products[key]["type"];
        var p = products[key]["price"];
        var r = products[key]["rate"];
        var d = products[key]["descripton"];

        // find the product
        if(product_name === pn){

            // clear the product view container

            // star template, and add the start based on rate
            var star = "";
            for (let sc = 1; sc <= r; sc++ ){
                star += " <i class=\"fa fa-star\" style=\"color: var(--bs-orange);\"></i> "
            }

            // template for product view
            var template = "<div>";
            template += "<div style=\"height: 400px;width: 100%;background: url('"+i+"') center / contain no-repeat;border: 7px solid var(--bs-gray-800);\"></div>";
            template += "<h1 class=\"fw-bolder\" style=\"margin-top: 20px;margin-bottom: 20px;padding-left: 10px;font-family: Inter, sans-serif; color: var(--bs-orange);\">"+pn+"</h1>";
            template += "<div class=\"d-flex justify-content-start\" style=\"width: 100%;padding-right: 20px;padding-left: 20px;\"><span style=\"color: var(--bs-success);\">Product Rating: "+star+" ("+r+")</span></div>"
            template += "<div class=\"d-flex d-lg-flex justify-content-end justify-content-lg-end\" style=\"padding-right: 20px;padding-left: 20px;\"><span class=\"fw-bolder\" style=\"font-size: 62px;font-family: Roboto, sans-serif;color: var(--bs-gray-700);\">$"+p+"</span></div>";
            template += "<div class=\"d-lg-flex justify-content-lg-end\">";
            template += "<p style=\"text-align: justify;padding-right: 20px;width: 100%;padding-left: 20px;\">"+d+"</p>";
            template += "</div></div>";
            $("#product-view").show();
            $("#products-box").hide();

            // add the template to product view container
            $("#product-view").append(template);
        }
    }
}

// this function are used by the search filter query
// and by add all products
function add_product(search){
    box.innerHTML = "<div id=\"product-row-0\" class=\"row d-xxl-flex justify-content-xxl-center align-items-xxl-center\"></div>";
    element_row = document.getElementById("product-row-0");
    // automatically add products into the 
    for (const [key] of Object.entries(products)){
        
        // this is check if col have 3 products
        // and then if there are 3 products, it
        // will create new row of container and
        // add next 3 products
        if (product_col == 3){
            product_row += 1
            box.innerHTML += "<div id=\"product-row-"+product_row+"\" class=\"row d-xxl-flex justify-content-xxl-center align-items-xxl-center\"></div>" 
            element_row = document.getElementById("product-row-"+product_row);
            product_col = 0;
        }

        // get the product details
        var pn = products[key]["product_name"];
        var i = products[key]["image"];
        var t = products[key]["type"];
        var p = products[key]["price"];

        // product template
        var template = "<div id=\"\" class=\"deProduct col-md-4 col-xxl-3 d-flex justify-content-center align-items-center justify-content-sm-center align-items-sm-center justify-content-xxl-center align-items-xxl-center\" style=\"margin-top: 5px;margin-bottom: 5px;\">";
        template += "    <div class=\"d-flex flex-column product-box\" style=\"width: 100%;height: 300px;background: #ffffff;border-radius: 15px;max-width: 250px;margin: 20px;\">";
        template += "        <div class=\"d-xxl-flex align-items-xxl-start\" style=\"width: 100%;height: 60%;background: url('"+i+"') center / contain no-repeat;\"></div>";
        template += "        <div class=\"d-flex flex-column justify-content-between\" style=\"width: 100%;height: 40%;\">";
        template += "            <div><span id=\"\" class=\"product-name text-nowrap d-block\" style=\"width: 100%;font-size: 20px;padding-left: 10px;\">"+pn+"</span>";
        template += "<span class=\"d-block\" style=\"width: 100%;color: rgba(33,37,41,0.62);padding-left: 10px;\">"+t+"</span></div>";
        template += "<span class=\"fw-bolder\" style=\"text-align: right;padding-right: 10px;font-family: Inter, sans-serif;font-size: 37px;\">$"+p+"</span></div></div></div>";

        // console.log(template);

        // this is to add all the product in the page
        if(search == "all"){
            element_row.innerHTML += template;
            product_col += 1;

        // only view the search filter of category
        }else if(search == "cat"){
            console.log(search_val)
            if(t == search_val){
                element_row.innerHTML += template;
                product_col += 1;
            }
        
        // only view the search filter of name
        }else if(search == "name"){
            if(pn.includes(search_val)){
                element_row.innerHTML += template;
                product_col += 1;
            }
        
        // only view the search filter of price
        }else if(search == "price"){
            if(p <= parseInt(search_val)){
                element_row.innerHTML += template;
                product_col += 1;
            }
        }


    }   
}

// to get query data on url, use URLSearchParams
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

// check for search filer query
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

// check for product view query
}else if(urlParams.has('prod')){
    show_product(urlParams.get('prod'));

// if there's no query then show all product
}else{
       add_product("all");
}

$(document).ready(function() {

    // listen for click for any elements that have .deProduct class on it
    // and find the specific child based on the class/id to get the value
    //  or data from it
    $('.deProduct').click(function() {
      var childElement = $(this).find('.product-name');
      var link = window.location.href.split("?")[0]
      window.location.href = link + "?prod=" + childElement.text() ;
    });
});
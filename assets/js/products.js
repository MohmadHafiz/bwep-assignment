// manually add product details
var products = [
    {
        "product_name" : "Massage Gun aaaaaaa",
        "image" : "massage-guns.jpg",
        "type" : "Appliences",
        "price" : "$5.00",
    },
    {
        "product_name" : "Massage Gun",
        "image" : "massage-guns.jpg",
        "type" : "Appliences",
        "price" : "$5.00",
    },
    {
        "product_name" : "Massage Gun",
        "image" : "massage-guns.jpg",
        "type" : "Appliences",
        "price" : "$5.00",
    },
    {
        "product_name" : "Massage Gun",
        "image" : "massage-guns.jpg",
        "type" : "Appliences",
        "price" : "$5.00",
    },
]

var product_row = 0;
var element_row = document.getElementById("product-row-0");

var product_col = 0;
const box = document.getElementById("products-box");


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
    template += "<span class=\"fw-bolder\" style=\"text-align: right;padding-right: 10px;font-family: Inter, sans-serif;font-size: 37px;\">"+p+"</span></div></div></div>";
    
    // console.log(template);
    element_row.innerHTML += template;
    product_col += 1;
    
}
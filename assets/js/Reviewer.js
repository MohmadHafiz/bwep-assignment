var fusers = [
    {
        "name": "John Wick",
        "user": "BabaYaga69",
        "img": "assets/img/how-to-watch-john-wick.jpg",
    },
    {
        "name": "Andrew Tate",
        "user": "TopG2022",
        "img": "assets/img/d2VQhE.jpg",
    },
    {
        "name": "Johnny Sin",
        "user": "Plumber_Teacher_Fireman",
        "img": "assets/img/EpsQxQHXYAMppiq.jpg",
    },
    {
        "name": "Wicker",
        "user": "WalkAlone",
        "img": "assets/img/justin.jpg",
    },
    {
        "name": "Taty",
        "user": "Floating_Sky",
        "img": "assets/img/Drake.jpg",
    },
    {
        "name": "Malai",
        "user": "Goaty",
        "img": "assets/img/khalidd.jpg",
    },
    {
        "name": "Lebron Jahames",
        "user": "3pointersGoat",
        "img": "assets/img/lebronjames.jpg",
    },
    {
        "name": "SamsudinMelon",
        "user": "Barbers",
        "img": "assets/img/samsuddin.jpg",
    },
    {
        "name": "Perrel Brown",
        "user": "DreamyBull",
        "img": "assets/img/dreamybull.jpg",
    },


]

const comments = [
    "This product is amazing!",
    "I am so happy with this purchase!",
    "This is the best product I've ever used!",
    "Great value for the price!",
    "I would recommend this product to anyone!",
    "This product has exceeded my expectations!",
    "I am very impressed with the quality of this product!",
    "So glad I decided to buy this product!",
    "This product is a game-changer!",
    "This is a must-have product for anyone!",
    "I cannot imagine my life without this product!",
    "Amazing product, I use it every day!",
    "This product is worth every penny!",
    "I love everything about this product!",
    "This is the perfect product for me!",
    "The quality of this product is outstanding!",
    "I can't believe how great this product is!",
    "This product has made my life so much easier!",
    "I will never use another product again!",
    "This is my new favorite product!",
    "I am blown away by this product!",
    "I wish I had bought this product sooner!",
    "Thank you for making such a great product!",
    "I can't say enough good things about this product!",
    "This product is simply fantastic!",
    "I am so impressed with this product!",
    "I would give this product 10 stars if I could!",
    "This product has exceeded all of my expectations!",
    "I don't know how I lived without this product!",
    "This product is the best thing I've ever bought!",
    "I am in love with this product!",
    "This product is a life-saver!",
    "I am so happy I found this product!",
    "This product is the real deal!",
    "I can't believe how much I love this product!",
    "This product is a must-have for everyone!",
    "I am so impressed with the quality of this product!",
    "This product is worth its weight in gold!",
    "I would recommend this product to anyone and everyone!",
    "This product has made my life so much better!",
    "I am so grateful for this amazing product!",
    "This is the best purchase I have ever made!",
    "I can't imagine using any other product now!",
    "This product has changed my life for the better!",
    "I am so happy with my purchase of this product!",
    "This product is exactly what I was looking for!",
    "I am so impressed with the features of this product!",
    "This product is the definition of perfection!",
    "I am so glad I took a chance on this product!",
    "This product is a total game-changer!",
    "I am so impressed with the design of this product!",
    "This product is a must-have for anyone who wants the best!",
  ];
  

var topRated = [

];

function reviewer(){
    var usr = fusers[randomIntFromInterval(0,fusers.length - 1)]
    var cmt = comments[randomIntFromInterval(0,comments.length - 1)]

    return [usr, cmt]
}

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

for (const [key] of Object.entries(products)) {
    var pn = products[key]["product_name"];
    var i = products[key]["image"];
    var t = products[key]["type"];
    var p = products[key]["price"];
    var r = products[key]["rate"];
    var d = products[key]["descripton"];

    if (r >= 4){
        var choose = {
            "pn":pn,
            "i":i,
            "r":r,
        }
        topRated.push(choose);
    }
}


var reviewed = []
$("#topProductSlide").empty();
for (let i = 1; i <= 6;i++){

    var prod;
    while(true){
        var k = randomIntFromInterval(0,topRated.length - 1)
        if(!reviewed.includes(k)){
            reviewed.push(k);
            prod = topRated[k];
            break;
        }
    }
    console.log(prod)

    var star = "";
    for (let sc = 1; sc <= prod.r; sc++ ){
        star += " <i class=\"fa fa-star\" style=\"color: var(--bs-orange);\"></i> "
    }

    if (i == 1){
        var template = "<div class=\"carousel-item active\">"
    }else{
        var template = "<div class=\"carousel-item\">"
    }
    template += "<div class=\"container py-4 py-xl-5\" style=\"margin-top: 20px;margin-bottom: 20px;\">"
    template += "<div class=\"row gy-4 gy-md-0\">"
    template += "<div class=\"col-md-6\">"
    template += "<div class=\"p-xl-5 m-xl-5\"><img class=\"rounded img-fluid w-100 fit-cover\" style=\"min-height: 300px;\" src=\""+prod.i+"\" /></div>"
    template += "</div>"
    template += "<div class=\"col-md-6 text-center text-md-start d-flex d-sm-flex d-md-flex justify-content-center align-items-center justify-content-md-start align-items-md-center justify-content-lg-start align-items-lg-center justify-content-xl-center\">"
    template += "<div style=\"max-width: 350px;width: 100%;\">"
    template += "<h2 class=\"text-uppercase fw-bolder\" style=\"font-family: Inter, sans-serif;\">"+prod.pn+"</h2>"
    template += "<p class=\"my-3\">Product Rate:"+star+"("+prod.r+")</p><a class=\"btn btn-danger btn-lg me-2\" role=\"button\" href=\"products.html?prod="+prod.pn+"\">Check this product out</a>"
    template += "<div class=\"d-flex justify-content-between\" style=\"margin-top: 15px;padding: 10px;background: #ffffff;box-shadow: 6px 7px 14px 3px rgba(33,37,41,0.56);border-radius: 20px;\">"

    var rev = reviewer();

    template += "<div style=\"width: 70px;height: 70px;border-radius: 100%;background: url('"+rev[0]["img"]+"') center / contain no-repeat, var(--bs-gray-dark);\"></div>"
    template += "<div style=\"width: 75%;\"><span class=\"fw-bolder d-block\" style=\"width: 100%;font-family: Roboto, sans-serif;font-size: 20px;color: var(--bs-blue);text-align: left;\">"+rev[0]["name"]+"</span><span class=\"fw-lighter d-block\" style=\"width: 100%;font-family: Roboto, sans-serif;font-size: 15px;color: var(--bs-gray);text-align: left;\">"+rev[0]["user"]+"</span>"
    template += "<p class=\"text-break\" style=\"height: 72px;text-align: justify;\">"+rev[1]+"</p>"
    template += "</div></div></div></div></div></div></div>";


    $("#topProductSlide").append(template);

}
// manually add product details
var products = [
    {
        "product_name" : "Massage Gun",
        "image" : "assets/img/massage-guns.jpg",
        "type" : "appliances",
        "price" : 150,
        "descripton":"A massage gun is a handheld device designed to provide deep tissue massage and muscle relaxation. It typically consists of a handle that contains a motor, and a massage head that vibrates rapidly back and forth. When applied to the body, the massage head provides percussive therapy, delivering rapid bursts of pressure that penetrate deep into the muscle tissue. This can help to loosen tight muscles, improve circulation, and alleviate pain and soreness.",
    },
    {
        "product_name" : "Rubberband",
        "image" : "assets/img/rubberband.jpg",
        "type" : "appliances",
        "price" : 5,
        "descripton":"These colorful rubber bands are an organizational tool with a wide variety of uses. bag of rubber bands contains brightly-colored rubber bands in three of the most popular sizes (#64, #33, and #18). Made with non-latex rubber, they're an ideal choice for use in latex-free homes or businesses. They are a durable, reusable, and color-coded way to organize your business, home office, kitchen, school, or craft room. They are flexible, stretchy, and easily fit around your wrist. The up & up™ half-pound bag of rubber bands in assorted colors and sizes makes a great addition to your office supplies.",
    },
    {
        "product_name" : "JellyWorm",
        "image" : "assets/img/jelllyworm.jpg",
        "type" : "snacks",
        "price" : 10,
        "descripton":"If referring to a gummy candy, a jelly worm is a soft, chewy candy that is usually shaped like a worm and comes in various bright colors and flavors, often including fruit flavors like cherry, apple, and orange. The candy is made by mixing gelatin, sugar, and flavorings, then molding the mixture into the worm shape.",
    },
    {
        "product_name" : "Egg plant",
        "image" : "assets/img/eggplant.jpg",
        "type" : "vegies",
        "price" : 5,
        "descripton":"Eggplants are also known for their nutritional benefits. They are low in calories and fat, but rich in fiber, vitamins, and minerals, such as vitamin C, vitamin K, potassium, and folate. They are also high in antioxidants, which may help reduce inflammation and prevent certain diseases.",
    },
    {
        "product_name" : "Carrots",
        "image" : "assets/img/00071464100162.jpg",
        "type" : "vegies",
        "price" : 5,
        "descripton":"Carrots are an excellent source of vitamins and nutrients, particularly vitamin A, which is important for maintaining good vision and healthy skin. They also contain vitamin K, vitamin C, potassium, fiber, and other beneficial compounds such as beta-carotene, which gives the carrot its characteristic orange color and is a powerful antioxidant.",
    },
    {
        "product_name" : "Waffel Maker",
        "image" : "assets/img/2109990_1.jpg",
        "type" : "appliances",
        "price" : 25,
        "descripton":"Waffle makers come in a variety of sizes and styles, including classic square or round waffle makers, Belgian waffle makers, and heart-shaped waffle makers. Some models may also have removable plates for easy cleaning or adjustable temperature settings for customized cooking.",
    },
    {
        "product_name" : "Cheetos",
        "image" : "assets/img/81aLjv5qZOL.jpg",
        "type" : "snacks",
        "price" : 5,
        "descripton":"Cheetos are made by blending cornmeal with water and cheese flavoring. The mixture is then cooked, shaped into the distinctive Cheetos shape, and fried until crispy. The result is a crunchy, cheesy snack with a distinctive orange color.",
    },
    {
        "product_name" : "Lays packs",
        "image" : "assets/img/81qgHfivofL.jpg",
        "type" : "snacks",
        "price" : 15,
        "descripton":"With pre-portioned bags of your favorite snacks, it's no wonder why Frito-Lay variety packs are a family tradition! whether you're celebrating a big win on the soccer field, taking a family road trip, or thinking about an afternoon snack, Frito-Lay variety packs have everybody's snack needs covered. When you grab a Frito-Lay variety pack, you're ready for anything.",
    },
    {
        "product_name" : "Onions",
        "image" : "assets/img/a69cebd2c91edea95474a8d6f901e769.jpg",
        "type" : "vegies",
        "price" : 7,
        "descripton":"Red Onions are extremely versatile, making them a must-have in your kitchen. The possibilities are endless when it comes to what you can use them for — slice with cucumbers for a Mediterranean-style salad, dice and blend with avocado to whip up your own guac or saute with other veggies for a tasty vegetarian pasta.",
    },
    {
        "product_name" : "Asparagus",
        "image" : "assets/img/asparagus-in-season-2.jpg",
        "type" : "vegies",
        "price" : 7,
        "descripton":" fresh asparagus is a tasty, nutrient packed and easy-to-prepare side dish, ingredient, or snack. This 16oz bag is the perfect size to prepare a an easy, gourmet veggie for your family and friends. Simply cut about an inch off the ends and prepare by grilling, steaming, boiling, sauteing or roasting.",
    },
    {
        "product_name" : "Blender",
        "image" : "assets/img/blenders.jpg",
        "type" : "appliances",
        "price" : 20,
        "descripton":"Explore how easy it is to make healthy, whole-food recipes at home. From appetizers to dessert, the  container is ideal for blending medium batches for small family meals. With the same enduring quality and trusted blending performance that has made Vitamix an icon in the kitchen, the blender offers Variable Speed Control and Pulse to create a wide variety of textures, and a 48-ounce container that fits easily below overhead cabinets.",
    },
    {
        "product_name" : "Broccoli",
        "image" : "assets/img/broccoli.jpg",
        "type" : "vegies",
        "price" : 5,
        "descripton":"It's easy to get your daily dose of green veggies. Prewashed, and trimmed these broccoli florets make a perfect addition to your daily lunch or afternoon snack routine, and they come in a steamer bag for easy prep if you prefer to serve them cooked.",
    },
    {
        "product_name" : "Quaker Oat Bar",
        "image" : "assets/img/chewy-granola-bars---chocolate-chip-primary.jpg",
        "type" : "snacks",
        "price" : 8,
        "descripton":"Give your kids the granola bar they love with 100% whole grains and other delicious ingredients. Nothing gets chocolate lovers cheering like a Chocolate Chip Quaker Chewy Bar. Every chewylicious bite is made with real, mouth-watering chocolate chips the kids will love. Plus each bar contains 9 grams of whole grains and no artificial preservatives, artificial flavors or added colors, making it a great choice for snacking anytime!"
    },
    {
        "product_name" : "Veggie Straws",
        "image" : "assets/img/GUEST_3b242425-1435-4f70-a276-ca6d489e548c.jpg",
        "type" : "snacks",
        "price" : 5,
        "descripton":"Sensible Portions Sea Salt Garden Veggie Straws have the crispy crunch and taste-bud-tantalizing flavor you want in a snack, but without all of the artificial flavors and artificial preservatives that you don't. Our veggie straws are made with potatoes and vegetables grown in a sun-splashed garden, for a veggie-full snack that has 30% less fat than the leading brand of potato chips.* With 38 crunch-tastic straws per serving, they're perfect for a satisfying snack or to add a little crunch to lunch. Our veggie straws are delightfully free of genetically modified ingredients, have 0mg cholesterol and 0g trans fat per serving, and they're also Certified Kosher and gluten-free. At Sensible Portions brand, we believe you shouldn't have to compromise on taste when choosing a better-for-you snack. That's why each of our products are made with delicious, wholesome ingredients that pack fun and flavor, not artificial preservatives, fillers or artificial flavors. It's also why we continue to expand our portfolio to offer you and your family a variety of snacking choices that include non-GMO, gluten-free, vegan and organic options. Great for eating on-the-go or in-between meals, we offer something to keep everyone in your family happy and satisfied. *Our veggie straws contain 7g fat per serving compared to the leading potato chip brand at 10g of fat per serving.",
    },
    {
        "product_name" : "Electric Griddle",
        "image" : "assets/img/GUEST_3c00b964-8074-49c6-82e9-837210154aff.jpg",
        "type" : "appliances",
        "price" : 25,
        "descripton":"You'll be the champion of any meal from breakfast to bedtime with the BLACK+DECKER Serving Griddle. This electric cooking griddle features an adjustable temperature knob so you can find the appropriate heat setting to cook up breakfast staples like pancakes and bacon, or dinnertime favorites like grilled cheese or philly cheesesteak sandwiches. Thanks to the evenly distributed heating coils, the griddle heats up quickly without annoying hot spots.",
    },
    {
        "product_name" : "Toaster",
        "image" : "assets/img/GUEST_7154c9d5-7b7d-41ec-88ac-5001d4069044.jpg",
        "type" : "appliances",
        "price" : 25,
        "descripton":"Keep your morning routine simple, effortless and as delicious as possible with the 2-Slice Toaster from KitchenSmith by BELLA. This sleek chrome and black toaster is an easy piece to mix in with your kitchen appliances, while the dial lets you choose exactly how toasted you want your meal to be. With the extra-wide slots and high-lift lever, you'll be able to toast anything from thick bagels to small English muffins.",
    },
    {
        "product_name" : "Oven",
        "image" : "assets/img/GUEST_933dd677-1c61-4720-8c89-76f95bf814e5.jpg",
        "type" : "appliances",
        "price" : 45,
        "descripton":"The KitchenSmith by BELLA 4 Slice Toaster Oven easily fits 4 slices of bread, a 9' pizza or a casserole. Powered with a 1000 watt heating system and quartz heating elements, this unit takes minimal space but doubles the performance. Suitable for a variety of foods such as pizzas, bagels, frozen food and more. Simply select the temperature and time and have food ready fast.",
    },
    {
        "product_name" : "Pepper & Onion",
        "image" : "assets/img/GUEST_b4fde2c2-2453-47f0-9541-61a6f9ae8501.jpg",
        "type" : "vegies",
        "price" : 10,
        "descripton":"Birds Eye Pepper Stir Fry Mix Frozen Vegetables make it simple and easy for the whole family to enjoy their vegetables. These flash frozen stir fry veggies include sliced red, green and yellow peppers and white onions, specially selected to provide you and your family with quality vegetables. Your family deserves the best when it comes to eating vegetables, that’s why there is nothing artificial added. Enjoy veggie stir fry as a side dish, or incorporate it into your favorite recipes. Cooking the frozen peppers and onions is simple in 7 minutes or less; prepare them on the stovetop or in the microwave. Keep the 14.4 ounce bag of frozen stir fry veggies fresh in the freezer until ready to enjoy. It’s good to eat vegetables, so Birds Eye makes vegetables good to eat.",
    },
    {
        "product_name" : "Hand Mixer",
        "image" : "assets/img/handmixer.jpg",
        "type" : "appliances",
        "price" : 20,
        "descripton":"If you're a serious baker looking for the perfect mixing tool for all your recipes, look no further. With the Hamilton Beach® Professional 7 Speed Hand Mixer with Easy Clean beaters, you'll effortlessly mix ingredients for your recipes. The innovative Easy Clean beaters won’t clog and provide great mixing performance. You'll enjoy ultimate mixing power and control because the professional-grade DC motor powers through the thickest dough and maintains constant speed no matter what you're mixing. When mixing on the lowest speed, you'll have more control with Slow Start™ technology, which reduces messy splatters with starting speed that's nearly half as slow as traditional mixers. The Hamilton Beach Professional 7 Speed Hand Mixer comes with a storage case, 2 Easy Clean beaters, 2 stainless steel wire beaters and a whisk to cover every mixing task. The QuickBurst™ function provides an extra burst of power at every speed and the lockable swivel cord stays out of your way and adjusts for left- and right-handed users. After mixing, the quick-release trigger makes it easy to remove the attachments, which are dishwasher safe for easy cleanup. The attractive black color with chrome bands looks great in any kitchen. Includes 5 year limited warranty.",
    },
    {
        "product_name" : "Oreo",
        "image" : "assets/img/oreo.jpg",
        "type" : "snacks",
        "price" : 6,
        "descripton":"Take a delicious break with OREO Chocolate Sandwich Cookies, America's favorite sandwich cookie for over 100 years. Supremely dunkable, OREO cookies sandwich a rich creme filling between the bold taste of two chocolate wafers--making them milk's favorite cookie. Original OREO chocolate sandwich cookies are great snack foods for serving as a dessert or snack at your next party or for packing for lunch at school or work. You can even mix these sandwich cookies into your favorite dessert recipe for something a little extra special. The resealable OREO packages with easy-pull tab keep chocolate cookies fresh and is great for snacking, sharing, or traveling. Grab a pack of OREO Chocolate Sandwich Cookies so you're ready for any snacking occasion. Cocoa Life: 100% Sustainably Sourced Cocoa; OREO partners with Cocoa Life to help support sustainable cocoa sourcing. Cocoa life works together with farmers to grow cocoa in ways that help protect people and the planet. For more information visit the Cocoa Life website.",
    },
    {
        "product_name" : "Quaker Rice Crisps",
        "image" : "assets/img/QuakerRiceCrisps.jpg",
        "type" : "snacks",
        "price" : 11,
        "descripton":"These sweet, buttery, caramel flavored rice crisps are a low fat snack the whole family will love. Quaker Rice Crisps are made with popped corn and whole grain brown rice and without high fructose corn syrup. Grab a bag or two of this delicious rice confection for a great snack!",
    },
    {
        "product_name" : "Slow Cookers",
        "image" : "assets/img/slowcookers.jpg",
        "type" : "appliances",
        "price" : 24,
        "descripton":"You'll love whipping up your favorite recipes all in one pot using the 4.5-Quart Manual Slow Cooker from Crock-Pot. This manual slow cooker serves five or more people and features low, warm and high settings to accommodate a variety of cooking needs and time constraints. When you're at work or have some extra time on your hands, set the dial to 'low' then turn it down to 'warm' to keep food fresh and hot until dinner is ready to be served. For a quicker process, simply use the 'high' setting that's also perfect for recipes that require rapid cooking times. On top of the convenience a slow cooker offers, cleanup will be a breeze thanks to the removable, dishwasher-safe round stoneware that slides right out of the base to double as a serving dish.",
    },
    {
        "product_name" : "Mix Vegies",
        "image" : "assets/img/vegies.jpg",
        "type" : "vegies",
        "price" : 9,
        "descripton":"Frozen Broccoli, Cauliflower & Carrots from Good & Gather™ makes it easy for you to add some garden goodness to your next meal. Perfect for pairing with pasta, poultry, fish and more, this vegetable medley includes a California-inspired blend of broccoli, cauliflower and carrots for simply delicious flavor. You can easily whip up these veggies in a matter of minutes in the microwave with the steam-in-bag design, and they're an excellent source of vitamin C. Whether you use them as a side dish or add your own twist with rice and seasoning, this frozen vegetable blend is great to have on hand in your freezer for a variety of meals.",
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

function show_product(product_name){
    for (const [key] of Object.entries(products)){
        var pn = products[key]["product_name"];
        var i = products[key]["image"];
        var t = products[key]["type"];
        var p = products[key]["price"];
        var d = products[key]["descripton"];
        if(product_name === pn){
            var template = "<div>";
            template += "<div style=\"height: 400px;width: 100%;background: url('"+i+"') center / contain no-repeat;border: 7px solid var(--bs-gray-800);\"></div>";
            template += "<h1 class=\"fw-bolder\" style=\"margin-top: 20px;margin-bottom: 20px;padding-left: 10px;font-family: Inter, sans-serif;\">"+pn+"</h1>";
            template += "<div class=\"d-flex d-lg-flex justify-content-end justify-content-lg-end\"><span class=\"fw-bolder\" style=\"font-size: 62px;font-family: Roboto, sans-serif;color: var(--bs-gray-700);\">$"+p+"</span></div>";
            template += "<div class=\"d-lg-flex justify-content-lg-end\">";
            template += "<p style=\"text-align: justify;padding-right: 20px;width: 100%;padding-left: 20px;\">"+d+"</p>";
            template += "</div></div>";
            $("#product-view").show();
            $("#products-box").hide();
            $("#product-view").append(template);
        }
    }
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

        var template = "<div id=\"\" class=\"deProduct col-md-4 col-xxl-3 d-flex justify-content-center align-items-center justify-content-sm-center align-items-sm-center justify-content-xxl-center align-items-xxl-center\" style=\"margin-top: 5px;margin-bottom: 5px;\">";
        template += "    <div class=\"d-flex flex-column product-box\" style=\"width: 100%;height: 300px;background: #ffffff;border-radius: 15px;max-width: 250px;margin: 20px;\">";
        template += "        <div class=\"d-xxl-flex align-items-xxl-start\" style=\"width: 100%;height: 60%;background: url('"+i+"') center / contain no-repeat;\"></div>";
        template += "        <div class=\"d-flex flex-column justify-content-between\" style=\"width: 100%;height: 40%;\">";
        template += "            <div><span id=\"\" class=\"product-name text-nowrap d-block\" style=\"width: 100%;font-size: 20px;padding-left: 10px;\">"+pn+"</span>";
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
}else if(urlParams.has('prod')){
    show_product(urlParams.get('prod'));
}else{
       add_product("all");
}

$(document).ready(function() {
    $('.deProduct').click(function() {
      var childElement = $(this).find('.product-name');
    //   console.log(childElement.text());
      var link = window.location.href.split("?")[0]
      window.location.href = link + "?prod=" + childElement.text() ;
    });
  });
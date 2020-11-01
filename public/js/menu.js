var food = [
    {  
    Name: "Butter chicken",
    description: "Includes Chicken and Indian aromated spices",
    price: "$15.99",
    itemNo: 1,
    image: "./images/indian food",
    topPackage: true
},
   
{
    Name: "Salmon salad",
    description: "Includes fine fish with seasonal vegetables",
    price: "$29.99",
    itemNo: 3,
    image: "./images/japanese",
    topPackage: false
},


{
    Name: "Dolmades",
    description: "Includes stuffed grapes with seasonal vegetables",
    price: "$25.99",
    itemNo: 2,
    image: "./images/greek",
    topPackage: false
},

{
    Name: "Pizza",
    description: "Includes cauliflower crust with zero calories tomato basil sauce",
    price: "$19.99",
    itemNo: 4,
    image: "./images/italian",
    topPackage: false
},

{
    Name: "Nachos",
    description: "Includes heated tortilla chips with melted cheese and salsa",
    price: "$18.99",
    itemNo: 5,
    image: "./images/mexican",
    topPackage: false
},

{
    Name: "Paella",
    description: "Includes brown rice and shrimps",
    price: "$9.99",
    itemNo: 6,
    cookingtime: 20,
    image: "./images/spanish",
    topPackage: false
}];

window.onload = function() {

    for (var i = 0; i < food.length; i++){
    var element1 = document.createElement("div");
    element1.setAttribute("id", "menuItemDiv" + i);
    document.querySelector("#menuitems").appendChild(element1);

    var Mimage = document.createElement("img");
    var src = food[i].image + '.jpg';
    Mimage.setAttribute("id", "pic");
    Mimage.setAttribute('src', src);
    Mimage.setAttribute('alt', src);
    document.querySelector("#menuItemDiv" + i).appendChild(Mimage);

    var MName = document.createElement("p");
    MName.setAttribute("id", "element");
    MName.textContent = food[i].Name;
    document.querySelector("#menuItemDiv"  + i).appendChild(MName);

    var MDescription = document.createElement("p");
    MDescription.setAttribute("id", "element");
    MDescription.textContent = "Description: " + food[i].description;
    document.querySelector("#menuItemDiv"  + i).appendChild(MDescription);


    var MPrice = document.createElement("p");
    MPrice.setAttribute("id", "element");
    MPrice.textContent = "Price: " + food[i].price;
    document.querySelector("#menuItemDiv"  + i).appendChild(MPrice);
if(food[i].topPackage == true){
    var Mtop = document.createElement("p");
    Mtop.setAttribute("id", "elementTop");
    Mtop.textContent = "Top Package: ";
    document.querySelector("#menuItemDiv"  + i).appendChild(Mtop);


    var Mtopimg = document.createElement("img");
    var Topsrc = './images/tic.jpeg';
    Mtopimg.setAttribute("id", "topimg");
    Mtopimg.setAttribute('src', Topsrc);
    Mtopimg.setAttribute('alt', Topsrc);
    document.querySelector("#menuItemDiv"  + i).appendChild(Mtopimg);
}
    }
}
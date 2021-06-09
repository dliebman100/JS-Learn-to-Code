"use strict";
let menu = [{
    id: 1,
    item: "Ground Beef Tacos",
    category: "Meal",
    price: 12.29
  },
  {
    id: 2,
    item: "Burger",
    category: "Meal",
    price: 7.29
  },
  {
    id: 3,
    item: "Chicken Salad",
    category: "Meal",
    price: 8.29
  },
  {
    id: 4,
    item: "Ice tea",
    category: "Drink",
    price: 2.19
  },
  {
    id: 5,
    item: "Coke",
    category: "Drink",
    price: 2.29
  },
  {
    id: 6,
    item: "Dr. Pepper",
    category: "Drink",
    price: 2.29
  },
  {
    id: 7,
    item: "Sprite",
    category: "Drink",
    price: 2.29
  },
  {
    id: 8,
    item: "Coke Zero",
    category: "Drink",
    price: 2.29
  },
  {
    id: 9,
    item: "Diet Coke",
    category: "Drink",
    price: 2.29
  },
  {
    id: 10,
    item: "Shrimp Tacos",
    category: "Meal",
    price: 2.29
  },
  {
    id: 11,
    item: "Chix Tacos",
    category: "Meal",
    price: 2.29
  },
  {
    id: 12,
    item: "Birria Tacos",
    category: "Meal",
    price: 2.29
  }
];
//search for the item using indexOf, if carried display price
//if not tell use we don't carry the item
let itemToSearchFor = "Coke";
let catToSearchFor = "Drink";
//loop will iterate thru each menu item to find _____ but will print
//menu price
for (let i = 0; i < menu.length; i++) {
  if (menu[i].item == itemToSearchFor) {
    console.log("The price of " + itemToSearchFor+ " is $" + menu[i].price);
  }
}
console.log("================")
for (let i = 0; i < menu.length; i++) {
  if (menu[i].item.indexOf(itemToSearchFor) >= 0) {
    console.log("Using indexOf to find the price of " + menu[i].item + " is $" + menu[i].price);
    break; //don't wait for the comp to cycle thru all the items so use a break statement
  }
}
console.log("================")
for (let i = 0; i < menu.length; i++) {
  if (menu[i].category == catToSearchFor) {
    console.log("The price of " + menu[i].item + " is $" + menu[i].price);
  }
}
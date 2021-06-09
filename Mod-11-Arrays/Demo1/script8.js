"use strict";
let menu = [
    {
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
        item: "Chicken Tacos",
        category: "Meal",
        price: 12.29
    },
    {
        id: 11,
        item: "Shrimp Tacos",
        category: "Meal",
        price: 14.29
    },
    {
        id: 12,
        item: "Steak Tacos",
        category: "Meal",
        price: 12.29
    }
];
// USE ES6 find() function to show price of item
// Note: find() stops at the FIRST one that matches so it should
//       be used in appropriate "exact match" searches
let itemToSearchFor = "Beer";
//while I'm looking for a menu item such that whose property matches, in this case 'm'
let menuItem = menu.find(m => m.item ==  itemToSearchFor);
if (menuItem != null){
    console.log(menuItem.item + " $" + menuItem.price);
} else {
    console.log(itemToSearchFor + " was not found");
}
//search for the element whose id is specified
let idToSearchFor = 4; //should print the 4th item 
let selectedElement = menu.find(arrayElement => arrayElement.id == 4) //find the element whose id is 4
if (selectedElement != null){
    console.log(selectedElement.item + " $" + selectedElement.price);
} else {
    console.log("id was not found");
}
// USE ES6 filter() function to show all items in a specific category
// Note: filter() returns ALL elements that match so it should
//       be used when you expect the possibility of many matches
let categoryToSearchFor = "Drink";
// USE ES6 filter() function to show all items cost <= some max price
let maxPrice = 8.00;
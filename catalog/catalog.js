//IMPORT
import { products } from "./dataset/dataset.js"; 
import { productsGrid } from "./components/products-grid.js";
import { search } from "./components/search.js";
import { filter } from "./components/filter.js";
import { sort } from "./components/sort.js";

//Render all products when the page first opens
productsGrid.data = products; //Initially, load dataset
document.getElementById("productGrid").innerHTML = productsGrid.renderUI();




//Controls panel
document.getElementById("controls-panel").innerHTML +=  search.renderUI();
search.addEvent();
//
document.getElementById("controls-panel").innerHTML += filter.renderUI();
filter.populateCategoryAndAddEvent();
search.addEvent();
//
document.getElementById("controls-panel").innerHTML += sort.renderUI();
sort.addEvent();
search.addEvent();

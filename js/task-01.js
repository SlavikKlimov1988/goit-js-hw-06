const elem = document.querySelectorAll('.item'); 
console.log( "Number of categories:",elem.length)
const animalTitel = document.querySelector('.animal');
const animalList = document.querySelector('.animalList')
const animalresult = animalList.querySelectorAll('li');
console.log("Category:",animalTitel.textContent)
console.log("Elements:", animalresult.length)
const product = document.querySelector('.product');
const productList = document.querySelector('.productList');
const productResult = productList.querySelectorAll('li');
console.log("Category:",product.textContent)
console.log("Elements:", productResult.length)
const technologies = document.querySelector('.technologies');
const tehcnoList = document.querySelector('.tehcnoList');
const tehcnoResult = tehcnoList.querySelectorAll('li');
console.log("Category:",technologies.textContent)
console.log("Elements:",tehcnoResult.length)
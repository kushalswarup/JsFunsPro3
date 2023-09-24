const sample =require ("./food.json");

//1 list list all the food items

const fooditems = sample.map(x=>x.foodname);
console.log(fooditems);

//2     list all the food items with category vegetables

const vegetables= sample.filter(x=>x.category==="Vegetable")
    
console.log(vegetables);

//3  list all the food items with category fruit

const fruits = sample.filter(x=>x.category ==="Fruit")
console.log(fruits);

//4 list all the food items with category protein

const protein = sample.filter(x=>x.category==="Protein")
console.log(protein);



//5  list all the food items with category nuts



 const nuts = sample.filter(x=>x.category==="Nuts")
 console.log(nuts);



//6  list all the food items with category grains

const grains = sample.filter(x=>x.category==="Grain")
 console.log(grains);


//7  list all the food items with category dairy

const dairy = sample.filter(x=>x.category==="Dairy")
 console.log(dairy);


//8  list all the food items with calorie above 100


const calabhun = sample.filter(x=>x.calorie>100)
 console.log(calabhun);


//9  list all the food items with calorie below 100


const calbelowhun = sample.filter(x=>x.calorie<100);
 console.log(calbelowhun);


//10 list all the food items with highest protien content to lowest 




sample.sort((a,b)=>b.protiens- a.protiens)
const hilopro = sample.filter(x=>x.foodname);
console.log(hilopro);






//11 list all the food items with lowest cab content to highest





sample.sort((a,b)=>a.cab-b.cab);

const lohicab = sample.filter(x=>x.foodname);
console.log(lohicab);
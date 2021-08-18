let budgetForm = document.getElementById("startingBudget");
let startingBudget = document.getElementById("weeklyBudgetAmount");
let initialBudget = document.getElementById("weeklyBudgetTotal");
let newPurchase = document.getElementById("purchases");
let entTotal = 0;
let entTotalDisplay = document.getElementById("entertainment");
let foodTotal = 0;
let foodTotalDisplay = document.getElementById("food");
let clothingTotal = 0;
let clothingTotalDisplay = document.getElementById("clothing");
let billsTotal = 0;
let billsTotalDisplay = document.getElementById("bills");
var budgetAmount;
let remainingBalance;
// let remainingBalance = budgetAmount;
// console.log(budgetAmount);


budgetForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let budgetAmount = parseInt(startingBudget.value);
  initialBudget.innerHTML = budgetAmount;
});

let itemForm = document.getElementById("itemForm");
let purchases = document.getElementById("purchases");
let itemAmount = document.getElementById("itemCost");

itemForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get the new item cost
  let newItemCost = parseFloat(itemAmount.value);
  
  // Get the category of the new item
  let purchaseCategoryElement = document.getElementById("purchases");
  let purchaseCategory = purchaseCategoryElement.value;
  
  // Match the category to the total
  if (purchaseCategory === "entertainment") {
    // the following line is not adding the newItemCost to entTotal
    entTotal += newItemCost;
    entTotalDisplay.innerText = entTotal;    
  } else if (purchaseCategory === "food") {
    foodTotal += newItemCost;
    foodTotalDisplay.innerText = foodTotal;
  } else if (purchaseCategory === "clothing") {
    clothingTotal += newItemCost;
    clothingTotalDisplay.innerText = clothingTotal;
  } else if (purchaseCategory === "bills") {
    billsTotal += newItemCost;
    billsTotalDisplay.innerText = billsTotal;
  }

 

});

 // Subtract newItemCost from weeklyBudgetTotal
  // and display the remaining balance. 
  // budget amount - newItemCost = remainingBalance
  // let updatedBudgetAmount = parseFloat(startingBudget.value);
  // updatedBudgetAmount - newItemCost;
  // console.log(remainingBalance);


  // Current problem: We cannot get a handle on the initial 
  // starting budget number to use as a starting value. We 
  // want to use this number, then subtract each new item 
  // from it to display the remaining balance. Or, use a loop
  // to go over the totals from the four categories and 
  // subtract them from the starting budget value.  
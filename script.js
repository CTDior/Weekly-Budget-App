let budgetForm = document.getElementById("startingBudget");
let startingBudget = document.getElementById("weeklyBudgetAmount");
let initialBudget = document.getElementById("weeklyBudgetTotal");
let newPurchase = document.getElementById("purchases");
let entTotalDisplay = document.getElementById("entertainment");
let foodTotalDisplay = document.getElementById("food");
let clothingTotalDisplay = document.getElementById("clothing");
let billsTotalDisplay = document.getElementById("bills");
let totalExpensesDisplay = document.getElementById("totalExpenses");
let remainingBalanceDisplay = document.getElementById("remainingBalance");
let miscTotalDisplay = document.getElementById("misc");
let entItemList = document.getElementById("entItemList");

let entTotal = 0;
let foodTotal = 0;
let clothingTotal = 0;
let billsTotal = 0;
let totalExpenses = 0;
let remainingBalance = 0;
let budgetTotal = 0;
let miscTotal = 0;
let foodItemList;

budgetForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let budgetAmount = parseInt(startingBudget.value);
  initialBudget.innerHTML = budgetAmount;
  console.log(budgetAmount);
  const data = new FormData(budgetForm);
  let startingTotal = data.get("weeklyBudgetAmount");
  console.log(data);
  budgetTotal = startingTotal;
});
console.log(budgetTotal);

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
    let newItem = document.createElement("li");
    newItem.add(purchases);
    newItem.innerText = purchases;
    entItemList.append(newItem);
  } else if (purchaseCategory === "food") {
    foodTotal += newItemCost;
    foodTotalDisplay.innerText = foodTotal;
  } else if (purchaseCategory === "clothing") {
    clothingTotal += newItemCost;
    clothingTotalDisplay.innerText = clothingTotal;
  } else if (purchaseCategory === "bills") {
    billsTotal += newItemCost;
    billsTotalDisplay.innerText = billsTotal;
  } else if (purchaseCategory === "misc") {
    miscTotal += newItemCost;
    miscTotalDisplay.innerText = miscTotal;
  }

  totalExpenses = clothingTotal + foodTotal + entTotal + billsTotal + miscTotal;
  totalExpensesDisplay.innerText = totalExpenses;
  remainingBalance = budgetTotal - totalExpenses;
  remainingBalanceDisplay.innerText = remainingBalance;
  console.log(budgetTotal);
  console.log(totalExpenses);
  console.log(remainingBalance);
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

// THINGS TO DO
// fix remaining total issue
// add list for expenses
// make it look good in css

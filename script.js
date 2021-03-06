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
// The new ul lists
let entItemList = document.getElementById("entItemList");
let foodItemList = document.getElementById("foodItemList");
let clothingItemList = document.getElementById("clothingItemList");
let billsItemList = document.getElementById("billsItemList");
let miscItemList = document.getElementById("miscItemList");

let newItemName = document.getElementById("itemName");
let newItemNameValue = newItemName.value;

let entTotal = 0;
let foodTotal = 0;
let clothingTotal = 0;
let billsTotal = 0;
let totalExpenses = 0;
let remainingBalance = 0;
let budgetTotal = 0;
let miscTotal = 0;

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

  // Make a new item
  let newItem = document.createElement("li");
  // Put the entered name (from the form) into the new item

  // Match the category to the total
  if (purchaseCategory === "entertainment") {
    entTotal += newItemCost;
    entTotalDisplay.innerText = entTotal;
    newItem.innerText = `${newItemName.value}: $${newItemCost}`;
    entItemList.appendChild(newItem);
  } else if (purchaseCategory === "food") {
    foodTotal += newItemCost;
    foodTotalDisplay.innerText = foodTotal;
    newItem.innerText = `${newItemName.value}: $${newItemCost}`;
    foodItemList.appendChild(newItem);
  } else if (purchaseCategory === "clothing") {
    clothingTotal += newItemCost;
    clothingTotalDisplay.innerText = clothingTotal;
    newItem.innerText = `${newItemName.value}: $${newItemCost}`;
    clothingItemList.appendChild(newItem);
  } else if (purchaseCategory === "bills") {
    billsTotal += newItemCost;
    billsTotalDisplay.innerText = billsTotal;
    newItem.innerText = `${newItemName.value}: $${newItemCost}`;
    billsItemList.appendChild(newItem);
  } else if (purchaseCategory === "misc") {
    miscTotal += newItemCost;
    miscTotalDisplay.innerText = miscTotal;
    newItem.innerText = `${newItemName.value}: $${newItemCost}`;
    miscItemList.appendChild(newItem);
  }

  totalExpenses = clothingTotal + foodTotal + entTotal + billsTotal + miscTotal;
  totalExpensesDisplay.innerText = totalExpenses;
  remainingBalance = budgetTotal - totalExpenses;
  remainingBalanceDisplay.innerText = remainingBalance;
  let progressDoneElement = document.querySelector(".progress-done");
  let expenseBar = (totalExpenses / budgetTotal) * 100;
  progressDoneElement.style.width = expenseBar + "%";

  if (remainingBalance <= 0) {
    alert("Purchasing this item will put you over budget!");
    let audio = new Audio("I dont think you have the facilities, Big Man.mp3");
    audio.play();
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

// THINGS TO DO
// fix remaining total issue
// add list for expenses
// make it look good in css

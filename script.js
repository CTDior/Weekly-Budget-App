const budgetForm = document.getElementById("startingBudget");
const startingBudget = document.getElementById("weeklyBudgetAmount");
const initialBudget = document.getElementById("weeklyBudgetTotal");
const newPurchase = document.getElementById("purchases");
const entTotal = parseFloat(document.getElementById("entertainment").innerHTML);
const foodTotal = document.getElementById("food");
const clothingTotal = document.getElementById("clothing");
const billsTotal = document.getElementById("bills");

budgetForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const budgetAmount = parseInt(startingBudget.value);
  console.log(budgetAmount);
  initialBudget.innerHTML = budgetAmount;
});

const itemForm = document.getElementById("itemForm");
const purchases = document.getElementById("purchases");
const itemAmount = document.getElementById("itemCost");

itemForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get the new item cost
  const newItemCost = parseFloat(itemAmount.value);
  console.log(typeof newItemCost);
  // Get the category of the new item
  const purchaseCategoryElement = document.getElementById("purchases");
  const purchaseCategory = purchaseCategoryElement.value;
  console.log(purchaseCategory);
  // Match the category to the total
  if (purchaseCategory === "entertainment") {
    console.log(entTotal);
    // the following line is not adding the newItemCost to entTotal
    entTotal.innerHTML += newItemCost;
    console.log(entTotal);
    console.log(newItemCost);
    console.log(newPurchase);
  } else if (purchaseCategory === "food") {
    foodTotal.innerHTML += newItemCost;
  } else if (purchaseCategory === "clothing") {
    clothingTotal.innerHTML += newItemCost;
  } else if (purchaseCategory === "bills") {
    billsTotal.innerHTML += newItemCost;
  }
});

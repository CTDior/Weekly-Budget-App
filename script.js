const budgetForm = document.getElementById("startingBudget");
const startingBudget = document.getElementById("weeklyBudgetAmount");
budgetForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const budgetAmount = parseInt(startingBudget.value);
  console.log(budgetAmount);
});

const itemForm = document.getElementById("itemForm");
const purchases = document.getElementById("purchases");
const itemAmount = document.getElementById("itemCost");

itemForm.addEventListener("submit", (e) => {
  e.preventDefault();
  
  // Get the new item cost 
  const newItemCost = parseInt(itemAmount.value);
  console.log(newItemCost);

  // Get the category of the new item
  const purchaseCategoryElement = document.getElementById("purchases");
  const purchaseCategory = purchaseCategoryElement.value;
  console.log(purchaseCategory)

});

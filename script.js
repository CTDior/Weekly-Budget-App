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
});

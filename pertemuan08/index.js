const account = {
    name: "John",
    expenses: []
};

function addExpenses(description, ammount) {
    account.expenses.push({
        description: description,
        ammount: ammount
    });
}

function getAccountSummary() {
    let total = 0;
    let totalExpense = account.expenses.forEach(expense => {
        total += expense.ammount;
    });
    console.log(`Total pengeluaran ${account.name} adalah Rp.${total}`);
}

addExpenses("Beli Makanan", 15000);
addExpenses("Ongkos", 30000);
getAccountSummary();

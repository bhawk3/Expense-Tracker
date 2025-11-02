//Save data to localStorage

const table = document.getElementById("table-body");
const categorySortBtn = document.getElementById("category-btn");
const amountSortBtn = document.getElementById("amount-btn");
const dateSortBtn = document.getElementById("date-btn");

const expenses = [
	{ id: 1, name: "Groceries", amount: 54.23, category: "Food", date: "10-10-2025" },
	{ id: 2, name: "Netflix Subscription", amount: 15.99, category: "Entertainment", date: "10-12-2025" },
	{ id: 3, name: "Gas", amount: 42.5, category: "Transportation", date: "08-10-2025" },
	{ id: 4, name: "Coffee with friends", amount: 8.75, category: "Food", date: "09-10-2025" },
	{ id: 5, name: "Electric Bill", amount: 76.8, category: "Utilities", date: "05-10-2025" },
	{ id: 6, name: "Movie Tickets", amount: 27.0, category: "Entertainment", date: "10-14-2025" },
	{ id: 7, name: "Gym Membership", amount: 45.0, category: "Health", date: "01-10-2025" },
	{ id: 8, name: "Car Insurance", amount: 120.0, category: "Transportation", date: "03-10-2025" },
	{ id: 9, name: "Amazon Order", amount: 63.47, category: "Shopping", date: "10-11-2025" },
	{ id: 10, name: "Phone Bill", amount: 60.0, category: "Utilities", date: "10-07-2025" },
];

//localStorage.setItem("expenses", JSON.stringify(expenses));
//let storedExpenses = JSON.parse(localStorage.getItem("expenses"));

if (!localStorage.getItem("expenses")) {
	localStorage.setItem("expenses", JSON.stringify(expenses));
}

function getExpenses() {
	return JSON.parse(localStorage.getItem("expenses"));
}

//Display data to the DOM
function renderTable(data) {
	table.innerHTML = "";
	data.forEach((item) => {
		table.innerHTML += `
    <tr>
        <td>${item.category}</td>
        <td>${item.name}</td>
        <td>${item.amount}</td>
        <td>${item.date}</td>
    </tr>`;
	});
}

renderTable(getExpenses());

//Sort data by amount from highest to lowest
amountSortBtn.addEventListener("click", () => {
	//	localStorage.setItem("expenses", JSON.stringify(storedExpenses));
	let sorted = getExpenses().sort((a, b) => a.amount - b.amount);
	//localStorage.setItem("expenses", JSON.stringify(expenses));
	localStorage.setItem("expenses", JSON.stringify(sorted));
	renderTable(sorted);
});

//Sort data by category
categorySortBtn.addEventListener("click", () => {
	let sorted = getExpenses().sort((a, b) => a.category.localeCompare(b.category));
	localStorage.setItem("expenses", JSON.stringify(sorted));
	renderTable(sorted);
});

//Sort data by date
dateSortBtn.addEventListener("click", () => {
	let sorted = getExpenses().sort((a, b) => new Date(a.date) - new Date(b.date));
	localStorage.setItem("expenses", JSON.stringify(sorted));
	renderTable(sorted);
});

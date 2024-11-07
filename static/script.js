document.addEventListener("DOMContentLoaded", () => {
    const addItemForm = document.getElementById("addItemForm");
    const addPurchaseForm = document.getElementById("addPurchaseForm");
    const addSalesForm = document.getElementById("addSalesForm");
    const viewReportButton = document.getElementById("viewReportButton");
    const itemsList = document.getElementById("itemsList");
    const reportDiv = document.getElementById("report");

    // Fetch and display items
    function fetchItems() {
        fetch("/items")
            .then(response => response.json())
            .then(data => {
                itemsList.innerHTML = data.map(item => `
                    <div class="item">
                        <p><strong>ID:</strong> ${item.item_id}</p>
                        <p><strong>Name:</strong> ${item.item_name}</p>
                        <p><strong>Quantity:</strong> ${item.quantity}</p>
                        <p><strong>Price:</strong> Rs. ${item.price}</p>
                    </div>
                `).join("");
            });
    }

    // Fetch and display report
    function fetchReport() {
        fetch("/report")
            .then(response => response.json())
            .then(data => {
                reportDiv.innerHTML = `
                    <h3>Company Report</h3>
                    <p><strong>Total Items:</strong> ${data.find(item => item.description === "Total Items").value}</p>
                    <p><strong>Total Purchases:</strong> ${data.find(item => item.description === "Total Purchases").value}</p>
                    <p><strong>Current Cash Balance:</strong> Rs. ${data.find(item => item.description === "Current Cash Balance").value}</p>
                `;
            });
    }

    // Handle add item form submission
    addItemForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const formData = {
            item_id: addItemForm.item_id.value,
            item_name: addItemForm.item_name.value,
            quantity: parseInt(addItemForm.quantity.value),
            price: parseFloat(addItemForm.price.value)
        };

        fetch("/item", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
            fetchItems();  // Refresh items list
            fetchReport(); // Refresh report to reflect any changes
        });
    });

    // Handle add purchase form submission
    addPurchaseForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const formData = {
            purchase_id: addPurchaseForm.purchase_id.value,
            item_id: addPurchaseForm.purchase_item_id.value,
            rate: parseFloat(addPurchaseForm.rate.value),
            qty: parseInt(addPurchaseForm.qty.value)
        };

        fetch("/purchase", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                alert(data.error);
            } else {
                alert(data.message);
                fetchReport(); // Update report to reflect new cash balance
            }
        });
    });

    // Handle add sales form submission
    addSalesForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const formData = {
            sales_id: addSalesForm.sales_id.value,
            item_id: addSalesForm.sales_item_id.value,
            rate: parseFloat(addSalesForm.rate.value),
            qty: parseInt(addSalesForm.qty.value)
        };

        fetch("/sales", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                alert(data.error);
            } else {
                alert(data.message);
                fetchReport(); // Update report to reflect new cash balance
            }
        });
    });

    // Event listener to fetch report when the button is clicked
    viewReportButton.addEventListener("click", () => {
        fetchReport(); // Fetch and display the report
    });

    // Initial fetch of items and report on page load
    fetchItems();
    fetchReport();
});

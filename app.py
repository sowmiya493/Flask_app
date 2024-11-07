from flask import Flask, render_template, jsonify, request

app = Flask(__name__)

# Initial cash balance
company = {
    "company_name": "Namma Kadai",
    "cash_balance": 10000  # Initial cash balance of Rs. 10,000
}

# Sample data for items and purchases (for demonstration)
items = []
purchases = []

@app.route("/user")
def index():
    return render_template("index.html")

@app.route("/item", methods=["POST"])
def add_item():
    data = request.json
    items.append({
        "item_id": data["item_id"],
        "item_name": data["item_name"],
        "quantity": data["quantity"],
        "price": data["price"]
    })
    return jsonify({"message": "Item added successfully!"}), 201

@app.route("/items", methods=["GET"])
def get_items():
    return jsonify(items)

@app.route("/purchase", methods=["POST"])
def add_purchase():
    data = request.json
    # Subtract the amount from cash balance
    purchase_amount = data["rate"] * data["qty"]
    company["cash_balance"] -= purchase_amount  # Update cash balance
    
    purchases.append({
        "purchase_id": data["purchase_id"],
        "item_id": data["item_id"],
        "rate": data["rate"],
        "qty": data["qty"],
        "amount": purchase_amount
    })
    
    return jsonify({"message": "Purchase recorded successfully!"}), 201

@app.route("/sales", methods=["POST"])
def add_sales():
    data = request.json
    # Add the sales amount to cash balance
    sales_amount = data["rate"] * data["qty"]
    company["cash_balance"] += sales_amount  # Update cash balance
    
    purchases.append({
        "sales_id": data["sales_id"],
        "item_id": data["item_id"],
        "rate": data["rate"],
        "qty": data["qty"],
        "amount": sales_amount
    })
    
    return jsonify({"message": "Sale recorded successfully!"}), 201

@app.route("/report", methods=["GET"])
def view_report():
    report_data = [
        {"description": "Total Items", "value": len(items)},
        {"description": "Total Purchases", "value": len(purchases)},
        {"description": "Current Cash Balance", "value": company["cash_balance"]}  # Display current cash balance
    ]
    return jsonify(report_data)

if __name__ == "__main__":
    app.run(debug=True)

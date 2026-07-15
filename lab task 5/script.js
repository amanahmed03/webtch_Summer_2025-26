function getQuantity() {
    const quantity = document.getElementById("quantity").value;
 
    if (quantity <= 0) {
        document.getElementById("quantityerror").innerHTML = "Enter valid Quantity";
        document.getElementById("quantityerror").style.color = "red";
    } else {
        document.getElementById("quantityerror").innerHTML = "";
    }
 
    calculateAmount();
}
 
function calculateAmount() {
    const price = document.getElementById("price").value;
    const quantity = document.getElementById("quantity").value;
 
    if (price > 0 && quantity > 0) {
        document.getElementById("amount").value = price * quantity;
        document.getElementById("amount").style.display = "block";
        document.getElementById("submit").style.display = "block";
    } else {
        document.getElementById("amount").value = "";
        document.getElementById("amount").style.display = "none";
        document.getElementById("submit").style.display = "none";
    }
}
 
function collectData() {
    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;
 
    if (!name) {
        document.getElementById("nameerror").innerHTML = "Device name is Needed!!!";
        document.getElementById("nameerror").style.color = "red";
    } else {
        document.getElementById("nameerror").innerHTML = "";
    }
 
    if (!price || price <= 0) {
        document.getElementById("priceerror").innerHTML = "Device Price is Needed!!!";
        document.getElementById("priceerror").style.color = "red";
    } else {
        document.getElementById("priceerror").innerHTML = "";
    }
 
    return false;
}
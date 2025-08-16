let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(productName, price) {
    let existing = cart.find(item => item.name === productName);
    if (existing) {
        existing.quantity++;
    } else {
        cart.push({ name: productName, price: price, quantity: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${productName} added to cart!`);
}

function displayCart() {
    let tableBody = document.querySelector("#cart-table tbody");
    let total = 0;
    tableBody.innerHTML = "";
    cart.forEach((item, index) => {
        let itemTotal = item.price * item.quantity;
        total += itemTotal;
        tableBody.innerHTML += `
            <tr>
                <td>${item.name}</td>
                <td>₹${item.price}</td>
                <td>${item.quantity}</td>
                <td>₹${itemTotal}</td>
                <td><button onclick="removeFromCart(${index})">❌</button></td>
            </tr>
        `;
    });
    document.getElementById("cart-total").textContent = `Total: ₹${total}`;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}

if (window.location.pathname.includes("cart.html")) {
    displayCart();
}

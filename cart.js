<!-- HTML -->
<button class="add-to-cart" data-name="White T-shirt" data-size="M" data-price="500">Add to Cart</button>

<script>
    // JavaScript
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItems = [];

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productName = button.dataset.name;
            const productSize = button.dataset.size;
            const productPrice = parseFloat(button.dataset.price);
            const productQuantity = 1; // You can add quantity selection functionality later if needed

            const item = {
                name: productName,
                size: productSize,
                price: productPrice,
                quantity: productQuantity
            };

            cartItems.push(item);
            updateCartDisplay();
        });
    });

    function updateCartDisplay() {
        const cartElement = document.querySelector('.cart-items');
        cartElement.innerHTML = ''; // Clear previous content

        let total = 0;

        cartItems.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('cart-item');

            const itemDetails = `
                <div class="item-details">
                    <h3>${item.name}</h3>
                    <p>Size: ${item.size}</p>
                    <p>Quantity: ${item.quantity}</p>
                    <p>Price: ₹${item.price}</p>
                </div>
            `;

            itemElement.innerHTML = itemDetails;
            cartElement.appendChild(itemElement);

            total += item.price * item.quantity;
        });

        const totalElement = document.querySelector('.cart-total h3');
        totalElement.textContent = `Total: ₹${total}`;
    }
</script>

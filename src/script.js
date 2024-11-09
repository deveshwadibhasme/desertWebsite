let desertWrapper = document.querySelector('.desert-wrapper')
let cart = []  // Initialize an empty array to store the desert items added to the cart.  // This array will be used to display the cart items.  // addToCart function is
let cartItem = document.querySelector('.cart-items')


fetch('data.json').then((res) => res.json()).then((data) => {    // create desert cards based on the fetched data   // desert-wrapper is the parent element for all desert cards. 
    data.forEach(desert => {
        const div = document.createElement('div')
        div.classList.add('desert');
        div.innerHTML = ` 
                <div class="desert-image">
                    <img src="${desert.image.desktop}" alt="${(desert.name).toLowerCase()}">
                </div>
                <button class="add-to-cart" onclick="addToCart('${desert.image.tablet}',
                '${desert.category}',
                '${desert.name}',
                '${desert.price}')">
                <img src="/assets/images/icon-add-to-cart.svg" alt="">
                Add to Chart
                </button>
                <div class="catagory">${desert.category}</div>
                <div class="desert-name">${desert.name}</div>
                <div class="price">$${desert.price}</div>`
        desertWrapper.appendChild(div)
    });
})


let count = 0
function addToCart(image, category, name, price) {
    // Add the desert to the cart array
    cart.push({
        image: image,
        category: category,
        name: name,
        price: price
    });
    let data = {
        image: image,
        category: category,
        name: name,
        price: price
    }
    let innerCount = false;
    if( (cart[this.length].image === JSON.stringify(data.image)) ){
        innerCount = true;
    }   
    const cartItemAdded = document.createElement('div')
    cartItemAdded.classList.add('cart-item');
    cartItemAdded.innerHTML = ` 
            <div class="desert-image">
                <img src="${data.image}" alt="${(data.name).toLowerCase()}">
            </div>
            <div>
            <div class="catagory">${data.category}</div>
            <div class="desert-name">${data.name}</div>
            <div class="price">$${data.price}</div>
            <span>${count}</span> 
            <button class = "remove" >Remove</button>
            <div>`
    let removeButton = cartItemAdded.querySelectorAll('.remove')
    removeButton.forEach(button => {
        button.addEventListener('click', function () {
            cartItemAdded.remove()
        })
    })
    cartItem.appendChild(cartItemAdded) // Display the cart items in the cart-items div
}




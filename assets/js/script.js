const productDetails = [
    {
        title: "Arcane T-Shirt",
        price: "₱750",
        description: "A comfortable and stylish Arcane T-Shirt for fans.",
        imgSrc: "./assets/img/product1.png"
    },
    {
        title: "League Hoodie",
        price: "₱1,800",
        description: "A warm League hoodie perfect for cooler days.",
        imgSrc: "./assets/img/product2.png"
    },
    {
        title: "VALORANT Champions 2024 // Supernova Tee",
        price: "₱2,170",
        description: "A special edition tee for the VALORANT champions 2024.",
        imgSrc: "./assets/img/product3.png"
    },
    {
        title: "Teamfight Tactics 5 Year Bash Tee",
        price: "₱1,200",
        description: "A commemorative Teamfight Tactics tee.",
        imgSrc: "./assets/img/product4.png"
    },
    {
        title: "Arcane T-Shirt (Variant)",
        price: "₱750",
        description: "A comfortable and stylish Arcane T-Shirt for fans.",
        imgSrc: "./assets/img/product1.png"
    },
    {
        title: "League Hoodie (Variant)",
        price: "₱1,800",
        description: "A warm League hoodie perfect for cooler days.",
        imgSrc: "./assets/img/product2.png"
    },
    {
        title: "VALORANT Champions 2024 Tee (Variant)",
        price: "₱2,170",
        description: "A special edition tee for the VALORANT champions 2024.",
        imgSrc: "./assets/img/product3.png"
    },
    {
        title: "Teamfight Tactics Tee (Variant)",
        price: "₱1,200",
        description: "A commemorative Teamfight Tactics tee.",
        imgSrc: "./assets/img/product4.png"
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-link");
    const modals = document.querySelectorAll(".modal");
    const closeButtons = document.querySelectorAll(".close-modal");


    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("data-target");
            const modal = document.getElementById(targetId);
            if (modal) {
                modal.classList.remove("hidden");
            }
        });
    });


    closeButtons.forEach(button => {
        button.addEventListener("click", () => {
            modals.forEach(modal => {
                modal.classList.add("hidden");
            });
        });
    });


    modals.forEach(modal => {
        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.classList.add("hidden");
            }
        });
    });
});


function openModal(productIndex) {
    const product = productDetails[productIndex - 1];
    document.getElementById("modalImage").src = product.imgSrc;
    document.getElementById("modalPrice").innerText = product.price;
    document.getElementById("modalContent").innerHTML = `
        <h2 class="text-3xl font-bold mb-4">${product.title}</h2>
        <img src="${product.imgSrc}" alt="Product Image" class="w-full mb-4 rounded-lg">
        <p class="text-xl text-gray-900 mb-4">${product.price}</p>
        <p class="text-gray-600 mb-4">${product.description}</p>
        <p class="font-semibold">Size: Small</p>
        <p class="font-semibold">Quantity: 1</p>

        <button class="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 mt-4">Add to Cart</button>
    `;
    document.getElementById("productModal").classList.remove("hidden");
}


function closeModal() {
    document.getElementById("productModal").classList.add("hidden");
}

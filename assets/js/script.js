document.addEventListener("DOMContentLoaded", () => {
    const productDetails = [
        {
            title: "ARCANE LEAGUE OF LEGENDS UT Graphic T-Shirt",
            price: "₱1,999",
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
        }
    ];

    const modals = document.querySelectorAll(".product-card");
    const closeButton = document.querySelector(".close-modal");
    const productModal = document.getElementById("productModal");
    const modalImage = document.getElementById("modalImage");
    const modalContent = document.getElementById("modalContent");
    const modalPrice = document.getElementById("modalPrice");

    modals.forEach((modal, index) => {
        modal.addEventListener("click", (e) => {
            e.preventDefault();
            openModal(index);
        });
    });

    closeButton.addEventListener("click", closeModal);

    productModal.addEventListener("click", (e) => {
        if (e.target === productModal) {
            closeModal();
        }
    });

    function openModal(index) {
        const product = productDetails[index];
        modalImage.src = product.imgSrc;
        modalPrice.innerText = product.price;
        modalContent.innerHTML = `
            <h2 class="text-3xl font-bold mb-4">${product.title}</h2>
            <p class="text-gray-600 mb-4">${product.description}</p>
            <button class="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 mt-4">Add to Cart</button>
        `;
        productModal.classList.remove("hidden");
    }

    function closeModal() {
        productModal.classList.add("hidden");
    }
});

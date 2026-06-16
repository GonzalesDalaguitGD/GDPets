import { auth, db } from "../firebase/firebase.js";

import { 
  doc, 
  getDoc 
} from "https://www.gstatic.com/firebasejs/12.14.0/firebase-firestore.js";

document.addEventListener("DOMContentLoaded", async () => {

    // ======================
    // FIREBASE ADMIN CHECK
    // ======================

    const user = auth.currentUser;


    if (!user) {

        window.location.href = "../Admin/login.html";
        return;

    }


    const adminRef = doc(
        db,
        "admins",
        user.uid
    );


    const adminSnap = await getDoc(adminRef);



    if (!adminSnap.exists()) {

        console.log("NOT ADMIN");

        window.location.href =
            "../Main/dashboard.html";

        return;
    }


    console.log("ADMIN VERIFIED");

    let products = [];

    const addBtn = document.getElementById("addBtn");
    const modal = document.getElementById("productModal");
    const closeBtn = document.getElementById("closeModal");
    const saveBtn = document.getElementById("saveProduct");
    const table = document.getElementById("productTable");

    // ❗ Safety checks (prevents your error)
    if (!addBtn || !modal || !closeBtn || !saveBtn || !table) {
        console.error("❌ Missing HTML elements. Check IDs:");
        console.log({ addBtn, modal, closeBtn, saveBtn, table });
        return;
    }

    // Open modal
    addBtn.addEventListener("click", () => {
        modal.style.display = "block";
    });

    // Close modal
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Save product
    saveBtn.addEventListener("click", () => {
        

    let name = document.getElementById("name").value;
    let category = document.getElementById("category").value;
    let price = document.getElementById("price").value;
    let stock = document.getElementById("stock").value;

    const imageFile = document.getElementById("productImage").files[0];
    console.log(imageFile);

    if (!name || !category || !price || !stock || !imageFile) {
        alert("Please complete all fields.");
        return;
    }

    const reader = new FileReader();

    reader.onload = function(e){

        let product = {
            id: Date.now(),
            image: e.target.result,
            name,
            category,
            price,
            stock
        };

        products.push(product);

        renderTable();

        document.getElementById("name").value = "";
        document.getElementById("category").value = "";
        document.getElementById("price").value = "";
        document.getElementById("stock").value = "";
        document.getElementById("productImage").value = "";

        modal.style.display = "none";
    };

    reader.readAsDataURL(imageFile);
});

    // Render table
   function renderTable(productList = products) {

    table.innerHTML = "";

    productList.forEach((p) => {

        let row = document.createElement("tr");

        row.innerHTML = `
            <td>
                <img src="${p.image}" class="product-img">
            </td>
            <td>${p.name}</td>
            <td>${p.category}</td>
            <td>₱${p.price}</td>
            <td>${p.stock}</td>
            <td>
                <button onclick="deleteProduct(${p.id})">Delete</button>
            </td>
        `;

        table.appendChild(row);
    });
}

window.filterProducts = function(category) {

    if (category === "All") {
        renderTable();
        return;
    }

    const filtered = products.filter(
        p => p.category === category
    );

    renderTable(filtered);
};

    // delete function must be global
    window.deleteProduct = function (id) {
        products = products.filter(p => p.id !== id);
        renderTable();
    };

});












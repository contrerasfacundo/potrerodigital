const flavors = ["Chocolate", "Vainilla", "Fresa", "Mango"];
let currentFlavorIndex = 0;
const flavorElement = document.getElementById("flavor");
const changeFlavorButton = document.getElementById("change-flavor");

changeFlavorButton.addEventListener("click", () => {
    currentFlavorIndex = (currentFlavorIndex + 1) % flavors.length;
    flavorElement.textContent = "Sabor: " + flavors[currentFlavorIndex];
})

// Smoothie class
class Smoothie {
    constructor(fruit, ingredients, sweetness) {
        this.fruit = fruit;
        this.ingredients = ingredients;
        this.sweetness = sweetness;
    }

    getDescription() {
        return `Your custom smoothie: ${this.fruit} with ${this.ingredients.join(', ')}, sweetness level ${this.sweetness}.`;
    }

    calculatePrice() {
        let totalPrice = 0;
        for (const ingredient of this.ingredients) {
            const price = parseFloat(document.querySelector(`input[value="${ingredient}"]`).dataset.price);
            totalPrice += price;
        }
        return totalPrice;
    }

    getSmoothieImage() {
        return `images/${this.fruit}strawberry.jpg`;
    }
}

// Event listener for the 'Order' button
document.getElementById("orderButton").addEventListener("click", function () {
    const fruit = document.getElementById("fruit").value;
    const ingredients = []; // Collect selected ingredients
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    checkboxes.forEach((checkbox) => {
        ingredients.push(checkbox.value);
    });
    const sweetness = document.getElementById("sweetness").value;

    // Create a new Smoothie object
    const smoothie = new Smoothie(fruit, ingredients, sweetness);

    // Display smoothie details and bill
    const smoothieOutput = document.getElementById("smoothieOutput");
    const smoothieImageDiv = document.getElementById("smoothieImage");
    const billDiv = document.getElementById("bill");

    smoothieImageDiv.innerHTML = `<img src="${smoothie.getSmoothieImage()}" alt="Smoothie" width="200">`;
    const bill = smoothie.calculatePrice().toFixed(2);
    billDiv.textContent = `Total Bill: $${bill}`;
    smoothieOutput.textContent = smoothie.getDescription();
});

// Event listener for the theme selector
document.getElementById("theme").addEventListener("change", function () {
    const selectedTheme = this.value;
    document.body.className = selectedTheme;
});

// Event listener for the 'Surprise Me' button
document.getElementById("surpriseButton").addEventListener("click", function () {
    const fruitOptions = document.getElementById("fruit").options;
    const randomIndex = Math.floor(Math.random() * fruitOptions.length);
    fruitOptions[randomIndex].selected = true;
});

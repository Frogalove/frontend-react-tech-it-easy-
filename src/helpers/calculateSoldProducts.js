// Hoeveel tv's zijn er al verkocht? Schrijf een helperfunctie die dit berekent. Log de uitkomst in de console.
function calculateSoldProducts(productArray) {
    let total = 0;

    for (let i = 0; i < productArray.length; i++) {
        total = total + productArray[i].sold;
    }

    return total;
}

export default calculateSoldProducts;
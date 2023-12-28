// Hoeveel tv's heeft Tech It Easy in totaal ingekocht? Schrijf een helperfunctie die dit berekent. Log de uitkomst in de console.
function calculateInitialStock(productArray) {
    let total = 0;

    for (let i = 0; i < productArray.length; i++) {
        total = total + productArray[i].originalStock;
    }

    return total;
}

export default calculateInitialStock;

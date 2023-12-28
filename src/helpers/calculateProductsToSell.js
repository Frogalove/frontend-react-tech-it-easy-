//Schrijf een helperfunctie die berekent hoeveel tv's er nog verkocht moeten worden. Geef de uitkomst in het rood weer op de pagina. Tip: je kunt een helperfunctie gebruiken in een andere helperfunctie.
import calculateInitialStock from "./calculateInitialStock.js";
import calculateSoldProducts from "./calculateSoldProducts.js";



function calculateProductsToSell(productArray) {
    const initialProducts = calculateInitialStock(productArray);
    const soldProducts = calculateSoldProducts(productArray);
    return initialProducts - soldProducts;
}

export default calculateProductsToSell;
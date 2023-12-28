import './App.css';
import { inventory} from "./constants/inventory.js";
import calculateSoldProducts from "./helpers/calculateSoldProducts.js";
import calculateInitialStock from "./helpers/calculateInitialStock.js";
import calculateProductsToSell from "./helpers/calculateProductsToSell.js";

import secondGetBrandTypeName from "./helpers/secondGetBrandTypeName.jsx";

function App() {
  return (
  <>
    <h1>Deel1</h1>
    <h2>Opdracht 2a</h2>
    <h3>Maak een helperfunctie die een string genereert voor de naam van één tv en deze teruggeeft in het format [merk] [type] - [naam] zoals Philips 43PUS6504/12 - 4K TV of NIKKEI NH3216SMART - HD smart TV.</h3>
    {getTvBrandTypeName (inventory[0])}
    {secondGetBrandTypeName(inventory[0])}

    <h2>Opdracht 2b</h2>
    <h3> Maak een helperfunctie die de prijs van één tv als parameter verwacht (zoals 379 of 159) teruggeeft in het format €379,- of €159,-.
    </h3>
    {getTvPrice (inventory [0])}


    export default App

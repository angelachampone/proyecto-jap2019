let productUnitCost = 0;
let productCurrency = "";
let subtotal = 0;
let shippingPercentage = 0.15;
let total = 0;
let paymentTypeSelected = false;
const CREDIT_CARD_PAYMENT = "Tarjeta de crédito";
const BANKING_PAYMENT = "Transferencia bancaria";
let ERROR_MSG = "Ha habido un error :(, verifica qué pasó.";

//Función que se utiliza para actualizar los costos de publicación
function updateTotalCosts(){
    let unitProductCostHTML = document.getElementById("productCostText");
    let comissionCostHTML = document.getElementById("comissionText");
    let totalCostHTML = document.getElementById("totalCostText");

    let unitCostToShow = MONEY_SYMBOL + productCost;
    let comissionToShow = Math.round((comissionPercentage * 100)) + PERCENTAGE_SYMBOL;
    let totalCostToShow = MONEY_SYMBOL + (Math.round(productCost * comissionPercentage * 100) / 100);

    unitProductCostHTML.innerHTML = unitCostToShow;
    comissionCostHTML.innerHTML = comissionToShow;
    totalCostHTML.innerHTML = totalCostToShow;
}

function updateSubtotal(unitario, cProductos){
    let preUni = parseInt(document.getElementById("precio").textContent);
    let cant = parseInt(document.getElementById("cantidad").textContent);
    let subTotal = cant * preUni;
    document.getElementById("subTotal").innerHTML = subTotal;
}

function showPaymentTypeNotSelected(){

}

function hidePaymentTypeNotSelected(){

}

function showArticles(articles){
    let contenido = "";
    contenido +=`
        <tr>
            <td><img src="img/tree1.jpg" width:="20px"></td>
            <td>Pino de olor</td>
            <td id="precio">100</td>
            <td>UYU</td>
            <td input type="numbrer" name="count" id="cantidad" value="2"></td>
            <td><span id="subTotal"</span></td>
      
        </tr>
    `
    document.getElementById("productsTable").innerHTML = contenido;
    updateSubtotal();
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(CART_INFO_URL).then(function(resultObj){
        if (resultObj.status=== "ok")
        {
            showArticles();
        }
    }
});
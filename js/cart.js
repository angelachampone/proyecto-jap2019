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

function updateSubtotal(){
    let preUni = parseInt(document.getElementById("precio").textContent);
    let cant = parseInt(document.getElementById("cantidad").value);
    let subTotal = cant * preUni;
    document.getElementById("subTotal").innerHTML = subTotal;
    document.getElementById("productCostText").innerHTML = subTotal;
    }

function showArticles(array){
    let contenido = "";
    for(let i = 0; i < array.length; i++){
        let producto = array[i];
    contenido +=`
        <tr>
            <td><img src= "` + producto.src + `" width:="20px"></td>
            <td>` + producto.name +`</td>
            <td id="precio"> ` + producto.unitCost + `</td>
            <td>` + producto.currency + `</td>
            <td><input type="number" name="count" id="cantidad" value=` + producto.count + `></td>
            <td><span id="subTotal"</span></td>
        </tr>
    `
     document.getElementById("producto").innerHTML = contenido;
        updateSubtotal();
    document.getElementById("cantidad").addEventListener("change",function(){
        updateSubtotal();
    })
}
}


function showPaymentTypeNotSelected(){

}

function hidePaymentTypeNotSelected(){

}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(CART_INFO_URL).then(function(resultObj){
        if (resultObj.status=== "ok")
        {
            showArticles(resultObj.data.articles);
        }
    });
})


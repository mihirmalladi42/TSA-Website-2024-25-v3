var temporary = JSON.parse(localStorage.getItem("totalList")) || [];
var lastRemoved = "";
var completed = false;
function reload() {
    var checkoutListElement = document.getElementById("listDisplay");
    checkoutListElement.innerHTML = '';
    for (var i = 0; i < temporary.length; i++) {
        (function(index) {
            var element = document.createElement('li');
            element.textContent = temporary[index];
            element.className = "no-right";
            var b = document.createElement('button');
            b.textContent = 'Remove';
            b.className = "align-left";
            b.onclick = function() {
                var current = temporary[index];
                if (current == "Falafel and Hummus") {
                    var temp = localStorage.getItem("totalCost");
                    localStorage.setItem("totalCost", temp-8.99);
                }
                if (current == "Samosas" || current == "Apfelkuchen") {
                    var temp = localStorage.getItem("totalCost");
                    localStorage.setItem("totalCost", temp-7.99);
                }
                if (current == "Bruschetta" || current == "Flan") {
                    var temp = localStorage.getItem("totalCost");
                    localStorage.setItem("totalCost", temp-5.99);
                }
                if (current == "Tortilla Chips" || current == "Malabi" || current == "Tres Leches Cake") {
                    var temp = localStorage.getItem("totalCost");
                    localStorage.setItem("totalCost", temp-6.99);
                }
                if (current == "Koshary" || current == "Chole Bhature" || current == "Thai Red Curry" || current == "Buddha's Delight") {
                    var temp = localStorage.getItem("totalCost");
                    localStorage.setItem("totalCost", temp-20.99);
                }
                if (current == "Ratatouille" || current == "Arepas") {
                    var temp = localStorage.getItem("totalCost");
                    localStorage.setItem("totalCost", temp-16.99);
                }
                if (current == "Japchae") {
                    var temp = localStorage.getItem("totalCost");
                    localStorage.setItem("totalCost", temp-15.99);
                }
                if (current == "Chiles Rellenos") {
                    var temp = localStorage.getItem("totalCost");
                    localStorage.setItem("totalCost", temp-19.99);
                }
                if (current == "Kulfi" || current == "Soda" || current == "Lemonade") {
                    var temp = localStorage.getItem("totalCost");
                    localStorage.setItem("totalCost", temp-2.99);
                }
                if (current == "Sesame Balls") {
                    var temp = localStorage.getItem("totalCost");
                    localStorage.setItem("totalCost", temp-3.99);
                }
                removeItem(index);
            };
            element.appendChild(b);
            checkoutListElement.appendChild(element);
        })(i);
    }
    
}
function removeItem(num) {
    temporary.splice(num, 1);
    //array[index] is removed
                //var current = array[index];
                /*if (current == "Falafel and Hummus") {
                    var temp = localStorage.getItem("totalCost");
                    localStorage.setItem("totalCost", temp-8.99);
                }*/
    localStorage.setItem("totalList", JSON.stringify(temporary));
    reload();
}
reload();


function updateCard() {
    var email = document.getElementById("emailBox").value;
    var countryCode = document.getElementById("countryCodeBox").value;
    var phone = document.getElementById("phoneBox").value;
    var name = document.getElementById("nameBox").value;
    var address = document.getElementById("addressBox").value;
    var town = document.getElementById("townBox").value;
    var zip = document.getElementById("zipBox").value;
    var driverInfo = document.getElementById("extraBox").value;
    var cardNumber = document.getElementById("cardNumberBox").value;
    var expirationDate = document.getElementById("expirationDateBox").value;
    var securityCode = document.getElementById("securityCodeBox").value;
    var cardholderName = document.getElementById("cardholderNameBox").value;
    if (email == "" ||
    countryCode == "" ||
    phone == "" ||
    name == "" ||
    address == "" ||
    town == "" ||
    zip == "" ||
    cardNumber == "" ||
    expirationDate == "" ||
    securityCode == "" ||
    cardholderName == "") {
        document.getElementById("error").style.display = "block";
    } else {
    completed = true;
    document.getElementById("error").style.display = "none";
    document.getElementById("error2").style.display = "none";
    localStorage.setItem("email", email);
    localStorage.setItem("countryCode", countryCode);
    localStorage.setItem("phone", phone);
    localStorage.setItem("name", name);
    localStorage.setItem("address", address);
    localStorage.setItem("town", town);
    localStorage.setItem("zip", zip);
    localStorage.setItem("driverInfo", driverInfo);

    localStorage.setItem("cardNumber", cardNumber);
    localStorage.setItem("expirationDate", expirationDate);
    localStorage.setItem("securityCode", securityCode);
    localStorage.setItem("cardholderName", cardholderName);

    var cost = parseFloat(localStorage.getItem("totalCost"));
    var tax = 0.04 * (cost + 5);
    document.getElementById("subtotal").value = "$" + cost.toFixed(2);
    document.getElementById("shipping").value = "$5.00";
    document.getElementById("tax").value = "$" + tax.toFixed(2);
    document.getElementById("total").value = "$" + (cost+5+tax).toFixed(2);
    }
}

function allDonePage() {
    if (completed) {
        document.getElementById("error2").style.display = "none";
        window.location.href = "alldone.html";
        
    } else {
        document.getElementById("error2").style.display = "block";
    }
    
}
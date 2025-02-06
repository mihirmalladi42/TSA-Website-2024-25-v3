{
    var header = document.getElementById("header");
var dropdown = document.getElementById("dropDiv");
var itemList = document.getElementById("dropList");
var items = JSON.parse(localStorage.getItem("totalList")) || [];
function reload() {
    items = JSON.parse(localStorage.getItem("totalList")) || [];
    document.getElementById("costLabel").innerHTML = Math.abs(parseFloat(localStorage.getItem("totalCost")).toFixed(2));
    console.log("RELOAD REACHED");
    itemList.innerHTML = "";
    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        var li = document.createElement("li");
        li.textContent = item;
        li.className = 'li';
        var removeButton = document.createElement("button");
        removeButton.textContent = 'X';
        removeButton.className = 'mar';
        (function(index, item) {
            removeButton.onclick = function () {
                var current = items[index];
                console.log("COST UPDATING FOR " + current);
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
                removeItem(index, item);
            };
        })(i, item);
        li.appendChild(removeButton);
        itemList.appendChild(li);
    }
}
function removeItem(index, item) {
    items.splice(index, 1);
    localStorage.setItem("totalList", JSON.stringify(items));
    document.getElementById("costLabel").innerHTML = Math.abs(parseFloat(localStorage.getItem("totalCost")).toFixed(2));
    reload();
}

reload();
document.getElementById("costLabel").innerHTML = Math.abs(parseFloat(localStorage.getItem("totalCost")).toFixed(2));
function proceedToCheckout() {
    window.location.href = "checkout.html";
}
}



//Appetizer Functionality
{

    /* 
    var falafelToAdd = 1;
function decrementFalafel() {
    if (falafelToAdd > 0) {
        falafelToAdd--;
        document.getElementById("quantityFalafel").value = falafelToAdd;
        console.log(falafelToAdd);
    }
}
function incrementFalafel() {
    if (falafelToAdd >= 0 && falafelToAdd <= 14) {
        falafelToAdd++;
        document.getElementById("quantityFalafel").value = falafelToAdd;
        console.log(falafelToAdd);
    }
}
    
    
    */
function openFalafel() {
    document.getElementById("falafelDisplay").style.display = "block";
}
function falafel() {
    for (var k = 0; k < falafelToAdd; k++) {
   var currentCost = parseFloat(localStorage.getItem("totalCost")) || 0;
   localStorage.setItem("totalCost", currentCost + 8.99);
   console.log(localStorage.getItem("totalCost")); 
   var currentList = JSON.parse(localStorage.getItem("totalList")) || [];
   currentList.push("Falafel and Hummus");
   localStorage.setItem("totalList", JSON.stringify(currentList));
   console.log(`Updated array: ${JSON.stringify(currentList)}`);
   document.getElementById("falafelDisplay").style.display = "none";
   reload();
    }
    falafelToAdd = 1;
   document.getElementById("quantityFalafel").value = falafelToAdd;
}
function closeFalafel() {
    document.getElementById("falafelDisplay").style.display = "none";
}
var samosasToAdd = 1;
function decrementSamosas() {
    if (samosasToAdd > 0) {
        samosasToAdd--;
        document.getElementById("quantitySamosas").value = samosasToAdd;
        console.log(samosasToAdd);
    }
}
function incrementSamosas() {
    if (samosasToAdd >= 0 && samosasToAdd <= 14) {
        samosasToAdd++;
        document.getElementById("quantitySamosas").value = samosasToAdd;
        console.log(samosasToAdd);
    }
}
function openSamosas() {
    document.getElementById("samosasDisplay").style.display = "block";
}
function samosas() {
   for (var k = 0; k < samosasToAdd; k++) {
   var currentCost = parseFloat(localStorage.getItem("totalCost")) || 0;
   localStorage.setItem("totalCost", currentCost + 7.99);
   console.log(localStorage.getItem("totalCost")); 
   var currentList = JSON.parse(localStorage.getItem("totalList")) || [];
   currentList.push("Samosas");
   localStorage.setItem("totalList", JSON.stringify(currentList));
   console.log(`Updated array: ${JSON.stringify(currentList)}`);
   document.getElementById("samosasDisplay").style.display = "none";
   reload();
   }
   samosasToAdd = 1;
   document.getElementById("quantitySamosas").value = samosasToAdd;
}
function closeSamosas() {
    document.getElementById("samosasDisplay").style.display = "none";
}
var bruschettaToAdd = 1;
function decrementBruschetta() {
    if (bruschettaToAdd > 0) {
        bruschettaToAdd--;
        document.getElementById("quantityBruschetta").value = bruschettaToAdd;
        console.log(bruschettaToAdd);
    }
}
function incrementBruschetta() {
    if (bruschettaToAdd >= 0 && bruschettaToAdd <= 14) {
        bruschettaToAdd++;
        document.getElementById("quantityBruschetta").value = bruschettaToAdd;
        console.log(bruschettaToAdd);
    }
}
function openBruschetta() {
    document.getElementById("bruschettaDisplay").style.display = "block";
}
function bruschetta() {
    for (var k = 0; k < bruschettaToAdd; k++) {
   var currentCost = parseFloat(localStorage.getItem("totalCost")) || 0;
   localStorage.setItem("totalCost", currentCost + 5.99);
   console.log(localStorage.getItem("totalCost")); 
   var currentList = JSON.parse(localStorage.getItem("totalList")) || [];
   currentList.push("Bruschetta");
   localStorage.setItem("totalList", JSON.stringify(currentList));
   console.log(`Updated array: ${JSON.stringify(currentList)}`);
   document.getElementById("bruschettaDisplay").style.display = "none";
   reload();
    }
    bruschettaToAdd = 1;
   document.getElementById("quantityBruschetta").value = bruschettaToAdd;
}
function closeBruschetta() {
    document.getElementById("bruschettaDisplay").style.display = "none";
}
var tortillaToAdd = 1;
function decrementTortilla() {
    if (tortillaToAdd > 0) {
        tortillaToAdd--;
        document.getElementById("quantityTortilla").value = tortillaToAdd;
        console.log(tortillaToAdd);
    }
}
function incrementTortilla() {
    if (tortillaToAdd >= 0 && tortillaToAdd <= 14) {
        tortillaToAdd++;
        document.getElementById("quantityTortilla").value = tortillaToAdd;
        console.log(tortillaToAdd);
    }
}
function openTortilla() {
    document.getElementById("tortillaDisplay").style.display = "block";
}
function tortilla() {
    for (var k = 0; k < tortillaToAdd; k++) {
   var currentCost = parseFloat(localStorage.getItem("totalCost")) || 0;
   localStorage.setItem("totalCost", currentCost + 6.99);
   console.log(localStorage.getItem("totalCost")); 
   var currentList = JSON.parse(localStorage.getItem("totalList")) || [];
   currentList.push("Tortilla Chips");
   localStorage.setItem("totalList", JSON.stringify(currentList));
   console.log(`Updated array: ${JSON.stringify(currentList)}`);
   document.getElementById("tortillaDisplay").style.display = "none";
   reload();
    }
    tortillaToAdd = 1;
   document.getElementById("quantityTortilla").value = tortillaToAdd;
}
function closeTortilla() {
    document.getElementById("tortillaDisplay").style.display = "none";
}
}
//Entree Functionality
{

    var kosharyToAdd = 1;
function decrementKoshary() {
    if (kosharyToAdd > 0) {
        kosharyToAdd--;
        document.getElementById("quantityKoshary").value = kosharyToAdd;
        console.log(kosharyToAdd);
    }
}
function incrementKoshary() {
    if (kosharyToAdd >= 0 && kosharyToAdd <= 14) {
        kosharyToAdd++;
        document.getElementById("quantityKoshary").value = kosharyToAdd;
        console.log(kosharyToAdd);
    }
}
function openKoshary() {
    document.getElementById("kosharyDisplay").style.display = "block";
}
function koshary() {
    for (var k = 0; k < kosharyToAdd; k++) {
   var currentCost = parseFloat(localStorage.getItem("totalCost")) || 0;
   localStorage.setItem("totalCost", currentCost + 20.99);
   console.log(localStorage.getItem("totalCost")); 
   var currentList = JSON.parse(localStorage.getItem("totalList")) || [];
   currentList.push("Koshary");
   localStorage.setItem("totalList", JSON.stringify(currentList));
   console.log(`Updated array: ${JSON.stringify(currentList)}`);
   document.getElementById("kosharyDisplay").style.display = "none";
   reload();
    }
    kosharyToAdd = 1;
   document.getElementById("quantityKoshary").value = kosharyToAdd;
}
function closeKoshary() {
    document.getElementById("kosharyDisplay").style.display = "none";
}
var ratatouilleToAdd = 1;
function decrementRatatouille() {
    if (ratatouilleToAdd > 0) {
        ratatouilleToAdd--;
        document.getElementById("quantityRatatouille").value = ratatouilleToAdd;
        console.log(ratatouilleToAdd);
    }
}
function incrementRatatouille() {
    if (ratatouilleToAdd >= 0 && ratatouilleToAdd <= 14) {
        ratatouilleToAdd++;
        document.getElementById("quantityRatatouille").value = ratatouilleToAdd;
        console.log(ratatouilleToAdd);
    }
}
function openRatatouille() {
    document.getElementById("ratatouilleDisplay").style.display = "block";
}
function ratatouille() {
    for (var k = 0; k < ratatouilleToAdd; k++) {
   var currentCost = parseFloat(localStorage.getItem("totalCost")) || 0;
   localStorage.setItem("totalCost", currentCost + 16.99);
   console.log(localStorage.getItem("totalCost")); 
   var currentList = JSON.parse(localStorage.getItem("totalList")) || [];
   currentList.push("Ratatouille");
   localStorage.setItem("totalList", JSON.stringify(currentList));
   console.log(`Updated array: ${JSON.stringify(currentList)}`);
   document.getElementById("ratatouilleDisplay").style.display = "none";
   reload();
    }
    ratatouilleToAdd = 1;
   document.getElementById("quantityRatatouille").value = ratatouilleToAdd;
}
function closeRatatouille() {
    document.getElementById("ratatouilleDisplay").style.display = "none";
}
var japchaeToAdd = 1;
function decrementJapchae() {
    if (japchaeToAdd > 0) {
        japchaeToAdd--;
        document.getElementById("quantityJapchae").value = japchaeToAdd;
        console.log(japchaeToAdd);
    }
}
function incrementJapchae() {
    if (japchaeToAdd >= 0 && japchaeToAdd <= 14) {
        japchaeToAdd++;
        document.getElementById("quantityJapchae").value = japchaeToAdd;
        console.log(japchaeToAdd);
    }
}
function openJapchae() {
    document.getElementById("japchaeDisplay").style.display = "block";
}
function japchae() {
    for (var k = 0; k < japchaeToAdd; k++) {
   var currentCost = parseFloat(localStorage.getItem("totalCost")) || 0;
   localStorage.setItem("totalCost", currentCost + 15.99);
   console.log(localStorage.getItem("totalCost")); 
   var currentList = JSON.parse(localStorage.getItem("totalList")) || [];
   currentList.push("Japchae");
   localStorage.setItem("totalList", JSON.stringify(currentList));
   console.log(`Updated array: ${JSON.stringify(currentList)}`);
   document.getElementById("japchaeDisplay").style.display = "none";
   reload();
    }
    japchaeToAdd = 1;
   document.getElementById("quantityJapchae").value = japchaeToAdd;
}
function closeJapchae() {
    document.getElementById("japchaeDisplay").style.display = "none";
}
var choleToAdd = 1;
function decrementChole() {
    if (choleToAdd > 0) {
        choleToAdd--;
        document.getElementById("quantityChole").value = choleToAdd;
        console.log(choleToAdd);
    }
}
function incrementChole() {
    if (choleToAdd >= 0 && choleToAdd <= 14) {
        choleToAdd++;
        document.getElementById("quantityChole").value = choleToAdd;
        console.log(choleToAdd);
    }
}
function openChole() {
    document.getElementById("choleDisplay").style.display = "block";
}
function chole() {
    for (var k = 0; k < choleToAdd; k++) {
   var currentCost = parseFloat(localStorage.getItem("totalCost")) || 0;
   localStorage.setItem("totalCost", currentCost + 20.99);
   console.log(localStorage.getItem("totalCost")); 
   var currentList = JSON.parse(localStorage.getItem("totalList")) || [];
   currentList.push("Chole Bhature");
   localStorage.setItem("totalList", JSON.stringify(currentList));
   console.log(`Updated array: ${JSON.stringify(currentList)}`);
   document.getElementById("choleDisplay").style.display = "none";
   reload();
}
choleToAdd = 1;
document.getElementById("quantityChole").value = choleToAdd;
}
function closeChole() {
    document.getElementById("choleDisplay").style.display = "none";
}
var thaiRedToAdd = 1;
function decrementThaiRed() {
    if (thaiRedToAdd > 0) {
        thaiRedToAdd--;
        document.getElementById("quantityThaiRed").value = thaiRedToAdd;
        console.log(thaiRedToAdd);
    }
}
function incrementThaiRed() {
    if (thaiRedToAdd >= 0 && thaiRedToAdd <= 14) {
        thaiRedToAdd++;
        document.getElementById("quantityThaiRed").value = thaiRedToAdd;
        console.log(thaiRedToAdd);
    }
}
function openThaiRed() {
    document.getElementById("thairedDisplay").style.display = "block";
}
function thaiRed() {
    for (var k = 0; k < thaiRedToAdd; k++) {
   var currentCost = parseFloat(localStorage.getItem("totalCost")) || 0;
   localStorage.setItem("totalCost", currentCost + 20.99);
   console.log(localStorage.getItem("totalCost")); 
   var currentList = JSON.parse(localStorage.getItem("totalList")) || [];
   currentList.push("Thai Red Curry");
   localStorage.setItem("totalList", JSON.stringify(currentList));
   console.log(`Updated array: ${JSON.stringify(currentList)}`);
   document.getElementById("thairedDisplay").style.display = "none";
   reload();
}
thaiRedToAdd = 1;
document.getElementById("quantityThaiRed").value = thaiRedToAdd;
}
function closeThaiRed() {
    document.getElementById("thairedDisplay").style.display = "none";
}
var chilesToAdd = 1;
function decrementChiles() {
    if (chilesToAdd > 0) {
        chilesToAdd--;
        document.getElementById("quantityChiles").value = chilesToAdd;
        console.log(chilesToAdd);
    }
}
function incrementChiles() {
    if (chilesToAdd >= 0 && chilesToAdd <= 14) {
        chilesToAdd++;
        document.getElementById("quantityChiles").value = chilesToAdd;
        console.log(chilesToAdd);
    }
}
function openChiles() {
    document.getElementById("chilesDisplay").style.display = "block";
}
function chiles() {
    for (var k = 0; k < chilesToAdd; k++) {
   var currentCost = parseFloat(localStorage.getItem("totalCost")) || 0;
   localStorage.setItem("totalCost", currentCost + 19.99);
   console.log(localStorage.getItem("totalCost")); 
   var currentList = JSON.parse(localStorage.getItem("totalList")) || [];
   currentList.push("Chiles Rellenos");
   localStorage.setItem("totalList", JSON.stringify(currentList));
   console.log(`Updated array: ${JSON.stringify(currentList)}`);
   document.getElementById("chilesDisplay").style.display = "none";
   reload();
}

chilesToAdd = 1;
document.getElementById("quantityChiles").value = chilesToAdd;
}
function closeChiles() {
    document.getElementById("chilesDisplay").style.display = "none";
}
var arepasToAdd = 1;
function decrementArepas() {
    if (arepasToAdd > 0) {
        arepasToAdd--;
        document.getElementById("quantityArepas").value = arepasToAdd;
        console.log(arepasToAdd);
    }
}
function incrementArepas() {
    if (arepasToAdd >= 0 && arepasToAdd <= 14) {
        arepasToAdd++;
        document.getElementById("quantityArepas").value = arepasToAdd;
        console.log(arepasToAdd);
    }
}
function openArepas() {
    document.getElementById("arepasDisplay").style.display = "block";
}
function arepas() {
    for (var k = 0; k < arepasToAdd; k++) {
   var currentCost = parseFloat(localStorage.getItem("totalCost")) || 0;
   localStorage.setItem("totalCost", currentCost + 16.99);
   console.log(localStorage.getItem("totalCost")); 
   var currentList = JSON.parse(localStorage.getItem("totalList")) || [];
   currentList.push("Arepas");
   localStorage.setItem("totalList", JSON.stringify(currentList));
   console.log(`Updated array: ${JSON.stringify(currentList)}`);
   document.getElementById("arepasDisplay").style.display = "none";
   reload();
}

arepasToAdd = 1;
document.getElementById("quantityArepas").value = arepasToAdd;
}
function closeArepas() {
    document.getElementById("arepasDisplay").style.display = "none";
}





var buddhasToAdd = 1;
function decrementBuddhas() {
    if (buddhasToAdd > 0) {
        buddhasToAdd--;
        document.getElementById("quantityBuddhas").value = buddhasToAdd;
        console.log(buddhasToAdd);
    }
}
function incrementBuddhas() {
    if (buddhasToAdd >= 0 && buddhasToAdd <= 14) {
        buddhasToAdd++;
        document.getElementById("quantityBuddhas").value = buddhasToAdd;
        console.log(buddhasToAdd);
    }
}
function openBuddhas() {
    document.getElementById("buddhasDisplay").style.display = "block";
}
function buddhas() {
    for (var k = 0; k < buddhasToAdd; k++) {
   var currentCost = parseFloat(localStorage.getItem("totalCost")) || 0;
   localStorage.setItem("totalCost", currentCost + 20.99);
   console.log(localStorage.getItem("totalCost")); 
   var currentList = JSON.parse(localStorage.getItem("totalList")) || [];
   currentList.push("Buddha's Delight");
   localStorage.setItem("totalList", JSON.stringify(currentList));
   console.log(`Updated array: ${JSON.stringify(currentList)}`);
   document.getElementById("buddhasDisplay").style.display = "none";
   reload();
}

buddhasToAdd = 1;
document.getElementById("quantityBuddhas").value = buddhasToAdd;
}
function closeBuddhas() {
    document.getElementById("buddhasDisplay").style.display = "none";
}
}
//Dessert Functionality
{


    var apfelkuchenToAdd = 1;
function decrementApfelkuchen() {
    if (apfelkuchenToAdd > 0) {
        apfelkuchenToAdd--;
        document.getElementById("quantityApfelkuchen").value = apfelkuchenToAdd;
        console.log(apfelkuchenToAdd);
    }
}
function incrementApfelkuchen() {
    if (apfelkuchenToAdd >= 0 && apfelkuchenToAdd <= 14) {
        apfelkuchenToAdd++;
        document.getElementById("quantityApfelkuchen").value = apfelkuchenToAdd;
        console.log(apfelkuchenToAdd);
    }
}
    function openApfelkuchen() {
        document.getElementById("apfelkuchenDisplay").style.display = "block";
    }
    function apfelkuchen() {
        for (var k = 0; k < apfelkuchenToAdd; k++) {
       var currentCost = parseFloat(localStorage.getItem("totalCost")) || 0;
       localStorage.setItem("totalCost", currentCost + 7.99);
       console.log(localStorage.getItem("totalCost")); 
       var currentList = JSON.parse(localStorage.getItem("totalList")) || [];
       currentList.push("Apfelkuchen");
       localStorage.setItem("totalList", JSON.stringify(currentList));
       console.log(`Updated array: ${JSON.stringify(currentList)}`);
       document.getElementById("apfelkuchenDisplay").style.display = "none";
       reload();
    }

    apfelkuchenToAdd = 1;
    document.getElementById("quantityApfelkuchen").value = apfelkuchenToAdd;
    }
    function closeApfelkuchen() {
        document.getElementById("apfelkuchenDisplay").style.display = "none";
    }
    
    function openMalabi() {
        document.getElementById("malabiDisplay").style.display = "block";
    }
    function malabi() {
       var currentCost = parseFloat(localStorage.getItem("totalCost")) || 0;
       localStorage.setItem("totalCost", currentCost + 6.99);
       console.log(localStorage.getItem("totalCost")); 
       var currentList = JSON.parse(localStorage.getItem("totalList")) || [];
       currentList.push("Malabi");
       localStorage.setItem("totalList", JSON.stringify(currentList));
       console.log(`Updated array: ${JSON.stringify(currentList)}`);
       document.getElementById("malabiDisplay").style.display = "none";
       reload();
    }
    function closeMalabi() {
        document.getElementById("malabiDisplay").style.display = "none";
    }
    




    function openTresLeches() {
        document.getElementById("treslechesDisplay").style.display = "block";
    }
    function tresLeches() {
       var currentCost = parseFloat(localStorage.getItem("totalCost")) || 0;
       localStorage.setItem("totalCost", currentCost + 6.99);
       console.log(localStorage.getItem("totalCost")); 
       var currentList = JSON.parse(localStorage.getItem("totalList")) || [];
       currentList.push("Tres Leches Cake");
       localStorage.setItem("totalList", JSON.stringify(currentList));
       console.log(`Updated array: ${JSON.stringify(currentList)}`);
       document.getElementById("treslechesDisplay").style.display = "none";
       reload();
    }
    function closeTresLeches() {
        document.getElementById("treslechesDisplay").style.display = "none";
    }







    function openKulfi() {
        document.getElementById("kulfiDisplay").style.display = "block";
    }
    function kulfi() {
       var currentCost = parseFloat(localStorage.getItem("totalCost")) || 0;
       localStorage.setItem("totalCost", currentCost + 2.99);
       console.log(localStorage.getItem("totalCost")); 
       var currentList = JSON.parse(localStorage.getItem("totalList")) || [];
       currentList.push("Kulfi");
       localStorage.setItem("totalList", JSON.stringify(currentList));
       console.log(`Updated array: ${JSON.stringify(currentList)}`);
       document.getElementById("kulfiDisplay").style.display = "none";
       reload();
    }
    function closeKulfi() {
        document.getElementById("kulfiDisplay").style.display = "none";
    }
    
    
    
    
    
    function openFlan() {
        document.getElementById("flanDisplay").style.display = "block";
    }
    function flan() {
       var currentCost = parseFloat(localStorage.getItem("totalCost")) || 0;
       localStorage.setItem("totalCost", currentCost + 5.99);
       console.log(localStorage.getItem("totalCost")); 
       var currentList = JSON.parse(localStorage.getItem("totalList")) || [];
       currentList.push("Flan");
       localStorage.setItem("totalList", JSON.stringify(currentList));
       console.log(`Updated array: ${JSON.stringify(currentList)}`);
       document.getElementById("flanDisplay").style.display = "none";
       reload();
    }
    function closeFlan() {
        document.getElementById("flanDisplay").style.display = "none";
    }
    
    
    function openSesame() {
        document.getElementById("sesameDisplay").style.display = "block";
    }
    function sesame() {
       var currentCost = parseFloat(localStorage.getItem("totalCost")) || 0;
       localStorage.setItem("totalCost", currentCost + 3.99);
       console.log(localStorage.getItem("totalCost")); 
       var currentList = JSON.parse(localStorage.getItem("totalList")) || [];
       currentList.push("Sesame Balls");
       localStorage.setItem("totalList", JSON.stringify(currentList));
       console.log(`Updated array: ${JSON.stringify(currentList)}`);
       document.getElementById("sesameDisplay").style.display = "none";
       reload();
    }
    function closeSesame() {
        document.getElementById("sesameDisplay").style.display = "none";
    }
}
//Drinks Functionality
{

    function openSoda() {
        document.getElementById("sodaDisplay").style.display = "block";
    }
    function soda() {
       var currentCost = parseFloat(localStorage.getItem("totalCost")) || 0;
       localStorage.setItem("totalCost", currentCost + 2.99);
       console.log(localStorage.getItem("totalCost")); 
       var currentList = JSON.parse(localStorage.getItem("totalList")) || [];
       currentList.push("Soda");
       localStorage.setItem("totalList", JSON.stringify(currentList));
       console.log(`Updated array: ${JSON.stringify(currentList)}`);
       document.getElementById("sodaDisplay").style.display = "none";
       reload();
    }
    function closeSoda() {
        document.getElementById("sodaDisplay").style.display = "none";
    }
    function openLemonade() {
        document.getElementById("lemonadeDisplay").style.display = "block";
    }
    function lemonade() {
       var currentCost = parseFloat(localStorage.getItem("totalCost")) || 0;
       localStorage.setItem("totalCost", currentCost + 2.99);
       console.log(localStorage.getItem("totalCost")); 
       var currentList = JSON.parse(localStorage.getItem("totalList")) || [];
       currentList.push("Lemonade");
       localStorage.setItem("totalList", JSON.stringify(currentList));
       console.log(`Updated array: ${JSON.stringify(currentList)}`);
       document.getElementById("lemonadeDisplay").style.display = "none";
       reload();
    }
    function closeLemonade() {
        document.getElementById("lemonadeDisplay").style.display = "none";
    }
    function openWater() {
        document.getElementById("waterDisplay").style.display = "block";
    }
    function water() {
       var currentCost = parseFloat(localStorage.getItem("totalCost")) || 0;
       localStorage.setItem("totalCost", currentCost + 0);
       console.log(localStorage.getItem("totalCost")); 
       var currentList = JSON.parse(localStorage.getItem("totalList")) || [];
       currentList.push("Water");
       localStorage.setItem("totalList", JSON.stringify(currentList));
       console.log(`Updated array: ${JSON.stringify(currentList)}`);
       document.getElementById("waterDisplay").style.display = "none";
       reload();
    }
    function closeWater() {
        document.getElementById("waterDisplay").style.display = "none";
    }


}
function updateContact() {
    localStorage.setItem("email", document.getElementById("emailBox").value);
    localStorage.setItem("countryCode", document.getElementById("countryCodeBox").value);
    localStorage.setItem("phoneNumber", document.getElementById("phoneBox").value);
    localStorage.setItem("name", document.getElementById("nameBox").value);
    localStorage.setItem("address", document.getElementById("addressBox").value);
    localStorage.setItem("town", document.getElementById("townBox").value);
    localStorage.setItem("zip", document.getElementById("zipBox").value);
    localStorage.setItem("driverInfo", document.getElementById("extraBox").value);
}
function goToHomepage() {
    localStorage.clear();
    reload();
    window.location.href = "index.html";
}
function proceedToCheckout() {
    window.location.href = "checkout.html";
}
if (localStorage.length === 0) {
    document.getElementById("costLabel").innerHTML = "0";
}
document.getElementById("header").addEventListener("click", function () {
    var dropDiv = document.getElementById("dropDiv");
    document.getElementById("dropDivMenu").classList.remove("open");
    dropDiv.classList.toggle("open");
  });
  document.getElementById("headerMenu").addEventListener("click", function () {
    var dropDivMenu = document.getElementById("dropDivMenu");
    document.getElementById("dropDiv").classList.remove("open");
    dropDivMenu.classList.toggle("open");
  });
  function goToAppetizers() {
    window.location.href="appetizers.html";
  }
  function goToCheckoutNow() {
    window.location.href="checkout.html";
  }
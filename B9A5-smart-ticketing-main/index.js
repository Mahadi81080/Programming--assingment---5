const allTicket = document.getElementsByClassName("click");
let count = 0;
let left = 40;
for (const ticket of allTicket) {
  ticket.addEventListener("click", function (e) {
   if(count< 4){
    count = count + 1;
    setInnerText("seat-count", count);
    left = left - 1;
    setInnerText("seat-left", left);
    const ticketName = e.target.innerText;
    const selectedContainer = document.getElementById(
      "selected-place-container"
    );
    e.target.style.backgroundColor = "#22c55e";
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    td.innerText = ticketName;
    const td2 = document.createElement("td");
    td2.innerText = "Economoy";
    const td3 = document.createElement("td");
    td3.innerText = 550;
    tr.appendChild(td);
    tr.appendChild(td2);
    tr.appendChild(td3);
    selectedContainer.appendChild(tr);
    const ticketPrice = document.getElementById("ticket-price").innerText;
    const convertedTicketPrice = parseInt(ticketPrice);

    totalCost("total-price", convertedTicketPrice);
    grandTotal("grand-total", convertedTicketPrice);
   }
    
  });
}

function totalCost(id, value) {
  const totalCost = document.getElementById(id).innerText;
  const convertedTotalCost = parseInt(totalCost);
  sum1 = convertedTotalCost + value;
  setInnerText("total-price", sum1);
}
function grandTotal(id, value) {
  const grandTotal = document.getElementById(id).innerText;
  const convertedGrandTotal = parseInt(grandTotal);
  sum2 = convertedGrandTotal + value;
  setInnerText("grand-total", sum2);
}
function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}

const btn = document.getElementById("apply-btn");
btn.addEventListener("click", function () {
  const selectedPlace = document.getElementById("selected-placer");
  const existingH3 = selectedPlace.querySelector("h3");
  const existingP = selectedPlace.querySelector("p");
  if (existingH3) {
    existingH3.remove();
  }
  if (existingP) {
    existingP.remove();
  }
  const h3 = document.createElement("h3");
  h3.innerText = "Discount Price";
  const p = document.createElement("p");
  let discountAmount;
  const cuponElement = document.getElementById("input-field").value;
  if (sum1 >= 2200) {
    if (cuponElement === "NEW15") {
      discountAmount = sum2 * 0.15;
      const totalpay = sum1 - discountAmount;
      setInnerText("grand-total", totalpay);
      document.getElementById("input-field").disabled = true;
    } else if (cuponElement === "Couple 20") {
      discountAmount = sum2 * 0.2;
      const totalpay = sum1 - discountAmount;
      setInnerText("grand-total", totalpay);
      document.getElementById("input-field").disabled = true;
    } else {
      alert("Sorry, you submitted the wrong coupon code");
    }
   
  } else {
    alert("Please buy at least 4 tickets");
  }
  p.innerText = discountAmount;
  selectedPlace.appendChild(h3);
  selectedPlace.appendChild(p);
});

function next() {
    showElementById("submit");
    hideElementByClass("close");
  }
  
  function hideElementByClass(className) {
      const elements = document.getElementsByClassName(className);
      for (let i = 0; i < elements.length; i++) {
          elements[i].classList.add("hidden");
      }
  }
  
  function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove("hidden");
  }
  function back (){
    hidenNowPage('submit');
    showPreviousPage("close");
  }
  function hidenNowPage(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add("hidden");
  }
  function showPreviousPage(className) {
    const elements = document.getElementsByClassName(className);
    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.remove("hidden");
    }
}
  
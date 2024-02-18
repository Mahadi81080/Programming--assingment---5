const allTicket = document.getElementsByClassName("click");
let count = 0;
let left = 40;
for (const ticket of allTicket) {
  ticket.addEventListener("click", function (e) {
    count = count + 1;
    setInnerText("seat-count",count);
    left = left - 1;
    setInnerText('seat-left', left);
    const ticketName= e.target.innerText;
    const selectedContainer = document.getElementById('selected-place-container');
    const tr = document.createElement('tr')
    const td = document.createElement('td')
    td.innerText=ticketName;
    const td2 = document.createElement('td')
    td2.innerText='Economoy';
    const td3 = document.createElement('td')
    td3.innerText= 550;
    tr.appendChild(td);
    tr.appendChild(td2);
    tr.appendChild(td3);
    selectedContainer.appendChild(tr);

  });
}
function setInnerText(id,value){
    document.getElementById(id).innerText = value;
}
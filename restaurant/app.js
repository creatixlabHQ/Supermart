const API = "https://script.google.com/macros/s/AKfycbwZ9ijPjvtQ_u0-BU_tNo_3xzlWc8dCP4BamGIS5G4WoG0O2IdHiJCPdvkkS4ddkJIC/exec";

async function loadOrders() {
  const res = await fetch(API);
  const data = await res.json();

  const box = document.getElementById("orders");
  box.innerHTML = "";

  data.reverse().forEach(order => {
    box.innerHTML += `
      <div class="card">
        <b>Order ID:</b> ${order.id} <br>
        <b>Customer:</b> ${order.name} <br>
        <b>Address:</b> ${order.address} <br>
        <b>Status:</b> ${order.status}
      </div>
    `;
  });
}

loadOrders();
setInterval(loadOrders, 5000);

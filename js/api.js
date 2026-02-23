// js/api.js

/**
 * Common API caller for Google Apps Script
 */
async function apiCall(payload) {
  try {
    const res = await fetch(CONFIG.API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    const data = await res.json();
    return data;

  } catch (err) {
    console.error("API Error:", err);
    return {
      success: false,
      error: err.message
    };
  }
}

/* =========================
   AUTH
========================= */
function login(role, phone) {
  return apiCall({
    action: "login",
    role,
    phone
  });
}

/* =========================
   RIDER
========================= */
function createRider(data) {
  return apiCall({
    action: "create_rider",
    ...data
  });
}

function setRiderStatus(rider_id, status) {
  return apiCall({
    action: "rider_status",
    rider_id,
    status
  });
}

/* =========================
   ORDERS
========================= */
function createOrder(data) {
  return apiCall({
    action: "create_order",
    ...data
  });
}

function pickupOrder(order_id, rider_id) {
  return apiCall({
    action: "pickup_order",
    order_id,
    rider_id
  });
}

function deliverOrder(order_id, rider_id) {
  return apiCall({
    action: "deliver_order",
    order_id,
    rider_id
  });
}

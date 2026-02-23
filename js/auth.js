// js/auth.js

async function handleLogin() {
  const phone = document.getElementById("phone").value.trim();
  const role = document.getElementById("role").value;

  if (!phone || phone.length < 10) {
    alert("Valid phone number daalo");
    return;
  }

  const res = await login(role, phone);
  console.log("Login response:", res);

  if (!res.success) {
    alert(res.message || "Login failed");
    return;
  }

  // session save (simple)
  localStorage.setItem("user", JSON.stringify({
    role,
    phone
  }));

  // redirect
  if (role === CONFIG.ROLES.CUSTOMER) {
    window.location.href = "pages/customer/index.html";
  } else if (role === CONFIG.ROLES.RESTAURANT) {
    window.location.href = "pages/restaurant/index.html";
  } else if (role === CONFIG.ROLES.RIDER) {
    window.location.href = "pages/rider/index.html";
  }
}

function logout() {
  localStorage.clear();
  window.location.href = "/index.html";
}

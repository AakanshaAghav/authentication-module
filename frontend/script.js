const API_URL = "http://localhost:5000/api/auth";

// Signup inputs
const signupUsername = document.getElementById("signupUsername");
const signupEmail = document.getElementById("signupEmail");
const signupPassword = document.getElementById("signupPassword");
const signupMsg = document.getElementById("signupMsg");

// Login inputs
const loginEmail = document.getElementById("loginEmail");
const loginPassword = document.getElementById("loginPassword");
const loginMsg = document.getElementById("loginMsg");

// Dashboard
const welcomeMsg = document.getElementById("welcomeMsg");
const dashboardMsg = document.getElementById("dashboardMsg");

// SIGNUP
async function signup() {
    const username = signupUsername.value;
    const email = signupEmail.value;
    const password = signupPassword.value;

    if (!username || !email || !password) {
        signupMsg.innerText = "Please fill all fields";
        signupMsg.style.color = "red";
        return;
    }

    try {
        const res = await fetch(`${API_URL}/signup`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, email, password })
        });

        const data = await res.json();

        signupMsg.innerText = data.message || "Signup failed";
        signupMsg.style.color = res.status === 201 ? "green" : "red";

        if (res.status === 201) {
            setTimeout(() => {
                window.location.href = "login.html";
            }, 1000);
        }
    } catch (error) {
        signupMsg.innerText = error?.message || "Network or server error. Please try again.";
        signupMsg.style.color = "red";
    }
}

// LOGIN
async function login() {
    const email = loginEmail.value;
    const password = loginPassword.value;

    if (!email || !password) {
        loginMsg.innerText = "Please fill all fields";
        loginMsg.style.color = "red";
        return;
    }

    try {
        const res = await fetch(`${API_URL}/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        });

        const data = await res.json();

        loginMsg.innerText = data.message || "Login failed";
        loginMsg.style.color = res.status === 200 ? "green" : "red";

        if (res.status === 200) {
            localStorage.setItem("token", data.token);
            setTimeout(() => {
                window.location.href = "dashboard.html";
            }, 1000);
        }
    } catch (error) {
        loginMsg.innerText = error?.message || "Network or server error. Please try again.";
        loginMsg.style.color = "red";
    }
}

// DASHBOARD
function logout() {
    localStorage.removeItem("token");
    window.location.href = "login.html";
}

async function loadDashboard() {
    const token = localStorage.getItem("token");

    if (!token) {
        window.location.href = "login.html";
        return;
    }

    try {
        const res = await fetch(`${API_URL}/dashboard`, {
            headers: { Authorization: `Bearer ${token}` }
        });

        const data = await res.json();

        if (res.status === 200) {
            welcomeMsg.innerText = data.message;
            dashboardMsg.innerText = "Login successful!";
            dashboardMsg.style.color = "green";
        } else {
            dashboardMsg.innerText = data.message || "Unauthorized access";
            dashboardMsg.style.color = "red";
            setTimeout(() => {
                window.location.href = "login.html";
            }, 1000);
        }
    } catch (error) {
        dashboardMsg.innerText = error?.message || "Network error. Redirecting to login...";
        dashboardMsg.style.color = "red";
        setTimeout(() => {
            window.location.href = "login.html";
        }, 1000);
    }
}

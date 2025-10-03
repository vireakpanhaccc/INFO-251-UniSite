
import { api } from "../api.js";

export default async function Login() {
  const el = document.createElement('div');
  el.className = 'bg-transparent';
  el.innerHTML = `
    <div class="login-page flex flex-col items-center justify-center min-h-[70vh] w-full">
      <div class="bg-white shadow-[0_4px_30px_rgba(0,0,0,0.1)] rounded-2xl px-8 py-10 w-full max-w-md">
        <h1 class="text-3xl font-bold mb-6 text-center text-gray-800">Login</h1>
        <form class="space-y-5" autocomplete="off">
          <div>
            <label for="email" class="block mb-1 text-sm font-medium text-gray-700">Email</label>
            <input autoComplete="email" type="email" id="email" name="email" required class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition">
          </div>
          <div>
            <label for="password" class="block mb-1 text-sm font-medium text-gray-700">Password</label>
            <input autoComplete="current-password" type="password" id="password" name="password" required class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition">
          </div>
          <button type="submit" class="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition">Login</button>
        </form>
        <div class="flex items-center my-6">
          <hr class="flex-grow border-t border-gray-300">
          <span class="mx-3 text-gray-400">or</span>
          <hr class="flex-grow border-t border-gray-300">
        </div>
        <button class="w-full bg-white border border-gray-300 text-gray-700 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition mb-4">
          <img class="w-5 h-5" src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google">
          Continue with Google
        </button>
        <div class="text-center mt-2">
          <p class="mb-1 text-sm text-gray-600">Don't have an account?
            <a href="#/register" class="text-blue-600 hover:underline ml-1">Register here</a>
          </p>
          <p class="text-sm text-gray-600">Forgot your password?
            <a href="#/reset-password" class="text-blue-600 hover:underline ml-1">Reset it here</a>
          </p>
        </div>
      </div>
    </div>
  `;
  const form = el.querySelector("form");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = form.email.value;
    const password = form.password.value;
    try {
      const response = await api.post("/auth/login", { body: { email, password } });
      if (response.token) {
        localStorage.setItem("token", response.token);
        localStorage.setItem("refreshToken", response.refreshToken);
        localStorage.setItem("user_profile", JSON.stringify(response.user));
        alert("Login successful!");
        window.location.hash = "#/"; // Redirect to home or dashboard
        window.location.reload();
      } else {
        alert("Login failed: " + (response.message || "Unknown error"));
      }
      console.log("Response:", response);
    } catch (error) {
      alert("Login error: " + error.message);
    }
  });
  return el;
}
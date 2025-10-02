

export default async function ResetPassword() {
  const el = document.createElement('div');
  el.className = 'bg-transparent';
  el.innerHTML = `
    <div class="reset-password-page flex flex-col items-center justify-center min-h-[70vh] w-full">
      <div class="bg-white shadow-[0_4px_30px_rgba(0,0,0,0.1)] rounded-2xl px-8 py-10 w-full max-w-md">
        <h1 class="text-3xl font-bold mb-6 text-center text-gray-800">Reset Password</h1>
        <form class="space-y-5" autocomplete="off">
          <div>
            <label for="email" class="block mb-1 text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" name="email" required class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition">
          </div>
          <button type="submit" class="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition">Send Reset Link</button>
        </form>
      </div>
    </div>
  `
  return el;
}


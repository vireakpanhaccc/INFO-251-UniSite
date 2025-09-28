const BASE_URL = 'http://localhost:8000';

// Token management
function getAccessToken() {
  return localStorage.getItem("token");
}
export function getRefreshToken() {
  return localStorage.getItem("refreshToken");
}
export function setAccessToken(token) {
  localStorage.setItem("token", token);
}
export function setRefreshToken(token) {
  localStorage.setItem("refreshToken", token);
}
export function clearTokens() {
  localStorage.removeItem("token");
  localStorage.removeItem("refreshToken");
}

// Core request function
async function request(method, path, { body, headers } = {}) {
  const token = getAccessToken();

  let res = await fetch(`${BASE_URL}${path}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(headers || {}),
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  // If token expired, attempt to refresh and retry request
  if (res.status === 401) {
    const refreshed = await refreshAccessToken();
    if (refreshed) {
      res = await fetch(`${BASE_URL}${path}`, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getAccessToken()}`,
          ...(headers || {}),
        },
        body: body ? JSON.stringify(body) : undefined,
      });
    }
  }

  if (!res.ok) {
    throw new Error(`API error: ${res.status}`);
  }

  return res.json();
}

async function refreshAccessToken() {
  const refreshToken = getRefreshToken();
  if (!refreshToken) return false;

  const response = await fetch(`${BASE_URL}/refresh-token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ refreshToken }),
  });

  if (response.ok) {
    const data = await response.json();
    setAccessToken(data.accessToken); // Store new access token
    return true;
  }

  return false;
}

// API methods
export const api = {
  get: (path, options) => request("GET", path, options),
  post: (path, options) => request("POST", path, options),
  put: (path, options) => request("PUT", path, options),
  patch: (path, options) => request("PATCH", path, options),
  delete: (path, options) => request("DELETE", path, options),
};

// Example API methods (customize as needed)


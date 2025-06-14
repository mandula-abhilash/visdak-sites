import axios from "axios";

// Create axios instance with base configuration
const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor for authentication
apiClient.interceptors.request.use(
  (config) => {
    // Add auth token if available (client-side)
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("authToken");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle common errors
    if (error.response?.status === 401) {
      // Handle unauthorized access
      console.error("Unauthorized access");
      if (typeof window !== "undefined") {
        localStorage.removeItem("authToken");
        // You can add redirect logic here
      }
    }

    if (error.response?.status >= 500) {
      console.error("Server error:", error.response.data);
    }

    return Promise.reject(error);
  }
);

// Business API functions
export const businessAPI = {
  // Get business by subdomain
  getBySubdomain: async (subdomain) => {
    try {
      const response = await apiClient.get(`/businesses/${subdomain}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching business:", error);
      throw error;
    }
  },

  // Get all businesses
  getAll: async () => {
    try {
      const response = await apiClient.get("/businesses");
      return response.data;
    } catch (error) {
      console.error("Error fetching businesses:", error);
      throw error;
    }
  },

  // Create new business
  create: async (businessData) => {
    try {
      const response = await apiClient.post("/businesses", businessData);
      return response.data;
    } catch (error) {
      console.error("Error creating business:", error);
      throw error;
    }
  },

  // Update business
  update: async (id, businessData) => {
    try {
      const response = await apiClient.put(`/businesses/${id}`, businessData);
      return response.data;
    } catch (error) {
      console.error("Error updating business:", error);
      throw error;
    }
  },

  // Delete business
  delete: async (id) => {
    try {
      const response = await apiClient.delete(`/businesses/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error deleting business:", error);
      throw error;
    }
  },
};

export default apiClient;

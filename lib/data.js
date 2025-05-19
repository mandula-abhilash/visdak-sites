import businessesData from "@/data/businesses.json";

/**
 * Get a business by its subdomain
 */
export async function getBusinessBySubdomain(subdomain) {
  try {
    // Cast our JSON data to the correct type
    const businesses = businessesData;

    // Return the business if found, null otherwise
    return businesses[subdomain] || null;
  } catch (error) {
    console.error("Error fetching business data:", error);
    return null;
  }
}

/**
 * Get all businesses
 */
export async function getAllBusinesses() {
  try {
    return businessesData;
  } catch (error) {
    console.error("Error fetching all businesses:", error);
    return {};
  }
}

/**
 * Get a list of all available business subdomains
 */
export async function getAvailableSubdomains() {
  try {
    const businesses = businessesData;
    return Object.keys(businesses);
  } catch (error) {
    console.error("Error fetching available subdomains:", error);
    return [];
  }
}

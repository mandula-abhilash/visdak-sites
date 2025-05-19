import { BusinessesData, Business } from './types';
import businessesData from '@/data/businesses.json';

/**
 * Get a business by its subdomain
 */
export async function getBusinessBySubdomain(subdomain: string): Promise<Business | null> {
  try {
    // Cast our JSON data to the correct type
    const businesses = businessesData as BusinessesData;
    
    // Return the business if found, null otherwise
    return businesses[subdomain] || null;
  } catch (error) {
    console.error('Error fetching business data:', error);
    return null;
  }
}

/**
 * Get all businesses
 */
export async function getAllBusinesses(): Promise<BusinessesData> {
  try {
    return businessesData as BusinessesData;
  } catch (error) {
    console.error('Error fetching all businesses:', error);
    return {};
  }
}

/**
 * Get a list of all available business subdomains
 */
export async function getAvailableSubdomains(): Promise<string[]> {
  try {
    const businesses = businessesData as BusinessesData;
    return Object.keys(businesses);
  } catch (error) {
    console.error('Error fetching available subdomains:', error);
    return [];
  }
}
const BASE_URL = "http://localhost:5173/";

export const apiClient = {
  get: async <T>(endpoint: string): Promise<T> => {
    try {
      const response = await fetch(`${BASE_URL}${endpoint}`);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return (await response.json()) as T;
    } catch (e) {
      console.error("API CALL Failed:", e);
      throw e; 
    }
  }
};
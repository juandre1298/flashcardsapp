const BASE_URL = "http://localhost:5173/"

export const apiClient = {
  get: async (endpoint:string) => {
    try{
      const response = await fetch(`${BASE_URL}${endpoint}`)
      if(!response.ok){
        throw new Error(response.statusText)
      }
      return await response.json()
    }catch(e){
      console.error("API CALL Failed:", e)  
    }
  }
}
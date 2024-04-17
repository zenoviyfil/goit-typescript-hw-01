import axios from 'axios';

async function fetchData<T>(url:string): Promise<T> {
  try {
    const response = await axios.get<T>(url);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}

// дублюю функцію що б не світилась червоним
fetchData
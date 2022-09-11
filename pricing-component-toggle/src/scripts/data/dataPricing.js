/**
 * @returns promise data json
 */

async function dataPricing()  {
  try {
    const data = '../../json/data.json'
    const response = await fetch(data);
    const json = await response.json();
    
    return json;
  } catch(error) {
    return `failed json parsing ${error}`;
  }
}

export default dataPricing;
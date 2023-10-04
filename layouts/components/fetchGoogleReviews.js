import axios from 'axios';

async function fetchGoogleReviews(apiKey, accountId, locationId) {
  try {
    // Construct the API URL
    const apiUrl = `https://mybusiness.googleapis.com/v4/accounts/${accountId}/locations/${locationId}/reviews`;

    // Add the API key as a query parameter
    const queryParams = {
      key: apiKey, // Replace with your Google API Key
    };

    // Make the GET request
    const response = await axios.get(apiUrl, { params: queryParams });

    // Handle the response data
    if (response.status === 200) {
      return response.data;
    } else {
      console.error('Error fetching reviews:', response.statusText);
      return null;
    }
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return null;
  }
}

export default fetchGoogleReviews;

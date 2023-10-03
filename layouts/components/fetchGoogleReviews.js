import axios from 'axios';

async function fetchGoogleReviews(accountId, locationId) {
  try {
    // Construct the API URL
    const apiUrl = `https://developers.google.com/my-business/reference/rest/v4/accounts.locations.reviews`;

    // Add any necessary headers, such as authorization headers
    const headers = {
      'Authorization': `Bearer YOUR_ACCESS_TOKEN`, // Replace with your access token
    };

    // Make the GET request
    const response = await axios.get(apiUrl, { headers });

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

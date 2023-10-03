import React, { useEffect, useState } from 'react';
import fetchGoogleReviews from './fetchGoogleReviews';

function Reviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Replace 'YOUR_ACCOUNT_ID' and 'YOUR_LOCATION_ID' with actual values
    const apiKey = 'YOUR_API_KEY';
    const accountId = 'YOUR_ACCOUNT_ID';
    const locationId = 'YOUR_LOCATION_ID';

    fetchGoogleReviews(apiKey, accountId, locationId)
      .then((data) => {
        if (data) {
          setReviews(data.reviews);
        }
      });
  }, []);

  return (
    <div>
      
      {/* <h1>Google Reviews</h1> */}
      <ul>
      
        {reviews.map((review) => (
          <li key={review.reviewId}>{review.comment}</li>
         
          
        ))}
      </ul>
    </div>
  );
}

export default Reviews;

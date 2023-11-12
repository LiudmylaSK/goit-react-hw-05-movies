// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { fetchMovieReviews } from 'movies-api/Api';
// import Loader from './Loader';

// export const Reviews = () => {
//   const { movieId } = useParams();
//   const [reviews, setReviews] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchReviews = async () => {
//       try {
//         const response = await fetchMovieReviews(movieId);
//         setReviews(response);
//       } catch (error) {
//         setError(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchReviews();
//   }, [movieId]);

//   if (loading) {
//     return <Loader />;
//   }

//   if (error) {
//     return <div>Error fetching reviews: {error.message || error.toString()}</div>
// ;
//   }

//   return (
//     <>
//       {reviews.length !== 0 ? (
//         <div>
//           <h2>Movie reviews</h2>
//           <ul>
//             {reviews.map((review) => (
//               <li key={review.id}>
//                 <p>{review.author}</p>
//                 <p>{review.content}</p>
//               </li>
//             ))}
//           </ul>
//         </div>
//       ) : (
//         <div>There are no reviews for this movie yet</div>
//       )}
//     </>
//   );
// };





import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'movies-api/Api';

 const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const movieReviews = async () => {
      try {
        const response = await fetchMovieReviews(movieId);
        setReviews(response);
      } catch (error) {
        console.error(error);
      }
    };

    movieReviews();
  }, [movieId]);

  return (
    <>
      {reviews.length > 0 && (
        <div>
          <h2>Movie reviews</h2>
          <ul>
            {reviews.map(review => (
              <li key={review.id}>
                <p>{review.author}</p>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
      {reviews.length === 0 && (
        <div>There are no reviews for this movie yet</div>
      )}
    </>
  );
};

export default Reviews;
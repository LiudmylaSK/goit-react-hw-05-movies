// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { fetchMovieCast } from "movies-api/Api";
// import { BASE_POSTER_URL } from 'services/constants';
// import placeholder from '../images/placeholder.png';

// export const Cast = () => {
//   const { movieId } = useParams();

//   const [cast, setCast] = useState([]);

//   useEffect(() => {
//     const fetchCast = async () => {
//       try {
//         const castData = await fetchMovieCast(movieId);
//         setCast(castData);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     if (movieId) {
//       fetchCast();
//     }
//   }, [movieId]);

//   return (
//     <>
//       {cast.length > 0 && (
//         <ul>
//           {cast.map(({ id, profile_path, original_name, character }) => (
//             <li key={id}>
//               <img
//                 src={`${profile_path ? BASE_POSTER_URL + profile_path : placeholder}`}
//                 alt={original_name}
//               />
//               <p>
//                 <span> Actor:</span> {original_name}
//               </p>
//               <p>
//                 <span>Character:</span> {character}
//               </p>
//             </li>
//           ))}
//         </ul>
//       )}
//     </>
//   );
// };


import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "movies-api/Api";
import { BASE_POSTER_URL } from "movies-api/constant-images";
import { PLACEHOLDER } from "movies-api/constant-images"; 


export const Cast = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const cast = await fetchMovieCast(movieId);
        setCast(cast);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCast();
  }, [movieId]);

  return (
    <>
      {
    
          <ul>
            {cast.map(({ id, profile_path, original_name, character }) => (
              <li key={id}>
                <img
                  src={`${
                    profile_path
                      ? BASE_POSTER_URL + profile_path
                      : `${PLACEHOLDER}`
                  }`}
                  alt={original_name}
                />
                <p>
                  <span> Actor:</span> {original_name}
                </p>
                <p>
                  <span>Character:</span> {character}
                </p>
              </li>
            ))}
          </ul>
       
      }
    </>
  );
};



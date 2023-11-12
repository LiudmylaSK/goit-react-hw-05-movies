


import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "movies-api/Api";
import { BASE_POSTER_URL } from "movies-api/constant-images";
import { PLACEHOLDER } from "movies-api/constant-images";
import styled from "styled-components"; 




 const Cast = () => {
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
      { <WrapperStyled>
            {cast.map(({ id, profile_path, original_name, character }) => (
              <ActorCard key={id}>
                <img
                  src={`${
                    profile_path
                      ? BASE_POSTER_URL + profile_path
                      : `${PLACEHOLDER}`
                  }`}
                  alt={original_name}
                  width="100"
                />
                <h4>
                  {original_name}
                </h4>
                <p>
                 {character}
                </p>
              </ActorCard>
            ))}
          </WrapperStyled>
   }
   </>
  );
};

export default Cast;


const WrapperStyled = styled.ul`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

const ActorCard = styled.li`
  text-align: center;
  width: 25%; 
`;
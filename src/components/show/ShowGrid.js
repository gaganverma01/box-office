/* eslint-disable react-hooks/rules-of-hooks */
import React, { useCallback } from 'react';
import ShowCard from './ShowCard';

import IMAGE_NOT_FOUND from '../../Images/not-found.png';
import { FlexGrid } from '../styled';
import { useShows } from '../../Misc/Custom-hook';

const ShowGrid = ({ data }) => {
  const [starredShows, dispatchStarred] = useShows();

  return (
    <FlexGrid>
      {data.map(({ show }) => {
        const onStarClick = useCallback((showId, isStarred) => {
          if (isStarred) {
            dispatchStarred({ type: 'REMOVE', showId });
          } else {
            dispatchStarred({ type: 'ADD', showId });
          }
        }, []);

        return (
          <ShowCard
            key={show.id}
            id={show.id}
            name={show.name}
            images={show.image ? show.image.medium : IMAGE_NOT_FOUND}
            summary={show.summary}
            onStarClick={onStarClick}
            isStarred={starredShows.inlculeds(show.id)}
          />
        );
      })}
    </FlexGrid>
  );
};

export default ShowGrid;

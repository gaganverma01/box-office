import React from 'react';
import ShowCard from './ShowCard';

import IMAGE_NOT_FOUND from '../../Images/not-found.png';
import { FlexGrid } from '../styled';
import { useShows } from '../../Misc/Custom-hook';

const ShowGrid = ({ data }) => {
  const [starredShows, dispatchStarred] = useShows();

  return (
    <FlexGrid>
      {data.map(({ show }) => {
        const isStarred = starredShows.includes(show.id);

        const onStarClick = () => {
          if (isStarred) {
            dispatchStarred({ type: 'REMOVE', showId: show.id });
            console.log('showid:', show.id);
          } else {
            dispatchStarred({ type: 'ADD', showId: show.id });
            console.log('showid:', show.id);
          }
        };

        return (
          <ShowCard
            key={show.id}
            id={show.id}
            name={show.name}
            images={show.image ? show.image.medium : IMAGE_NOT_FOUND}
            summary={show.summary}
            onStarClick={onStarClick}
            isStarred={isStarred}
          />
        );
      })}
    </FlexGrid>
  );
};

export default ShowGrid;

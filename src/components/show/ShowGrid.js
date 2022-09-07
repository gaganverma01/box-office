import React from 'react';
import ShowCard from './ShowCard';

import IMAGE_NOT_FOUND from '../../Images/not-found.png';
import { FlexGrid } from '../styled';

const ShowGrid = ({ data }) => {
  console.log('data: ', data[0].show.image.medium);
  return (
    <FlexGrid>
      {data.map(({ show }) => (
        <ShowCard
          key={show.id}
          id={show.id}
          name={show.name}
          images={show.image ? show.image.medium : IMAGE_NOT_FOUND}
          // images={show.url}
          summary={show.summary}
        />
      ))}
    </FlexGrid>
  );
};

export default ShowGrid;

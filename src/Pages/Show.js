import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiGet } from '../Misc/Config';

const Show = () => {
  const [show, setShow] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`).then(results => {
      setShow(results);
    });
  }, [id]);

  console.log('show', show);

  return <div>this is just show page</div>;
};

export default Show;

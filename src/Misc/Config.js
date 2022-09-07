const API_BASE_URL = 'https://api.tvmaze.com';

export async function apiGet(queryString) {
  console.log('API: ', `${API_BASE_URL}${queryString}`);
  const response = await fetch(`${API_BASE_URL}${queryString}`).then(r =>
    r.json()
  );

  return response;
}

// https://api.tvmaze.com/shows/${id}?embed[]=seasons&embed[]=cast

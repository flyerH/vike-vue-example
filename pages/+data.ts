// https://vike.dev/data
export { data };
export type Data = Awaited<ReturnType<typeof data>>;

// The node-fetch package (which only works on the server-side) can be used since
// this file always runs on the server-side, see https://vike.dev/data#server-side
import fetch from 'node-fetch';
import type { PageContextServer } from 'vike/types';

const data = async (pageContext: PageContextServer) => {
  const response = await fetch(
    'https://brillout.github.io/star-wars/api/films.json'
  );
  const moviesData = await response.json();

  // We remove data we don't need because the data is passed to the client; we should
  // minimize what is sent over the network.
  const movies = minimize(moviesData);
  return {
    movies,
    // The page's <title>
    title: `${movies.length} Star Wars Movies`,
  };
};

function minimize(movies) {
  return movies.map((movie) => {
    const { title, release_date, id } = movie;
    return { title, release_date, id };
  });
}

function sleep(milliseconds: number) {
  return new Promise((r) => setTimeout(r, milliseconds));
}

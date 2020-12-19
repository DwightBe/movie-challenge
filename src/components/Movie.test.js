import { render } from '@testing-library/react';
import Movie from './Movie';


const movieInfo = {
    adult: false,
    backdrop_path: "/cw8A0SprTxr7uSfcH7lwSRRhezJ.jpg",
    details: {
        adult: false,
        backdrop_path: "/cw8A0SprTxr7uSfcH7lwSRRhezJ.jpg",
        belongs_to_collection: null,
        budget: 0,
        homepage: "https://www.heavenquestfilm.com/",
        id: 634244,
        imdb_id: "tt5167200",
        original_language: "en",
        original_title: "Heavenquest: A Pilgrim's Progress",
        overview: "Inspired by the 1678 novel The Pilgrim's Progress and an imagined prequel to Bunyan's original writings.  A regal man named Vangel is thrust on a journey against his will when he is suddenly and mysteriously arrested.  Injured and lost after escaping the dark king’s men, Vangel begins to have strange dreams and visions of a mysterious woman in white calling him from the unknown territory of the North.  Armed with a book called “The Record of the Ancients” that he receives from a wise sage named Elder, Vangel embarks on an adventure that takes him through treacherous mountain range, unending deserts, the Lake of Doubts, and the Forest of No Return.  Along the way, travel companions share about a fabled good king and his son in the North if he can make it there alive.",
        popularity: 310.436,
        poster_path: "/cLDPLia17AwMqSaRHccyAlInkch.jpg",
        production_countries: [],
        release_date: "2020-07-13",
        revenue: 0,
        runtime: 91,
        status: "Released",
        tagline: "",
        title: "Heavenquest: A Pilgrim's Progress",
        video: false,
        vote_average: 5.5,
        vote_count: 35,
    },
    genre_ids:[ 12, 14, 28],
    id: 634244,
    original_language: "en",
    original_title: "Heavenquest: A Pilgrim's Progress",
    overview: "Inspired by the 1678 novel The Pilgrim's Progress and an imagined prequel to Bunyan's original writings.  A regal man named Vangel is thrust on a journey against his will when he is suddenly and mysteriously arrested.  Injured and lost after escaping the dark king’s men, Vangel begins to have strange dreams and visions of a mysterious woman in white calling him from the unknown territory of the North.  Armed with a book called “The Record of the Ancients” that he receives from a wise sage named Elder, Vangel embarks on an adventure that takes him through treacherous mountain range, unending deserts, the Lake of Doubts, and the Forest of No Return.  Along the way, travel companions share about a fabled good king and his son in the North if he can make it there alive.",
    popularity: 310.436,
    poster_path: "/cLDPLia17AwMqSaRHccyAlInkch.jpg",
    release_date: "2020-07-13",
    title: "Heavenquest: A Pilgrim's Progress",
    video: false,
    vote_average: 5.5,
    vote_count: 35,
}

test('renders stars correctly', () => {
    const {getByText}= render(<Movie movie={movieInfo}/>);
    const starsLabel = getByText(/stars/i);
    const title = getByText(/Heavenquest/i);
    const year = getByText(/2020/i);
    expect(starsLabel).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(year).toBeInTheDocument();
  });

  test('renders title', () => {
    const {getByText}= render(<Movie movie={movieInfo}/>);
    const title = getByText(/Heavenquest/i);
    expect(title).toBeInTheDocument();
  });

  test('renders year', () => {
    const {getByText}= render(<Movie movie={movieInfo}/>);
    const year = getByText(/2020/i);
    expect(year).toBeInTheDocument();
  });
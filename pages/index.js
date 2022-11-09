import Head from 'next/head';
import requests, { API_KEY, BASE_URL } from '../utils/requests';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Nav,
  Results,
  SearchBox,
  FilterDate,
  FilterRate,
  NotFound,
} from '../components';

export default function Home({ results }) {
  const [searchResults, setSearchResults] = useState([]);
  const [formInput, setFormInput] = useState({});
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setSearchResults(results);
  }, [results, searchTerm]);

  const search = async (event) => {
    event.preventDefault();
    let response = await fetch(
      `${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${formInput.searchTerm}&page-1`
    );
    const movies = await response.json();
    setSearchResults(movies.results);
  };

  const filterSearch = async (id) => {
    const response = await axios.get(
      `${BASE_URL}movie/${id}?api_key=${API_KEY}&language=en-US`
    );
    let filterdArr = [];
    filterdArr.push(response.data);
    setSearchResults(filterdArr);
  };
  const handleInput = (event) => {
    let { name, value } = event.target;
    setFormInput({ ...formInput, [name]: value });
    setSearchTerm(event.target.value);
  };

  const handleSelect = (values) => {
    let id = values.value;
    filterSearch(id);
  };

  return (
    <div>
      <Head>
        <title>Movies</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='md:flex mx-4 mb-8 items-center justify-around'>
        <div className='mb-4'>
          <SearchBox
            searchTerm={searchTerm}
            search={search}
            handleInput={handleInput}
          />
        </div>
        <div className='mb-4'>
          <FilterDate results={results} handleSelect={handleSelect} />
        </div>
        <div className='mb-4'>
          <FilterRate results={results} handleSelect={handleSelect} />
        </div>
      </div>
      <Nav />
      {typeof searchResults !== 'undefined' && searchResults.length === 0 ? (
        <NotFound />
      ) : (
        <Results results={searchResults} />
      )}
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;
  const request = await axios(
    `${BASE_URL}${requests[genre]?.url || requests.fetchTopRated.url}`
  );
  const movies = request.data;
  return {
    props: {
      results: movies.results,
    },
  };
}

import React, { useEffect, useReducer } from "react";
import axios from "axios";
import Names from "./components/Names";
import Pagination from "./components/Pagination";
import Details from "./components/Details";

const initialState = {
  data: {},
  loading: true,
  itemsPerPage: 3,
  currentPage: 1,
  currentPerson: {
    name: "",
    birthYear: "",
    gender: "",
    filmLinks: [],
    films: []
  }
};

function reducer(state, action) {
  switch (action.type) {
    case "FETCH_DATA":
      return { ...state, data: action.payload, loading: false };
    case "PREV_PAGE":
      return { ...state, currentPage: state.currentPage - 1 };
    case "NEXT_PAGE":
      return { ...state, currentPage: state.currentPage + 1 };
    case "DISPLAY":
      return {
        ...state,
        currentPerson: {
          ...state.currentPerson,
          name: action.payload.name,
          birthYear: action.payload["birth_year"],
          gender: action.payload.gender,
          filmLinks: action.payload.films
        }
      };
    case "FETCH_FILMS":
      return {
        ...state,
        currentPerson: {
          ...state.currentPerson,
          films: action.payload
        }
      };
    default:
      return state;
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("https://swapi.co/api/people/");
      dispatch({ type: "FETCH_DATA", payload: res.data });
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchFilms = async filmLink => {
      const res = await axios.get(filmLink);
      return res.data.title;
    };
    if (state.currentPerson.name) {
      const promises = [];
      state.currentPerson.filmLinks.forEach(element => {
        const res = fetchFilms(element);
        promises.push(res);
      });

      const process = async promises => {
        const titles = await Promise.all(promises);
        dispatch({ type: "FETCH_FILMS", payload: titles });
      };

      process(promises);
      console.log(state.currentPerson);
    }
  }, [state.currentPerson.name]);

  return (
    <div className="container mt-5">
      <h1 className="text-primary mb-3">Star War</h1>
      <Names
        currentPage={state.currentPage}
        itemsPerPage={state.itemsPerPage}
        nameLists={state.data.results}
        loading={state.loading}
        dispatch={dispatch}
      />
      <Pagination
        currentPage={state.currentPage}
        dispatch={dispatch}
        itemsPerPage={state.itemsPerPage}
        total={state.data.results ? state.data.results.length : 0}
      />
      <Details currentPerson={state.currentPerson} />
    </div>
  );
};

export default App;

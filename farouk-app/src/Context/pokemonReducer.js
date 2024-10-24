export const actions = {
  SET_POKEMONS: "SET_POKEMONS",
  SET_LOADING: "SET_LOADING",
  SET_POKEMON: "SET_POKEMON",
  SET_ERROR: "SET_ERROR",
  SET_SEARCH: "SET_SEARCH",
};

export const initialState = {
  pokemons: [],
  loading: false,
  pokemon: null,
  error: null,
  metadata: {
    total: 1050,
    limit: 151,
    offset: 0,
  },
};

export const pokemonReducer = (state, action) => {
  switch (action.type) {
    case actions.SET_POKEMONS:
      return { ...state, pokemons: action.payload };
    case actions.SET_LOADING:
      return { ...state, loading: action.payload };
    case actions.SET_POKEMON:
      return { ...state, pokemon: action.payload };
    case actions.SET_ERROR:
      return { ...state, error: action.payload };
    case actions.SET_SEARCH:
      return { ...state, search: action.payload };
    default:
      return state;
  }
};

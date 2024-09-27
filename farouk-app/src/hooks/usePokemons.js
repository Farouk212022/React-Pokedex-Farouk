import { useCallback, useEffect } from "react";
import { useDispatchContext } from "../Context/pokemonCtx";
import { actions } from "../Context/pokemonReducer";
import Pokedex from "pokedex-promise-v2";
import { useFiltersContext } from "../Context/filterCtx";
import { usePokemonContext } from "../Context/pokemonCtx";

const usePokemon = () => {
  const dispatch = useDispatchContext();
  const { filters } = useFiltersContext();
  const { metadata } = usePokemonContext();

  const fetchPokemons = useCallback(async () => {
    console.log(filters.search);
    dispatch({ type: actions.SET_LOADING, payload: true });
    const pokedex = new Pokedex();
    var response = [];
    var urls = [];
    if (filters.search !== "") {
      response = await pokedex.getPokemonsList({
        limit: metadata.total,
        offset: 0,
      });
    } else {
      response = await pokedex.getPokemonsList({
        ...metadata,
        offset: filters.page * metadata.limit,
      });
    }
    if (filters.search !== "") {
      response.results = response.results.filter((pokemon) =>
        pokemon.name.includes(filters.search)
      );
    }
    urls = response.results.map((pokemon) => pokemon.url);
    const pokemonResponse = await pokedex.getResource(urls);
    const filterResponse = pokemonResponse.filter((pokemon) =>
      pokemon.name.includes(filters.search)
    );
    dispatch({ type: actions.SET_POKEMONS, payload: filterResponse });
    dispatch({ type: actions.SET_LOADING, payload: false });
  }, [dispatch, filters, metadata]);

  useEffect(() => {
    fetchPokemons();
  }, [fetchPokemons]);
};

export default usePokemon;

import { useCallback, useEffect, useState } from "react";
import Pokedex from "pokedex-promise-v2";
import "./index.css";
import SearchBox from "../../components/SearchBox";
import Paginated from "../../components/Paginated";
import PokemonCard from "../../components/PokemonCard";
import { ReactComponent as Pokeball } from "../../assets/pokeball.svg";

const interval = {
  limit: 151,
  offset: 0,
};

const total = 1025;

const ListPokemon = () => {
  const [pokemons, setPokemons] = useState([]);
  const [searched, setSearched] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);

  const handleSearch = (search) => {
    const filtered = pokemons.filter((pokemon) =>
      pokemon.name.includes(search)
    );
    setSearched(filtered);
  };

  const fetchPokemons = useCallback(async () => {
    setLoading(true);
    const pokedex = new Pokedex();
    const response = await pokedex.getPokemonsList({
      ...interval,
      offset: page * interval.limit,
    });
    const urls = response.results.map((pokemon) => pokemon.url);
    const pokemonsResponse = await pokedex.getResource(urls);
    setPokemons(pokemonsResponse);
    setSearched(pokemonsResponse);
    setLoading(false);
  }, [page, setPokemons, setSearched]);

  useEffect(() => {
    fetchPokemons();
  }, [fetchPokemons]);

  return (
    <div className="App">
      <div className="search-bar-container">
        <SearchBox onSearch={handleSearch} />
      </div>
      {loading && (
        <div className="loading-letters">
          <p>Cargando...</p>
          <Pokeball className="pokeball" />
        </div>
      )}
      {!loading &&
        searched.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      <div className="navigate-buttons-list">
        <Paginated
          page={page}
          total={total / interval.limit}
          setPage={setPage}
        />
      </div>
    </div>
  );
};
export default ListPokemon;

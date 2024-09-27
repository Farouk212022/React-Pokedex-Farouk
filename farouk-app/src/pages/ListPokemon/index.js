import "./index.css";
import SearchBox from "../../components/SearchBox";
import Paginated from "../../components/Paginated";
import PokemonCard from "../../components/PokemonCard";
import { ReactComponent as Pokeball } from "../../assets/pokeball.svg";
import { usePokemonContext } from "../../Context/pokemonCtx";
import usePokemons from "../../hooks/usePokemons";
import React, { useState } from "react";

const ListPokemon = () => {
  usePokemons();
  const {
    pokemons,
    loading,
    metadata: { total, limit },
  } = usePokemonContext();
  const [page, setPage] = useState(0);

  return (
    <div className="App">
      <div className="search-bar-container">
        <SearchBox />
      </div>
      {loading && (
        <div className="loading-letters">
          <p>Cargando...</p>
          <Pokeball className="pokeball" />
        </div>
      )}
      {!loading &&
        pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      <div className="navigate-buttons-list">
        <Paginated page={page} total={total / limit} setPage={setPage} />
      </div>
    </div>
  );
};
export default ListPokemon;

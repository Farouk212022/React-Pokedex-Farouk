import { usePokemonContext } from "../../Context/pokemonCtx";
import usePokemons from "../../hooks/usePokemons";
import React, { useState } from "react";
import ListPokemonPresentation from "./ListPokemonPresentation";

const ListPokemonContainer = () => {
  usePokemons();
  const {
    pokemons,
    loading,
    metadata: { total, limit },
  } = usePokemonContext();
  const [page, setPage] = useState(0);
  const dataForPresentation={pokemons,loading,total,limit,page,setPage}
  return <ListPokemonPresentation data={dataForPresentation}/>
};
export default ListPokemonContainer;

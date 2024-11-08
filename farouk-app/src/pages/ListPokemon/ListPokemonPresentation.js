import "./index.css";
import React, { lazy, Suspense } from "react";
import { useInView } from "react-intersection-observer";
import { ReactComponent as Pokeball } from "../../assets/pokeball.svg";
import DynamicPokemonCardImport from "../../components/PokemonCard/DynamicPokemonCard";
import SearchBox from "../../components/SearchBox";

const Paginated = lazy(() => import("../../components/Paginated"));

function ListPokemonPresentation({ data }) {
  const [ref, inView] = useInView({
    triggerOnce: false, // Se activará cada vez que el usuario haga scroll
  });
  return (
    <div className="App">
      <div className="search-bar-container">
        <SearchBox />
      </div>
      {data.loading && (
        <div className="loading-letters">
          <p>Cargando...</p>
          <Pokeball className="pokeball" />
        </div>
      )}
      {!data.loading &&
        data.pokemons.map((pokemon) => (
          <DynamicPokemonCardImport key={pokemon.id} pokemon={pokemon} />
        ))}
      <div ref={ref} className="navigate-buttons-list">
        {inView && (
          <Suspense
            fallback={
              <div className="loading-letters">
                <p>Cargando...</p>
              </div>
            }
          >
            <Paginated
              page={data.page}
              total={data.total / data.limit}
              setPage={data.setPage}
            />
          </Suspense>
        )}
      </div>
    </div>
  );
}
export default ListPokemonPresentation;

import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

const PokemonCard = ({ pokemon }) => {
  const navigate = useNavigate();
  const handlePokemonClick = () => {
    navigate(`/detail/${pokemon.id}`);
  };
  return (
    <>
      {pokemon && (
        <section id="carta-borde-card" onClick={handlePokemonClick}>
          <div id="fondo">
            <div
              id="imagen-carta"
              style={{
                backgroundImage: `url(${pokemon.sprites.front_default})`,
              }}
            >
              <div id="numero-carta">
                {pokemon.id.toString().padStart(3, "0")}
              </div>
            </div>
            <div id="descripcion-carta">
              <div id="titulo">
                <h1>{pokemon.name}</h1>
                <p>{pokemon.types[0].type.name}</p>
              </div>
              <div id="estadisticas"></div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default PokemonCard;

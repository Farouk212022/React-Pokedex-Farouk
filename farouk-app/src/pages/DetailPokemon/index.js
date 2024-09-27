import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Pokedex from "pokedex-promise-v2";
import "./index.css";
import BackButton from "../../components/BackButton";
//import shield from "../../assets/Escudo.png";
//import down from "../../assets/down.png";

const DetailPokemon = () => {
  const { idPokemon } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const lengthId = idPokemon.length;
  var finalId = 0;
  switch (lengthId) {
    case 1:
      finalId = `00${idPokemon}`;
      break;
    case 2:
      finalId = `0${idPokemon}`;
      break;
    default:
      finalId = idPokemon;
      break;
  }
  console.log(pokemon);
  useEffect(() => {
    const getPokemon = async () => {
      try {
        const pokedex = new Pokedex();
        const response = await pokedex.getResource(
          `/api/v2/pokemon/${idPokemon}`
        );
        setPokemon(response);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getPokemon();
  }, [idPokemon]);

  return (
    <>
      {!loading && pokemon && (
        <section id="carta-borde">
          <div id="fondo">
            <div
              id="imagen-carta"
              style={{
                backgroundImage: `url(${pokemon.sprites.front_default})`,
              }}
            >
              <div id="numero-carta">{finalId}</div>
            </div>
            <div id="descripcion-carta">
              <div id="titulo">
                <h1>{pokemon.name}</h1>
                <p>{pokemon.types[0].type.name}</p>
              </div>
              <div id="estadisticas">
                <div class="cuadro-estadistica">
                  HP<div className="valor">{pokemon.stats[0].base_stat}</div>
                </div>
                <div class="cuadro-estadistica">
                  CP<div className="valor">{pokemon.stats[1].base_stat}</div>
                </div>
                <div class="cuadro-estadistica">
                  W<div className="valor">{pokemon.weight}kg</div>
                </div>
                <div class="cuadro-estadistica">
                  H<div className="valor">{pokemon.height}m</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      {loading && <p>Loading...</p>}
      {!loading && !pokemon && <p>Pokemon not found 404 Unu</p>}
      <BackButton />
    </>
  );
};

export default DetailPokemon;

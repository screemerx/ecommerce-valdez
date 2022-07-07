import React, { useState, useEffect } from "react";
import Title from "../CartWidget/Title";
import "./ItemListContainer.css";
import ItemList from "../CartWidget/ItemList";
import { useParams } from "react-router-dom";

import bulbasaur from "../../Recursos/001.png";
import charmander from "../../Recursos/004.png";
import squirtle from "../../Recursos/007.png";
import velozball from "../../Recursos/velozball.png";
import masterball from "../../Recursos/masterball.png";
import pokeball from "../../Recursos/pokeball.png";
import pokedex from "../../Recursos/pokedex.png";

const Pokemons = [
  { id: 1, image: bulbasaur, name: "Bulbasaur", category: "pokemon" },
  { id: 4, image: charmander, name: "Charmander", category: "pokemon" },
  { id: 7, image: squirtle, name: "Squirtle", category: "pokemon" },
  { id: 8, image: velozball, name: "Velozball", category: "pokeball" },
  { id: 9, image: masterball, name: "Masterball", category: "pokeball" },
  { id: 10, image: pokeball, name: "Pokeball", category: "pokeball" },
  { id: 11, image: pokedex, name: "Pokedex", category: "pokedex" },
];

export const ItemLisContainer = ({ texto }) => {
  const [data, setData] = useState([]);

  const { categoriaId } = useParams();

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(Pokemons);
      });
    });
    if (categoriaId) {
      getData.then((res) =>
        setData(res.filter((pokemon) => pokemon.category === categoriaId))
      );
    } else {
      getData.then((res) => setData(res));
      console.log(categoriaId);
      console.log(getData);
    }
  }, [categoriaId]);

  return (
    <>
      <Title className="h1" titles={texto} />

      <div className="container">
        <ItemList data={data} />
      </div>
    </>
  );
};

export default ItemLisContainer;
import React, { useState, useEffect } from "react";
import RickAndMortyService from "../../services/RickAndMorty.service";
import { Card } from "./Card";

export const Cards = () => {

  const [mascotas, setMascotas] = useState([]);

  useEffect(() => {
    RickAndMortyService.getAllCharacters()
    .then((data)=>setMascotas(data.results))
    .catch((error)=>console.log(error));
  }, [mascotas])

  const cardList = mascotas?.map((m) => <Card mascota={m} key={m.id} />);

  // ? = Si no llega info de la API no rompe

  return (
    <div className="album py-5 bg-light">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {cardList}
        </div>
      </div>
    </div>
  );
};

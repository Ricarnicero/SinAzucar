import React from "react";

export default function AddReceta(props){
  const recetaid = props.match.params.idreceta

  const mensaje = recetaid ? `Editar la receta ${recetaid}` : 'Nueva receta'
  return (
  <p>{mensaje}</p>
  )

};
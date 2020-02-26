import React from "react";

export default function ListRecetas(props){
  const uid = props.match.params.usuario

  const mensaje = `Recetas de ${uid}`
  return (
  <p>{mensaje}</p>
  )

};
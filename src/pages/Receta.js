import React from "react";

export default function Receta(props){
  const cual = props.match.params.idreceta

  const mensaje = 'Receta' + ` #${cual}`
  return (
  <p>{mensaje}</p>
  )

};
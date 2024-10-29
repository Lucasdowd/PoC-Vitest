import React from "react";
import Prueba from "./components/Prueba.tsx";
import Card from "./card/card.tsx";
function App() {
  return(
    <div>
      <Prueba title="Mas información">
      <p>Muestra que nos deja realizar la muestra de que vitest funciona</p>  
      </Prueba>
      <Card>
      </Card>
      </div>
  )
}
  export default App
import React, {useState, useEffect} from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [pizzas, setPizzas] = useState([])
  const [formData, setFormData] = useState({
    'id': null,
    'topping': '',
    'size': '',
    'vegetarian': false
  })

  useEffect(() => {
    fetch('http://localhost:3001/pizzas')
      .then(resp => resp.json())
      .then(data => setPizzas(data))
      .catch(error => console.log(error))
  }, [])

  return (
    <>
      <Header />
      <PizzaForm
        {...formData}
        setFormData={setFormData}
        setPizzas={setPizzas} />
      <PizzaList
        pizzas={pizzas}
        setFormData={setFormData} />
    </>
  );
}

export default App;

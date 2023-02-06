import React from "react";

function PizzaForm({id, topping, size, vegetarian, setFormData, setPizzas}) {

  function onSubmit(event) {
    event.preventDefault()
    setPizzas(prev => prev.map(pizza => {
      if (pizza.id === id) {
        return {'id': id, 'topping': topping, 'size': size, 'vegetarian': vegetarian}
      } else {
        return pizza
      }
    }))
  }

  function onChange(event) {
    let {name, value} = event.target
    if (name === 'vegetarian') {
      value = value === 'Vegetarian'
    }
    setFormData(prev => {
      return {...prev, [name]: value}
    })
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
            onChange={onChange}
            value={topping}
          />
        </div>
        <div className="col">
          <select className="form-control" name="size" onChange={onChange} value={size}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
              onChange={onChange}
              checked={vegetarian}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
              onChange={onChange}
              checked={!vegetarian}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;

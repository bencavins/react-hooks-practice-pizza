import React from "react";

function Pizza({id, topping, size, vegetarian, setFormData}) {
  function handleClick(event) {
    setFormData({
      'id': id,
      'topping': topping,
      'size': size,
      'vegetarian': vegetarian
    })
  }

  return (
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian ? "True" : "False"}</td>
      <td>
        <button type="button" className="btn btn-primary" onClick={handleClick}>
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;

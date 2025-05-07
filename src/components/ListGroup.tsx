import { useState } from "react";

function ListGroup() {
  let items = ["Bahir Dar", "Addis Ababa", "Gondar", "Mekele", "Dire Dawa"];
  //Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item list-group-item-action active"
                : "list-group-item list-group-item-action"
            }
            onClick={() => {
              setSelectedIndex(index);
            }}
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;

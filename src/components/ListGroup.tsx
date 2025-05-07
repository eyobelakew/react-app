import { MouseEvent } from "react";
function ListGroup() {
  let items = ["Bahir Dar", "Addis Ababa", "Gondar", "Mekele", "Dire Dawa"];
  //   Event handler
  const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className="list-group-item list-group-item-action"
            onClick={handleClick}
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

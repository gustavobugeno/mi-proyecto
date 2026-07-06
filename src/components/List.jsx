import Card from "./Card";

function List({ items }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      {items.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
}

export default List;

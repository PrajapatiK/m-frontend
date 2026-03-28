const List = (props: { items: string[] }) => {
  const { items } = props;

  if (items.length === 0) {
    return <p>No items added yet.</p>;
  };

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default List;
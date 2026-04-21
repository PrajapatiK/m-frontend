const List = (props: { items: string[] }) => {
  const { items } = props;

  if (items.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center border-2 rounded-lg p-4 mt-4 w-full">
        <h1 className="text-xl font-bold">Items</h1>
        <p className="mt-2 mb-2 font-medium">No items added yet.</p>
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center border-2 rounded-lg p-4 mt-4 w-full">
        <h1 className="text-xl font-bold">Items</h1>
      </div>
      <ul>
        {items.map((item, index) => (
          <li className="border-2 rounded mt-4 p-2" key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default List;
const { useState } = require("react");

const List = () => {
  const [counter, setCounter] = useState(4);
  const [list, setList] = useState([1, 2, 3]);

  return (
    <>
      <div>
        <button
          onClick={() => {
            list.unshift(counter);
            setList(list);
            setCounter(counter + 1);
          }}
        >
          Insert Element in front
        </button>

        <button
          onClick={() => {
            list.push(counter);
            setList(list);
            setCounter(counter + 1);
          }}
        >
          Insert Element at back
        </button>
        <table>
          {list.map((element) => (
            <tr key={element}>{element}</tr>
          ))}
        </table>
      </div>
    </>
  );
};

export default List;

import { useState } from "react";

function ToDoList() {
  const [activity, setActivity] = useState();

  const [addlist, setList] = useState([]);

  function SetActivity(e) {
    setActivity(e.target.value);
  }

  function SetList() {
    // setList([...addlist, activity]);
    // setActivity("");
    // console.log(addlist);

    setList((addlist) => {
      const updatedList = [...addlist, activity];
      setActivity("");
      return updatedList;
    });
  }

  function removeActivity(i) {
    const updatedListData = addlist.filter((elem, id) => {
      return i !== id;
    });
    setList(updatedListData);
  }

  function removeAll() {
    setList([]);
  }

  return (
    <div className="container">
      <div className="header">TODO LIST</div>
      <input
        placeholder="Enter input"
        type="text"
        value={activity}
        onChange={SetActivity}
      />
      <button disabled={!activity} onClick={SetList}>
        Save
      </button>
      <p className="List-heading">Here is List Itesm</p>
      {addlist !== [] &&
        addlist.map((data, i) => {
          return (
            <p key={i}>
              <div className="listData">{data}</div>
              <div className="btn-position">
                {" "}
                <button onClick={() => removeActivity(i)}> Remove</button>
              </div>
            </p>
          );
        })}

      {addlist.length >= 1 && <button onClick={removeAll}>Remove All</button>}
    </div>
  );
}
export default ToDoList;

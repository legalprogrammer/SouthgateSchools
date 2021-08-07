import React from "react";
import { Modal } from "./modal";

const Usereduce = () => {
  const [task, settask] = React.useState("");

  const reducer = (state, action) => {
    if (action.type === "testing") {
      const newtasks = [...state.all, action.payload];
      return {
        ...state,
        all: newtasks,
        showmodal: true,
        modalContent: "item added",
      };
    }

    if (action.type === "random") {
      return {
        ...state,
        showmodal: true,
        modalContent: "please enter a task",
      };
    }
    if (action.type === "remove") {
      return {
        ...state,
        showmodal: false,
      };
    }
    throw new Error("no matching type");
  };

  const defaultState = {
    all: [],
    showmodal: false,
    modalContent: "",
  };

  const [state, dispatch] = React.useReducer(reducer, defaultState);

  const formhandler = (e) => {
    e.preventDefault();

    if (task) {
      const newtask = { id: new Date().getTime().toLocaleString(), task };
      dispatch({ type: "testing", payload: newtask });
      settask("");
    } else {
      dispatch({ type: "random" });
    }
  };

  const taskhandler = (e) => {
    settask(e.target.value);
  };
  const removemodal = () => {
    dispatch({ type: "remove" });
  };

  return (
    <div>
      {state.showmodal && (
        <Modal modalContent={state.modalContent} removemodal={removemodal} />
      )}
      <form onSubmit={formhandler} className="form">
        <div>
          <input
            placeholder="enter a task"
            type="text"
            className="taskEl"
            value={task}
            onChange={taskhandler}
          />
        </div>
        <div>
          <input type="submit" className="submit" value="submit" />
        </div>
      </form>
      {/* <div>
        {data.map((datagotten) => {
          const { fname, age } = datagotten;
          return (
            <div>
              <h2>{fname}</h2>
              <h2>{age}</h2>
            </div>
          );
        })}
      </div> */}
      <div>
        {state.all.map((newdatagotten) => {
          const { id, task } = newdatagotten;
          return (
            <div key={id}>
              <h2>{task}</h2>
              <button>del</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Usereduce;

import React from "react";
const reducer = (state, action) => {
  console.log(state, action);
  if (action === "TESTING") {
    return {
      ...state,
      taskCarton: task,
    };
  }
};
const defaultState = {
  taskCarton: [],
};

const Todo = () => {
  const [task, settask] = React.useState("");
  const [state, dispatch] = React.useReducer(reducer, defaultState);

  const taskhandler = (e) => {
    settask(e.target.value);
  };

  const formhandler = (e) => {
    e.preventDefault();
    if (task) {
      dispatch({ type: "TESTING" });
    }
  };

  return (
    <div>
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
      <div>
        {state.taskCarton.map((newtask) => {
          const { id, task } = newtask;
          return (
            <div key={id}>
              <strong>{task}</strong>
              <button>delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Todo;

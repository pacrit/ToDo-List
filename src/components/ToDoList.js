import { useState } from "react";
import { Input, Button, List, Checkbox } from "semantic-ui-react";

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href =
  "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

export default function ToDoList() {
  let [task, setTask] = useState("");
  let [list, setList] = useState([]);

  const handleOnChangeheckTask = (item) => {
    let itensCopy = Array.from(list);
    itensCopy.splice(item, 1);
    setList(itensCopy);
  };

  function listTasks(e) {
    e.preventDefault();
    if (task.length === 0) {
      console.log("Escreve alguma coisa burro");
    } else {
      setList([...list, task]);
      setTask("");
    }
  }
  function cleanList() {
    setList([]);
  }

  return (
    <div>
      <div>
        <Input
          type="text"
          placeholder="Digite aqui a tarefa"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <br />
        <br />
        <Button onClick={listTasks}>Adicionar</Button>
        <Button onClick={cleanList}>limpar Tudo</Button>
      </div>{" "}
      <br />
      <div>
        <List>
          {list.map((item, index) => (
            <>
              <List.Item key={index}>
                <Input value={item} />
                <Button
                  style={{ marginLeft: 20 }}
                  onClick={() => handleOnChangeheckTask(index)}
                >
                  Feito
                </Button>
              </List.Item>
            </>
          ))}
        </List>
      </div>
    </div>
  );
}

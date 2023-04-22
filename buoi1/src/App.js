import StudentList from "./StudentTest";
import { useState, useEffect } from "react";

function App() {
  const [x, setX] = useState(0);
  const [check, setCheck] = useState(true);
  const [text, setText] = useState("Mèo");
  const [name, setName] = useState("");
  const [student, setStudent] = useState({ name: "Lê Mèo", old: 5 });
  const [list, setList] = useState([1, 2, 3, 4]);
  const vidu = [
    { name: "Heo", old: 2 },
    { name: "Chó", old: 3 },
  ];
  const [list2, setList2] = useState(() => {
    let listLocal;
    if (localStorage.getItem("list")) {
      listLocal = JSON.parse(localStorage.getItem("list"));
    } else {
      listLocal = vidu;
    }
    return listLocal;
  });
  const [name2, setName2] = useState("");
  const handle_increase = () => {
    //setX(x + 1)
    setX((pre) => pre + 1);
    setX((pre) => pre + 1);
  };
  const handle_change_text = (e) => {
    e.preventDefault();
    setText(name);
    setName("");
    // setStudent({ name: name, old: x });
    setStudent((pre) => ({ ...pre, name: name }));
  };
  const handle_chang_name = (event) => {
    setName(event.target.value);
  };
  const handle_chang_name2 = (event) => {
    setName2(event.target.value);
  };
  const handle_toggle_student = () => {
    setCheck((pre) => !pre);
  };
  const themvao = () => {
    setList2((pre) => {
      const newList = [...pre, { name: name2, old: 3 }];
      localStorage.setItem("list", JSON.stringify(newList));
      return newList;
    });
    setName2("");
  };
  const bgStyle = {
    background: "aqua",
    border: "1px solid green",
  };
  return (
    <div>
      <h2 style={bgStyle}>React JS</h2>
      <h1>{x}</h1>
      <h1>name:{text}</h1>
      <h1>
        Họ và tên: {student["name"]}, Tuổi: {student.old}
      </h1>
      <h1>{JSON.stringify(student)}</h1>
      <button onClick={handle_increase}>Increase</button>
      <button onClick={handle_change_text}>Change Text</button>
      <form onSubmit={handle_change_text}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={handle_chang_name}
        />
      </form>
      <button onClick={handle_toggle_student}>Toggle Student</button>
      {check ? <StudentList /> : ""}
      <ul>
        {list.map((st, key) => {
          return <li>{st}</li>;
        })}
      </ul>
      <ul>
        {list2.map((st, key) => {
          return <li>{st.name + ", " + st.old + " tuổi"}</li>;
        })}
      </ul>
      <input
        type="text"
        placeholder="Nhập tên"
        value={name2}
        onChange={handle_chang_name2}
      />
      <button onClick={themvao}>Add student</button>
    </div>
  );
}

export default App;

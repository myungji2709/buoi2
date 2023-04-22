import { useState, useEffect } from "react";

function App() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [soa, setSA] = useState("");
  const [sob, setSB] = useState("");
  const [kq, setKQ] = useState("");
  const [pheptinh, setPT] = useState("");
  const handle_soA = (event) => {
    setA(event.target.value);
  };
  const handle_soB = (event) => {
    setB(event.target.value);
  };
  const handle_cong = () => {
    setKQ(Number(a) + Number(b));
    setPT("+");
  };
  const handle_tru = () => {
    setKQ(a - b);
    setPT("-");
  };
  const handle_nhan = () => {
    setKQ(a * b);
    setPT("x");
  };
  const handle_chia = () => {
    setKQ(a / b);
    setPT("/");
  };
  const handle_clean =()=>{
    setA("")
    setB("")
    setPT("")
    setKQ("")
  }
  return (
    <div>
      <h3>Giá trị của a: {a}</h3>
      <h3>Giá trị của b: {b}</h3>
      <h3>Phép tính: {pheptinh}</h3>
      <h2>Kết quả: {kq} </h2>
      <form>
        <input
          type="text"
          placeholder="Nhập a"
          value={a}
          onChange={handle_soA}
        />
        <input
          type="text"
          placeholder="Nhập b"
          value={b}
          onChange={handle_soB}
        />
      </form>
      <button onClick={handle_cong}>+</button>
      <button onClick={handle_tru}>-</button>
      <button onClick={handle_nhan}>x</button>
      <button onClick={handle_chia}>/</button>
      <button onClick={handle_clean}>C</button>
    </div>
  );
}

export default App;

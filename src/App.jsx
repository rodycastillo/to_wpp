import { useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState("");
  const url = "https://api.whatsapp.com/send/?phone";

  const handleChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setNumber(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = `${url}=${number}`;
    if (number && number.length === 9) {
      window.open(value, "_blank");

      setNumber("");
    }
  };

  return (
    <>
      <div className="App">
        <form onSubmit={handleSubmit}>
          <h2>Ingresa el número</h2>
          <input
            // type="number"
            autoFocus
            name="cel"
            value={number}
            onChange={handleChange}
            maxLength="9"
          />
          <button
            type="submit"
            className={
              number.length === 0 || number.length !== 9 ? "inactive" : ""
            }
            disabled={number.length === 0 && number.length !== 9}
          >
            Enviar
          </button>
        </form>
      </div>
      <p className="copy">&copy; c4rLo</p>
    </>
  );
}

export default App;

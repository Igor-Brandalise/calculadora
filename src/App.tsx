import { useState } from "react";
import Input from "./components/input";
import Operador from "./components/operador";
import "./styles/app.css";

function App() {
  const [input1, setInput1] = useState<number>(0);
  const [input2, setInput2] = useState<number>(0);
  const [operador, setOperador] = useState<string>("");
  const [resultado, setResultado] = useState<number | null>(null);

  const calcular = () => {
    switch (operador) {
      case "+":
        setResultado(input1 + input2);
        break;
      case "-":
        setResultado(input1 - input2);
        break;
      case "*":
        setResultado(input1 * input2);
        break;
      case "/":
        if (input2 === 0) {
          alert("Não é possível dividir por zero!");
        } else {
          setResultado(input1 / input2);
        }
        break;
      case "**":
        setResultado(Math.pow(input1, input2));
        break;
      default:
        setResultado(null);
        break;
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-500">
      <div className="flex flex-col items-center gap-8 border-2 rounded-3xl h-[450px] w-[500px] p-6 bg-white justify-center">
        <div className="flex gap-8">
          <Input
            value={input1}
            onChange={(e) => setInput1(Number(e.target.value))}
            placeholder="Insira o primeiro número"
          />
          <Input
            value={input2}
            onChange={(e) => setInput2(Number(e.target.value))}
            placeholder="Insira o segundo número"
          />
        </div>
        <div className="flex flex-col gap-3 items-center">
          <Operador operador={operador} setOperador={setOperador} />

          <button
            onClick={calcular}
            className="bg-blue-500 text-white px-4 py-2 rounded-2xl w-50 mt-3"
          >
            Calcular
          </button>
          {resultado !== null && (
            <p className="text-lg font-semibold ">Resultado: {resultado}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

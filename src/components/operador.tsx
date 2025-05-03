import React from "react";

interface OperadorProps {
  operador: string;
  setOperador: (value: string) => void;
}

const Operador: React.FC<OperadorProps> = ({ operador, setOperador }) => {
  return (
    <select
      value={operador}
      onChange={(e) => setOperador(e.target.value)}
      className="border-2 border-black p-2 rounded w-70"
    >
      <option value="">Selecione um operador</option>
      <option value="+">+</option>
      <option value="-">-</option>
      <option value="*">*</option>
      <option value="/">/</option>
      <option value="**">**</option>
    </select>
  );
};

export default Operador;

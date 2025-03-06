import { useState } from "react";

export default function App(){
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [differenceDate, setDifferencetDate] = useState(null);
  
  const calculateDifference = () => {
    if(!startDate || !endDate) return;
    
    const start = new Date(startDate);
    const end = new Date(endDate);
    
    const differenceTime = end - start;
    const differenceDays = Math.ceil(differenceTime / (1000 * 60 * 60 * 24));

    setDifferencetDate(differenceDays);
    
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-md w-96 text-center">
        <h2 className="text-lg font-semibold mb-4">Calculadora de Diferença entre datas</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            <input type="date" value={startDate}
            onChange={(e) => setStartDate(e.target.value)} className="mt-1 p-2 w-full border rounded-md" />
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} className="mt-1 p-2 w-full border rounded-md" />
          </label>
        </div>
        <button onClick={calculateDifference} className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 w-full">
          Calcular Diferença
        </button>
        {differenceDate !== null && (
          <p className="mt-4 text-gray-800">A diferença é de {differenceDate} dias.</p>
        )}
      </div>
    </div>
  );
}
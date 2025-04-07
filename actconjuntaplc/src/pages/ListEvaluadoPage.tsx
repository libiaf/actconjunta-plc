import Filter from "./Filter";
import List from "./List";
import { Evaluado } from "my-types";
import { useState, useEffect } from "react";
import { getAllEvaluados } from "../api/EvaluadoAPI";

export default function ListPerson() {
  const [Evaluados, setEvaluados] = useState<Evaluado[]>([]);
  useEffect(() => {
    getAllEvaluados().then((data: Evaluado[]) => setEvaluados(data));
  }, []);
  console.log(Evaluados);
  return (
    <>
      <div className="flex flex-col gap-4 my-4 ">
        <h3 className="text-3xl font-bold text-gray-800 text-left">
          Lista de evaluados
        </h3>
        <div className="h-4"></div>

        <Filter />

        <div className="flex justify-end items-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add evaluado
          </button>
        </div>
      </div>
      <div className="relative overflow-x-auto">
        <List evaluados={Evaluados} />
      </div>
      {/* <div>
        <Filter />
        <List />
      </div> */}
    </>
  );
}
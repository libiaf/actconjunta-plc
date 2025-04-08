import Filter from "./Filter";
import List from "./List";
import { Evaluado } from "my-types";
import { useState, useEffect } from "react";
import { getAllEvaluados } from "../api/EvaluadoAPI";

export default function ListPerson() {

  const[name, setName] = useState<string>("")
  const[graduado, setGraduado] = useState<string>("All")
  const [evaluados, setEvaluados] = useState<Evaluado[]>([]);

  const filteredProducts = evaluados.filter((evaluado) => {
    return (
        (graduado === "All" || evaluado.graduado === graduado) &&
        (evaluado.nombre.toLowerCase().includes(name.toLowerCase()))
    );
  });

  useEffect(() => {
    getAllEvaluados().then((data: Evaluado[]) => setEvaluados(data));
  }, []);
  console.log(evaluados);
  return (
    <>
      <div className="flex flex-col gap-4 my-4 ">
        <h3 className="text-3xl font-bold text-gray-800 text-left">
          Lista de evaluados
        </h3>
        <div className="h-4"></div>

        <Filter graduado={graduado} setGraduado={setGraduado} name={name} setName={setName}/>

        <div className="flex justify-end items-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add evaluado
          </button>
        </div>
      </div>
      <div className="relative overflow-x-auto">
        <List evaluados={filteredProducts} />
      </div>
      {/* <div>
        <Filter />
        <List />
      </div> */}
    </>
  );
}
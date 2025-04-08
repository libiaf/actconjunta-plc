import { Evaluado } from "my-types";

type Props = {
  evaluados: Evaluado[];
};

export default function List({ evaluados }: Props) {
  return (
    <>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              ID
            </th>
            <th scope="col" className="px-6 py-3">
              Nombre
            </th>
            <th scope="col" className="px-6 py-3">
              CURP
            </th>
            <th scope="col" className="px-6 py-3">
              Género
            </th>
            <th scope="col" className="px-6 py-3">
              Graduado
            </th>
          </tr>
        </thead>
        <tbody>
          {evaluados.map((evaluado, index) => (
            <tr
              key={index}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {evaluado.id}
              </th>
              <td className="px-6 py-4">
                {evaluado.nombre + " " + evaluado.apellidos}
              </td>
              <td className="px-6 py-4">{evaluado.curp}</td>
              <td className="px-6 py-4">{evaluado.genero}</td>
              <td className="px-6 py-4">
                {evaluado.graduado === "SI" ? "SI" : "NO"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

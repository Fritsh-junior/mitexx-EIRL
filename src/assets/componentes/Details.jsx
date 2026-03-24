import { FiCheck } from "react-icons/fi";
import { useParams, Link } from "react-router";
import {
  aceros,
  cemento,
  agregado,
  herramientas,
  bloques,
  cubos,
  seguridad,
} from "../DB/database";

const materiales = [
  ...aceros,
  ...cemento,
  ...agregado,
  ...herramientas,
  ...bloques,
  ...cubos,
  ...seguridad,
];

export default function MaterialDetail() {
  const { id } = useParams();
  const item = materiales.find((p) => String(p.id) === id);
  if (!item) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold">Material no encontrado</h2>
        <Link to="/PRODUCTOS" className="text-amber-600 hover:underline">
          ← Volver a la lista
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <Link
          to="/PRODUCTOS"
          className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-800 mb-8"
        >
          ← Volver a Materiales
        </Link>

        {/* Grilla Principal */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Columna Imagen */}
          <div>
            <img
              src={
                item.image ||
                "https://via.placeholder.com/600x600?text=Sin+Imagen"
              }
              alt={item.name}
              className="w-full rounded-xl shadow-lg object-cover"
            />
          </div>

          {/* Columna Detalles */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {item.name}
            </h1>
            <p className="text-xl text-amber-700 font-bold mb-6">
              S/ {Number(item.price).toLocaleString("es-PE")}
            </p>
            <p className="text-gray-700 mb-6 text-justify">
              {item.details || "Descripción detallada del producto."}
            </p>

            <h3 className="font-bold mb-3 text-gray-800">Características</h3>
            <div className="text-gray-700 mb-6">
              <ul className="space-y-3">
                {item.caracteristicas?.map((caracteristica, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <FiCheck
                      size={20}
                      className="text-amber-600 flex-shrink-0 mt-0.5"
                    />
                    <span className="text-foreground">{caracteristica}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

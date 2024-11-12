import React from 'react';
import { Link } from 'react-router-dom';
import { TfiMenu } from "react-icons/tfi"; // Asegúrate de importar correctamente el icono

function Sidebar({ toggleDrawer, open }) {
  return (
    <div>
      {/* Barra de navegación fija */}
      <div className="bg-gradient-to-r from-gray-800 to-black text-white p-4 fixed top-0 left-0 w-full z-10 shadow-lg">
        <div className="flex justify-between items-center">
          <button onClick={toggleDrawer} className="text-2xl sm:hidden" aria-label="Abrir menú">
            <TfiMenu size={30} />
          </button>
          <span className="text-xl font-semibold">Gestión de Entidades</span>
        </div>
      </div>

      <div
        className={`fixed top-10 left-0 h-full bg-gradient-to-r from-gray-800 via-black to-gray-900 text-white shadow-2xl transition-all transform ${open ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0 w-64 p-6`}
      >
        <div className="flex flex-col space-y-4">
          <Link
            to="/persona"
            className="hover:bg-green-500 hover:text-white p-2 rounded transition-colors shadow-md hover:shadow-xl"
            aria-label="Ir a Personas"
          >
            Personas
          </Link>
          <Link
            to="/empleado"
            className="hover:bg-green-500 hover:text-white p-2 rounded transition-colors shadow-md hover:shadow-xl"
            aria-label="Ir a Empleados"
          >
            Empleados
          </Link>
          <Link
            to="/cliente"
            className="hover:bg-green-500 hover:text-white p-2 rounded transition-colors shadow-md hover:shadow-xl"
            aria-label="Ir a Clientes"
          >
            Clientes
          </Link>
          <Link
            to="/proveedor"
            className="hover:bg-green-500 hover:text-white p-2 rounded transition-colors shadow-md hover:shadow-xl"
            aria-label="Ir a Proveedores"
          >
            Proveedores
          </Link>
          <Link
            to="/categoria"
            className="hover:bg-green-500 hover:text-white p-2 rounded transition-colors shadow-md hover:shadow-xl"
            aria-label="Ir a Categorías"
          >
            Categorías
          </Link>
          <Link
            to="/producto"
            className="hover:bg-green-500 hover:text-white p-2 rounded transition-colors shadow-md hover:shadow-xl"
            aria-label="Ir a Productos"
          >
            Productos
          </Link>
          <Link
            to="/factura"
            className="hover:bg-green-500 hover:text-white p-2 rounded transition-colors shadow-md hover:shadow-xl"
            aria-label="Ir a Facturas"
          >
            Facturas
          </Link>
          <Link
            to="/venta"
            className="hover:bg-green-500 hover:text-white p-2 rounded transition-colors shadow-md hover:shadow-xl"
            aria-label="Ir a Ventas"
          >
            Ventas
          </Link>
          <Link
            to="/pedido"
            className="hover:bg-green-500 hover:text-white p-2 rounded transition-colors shadow-md hover:shadow-xl"
            aria-label="Ir a Pedidos"
          >
            Pedidos
          </Link>
          <Link
            to="/detalle-pedido"
            className="hover:bg-green-500 hover:text-white p-2 rounded transition-colors shadow-md hover:shadow-xl"
            aria-label="Ir a Detalles de Pedido"
          >
            Detalles de Pedido
          </Link>
          <Link
            to="/"
            className="hover:bg-green-500 hover:text-white p-2 rounded transition-colors shadow-md hover:shadow-xl"
            aria-label="Ir a la página de inicio"
          >
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
  Avatar,
} from "@mui/material";

const Producto = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    axios
      .get("https://django-railway-7fog.onrender.com/api/v1/productos/")
      .then((response) => {
        setProductos(response.data); // Almacenar los productos
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <Box className="flex justify-center mt-10">
      <div className="w-full max-w-6xl p-6 bg-white shadow-lg rounded-lg">
        <Typography variant="h4" align="center" className="font-bold mb-6 text-gray-800">
          Lista de Productos
        </Typography>
        <TableContainer component={Paper} className="shadow-md rounded-md">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className="font-semibold text-gray-700">Imagen</TableCell>
                <TableCell className="font-semibold text-gray-700">Nombre</TableCell>
                <TableCell className="font-semibold text-gray-700">Categoría</TableCell>
                <TableCell className="font-semibold text-gray-700">Proveedor</TableCell>
                <TableCell className="font-semibold text-gray-700">Stock</TableCell>
                <TableCell className="font-semibold text-gray-700">Precio</TableCell>
                <TableCell className="font-semibold text-gray-700">Fecha Vencimiento</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {productos.map((producto) => (
                <TableRow key={producto.id} className="hover:bg-gray-100">
                  <TableCell>
                    <Avatar
                      alt={producto.nombre}
                      src={producto.imagen}
                      sx={{ width: 50, height: 50 }}
                    />
                  </TableCell>
                  <TableCell>{producto.nombre}</TableCell>
                  <TableCell>{producto.categoria_nombre}</TableCell>
                  <TableCell>{producto.proveedor_nombre}</TableCell>
                  <TableCell>{producto.stock}</TableCell>
                  <TableCell>{`$${producto.precio}`}</TableCell>
                  <TableCell>{producto.fecha_vencimiento}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </Box>
  );
};

export default Producto;

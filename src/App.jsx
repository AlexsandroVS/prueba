import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import Persona from './components/Persona';
import Empleado from './components/Empleado';
import Cliente from './components/Cliente';
import Proveedor from './components/Proveedor';
import Categoria from './components/Categoria';
import Producto from './components/Producto';
import Factura from './components/Factura';
import Venta from './components/Venta';
import Pedido from './components/Pedido';
import DetallePedido from './components/DetallePedido';
import LandingPage from './LandingPage'; // Importamos la landing page

function App() {
  const [open, setOpen] = useState(false);


  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Router>
      <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      <Sidebar open={open} toggleDrawer={toggleDrawer} />

        <main
          style={{
            marginLeft: open ? 250 : 0, 
            padding: '20px',
            width: '100%',
            overflowY: 'auto',
            transition: 'margin-left 0.3s ease',
            marginTop: '60px', 
          }}
        >
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/persona" element={<Persona />} />
            <Route path="/empleado" element={<Empleado />} />
            <Route path="/cliente" element={<Cliente />} />
            <Route path="/proveedor" element={<Proveedor />} />
            <Route path="/categoria" element={<Categoria />} />
            <Route path="/producto" element={<Producto />} />
            <Route path="/factura" element={<Factura />} />
            <Route path="/venta" element={<Venta />} />
            <Route path="/pedido" element={<Pedido />} />
            <Route path="/detalle-pedido" element={<DetallePedido />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

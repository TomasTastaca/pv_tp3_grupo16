import { useState, useEffect, useRef } from "react";
import proyectoService from "../services/proyectoService";
import ProyectoCard from "../components/ProyectoCard.jsx";
import RegistroActividad from "../components/RegistroActividad.jsx";
import FormularioProyecto from "../components/FormularioProyecto.jsx";

import {
  Container,
  Typography,
  TextField,
  Box
} from "@mui/material";

const ListaProyectos = () => {
  // Estado para los proyectos
  const [proyectos, setProyectos] = useState(proyectoService.obtenerProyectos());

  // Estado para la fecha de actualización
  const [fechaActualizacion, setFechaActualizacion] = useState(null);

  // Bandera para controlar la primera carga y evitar que se actualice al iniciar
  const primeraCarga = useRef(true);

  // Estado para la búsqueda
  const [busqueda, setBusqueda] = useState("");

  // Eliminar proyectos
  const handleEliminar = (id) => {
    proyectoService.eliminarProyecto(id);
    setProyectos(proyectoService.obtenerProyectos());
  };

  // Agregar proyectos desde FormularioProyecto
  const handleAgregar = (nuevoProyecto) => {
    proyectoService.agregarProyecto(nuevoProyecto);
    setProyectos(proyectoService.obtenerProyectos());
  };

  // Buscar proyectos
  const handleBuscar = (e) => {
    const texto = e.target.value;
    setBusqueda(texto);
  };

  const proyectosFiltrados = proyectos.filter((p) =>
    p.titulo.toLowerCase().includes(busqueda.toLowerCase())
  );

  useEffect(() => {
    // Si es la primera carga, cambiamos la bandera y salimos
    if (primeraCarga.current) {
      primeraCarga.current = false;
      return;
    }

    console.log("¡El useEffect se ejecutó por una acción real!");

    const ahora = new Date();

    const dia = String(ahora.getDate()).padStart(2, "0");
    const mes = String(ahora.getMonth() + 1).padStart(2, "0");
    const anio = ahora.getFullYear();
    const horas = String(ahora.getHours()).padStart(2, "0");
    const minutos = String(ahora.getMinutes()).padStart(2, "0");

    const fecha = `${dia}/${mes}/${anio} a las ${horas}:${minutos} hs.`;

    setFechaActualizacion(fecha);
  }, [proyectos]);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Título principal */}
      <Typography
        variant="h3"
        component="h2"
        align="center"
        gutterBottom
        sx={{
          fontWeight: "bold",
          color: "#003366",
          mb: 4
        }}
      >
        Lista de Proyectos Educativos
      </Typography>

      {/* Buscar proyectos separado */}
      <Box sx={{ mb: 5 }}>
        <TextField
          fullWidth
          type="text"
          label="Buscar proyecto"
          placeholder="Buscar proyecto..."
          value={busqueda}
          onChange={handleBuscar}
          variant="outlined"
          sx={{
            backgroundColor: "#ffffff",
            borderRadius: 1
          }}
        />
      </Box>

      {/* Formulario de proyecto */}
      <Box sx={{ mb: 5 }}>
        <FormularioProyecto onAgregar={handleAgregar} />
      </Box>

      {/* Obtener proyectos */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)"
          },
          gap: 4,
          justifyItems: "center"
        }}
      >
        {proyectosFiltrados.map((p) => (
          <ProyectoCard
            key={p.id}
            proyecto={p}
            onEliminar={handleEliminar}
          />
        ))}
      </Box>

      {/* Registro de actividad */}
      <Box sx={{ mt: 4 }}>
        <RegistroActividad fecha={fechaActualizacion} />
      </Box>
    </Container>
  );
};

export default ListaProyectos;
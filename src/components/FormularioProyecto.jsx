import { useState } from "react";
import { Paper, Grid, TextField, MenuItem, Button, Typography, Box } from "@mui/material";

const FormularioProyecto = ({ onAgregar }) => {
  const [formulario, setFormulario] = useState({
    titulo: "",
    categoria: "",
    estado: "En curso",
    descripcion: "",
    pdf: "",
    github: "",
    drive: "",
    integrante: "",
    rol: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormulario({
      ...formulario,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formulario.titulo.trim() === "") return;

    const nuevoProyecto = {
      titulo: formulario.titulo,
      categoria: formulario.categoria,
      estado: formulario.estado,
      descripcion: formulario.descripcion,
      recursos: {
        pdf: formulario.pdf,
        github: formulario.github,
        drive: formulario.drive
      },
      equipo: [
        {
          nombre: formulario.integrante,
          rol: formulario.rol
        }
      ]
    };

    onAgregar(nuevoProyecto);

    setFormulario({
      titulo: "",
      categoria: "",
      estado: "En curso",
      descripcion: "",
      pdf: "",
      github: "",
      drive: "",
      integrante: "",
      rol: ""
    });
  };

  return (
    <Paper
      elevation={3}
      sx={{
        maxWidth: "1200px",
        mx: "auto",
        p: 4,
        borderRadius: 4,
        mb: 5
      }}
    >
      <Typography
        variant="h4"
        align="center"
        sx={{
          mb: 4,
          fontWeight: "bold",
          color: "#001f54"
        }}
      >
        Agregar Proyecto
      </Typography>

      <Box component="form" onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          {/* FILA 1 */}

          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              fullWidth
              label="Título del proyecto"
              name="titulo"
              value={formulario.titulo}
              onChange={handleChange}
              required
            />
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <TextField
              select
              fullWidth
              label="Seleccionar Categoría"
              name="categoria"
              value={formulario.categoria}
              onChange={handleChange}
              required
            >
              <MenuItem value="Tecnología Educativa">
                Tecnología Educativa
              </MenuItem>

              <MenuItem value="Inclusión Educativa">
                Inclusión Educativa
              </MenuItem>

              <MenuItem value="Aprendizaje basado en proyectos">
                Aprendizaje basado en proyectos
              </MenuItem>

              <MenuItem value="Innovación Educativa">
                Innovación Educativa
              </MenuItem>
            </TextField>
          </Grid>

          <Grid size={{ xs: 12, md: 3 }}>
            <TextField
              select
              fullWidth
              label="Estado"
              name="estado"
              value={formulario.estado}
              onChange={handleChange}
            >
              <MenuItem value="En curso">
                En curso
              </MenuItem>

              <MenuItem value="Finalizado">
                Finalizado
              </MenuItem>
            </TextField>
          </Grid>

          {/* FILA 2 */}

          <Grid size={12}>
            <TextField
              fullWidth
              multiline
              rows={3}
              label="Descripción del proyecto"
              name="descripcion"
              value={formulario.descripcion}
              onChange={handleChange}
              required
            />
          </Grid>

          {/* FILA 3 */}

          <Grid size={{ xs: 12, md: 3 }}>
            <TextField
              fullWidth
              label="Link PDF"
              name="pdf"
              value={formulario.pdf}
              onChange={handleChange}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 3 }}>
            <TextField
              fullWidth
              label="Link GitHub"
              name="github"
              value={formulario.github}
              onChange={handleChange}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 3 }}>
            <TextField
              fullWidth
              label="Link Drive"
              name="drive"
              value={formulario.drive}
              onChange={handleChange}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 3 }}>
            <TextField
              fullWidth
              label="Nombre integrante"
              name="integrante"
              value={formulario.integrante}
              onChange={handleChange}
            />
          </Grid>

          {/* FILA 4 */}

          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              fullWidth
              label="Rol integrante"
              name="rol"
              value={formulario.rol}
              onChange={handleChange}
            />
          </Grid>

          <Grid
            size={{ xs: 12, md: 8 }}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Button
              variant="contained"
              type="submit"
              sx={{
                backgroundColor: "#001f54",
                minWidth: "220px",
                py: 1.5,
                fontWeight: "bold",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#003a9c"
                }
              }}
            >
              Agregar Proyecto
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default FormularioProyecto;
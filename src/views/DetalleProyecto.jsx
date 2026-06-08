import { useParams, Link } from "react-router-dom";
import proyectoService from "../services/proyectoService";

import { Container, Paper, Typography, Box, Button, Stack, List, ListItem, Alert } from "@mui/material";

const DetalleProyecto = () => {
  const { id } = useParams();

  const proyecto = proyectoService.obtenerProyectoPorId(Number(id));

  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      {!proyecto ? (
        <Paper
          elevation={3}
          sx={{
            p: 4,
            borderRadius: 4,
            textAlign: "center"
          }}
        >
          <Alert severity="error" sx={{ mb: 3 }}>
            Proyecto no encontrado.
          </Alert>

          <Button
            component={Link}
            to="/proyectos"
            variant="contained"
          >
            Volver a proyectos
          </Button>
        </Paper>
      ) : (
        <Paper
          elevation={3}
          sx={{
            p: 5,
            borderRadius: 4,
            backgroundColor: "#ffffff"
          }}
        >
          {/* Título */}
          <Typography
            variant="h3"
            component="h2"
            align="center"
            gutterBottom
            sx={{
              fontWeight: "bold",
              color: "#003366",
              mb: 3
            }}
          >
            {proyecto.titulo}
          </Typography>

          
          {/* Descripción */}
          <Typography
            variant="body1"
            sx={{
              lineHeight: 1.8,
              color: "#001f3f",
              mb: 4,
              textAlign: "justify"
            }}
          >
            {proyecto.descripcion}
          </Typography>

          {/* Recursos */}
          <Typography
            variant="h6"
            align="center"
            sx={{
              fontWeight: "bold",
              color: "#003366",
              mb: 2
            }}
          >
            Recursos
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mb: 4
            }}
          >
            <Stack direction="row" spacing={2}>
              {proyecto.recursos?.pdf && (
                <Button
                  href={proyecto.recursos.pdf}
                  target="_blank"
                  variant="contained"
                >
                  PDF
                </Button>
              )}

              {proyecto.recursos?.github && (
                <Button
                  href={proyecto.recursos.github}
                  target="_blank"
                  variant="contained"
                >
                  GitHub
                </Button>
              )}

              {proyecto.recursos?.drive && (
                <Button
                  href={proyecto.recursos.drive}
                  target="_blank"
                  variant="contained"
                >
                  Drive
                </Button>
              )}
            </Stack>
          </Box>

          {/* Equipo */}
          <Typography
            variant="h6"
            align="center"
            sx={{
              fontWeight: "bold",
              color: "#003366",
              mb: 2
            }}
          >
            Equipo de Trabajo
          </Typography>

          <List>
            {proyecto.equipo?.map((integrante, index) => (
              <ListItem
                key={index}
                sx={{
                  backgroundColor: "#f1f5f9",
                  borderRadius: 2,
                  mb: 1
                }}
              >
                <Typography>
                  <strong>{integrante.nombre}</strong> - {integrante.rol}
                </Typography>
              </ListItem>
            ))}
          </List>

          {/* Botón volver */}
          <Button
            component={Link}
            to="/proyectos"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              py: 1.5,
              fontWeight: "bold"
            }}
          >
            Volver
          </Button>
        </Paper>
      )}
    </Container>
  );
};
export default DetalleProyecto;




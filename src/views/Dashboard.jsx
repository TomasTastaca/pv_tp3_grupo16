import { Container, Typography, Card, CardContent, Paper, Box } from "@mui/material";

const Dashboard = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>

      {/* Banner principal */}
      <Paper
        elevation={0}
        sx={{
          backgroundColor: "white",
          p: 5,
          borderRadius: 4,
          boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
          mb: 4
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          sx={{
            color: "#001f54",
            fontWeight: "bold",
            mb: 2
          }}
        >
          Bienvenido al Inicio :D
        </Typography>

        <Typography
          variant="h6"
          sx={{
            fontWeight: 400,
            opacity: 0.95,
            lineHeight: 1.6
          }}
        >
          Plataforma centralizada para el registro, seguimiento y difusión
          de proyectos de innovación e inclusión educativa. Este espacio
          permite documentar propuestas pedagógicas, coordinar equipos de
          trabajo y acceder a recursos clave como repositorios de desarrollo
          y documentación técnica en beneficio de la comunidad académica.
        </Typography>
      </Paper>

      {/* Tarjetas */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)"
          },
          gap: 3
        }}
      >
        <Card
          sx={{
            borderRadius: 3,
            transition: "0.3s",
            "&:hover": {
              transform: "translateY(-5px)",
              boxShadow: 6
            }
          }}
        >
          <CardContent>
            <Typography variant="h6" color="text.secondary">
              Total de Proyectos
            </Typography>

            <Typography
              variant="h4"
              color="primary"
              sx={{ fontWeight: "bold", mt: 1 }}
            >
              5
            </Typography>
          </CardContent>
        </Card>

        <Card
          sx={{
            borderRadius: 3,
            transition: "0.3s",
            "&:hover": {
              transform: "translateY(-5px)",
              boxShadow: 6
            }
          }}
        >
          <CardContent>
            <Typography variant="h6" color="text.secondary">
              Proyectos en Curso
            </Typography>

            <Typography
              variant="h4"
              color="primary"
              sx={{ fontWeight: "bold", mt: 1 }}
            >
              2
            </Typography>
          </CardContent>
        </Card>

        <Card
          sx={{
            borderRadius: 3,
            transition: "0.3s",
            "&:hover": {
              transform: "translateY(-5px)",
              boxShadow: 6
            }
          }}
        >
          <CardContent>
            <Typography variant="h6" color="text.secondary">
              Proyectos Finalizados
            </Typography>

            <Typography
              variant="h4"
              color="primary"
              sx={{ fontWeight: "bold", mt: 1 }}
            >
              3
            </Typography>
          </CardContent>
        </Card>
      </Box>

    </Container>
  );
};

export default Dashboard;
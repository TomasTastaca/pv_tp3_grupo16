import { Container, Typography, Grid, Card, CardContent, Paper } from '@mui/material'

const Dashboard = () => {
    return (
        <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
            {/* Banner Principal - Ocupa el 100% del ancho del contenedor de forma natural */}
            <Paper 
                elevation={0} 
                sx={{ 
                    backgroundColor: 'white', 
                    padding: '40px', 
                    borderRadius: '20px', 
                    boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
                    marginBottom: '30px' // Separa el banner de las tarjetas de abajo
                }}
            >
                {/* Título */}
                <Typography 
                    variant="h4" 
                    component="h1" 
                    sx={{ color: '#001f54', fontWeight: 'bold', marginBottom: '20px' }}
                >
                    Bienvenido al Inicio
                </Typography>
                
                {/* Descripción */}
                <Typography 
                    variant="h6"  
                    sx={{ fontWeight: 400, opacity: 0.95, lineHeight: 1.6 }}
                >
                    "Plataforma centralizada para el registro, seguimiento y difusión de proyectos de innovación e inclusión educativa. Este espacio permite documentar propuestas pedagógicas, coordinar equipos de trabajo y acceder a recursos clave como repositorios de desarrollo y documentación técnica en beneficio de la comunidad académica."
                </Typography>
            </Paper>

            {/* Tarjetas*/}
            <Grid container spacing={3} justifyContent="center">
                <Grid item xs={12} sm={6}>
                    <Card sx={{ borderRadius: 3, transition: '0.3s', '&:hover': { transform: 'translateY(-5px)', boxShadow: 6 } }}>
                        <CardContent>
                            <Typography variant="h6" color="textSecondary">Total de Proyectos</Typography>
                            <Typography variant="h4" color="primary" sx={{ fontWeight: 'bold', mt: 1 }}>5</Typography>
                        </CardContent>
                    </Card>
                </Grid> 
                
                <Grid item xs={12} sm={6}>
                    <Card sx={{ borderRadius: 3, transition: '0.3s', '&:hover': { transform: 'translateY(-5px)', boxShadow: 6 } }}>
                        <CardContent>
                            <Typography variant="h6" color="textSecondary">Proyectos en Curso</Typography>
                            <Typography variant="h4" color="primary" sx={{ fontWeight: 'bold', mt: 1 }}>2</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                 <Grid item xs={12} sm={6}>
                    <Card sx={{ borderRadius: 3, transition: '0.3s', '&:hover': { transform: 'translateY(-5px)', boxShadow: 6 } }}>
                        <CardContent>
                            <Typography variant="h6" color="textSecondary">Proyectos Finalizados</Typography>
                            <Typography variant="h4" color="primary" sx={{ fontWeight: 'bold', mt: 1 }}>3</Typography>
                        </CardContent>
                    </Card>
                </Grid> 
            </Grid>
        </Container> 
    );
}

export default Dashboard;
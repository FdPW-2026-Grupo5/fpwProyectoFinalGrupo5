import { useState } from 'react';
import { Container, Card, CardContent, Typography, Button, Grid, CircularProgress } from '@mui/material';
import { useJuegoHoraDeComer } from '../hooks/useComidasAnimales';
import TarjetaAnimal from '../components/TarjetaAnimal';

function JuegoHoraDeComerPage({ onFinalizar }) {
  const { preguntas, error, cargando } = useJuegoHoraDeComer();
  const [rondaActual, setRondaActual] = useState(0);
  const [puntosAcumulados, setPuntosAcumulados] = useState(0);
  const [mensaje, setMensaje] = useState('¡Hora de Comer!');

  if (cargando) {
    return (
      <Container sx={{ textAlign: 'center', mt: 8 }}>
        <CircularProgress size={60} />
        <Typography sx={{ mt: 2, fontWeight: 'bold' }}>Preparando la granja...</Typography>
      </Container>
    );
  }

  if (error) {
    return (
      <Container sx={{ textAlign: 'center', mt: 8 }}>
        <Typography color="error" variant="h6">¡Ups! Hubo un problema: {error}</Typography>
      </Container>
    );
  }

  const ronda = preguntas[rondaActual];
  const handleRespuesta = (esCorrecta) => {
    let nuevosPuntos = puntosAcumulados;
    if (esCorrecta) {
      setMensaje(`¡Correcto! La ${ronda.animal} comió.`);
      nuevosPuntos += 10;
      setPuntosAcumulados(nuevosPuntos);
    } else {
      setMensaje("¡Esa no es su comida!");
    }

    setTimeout(() => {
      setMensaje('¡Hora de Comer!');
      if (rondaActual < preguntas.length - 1) {
        setRondaActual(rondaActual + 1);
      } else {
        onFinalizar(nuevosPuntos);
      }
    }, 1500);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Card elevation={4} sx={{ p: 2, backgroundColor: '#f9fbe7' }}>
        <CardContent sx={{ textAlign: 'center' }}>
          <Typography variant="h5" sx={{ color: '#558b2f', fontWeight: 'bold', mb: 4 }}>
            {mensaje}
          </Typography>

          <TarjetaAnimal nombre={ronda.animal} imagen={ronda.imagen} />

          <Grid container spacing={2} justifyContent="center" sx={{ mt: 4 }}>
            {ronda.opcionesComida.map((opcion, index) => (
              <Grid item xs={12} sm={4} key={index}>
                <Button
                  fullWidth
                  variant="outlined"
                  onClick={() => handleRespuesta(opcion.correcta)}
                  sx={{ py: 2, fontWeight: 'bold', color: '#2e7d32', backgroundColor: '#ffffff' }}
                >
                  {opcion.comida}
                </Button>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
}

export default JuegoHoraDeComerPage;

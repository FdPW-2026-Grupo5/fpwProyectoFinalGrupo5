import { useEffect, useState } from 'react';
import { listarComidasAnimales } from '../services/serviceComidasAnimales';

export const useJuegoHoraDeComer = () => {
  const [preguntas, setPreguntas] = useState([]);
  const [error, setError] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const cargarDatos = async () => {
      try {
        setError(null);
        const data = await listarComidasAnimales();
        setPreguntas(Array.isArray(data) ? data : []);
      } catch (e) {
        setPreguntas([]);
        setError(e.message || "Error al cargar el juego");
      } finally {
        setCargando(false);
      }
    };

    cargarDatos();
  }, []);

  return { preguntas, error, cargando };
};

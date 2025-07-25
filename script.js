// Lista de frases (31)
const FRASES = [
  '“Lo que no nos mata nos hace más fuertes.” — Nietzsche',
  '“La felicidad depende de nosotros mismos.” — Aristóteles',
  '“La vida es como montar en bicicleta. Para mantener el equilibrio, tienes que seguir adelante.” — Albert Einstein',
  '“El mayor descubrimiento de mi generación es que un ser humano puede cambiar su vida al cambiar su actitud.” — William James',
  '“El éxito es la suma de pequeños esfuerzos repetidos día tras día.” — Robert Collier',
  '“No hay nada permanente excepto el cambio.” — Heráclito',
  '“La mente es todo. Lo que piensas, te conviertes.” — Buda',
  '“La disciplina es el puente entre metas y logros.” — Jim Rohn',
  '“Haz de tu vida un sueño, y de tu sueño una realidad.” — Antoine de Saint-Exupéry',
  '“La libertad es el poder de hacer lo correcto.” — Viktor Frankl',
  '“El mayor obstáculo para el éxito es el miedo al fracaso.” — Sven Goran Eriksson',
  '“La mejor manera de predecir el futuro es crearlo.” — Peter Drucker',
  '“No puedes detener las olas, pero puedes aprender a surfear.” — Jon Kabat-Zinn',
  '“El hombre nunca sabe de lo que es capaz hasta que lo intenta.” — Charles Dickens',
  '“La voluntad es el motor de nuestros actos.” — Platón',
  '“La vida es cambio. El crecimiento es opcional.” — John C. Maxwell',
  '“El valor no es la ausencia de miedo, sino el triunfo sobre él.” — Nelson Mandela',
  '“El hábito es el mejor de los sirvientes o el peor de los amos.” — Nathaniel Emmons',
  '“La sabiduría comienza en la reflexión.” — Sócrates',
  '“Nuestro mayor miedo no es que seamos inadecuados, sino que somos poderosos más allá de toda medida.” — Marianne Williamson',
  '“El secreto del éxito es la constancia en el propósito.” — Benjamin Disraeli',
  '“Sólo aquellos que se atreven a tener grandes fracasos terminan logrando grandes éxos.” — Robert F. Kennedy',
  '“El hombre razonable se adapta al mundo; el hombre irrazonable insiste en adaptar el mundo a sí mismo.” — George Bernard Shaw',
  '“No busques los errores, busca un remedio.” — Henry Ford',
  '“La vida es lo que ocurre mientras estás ocupado haciendo otros planes.” — John Lennon',
  '“La mente es como un paracaídas, solo funciona si se abre.” — Albert Einstein',
  '“La paciencia es amarga, pero su fruto es dulce.” — Jean-Jacques Rousseau',
  '“El conocimiento es poder.” — Francis Bacon',
  '“No cuentes los días, haz que los días cuenten.” — Muhammad Ali',
  '“La mayor gloria no es nunca caer, sino levantarse siempre.” — Confucio',
  '“La vida es demasiado corta para desperdiciarla en cosas que no te hacen feliz.” — Karl Popper',
  '“Ser uno mismo en un mundo que constantemente intenta hacer de ti otra cosa es el mayor logro.” — Ralph Waldo Emerson'
];

// Mensajes motivacionales por milestones
const MOTIVATION = {
  7: "¡Ya pasaste 7 días! ¡Seguí así Gonzalo!",
  14: "¡14 días sin alcohol! ¡Sos un ejemplo!",
  21: "¡21 días, increíble constancia Gonzalo!",
  30: "¡30 días! ¡Celebrá tu logro, seguí adelante!"
};

// NUEVA FECHA FIJA: 21/07/2025
function getStartDate() {
  // Formato: yyyy-mm-dd (mes 0-indexado para JS)
  return new Date(2025, 6, 21); // 21 de julio de 2025 (mes 6)
}

// Días desde la fecha indicada hasta hoy
function getDaysSince(date) {
  const now = new Date();
  now.setHours(0,0,0,0);
  const diff = now - date;
  return Math.max(Math.floor(diff / (1000 * 60 * 60 * 24)), 0);
}

function mainRender() {
  const startDate = getStartDate();
  const days = getDaysSince(startDate);
  document.getElementById('dias-numero').textContent = days;

  // Frase del día según el número de días (cíclico)
  const frase = FRASES[days % FRASES.length];
  const fraseDiv = document.getElementById('frase');
  fraseDiv.textContent = frase;

  // Mensaje motivacional
  const motivacion = MOTIVATION[days] || "";
  const motivDiv = document.getElementById('motivacion');
  if (motivacion) {
    motivDiv.textContent = motivacion;
    motivDiv.classList.add('visible');
  } else {
    motivDiv.textContent = "";
    motivDiv.classList.remove('visible');
  }

  // Fecha de inicio (fija: 21/07/2025)
  document.getElementById('fecha-label').textContent =
    "Desde el 21/07/2025";

  // Animación frase: reiniciar
  fraseDiv.style.animation = "none";
  void fraseDiv.offsetWidth;
  fraseDiv.style.animation = null;
}

// Actualiza cada minuto por si cambia el día a la medianoche
mainRender();
setInterval(mainRender, 60 * 1000);

// Permite resetear (solo limpia localStorage, pero no afecta el contador ahora)
window.addEventListener('keydown', function(e) {
  if ((e.key === 'R' || e.key === 'r') && e.shiftKey) {
    if (confirm("¿Seguro que querés reiniciar el contador desde el 21/07/2025?")) {
      mainRender();
    }
  }
});
// Grupos consonánticos inseparables en español
const inseparables = new Set([
  "bl","br","cl","cr","dr","fl","fr","gl","gr","pl","pr","tr"
]);

function separarSilabasOld(palabra) {
  palabra = palabra.toLowerCase();
  const vocales = "aeiouáéíóúü";
  let silabas = [];
  let actual = "";

  for (let i = 0; i < palabra.length; i++) {
    actual += palabra[i];

    if (vocales.includes(palabra[i])) {
      let j = i + 1;
      let consonantes = "";

      // Acumular consonantes después de la vocal
      while (j < palabra.length && !vocales.includes(palabra[j])) {
        consonantes += palabra[j];
        j++;
      }

      // Reglas de separación
      if (consonantes.length === 0) {
        silabas.push(actual);
        actual = "";
      } else if (consonantes.length === 1) {
        silabas.push(actual);
        actual = "";
      } else if (consonantes.length === 2) {
        if (inseparables.has(consonantes)) {
          silabas.push(actual);
          actual = "";
        } else {
          silabas.push(actual + consonantes[0]);
          actual = "";
          j -= 1;
        }
      } else {
        silabas.push(actual + consonantes[0]);
        actual = "";
        j -= consonantes.length - 1;
      }

      i = j - 1;
    }
  }

  if (actual) silabas.push(actual);
  return silabas;
}


function separarSilabas(palabra) {
  palabra = palabra.toLowerCase();

  // Expresión regular para sílabas españolas
  // Considera: vocales, diptongos/triptongos, consonantes iniciales
  const regex = /(?:[bcdfghjklmnñpqrstvwxyz]*)(?:[aeiouáéíóúü]+(?:[iúuü]?|[aeiouáéíóúü]*))/g;

  let silabas = [];
  let match;

  while ((match = regex.exec(palabra)) !== null) {
    silabas.push(match[0]);
  }

  return silabas;
}

export { separarSilabas };
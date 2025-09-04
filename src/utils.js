function separarSilabas(palabra) {
  palabra = palabra.toLowerCase();
  const vocales = "aeiouáéíóúü";
  const inseparables = ["bl","br","cl","cr","dr","fl","fr","gl","gr","pl","pr","tr"];
  
  let silabas = [];
  let i = 0;

  while (i < palabra.length) {
    let silaba = palabra[i];
    i++;

    // Si empieza con consonante, buscar la vocal siguiente
    while (i < palabra.length && !vocales.includes(palabra[i])) {
      silaba += palabra[i];
      i++;
    }

    // Agregar la vocal al final de la sílaba
    if (i < palabra.length && vocales.includes(palabra[i])) {
      silaba += palabra[i];
      i++;
    }

    // Revisar consonantes que siguen y aplicar reglas
    let cons = "";
    while (i < palabra.length && !vocales.includes(palabra[i])) {
      cons += palabra[i];
      i++;
    }

    if (cons.length === 0) {
      silabas.push(silaba);
    } else if (cons.length === 1) {
      silabas.push(silaba);
      i -= 1; // dejar consonante para la siguiente sílaba
    } else if (cons.length === 2) {
      if (inseparables.includes(cons)) {
        silabas.push(silaba);
      } else {
        silabas.push(silaba + cons[0]);
        i -= 1; // segunda consonante para la siguiente sílaba
      }
    } else {
      silabas.push(silaba + cons[0]);
      i -= cons.length - 1;
    }
  }

  return silabas;
}

function separarSilabasRegex(palabra) {
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
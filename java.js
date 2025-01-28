const calcular = document.getElementById('calcular');

function calcularEra() {
    const evento = document.getElementById('evento').value;
    const tempo = +document.getElementById('tempo').value;
    const resultado = document.getElementById('resultado');

    if (evento !== '' && tempo !== '') {
        let era = '';
        if (tempo <= 2.58) {
            era = 'no Período Quaternário da Era Cenozóica.';
        } else if (tempo <= 66) {
            era = 'na Era Mesozóica.';
        } else if (tempo <= 252.17) {
            era = 'na Era Paleozóica.';
        } else if (tempo <= 541) {
            era = 'no Pré-Cambriano.';
        } else {
            era = 'em uma época muito anterior ao Pré-Cambriano.';
        }

        resultado.textContent = `O evento "${evento}" ocorreu ${tempo} milhões de anos atrás, ou seja, ${era}`;
    } else {
        resultado.textContent = 'Preencha todos os campos!!!';
    }
}

calcular.addEventListener('click', calcularEra);

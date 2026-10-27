const datos = {
    coordinador: 'Melany',
    filas: [
        ['Intenciones', 'Jhostin'],
        ['Moniciones', 'Emily'],
        ['1ra.', 'Mayerly'],
        ['Salmo', 'Ana'],
        ['2da.', 'Marlon'],
        ['O.F.', 'Estela'],
        [
            'Ofrendas',
            [
                'Angel',
                'Antonio',
                'Armando',
                'Cesar',
                'Cristina',
                'Maribel Gil',
                'Marta',
                'Rosa',
                'Sergio'
            ]
        ]
    ]
};
function textoPlano(valor) {
    return valor.replace(/\s+/g, ' ').trim();
}

function leerTexto(clave) {
    const valor = localStorage.getItem(clave);
    return valor === null ? null : valor;
}

function leerLista(clave) {
    const valor = localStorage.getItem(clave);
    if (valor === null) return null;
    try {
        const lista = JSON.parse(valor);
        return Array.isArray(lista) ? lista : null;
    } catch {
        return null;
    }
}

function prepararEditable(elemento, guardar) {
    elemento.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            elemento.blur();
        }
    });

    elemento.addEventListener('paste', (event) => {
        event.preventDefault();
        const texto = textoPlano(event.clipboardData.getData('text/plain'));
        document.execCommand('insertText', false, texto);
    });

    elemento.addEventListener('blur', () => {
        elemento.textContent = textoPlano(elemento.textContent);
        guardar();
    });
}

const nombresGuardados = leerLista('lectores-nombres');
c = document.getElementById('contenido');
datos.filas.forEach((f, indice) => {
    let d = document.createElement('div');
    d.className = 'fila';
    let of = Array.isArray(f[1]);
    const servicio = document.createElement('div');
    servicio.className = 'serv';
    servicio.textContent = f[0];
    const nombre = document.createElement('div');
    nombre.className = 'nombre editable' + (of ? ' ofrendas' : '');
    nombre.contentEditable = 'true';
    nombre.spellcheck = false;
    nombre.dataset.placeholder = 'Nombre';
    nombre.textContent = nombresGuardados && typeof nombresGuardados[indice] === 'string'
        ? nombresGuardados[indice]
        : (of ? f[1].join(' • ') : f[1]);
    prepararEditable(nombre, guardarNombres);
    d.append(servicio, nombre);
    c.appendChild(d);
});

function guardarNombres() {
    const nombres = [...document.querySelectorAll('#contenido .nombre')].map((elemento) => elemento.textContent);
    localStorage.setItem('lectores-nombres', JSON.stringify(nombres));
}

const coord = document.getElementById('coord');
const coordGuardado = leerTexto('lectores-coord');
coord.textContent = coordGuardado === null ? datos.coordinador : coordGuardado;
prepararEditable(coord, () => {
    localStorage.setItem('lectores-coord', coord.textContent);
});

const selectorColor = document.getElementById('color-liturgico');
selectorColor.addEventListener('change', () => {
    document.documentElement.dataset.tiempo = selectorColor.value;
});

const fecha = document.getElementById('fecha');
const fechaGuardada = leerTexto('lectores-fecha');
if (fechaGuardada !== null) fecha.textContent = fechaGuardada;
prepararEditable(fecha, () => {
    localStorage.setItem('lectores-fecha', fecha.textContent);
});

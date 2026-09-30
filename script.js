
const datos = {
    coordinador: 'Rosa',
    filas: [
        ['Intenciones', 'Jhostin'],
        ['Moniciones', 'Estela'],
        ['1ra.', 'Emily'],
        ['Salmo', 'Melany'],
        ['2da.', 'Marlon'],
        ['O.F.', 'Antonio'],
        [
            'Ofrendas',
            [
                'Ana',
                'Angel',
                'Armando',
                'Cesar',
                'Cristina',
                'Maribel Gil',
                'Marta',
                'Mayerly',
                'Sergio'
            ]
        ]
    ]
};
c = document.getElementById('contenido');
datos.filas.forEach(f => {
    let d = document.createElement('div');
    d.className = 'fila';
    let of = Array.isArray(f[1]);
    d.innerHTML = `<div class="serv">${f[0]}</div><div class="nombre ${of ? 'ofrendas' : ''}">${of ? f[1].join(' • ') : f[1]}</div>`;
    c.appendChild(d);
});
document.getElementById('coord').textContent = datos.coordinador;

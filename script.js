const datos = {
    coordinador: 'Sergio',
    filas: [
        ['Intenciones', 'Emily'],
        ['Moniciones', 'Antonio'],
        ['1ra.', 'Rosa'],
        ['Salmo', 'Mayerly'],
        ['2da.', 'Ana'],
        ['O.F.', 'Marta'],
        [
            'Ofrendas',
            [
                'Armando',
                'Cesar',
                'Cristina',
                'Estela',
                'Jazmin',
                'Jhostin',
                'Maribel Gil',
                'Melany',
                'Marlon'
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

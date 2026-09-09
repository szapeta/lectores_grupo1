const datos = {
    coordinador: 'Marta',
    filas: [
        ['Intenciones', 'Melany'],
        ['Moniciones', 'Marlon'],
        ['1ra.', 'Mayerly'],
        ['Salmo', 'Jazmin'],
        ['2da.', 'Estela'],
        ['O.F.', 'Ana'],
        [
            'Ofrendas',
            [
                'Antonio',
                'Armando',
                'Cesar',
                'Cristina',
                'Emily',
                'Jhostin',
                'Maribel Gil',
                'Rosa',
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

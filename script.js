const datos = {
    coordinador: 'Sergio',
    filas: [
        ['Intenciones', 'Melany'],
        ['Moniciones', 'Mayerly'],
        ['1ra.', 'Rosa'],
        ['Salmo', 'Marta'],
        ['2da.', 'Cesar'],
        ['O.F.', 'Emily'],
        [
            'Ofrendas',
            [
                'Ana',
                'Angel',
                'Antonio',
                'Armando',
                'Cristina',
                'Estela',
                'Jhostin',
                'Maribel Gil',
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

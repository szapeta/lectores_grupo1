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
c = document.getElementById('contenido');
datos.filas.forEach(f => {
    let d = document.createElement('div');
    d.className = 'fila';
    let of = Array.isArray(f[1]);
    d.innerHTML = `<div class="serv">${f[0]}</div><div class="nombre ${of ? 'ofrendas' : ''}">${of ? f[1].join(' • ') : f[1]}</div>`;
    c.appendChild(d);
});
document.getElementById('coord').textContent = datos.coordinador;

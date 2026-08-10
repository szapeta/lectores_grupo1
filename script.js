const datos = {
    coordinador: 'Sergio',
    filas: [
        ['Intenciones', 'Melany'],
        ['Moniciones', 'Antonio'],
        ['1ra.', 'Estela'],
        ['Salmo', 'Jazmin'],
        ['2da.', 'Cesar'],
        ['O.F.', 'Marta'],
        [
            'Ofrendas',
            [
                'Ana',
                'Armando',
                'Cristina',
                'Emily',
                'Justin',
                'Marlon',
                'Mayerly',
                'Rosa'
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

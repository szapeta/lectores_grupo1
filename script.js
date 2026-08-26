const datos = {
    coordinador: 'Mayerly',
    filas: [
        ['Intenciones', 'Emily'],
        ['Moniciones', 'Marlon'],
        ['1ra.', 'Estela'],
        ['Salmo', 'Marta'],
        ['2da.', 'Antonio'],
        ['O.F.', 'Rosa'],
        [
            'Ofrendas',
            [
                "Ana", "Armando", "Cesar", "Cristina", "Jazmin", "Jhostin", "Maribel Gil", "Melany", "Sergio"
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

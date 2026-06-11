const products = [
    {
        id: 0,
        name: 'Run Snekaers',
        prezzo: 89,
        category: 'scarpe',
        descrizione: 'Scarpa leggera per la corsa, suola in gomma traspirante.',
        img: 'https://placehold.co/300x180'
    },
    {
        id: 1,
        name: 'T-shirt Basic',
        prezzo: 19,
        category: 'abbigliamento',
        descrizione: 'Cotone biologico, taglio regolare, disponibile in 5 colori.',
        img: 'https://placehold.co/300x180'
    },
    {
        id: 2,
        name: 'Borsa City',
        prezzo: 49,
        category: 'accessori',
        descrizione: 'Tessuto resistente, tasca interna, cinghia regolabile.',
        img: 'https://placehold.co/300x180'
    },
    {
        id: 3,
        name: 'Giacca Sportiva',
        prezzo: 129,
        category: 'abbigliamento',
        descrizione: 'Giacca leggera in tessuto tecnico, ideale per lo sport e il tempo libero.',
        img: 'https://placehold.co/300x180'
    },
    {
        id: 4,
        name: 'Cappello da Baseball',
        prezzo: 24,
        category: 'accessori',
        descrizione: 'Cappello regolabile in cotone, visiera rigida, disponibile in vari colori.',
        img: 'https://placehold.co/300x180'
    },
    {
        id: 5,
        name: 'Scarpe da Trekking',
        prezzo: 109,
        category: 'scarpe',
        descrizione: 'Suola antiscivolo, tomaia impermeabile, perfette per i sentieri di montagna.',
        img: 'https://placehold.co/300x180'
    },
];

const productCard = document.getElementById('container-prodotti');
const filters = document.getElementById('filtri');

function renderProducts(lista) {
    const innesto = lista.map(p => {
        return `<article class="col-12 col-sm-6 col-xl-4 col-xxl-3 mb-3">
        <div class="card h-100 shadow-sm ${p.category}">
          <img src="${p.img}" class="card-img-top" alt="${p.name}">
          <div class="card-body">
            <h5 class="card-title">${p.name}</h5>
            <p class="card-text text-muted">${p.descrizione}</p>
            <p class="fw-bold fs-5 m-0">&euro; ${p.prezzo}</p>
          </div>
          <div class="card-footer bg-white border-0">
            <button type="button" class="btn btn-primary w-100" data-bs-toggle="modal" data-bs-target="#prodotto-1">Dettagli</button>
          </div>
        </div>
      </article>`
    }).join('');
    productCard.innerHTML = innesto;
}
renderProducts(products);

const toggleBtn = document.getElementById('toggle-tema');



toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    toggleBtn.textContent = document.body.classList.contains('dark') ? 'Tema chiaro' : 'Tema scuro';
});

/* productCard.addEventListener('click' () => {
    
}) */

filters.addEventListener('click', (e) => {
    const button = e.target.closest('[data-categoria]');
    if (!button) {
        return;
    }
    filters.querySelectorAll('.btn').forEach(b => {
        b.classList.remove('active');
    });
    button.classList.add('active');

    const category = button.dataset.categoria;
    const filtered = category === 'tutti' ? products : products.filter(p => {
        return p.category === category;
    });
    renderProducts(filtered);
});
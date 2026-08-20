const sample = [
    { title: 'Bolo de Cenoura', desc: 'Fofinho, com cobertura de chocolate', time: '45 min', img: 'img/bolo_cenoura_horizontal.jpg' },
    { title: 'Brigadeiro Gourmet', desc: 'Tradicional com toque especial', time: '25 min', img: 'img/brigadeiro_gourmet.webp' },
    { title: 'Escondidinho', desc: 'Purê cremoso com carne temperada', time: '50 min', img: 'img/Escondidinho-de-carne-moida.jpg' },
    { title: 'Quiche de Alho-Poró', desc: 'Perfeita para um lanche elegante', time: '40 min', img: 'img/receita-quiche-alho-poro.jpg' }
];

function createCard(item) {
    const el = document.createElement('article');
    el.className = 'card';
    el.innerHTML = `
    <div class="thumb" style="background-image:url('${item.img}')"></div>
    <h4>${item.title} <span class="fav" title="Favoritar">⭐</span></h4>
    <p>${item.desc}</p>
    <div class="meta"><span>${item.time}</span><span>Por: Grupo</span></div>
  `;
    return el;
}

function mountCards() {
    const container = document.getElementById('cards');
    container.innerHTML = '';
    sample.forEach(s => container.appendChild(createCard(s)));
    // add fav interactions
    document.querySelectorAll('.card .fav').forEach(el => {
        el.addEventListener('click', (e) => {
            e.target.textContent = e.target.textContent === '⭐' ? '💖' : '⭐';
            e.target.classList.toggle('liked');
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    mountCards();
    const btn = document.getElementById('randomRecipe');
    btn.addEventListener('click', () => {
        const idx = Math.floor(Math.random() * sample.length);
        const it = sample[idx];
        alert(`Receita sorteada: ${it.title} — ${it.time}`);
    });
});

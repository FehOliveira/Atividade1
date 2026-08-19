/**
 * Receitas da Galera - Scripts Globais e da Página de Dicas
 */

// Dados de amostra para a página inicial
const sample = [
    { title: 'Bolo de Cenoura', desc: 'Fofinho, com cobertura de chocolate', time: '45 min', img: 'img/bolo_cenoura_horizontal.jpg' },
    { title: 'Brigadeiro Gourmet', desc: 'Tradicional com toque especial', time: '25 min', img: 'img/brigadeiro_gourmet.webp' },
    { title: 'Escondidinho', desc: 'Purê cremoso com carne temperada', time: '50 min', img: 'img/Escondidinho-de-carne-moida.jpg' },
    { title: 'Quiche de Alho-Poró', desc: 'Perfeita para um lanche elegante', time: '40 min', img: 'img/receita-quiche-alho-poro.jpg' }
];

// Dados das Dicas Culinárias
const defaultTips = [
    {
        id: 'tip-1',
        title: 'Carnes Suculentas e Crosta Dourada (Reação de Maillard)',
        category: 'tecnica',
        categoryLabel: '🔪 Preparo & Técnicas',
        desc: 'Seque muito bem a carne com papel toalha antes de temperar e grelhar. Aqueça a frigideira até começar a soltar fumaça antes de colocar o corte. Não fique mexendo ou furando a carne nos primeiros minutos!',
        secret: 'A umidade superficial ferve a carne no vapor em vez de dourar. A carne seca garante a formação imediata da casquinha caramelizada perfeita.',
        author: 'Chef André',
        likes: 42
    },
    {
        id: 'tip-2',
        title: 'Bolo Sempre Alto, Fofo e Sem Murchar',
        category: 'confeitaria',
        categoryLabel: '🍰 Confeitaria & Massas',
        desc: 'Utilize todos os ingredientes (especialmente ovos, leite e manteiga) em temperatura ambiente. Peneire a farinha e o fermento químico juntos para aerar a massa.',
        secret: 'Nunca abra a porta do forno nos primeiros 25 minutos! A perda brusca de calor colapsa as bolsas de ar em expansão e sola o bolo.',
        author: 'Vovó Clara',
        likes: 58
    },
    {
        id: 'tip-3',
        title: 'Cebola Picadinha Sem Chorar e Sem Amargar',
        category: 'rapida',
        categoryLabel: '⏱️ Truques Rápidos',
        desc: 'Descasque a cebola e deixe-a de molho em uma tigela com água bem gelada por 10 minutos antes de picar. Use uma faca bem amolada para cortar.',
        secret: 'Facas cegas esmagam as células da cebola liberando gás sulfóxido no ar. A água gelada inativa as enzimas que causam a ardência.',
        author: 'Cozinha Prática',
        likes: 35
    },
    {
        id: 'tip-4',
        title: 'Descascar Ovos Cozidos em Poucos Segundos',
        category: 'rapida',
        categoryLabel: '⏱️ Truques Rápidos',
        desc: 'Adicione 1 colher de vinagre ou bicarbonato de sódio na água fervente. Assim que desligar o fogo, transfira os ovos direto para uma tigela com água e pedras de gelo.',
        secret: 'O choque térmico faz a clara se contrair para longe da membrana da casca, fazendo a casca soltar inteira sem esforço.',
        author: 'Dicas Express',
        likes: 49
    },
    {
        id: 'tip-5',
        title: 'Molho de Tomate Natural Sem Acidez e Sem Açúcar',
        category: 'temperos',
        categoryLabel: '🧂 Temperos & Molhos',
        desc: 'Para eliminar a acidez do molho de tomate sem mascarar o sabor com açúcar, cozinhe junto uma cenoura média descascada ou adicione uma pitada pequena (meia colher de café) de bicarbonato.',
        secret: 'O bicarbonato neutraliza quimicamente o ácido cítrico e a cenoura libera dulçor natural durante o cozimento.',
        author: 'Nonna Maria',
        likes: 64
    },
    {
        id: 'tip-6',
        title: 'Ponto Perfeito do Brigadeiro Gourmet de Colher ou Enrolar',
        category: 'confeitaria',
        categoryLabel: '🍰 Confeitaria & Massas',
        desc: 'Cozinhe sempre em fogo brando / médio-baixo mexendo sem parar com espátula de silicone resistente ao calor (pão-duro), raspando as laterais e o fundo.',
        secret: 'Para enrolar: o ponto é quando a massa cai da espátula em blocos pesados e abre um caminho nítido no fundo da panela (ponto Moisés).',
        author: 'Confeitaria Criativa',
        likes: 51
    },
    {
        id: 'tip-7',
        title: 'Macarrão "Al Dente" e Molho que Gruda na Massa',
        category: 'tecnica',
        categoryLabel: '🔪 Preparo & Técnicas',
        desc: 'Ferva a água com bastante sal (1 litro de água para cada 100g de massa). Nunca coloque óleo na água de cozimento da massa!',
        secret: 'O óleo cria uma película lubrificante que impede o molho de aderir à massa. Reserve meia concha da água do cozimento para incorporar e aveludar o molho.',
        author: 'Chef Luca',
        likes: 73
    },
    {
        id: 'tip-8',
        title: 'Conservar Ervas e Cheiro-Verde Frescos por até 3 Semanas',
        category: 'conservacao',
        categoryLabel: '❄️ Conservação & Validade',
        desc: 'Lave e seque 100% as ervas com papel toalha ou centrífuga de salada. Guarde-as em um pote fechado forrado com folhas de papel toalha seco na gaveta da geladeira.',
        secret: 'O papel toalha absorve a umidade condensada que é a principal culpada pelo apodrecimento precoce das folhas.',
        author: 'Horta & Sabor',
        likes: 39
    },
    {
        id: 'tip-9',
        title: 'Alho Douradinho e Sem Queimar no Refogado',
        category: 'temperos',
        categoryLabel: '🧂 Temperos & Molhos',
        desc: 'Quando uma receita pedir alho e cebola refogados, comece refogando a cebola por 2 a 3 minutos até ficar translúcida e só então adicione o alho picado.',
        secret: 'O alho tem menos água e queima em menos de 40 segundos, tornando o refogado amargo se colocado junto com a cebola crua.',
        author: 'Cozinha Brasileira',
        likes: 47
    },
    {
        id: 'tip-10',
        title: 'Batata Frita Ultra Crocante por Fora e Macia por Dentro',
        category: 'tecnica',
        categoryLabel: '🔪 Preparo & Técnicas',
        desc: 'Corte as batatas e deixe de molho em água gelada com 1 colher de vinagre por 20 minutos. Seque completamente com pano de prato limpo e frite em duas etapas (primeiro em óleo a 150°C e depois a 190°C).',
        secret: 'A primeira fritura cozinha o amido interno e a segunda sela o exterior, criando a crocância inconfundível de lanchonete.',
        author: 'Mestre Batata',
        likes: 62
    },
    {
        id: 'tip-11',
        title: 'Substituições Infalíveis de Ovos em Receitas Doces',
        category: 'confeitaria',
        categoryLabel: '🍰 Confeitaria & Massas',
        desc: 'Para cada 1 ovo da receita em bolos, biscoitos ou panquecas, substitua por: 1/2 banana madura amassada, 1/4 xícara de purê de maçã ou 1 colher (sopa) de chia hidratada em 3 colheres de água morna.',
        secret: 'Essas misturas oferecem a mesma liga e retenção de umidade dos ovos sem interferir negativamente na textura final.',
        author: 'Cozinha Vegana',
        likes: 29
    },
    {
        id: 'tip-12',
        title: 'Descongelamento Seguro e Sem Perda de Suculência',
        category: 'conservacao',
        categoryLabel: '❄️ Conservação & Validade',
        desc: 'Nunca descongele carnes na água quente ou sobre a pia em temperatura ambiente. Deixe na parte de baixo da geladeira de um dia para o outro ou coloque a embalagem lacrada em água fria trocada a cada 30 minutos.',
        secret: 'A água quente cozinha as bordas da carne antes de descongelar o centro e acelera a proliferação de microrganismos nocivos.',
        author: 'Segurança Alimentar',
        likes: 31
    }
];

// Helper: Obter dicas (do localStorage se existirem, ou o array padrão)
function getTipsList() {
    const saved = localStorage.getItem('receitas_galera_tips');
    if (saved) {
        try {
            return JSON.parse(saved);
        } catch (e) {
            console.error('Erro ao ler dicas do localStorage:', e);
        }
    }
    return defaultTips;
}

// Helper: Salvar dicas no localStorage
function saveTipsList(tips) {
    localStorage.setItem('receitas_galera_tips', JSON.stringify(tips));
}

// Helper: Exibir Toast Notification
function showToast(message, icon = '💡') {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = 'toastSlideOut .3s ease forwards';
        setTimeout(() => toast.remove(), 300);
    }, 3200);
}

// Helper: Copiar texto para a área de transferência
function copyToClipboard(text, successMsg = 'Dica copiada para a área de transferência!') {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
            showToast(successMsg, '📋');
        }).catch(() => {
            fallbackCopy(text, successMsg);
        });
    } else {
        fallbackCopy(text, successMsg);
    }
}

function fallbackCopy(text, successMsg) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    try {
        document.execCommand('copy');
        showToast(successMsg, '📋');
    } catch (err) {
        showToast('Não foi possível copiar o texto.', '⚠️');
    }
    document.body.removeChild(textarea);
}

/* ==========================================================================
   Funções para a Página Inicial (index.html)
   ========================================================================== */
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
    if (!container) return;
    container.innerHTML = '';
    sample.forEach(s => container.appendChild(createCard(s)));
    
    document.querySelectorAll('.card .fav').forEach(el => {
        el.addEventListener('click', (e) => {
            e.target.textContent = e.target.textContent === '⭐' ? '💖' : '⭐';
            e.target.classList.toggle('liked');
        });
    });
}

function initHomePage() {
    mountCards();
    const btn = document.getElementById('randomRecipe');
    if (btn) {
        btn.addEventListener('click', () => {
            const idx = Math.floor(Math.random() * sample.length);
            const it = sample[idx];
            alert(`Receita sorteada: ${it.title} — ${it.time}`);
        });
    }
}

/* ==========================================================================
   Funções para a Página de Dicas (dicas.html)
   ========================================================================== */
let activeCategory = 'todas';
let currentSearchTerm = '';

function createTipCardElement(tip) {
    const card = document.createElement('article');
    card.className = 'tip-card';
    card.setAttribute('data-id', tip.id);
    card.setAttribute('data-category', tip.category);

    const secretHtml = tip.secret ? `
        <div class="tip-secret">
            <strong>💡 Dica de Ouro:</strong>
            ${tip.secret}
        </div>
    ` : '';

    card.innerHTML = `
        <div>
            <div class="tip-card-header">
                <span class="tip-badge ${tip.category}">${tip.categoryLabel || tip.category}</span>
                <span class="fav" role="button" title="Favoritar dica" aria-label="Favoritar dica">⭐</span>
            </div>
            <h4>${tip.title}</h4>
            <p>${tip.desc}</p>
            ${secretHtml}
        </div>
        <div class="tip-card-footer">
            <span>Por: <strong>${tip.author || 'Comunidade'}</strong></span>
            <div style="display: flex; gap: 8px;">
                <button class="card-btn-action copy-tip-btn" title="Copiar texto desta dica">
                    📋 Copiar
                </button>
                <button class="card-btn-action like-tip-btn" title="Curtir dica">
                    👍 <span class="like-count">${tip.likes || 0}</span>
                </button>
            </div>
        </div>
    `;

    // Evento de favoritar estrela
    const favBtn = card.querySelector('.fav');
    favBtn.addEventListener('click', (e) => {
        const isFav = e.target.textContent === '⭐';
        e.target.textContent = isFav ? '💖' : '⭐';
        e.target.classList.toggle('liked');
        showToast(isFav ? `"${tip.title}" salva nos favoritos!` : `Dica removida dos favoritos.`);
    });

    // Evento de copiar dica
    const copyBtn = card.querySelector('.copy-tip-btn');
    copyBtn.addEventListener('click', () => {
        const fullText = `💡 ${tip.title}\n\n${tip.desc}\n\n${tip.secret ? 'Dica de ouro: ' + tip.secret + '\n\n' : ''}Fonte: Receitas da Galera`;
        copyToClipboard(fullText, 'Dica copiada com sucesso!');
    });

    // Evento de curtir
    const likeBtn = card.querySelector('.like-tip-btn');
    const likeCountSpan = card.querySelector('.like-count');
    let hasLiked = false;
    likeBtn.addEventListener('click', () => {
        if (!hasLiked) {
            tip.likes = (tip.likes || 0) + 1;
            likeCountSpan.textContent = tip.likes;
            likeBtn.style.color = 'var(--accent)';
            hasLiked = true;
            showToast('Você curtiu esta dica! 👍');
        } else {
            tip.likes -= 1;
            likeCountSpan.textContent = tip.likes;
            likeBtn.style.color = '';
            hasLiked = false;
        }
    });

    return card;
}

function renderTips() {
    const container = document.getElementById('tipsContainer');
    const countDisplay = document.getElementById('tipsCount');
    if (!container) return;

    const allTips = getTipsList();
    const filtered = allTips.filter(tip => {
        const matchesCategory = (activeCategory === 'todas' || tip.category === activeCategory);
        const searchLow = currentSearchTerm.toLowerCase().trim();
        const matchesSearch = !searchLow ||
            tip.title.toLowerCase().includes(searchLow) ||
            tip.desc.toLowerCase().includes(searchLow) ||
            (tip.secret && tip.secret.toLowerCase().includes(searchLow)) ||
            (tip.author && tip.author.toLowerCase().includes(searchLow));

        return matchesCategory && matchesSearch;
    });

    container.innerHTML = '';

    if (filtered.length === 0) {
        container.innerHTML = `
            <div class="no-results">
                <h4>Nenhuma dica encontrada 🍳</h4>
                <p>Tente buscar por outros termos ou selecione "Todas as Dicas".</p>
            </div>
        `;
    } else {
        filtered.forEach(tip => {
            container.appendChild(createTipCardElement(tip));
        });
    }

    if (countDisplay) {
        countDisplay.textContent = `${filtered.length} ${filtered.length === 1 ? 'dica disponível' : 'dicas disponíveis'}`;
    }
}

function setupTipsInteractions() {
    // Filtros de Categoria
    const pillButtons = document.querySelectorAll('.categories-pills .pill-btn');
    pillButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            pillButtons.forEach(b => {
                b.classList.remove('active');
                b.setAttribute('aria-selected', 'false');
            });
            btn.classList.add('active');
            btn.setAttribute('aria-selected', 'true');
            activeCategory = btn.getAttribute('data-category');
            renderTips();
        });
    });

    // Busca em Tempo Real
    const searchInput = document.getElementById('tipSearchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            currentSearchTerm = e.target.value;
            renderTips();
        });
    }

    // Copiar Dica de Ouro
    const copyGoldBtn = document.getElementById('copyGoldTipBtn');
    if (copyGoldBtn) {
        copyGoldBtn.addEventListener('click', () => {
            const goldText = "💡 Como salvar comida salgada:\nCorte uma batata crua média em rodelas grossas e coloque na panela cozinhando em fogo baixo por 10 a 15 min. O amido absorve o excesso de sódio!\nFonte: Receitas da Galera";
            copyToClipboard(goldText, 'Dica de ouro copiada com sucesso!');
        });
    }

    // FAQ Accordion
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            const isOpen = item.classList.contains('open');

            // Fechar outros itens abertos para manter visual limpo
            document.querySelectorAll('.accordion-item').forEach(i => {
                if (i !== item) {
                    i.classList.remove('open');
                    const h = i.querySelector('.accordion-header');
                    if (h) h.setAttribute('aria-expanded', 'false');
                }
            });

            item.classList.toggle('open', !isOpen);
            header.setAttribute('aria-expanded', String(!isOpen));
        });
    });

    // Formulário de Envio de Dica
    const shareForm = document.getElementById('shareTipForm');
    if (shareForm) {
        shareForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const authorInput = document.getElementById('tipAuthor');
            const categorySelect = document.getElementById('tipCategory');
            const titleInput = document.getElementById('tipTitle');
            const descInput = document.getElementById('tipDescription');
            const secretInput = document.getElementById('tipSecret');

            const categoryMap = {
                'tecnica': '🔪 Preparo & Técnicas',
                'confeitaria': '🍰 Confeitaria & Massas',
                'temperos': '🧂 Temperos & Molhos',
                'conservacao': '❄️ Conservação & Validade',
                'rapida': '⏱️ Truques Rápidos'
            };

            const newTip = {
                id: 'tip-' + Date.now(),
                title: titleInput.value.trim(),
                category: categorySelect.value,
                categoryLabel: categoryMap[categorySelect.value] || '💡 Dica',
                desc: descInput.value.trim(),
                secret: secretInput.value.trim(),
                author: authorInput.value.trim() || 'Comunidade',
                likes: 1
            };

            const currentTips = getTipsList();
            currentTips.unshift(newTip); // Insere no topo
            saveTipsList(currentTips);

            // Limpa o formulário
            shareForm.reset();

            // Atualiza visualização
            activeCategory = 'todas';
            pillButtons.forEach(b => {
                const isAll = b.getAttribute('data-category') === 'todas';
                b.classList.toggle('active', isAll);
                b.setAttribute('aria-selected', String(isAll));
            });
            renderTips();

            showToast('Sua dica foi publicada com sucesso! 🎉', '🚀');

            // Rola suavemente até o container de dicas
            const container = document.getElementById('tipsContainer');
            if (container) {
                container.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    }

    // Modal de Sorteio de Dica
    setupRandomTipModal();
}

function setupRandomTipModal() {
    const modal = document.getElementById('tipModal');
    const randomBtn = document.getElementById('randomTipBtn');
    const closeBtn = document.getElementById('modalCloseBtn');
    const anotherBtn = document.getElementById('modalAnotherBtn');
    const copyModalBtn = document.getElementById('modalCopyBtn');

    if (!modal || !randomBtn) return;

    let currentSorteada = null;

    function pickRandomTip() {
        const tips = getTipsList();
        if (!tips.length) return;
        const randomIndex = Math.floor(Math.random() * tips.length);
        currentSorteada = tips[randomIndex];

        document.getElementById('modalTipTitle').textContent = currentSorteada.title;
        document.getElementById('modalTipDesc').textContent = currentSorteada.desc;

        const badgeWrapper = document.getElementById('modalBadge');
        if (badgeWrapper) {
            badgeWrapper.innerHTML = `<span class="tip-badge ${currentSorteada.category}">${currentSorteada.categoryLabel || currentSorteada.category}</span>`;
        }

        const secretEl = document.getElementById('modalTipSecret');
        if (secretEl) {
            if (currentSorteada.secret) {
                secretEl.style.display = 'block';
                secretEl.innerHTML = `<strong>💡 O Segredo:</strong> ${currentSorteada.secret}`;
            } else {
                secretEl.style.display = 'none';
            }
        }
    }

    function openModal() {
        pickRandomTip();
        modal.classList.add('open');
        modal.setAttribute('aria-hidden', 'false');
    }

    function closeModal() {
        modal.classList.remove('open');
        modal.setAttribute('aria-hidden', 'true');
    }

    randomBtn.addEventListener('click', openModal);
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (anotherBtn) anotherBtn.addEventListener('click', pickRandomTip);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('open')) {
            closeModal();
        }
    });

    if (copyModalBtn) {
        copyModalBtn.addEventListener('click', () => {
            if (currentSorteada) {
                const fullText = `💡 ${currentSorteada.title}\n\n${currentSorteada.desc}\n\n${currentSorteada.secret ? 'Dica de ouro: ' + currentSorteada.secret + '\n\n' : ''}Fonte: Receitas da Galera`;
                copyToClipboard(fullText, 'Dica sorteada copiada com sucesso!');
            }
        });
    }
}

// Inicialização Global
document.addEventListener('DOMContentLoaded', () => {
    // Se estiver na Home Page com grid de receitas
    if (document.getElementById('cards')) {
        initHomePage();
    }

    // Se estiver na Página de Dicas
    if (document.getElementById('tipsContainer')) {
        renderTips();
        setupTipsInteractions();
    }
});

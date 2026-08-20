/**
 * Receitas da Galera - Scripts Globais (Início, Dicas e Salgados)
 */

/* ==========================================================================
   Dados da Página Inicial (index.html)
   ========================================================================== */
const sample = [
    { title: 'Bolo de Cenoura', desc: 'Fofinho, com cobertura de chocolate', time: '45 min', img: 'img/bolo_cenoura_horizontal.jpg' },
    { title: 'Brigadeiro Gourmet', desc: 'Tradicional com toque especial', time: '25 min', img: 'img/brigadeiro_gourmet.webp' },
    { title: 'Escondidinho', desc: 'Purê cremoso com carne temperada', time: '50 min', img: 'img/Escondidinho-de-carne-moida.jpg' },
    { title: 'Quiche de Alho-Poró', desc: 'Perfeita para um lanche elegante', time: '40 min', img: 'img/receita-quiche-alho-poro.jpg' }
];

/* ==========================================================================
   Dados das Dicas Culinárias (dicas.html)
   ========================================================================== */
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

/* ==========================================================================
   Dados das Receitas Salgadas (salgados.html)
   ========================================================================== */
const defaultSavoryRecipes = [
    {
        id: 'salgado-1',
        title: 'Escondidinho de Carne Moída Especial',
        category: 'principais',
        categoryLabel: '🥘 Pratos Principais',
        difficulty: 'facil',
        difficultyLabel: 'Fácil',
        time: '50 min',
        servings: '6 porções',
        img: 'img/Escondidinho-de-carne-moida.jpg',
        desc: 'Purê aveludado de mandioca com recheio farto de carne moída bem temperada, coberto por uma camada dourada e borbulhante de mussarela gratinada.',
        ingredients: [
            '500g de carne moída (patinho ou acém)',
            '1kg de mandioca cozida e amassada',
            '2 colheres (sopa) de manteiga',
            '1/2 xícara de leite morno ou creme de leite',
            '1 cebola média picada e 3 dentes de alho amassados',
            '2 tomates maduros picados sem sementes',
            '200g de queijo mussarela ralado ou fatiado',
            'Sal, pimenta-do-reino e cheiro-verde picado a gosto'
        ],
        instructions: [
            'Cozinhe a mandioca até ficar macia. Amasse ainda quente e incorpore a manteiga e o leite até obter um purê liso e cremoso. Ajuste o sal.',
            'Em outra panela, doure a cebola e o alho no azeite. Junte a carne moída e refogue até secar a água.',
            'Adicione os tomates picados, sal, pimenta e cheiro-verde. Deixe apurar por 5 minutos até ficar suculento.',
            'Em um refratário untado, espalhe metade do purê de mandioca, adicione todo o recheio de carne e cubra com o restante do purê.',
            'Cubra com a mussarela e asse em forno pré-aquecido a 200°C por 20 minutos até gratinar.'
        ],
        chefTip: 'Misturar meia caixa de creme de leite no purê de mandioca garante uma cremosidade irresistível e textura aveludada.',
        author: 'Grupo Receitas',
        likes: 87
    },
    {
        id: 'salgado-2',
        title: 'Lasanha Tradicional à Bolonhesa',
        category: 'massas',
        categoryLabel: '🍝 Massas & Risotos',
        difficulty: 'media',
        difficultyLabel: 'Média',
        time: '60 min',
        servings: '8 porções',
        img: 'img/lasanha_bolonhesa.jpg',
        desc: 'Camadas generosas de massa caseira, molho à bolonhesa encorpado cozido lentamente, molho bechamel aveludado e queijo gratinado crocante.',
        ingredients: [
            '500g de massa para lasanha pré-cozida ou fresca',
            '600g de carne moída bovina',
            '2 latas de tomate pelado ou molho de tomate caseiro',
            '1 cebola grande picada e 3 dentes de alho',
            '400g de queijo mussarela ralado',
            '100g de queijo parmesão ralado na hora',
            '500ml de leite, 2 colheres de farinha e 2 de manteiga (bechamel)',
            'Noz-moscada ralada, sal, pimenta e orégano a gosto'
        ],
        instructions: [
            'Prepare o molho bolonhesa refogando cebola, alho e carne até dourar. Junte os tomates pelados e cozinhe em fogo baixo por 20 minutos.',
            'Para o molho bechamel: derreta a manteiga, junte a farinha e cozinhe 1 minuto. Acrescente o leite aos poucos mexendo sem parar até engrossar. Tempere com noz-moscada e sal.',
            'Em um refratário grande, monte em camadas: molho bolonhesa, massa, molho branco, queijo mussarela e carne.',
            'Repita até o topo finalizando com molho branco, mussarela e parmesão ralado.',
            'Asse a 180°C por 35 a 40 minutos até dourar e formar uma crosta crocante.'
        ],
        chefTip: 'Deixe a lasanha descansar por 10 minutos fora do forno antes de cortar; assim as fatias saem perfeitas e estruturadas.',
        author: 'Chef André',
        likes: 124
    },
    {
        id: 'salgado-3',
        title: 'Coxinha Dourada de Frango com Catupiry',
        category: 'petiscos',
        categoryLabel: '🍗 Petiscos & Salgadinhos',
        difficulty: 'media',
        difficultyLabel: 'Média',
        time: '50 min',
        servings: '15 unidades',
        img: 'img/coxinha_cremosa.jpg',
        desc: 'O salgado mais amado do Brasil! Casquinha ultra crocante e sequinha por fora, massa macia saborizada com caldo e recheio cremoso farto.',
        ingredients: [
            '500g de peito de frango cozido e desfiado',
            '2 xícaras do caldo do cozimento do frango',
            '1 xícara de leite integral',
            '2 colheres (sopa) de manteiga',
            '2 e 1/2 xícaras de farinha de trigo',
            '1 cebola picadinha, 2 dentes de alho, colorau e salsinha',
            '200g de requeijão cremoso de bisnaga (tipo Catupiry)',
            'Farinha de rosca e água gelada para empanar'
        ],
        instructions: [
            'Refogue a cebola e o alho no azeite, adicione o frango desfiado, o colorau, sal e salsinha. Deixe esfriar.',
            'Para a massa: ferva o caldo de frango com o leite e a manteiga. Ao levantar fervura, adicione a farinha de trigo de uma vez só.',
            'Mexa vigorosamente em fogo médio até a massa soltar totalmente da panela. Sove a massa ainda morna até ficar bem lisa.',
            'Abra discos de massa na palma da mão, coloque 1 colher de requeijão e o frango desfiado. Feche modelando no formato de coxinha.',
            'Passe as coxinhas rapidamente na água gelada e depois na farinha de rosca. Frite em óleo quente abundante (180°C) até dourar.'
        ],
        chefTip: 'Passar as coxinhas na água bem gelada em vez de ovo batido garante uma casquinha muito mais fina, sequinha e crocante.',
        author: 'Dona Rosa',
        likes: 145
    },
    {
        id: 'salgado-4',
        title: 'Quiche Folhada de Alho-Poró com Queijo',
        category: 'tortas',
        categoryLabel: '🥧 Tortas & Quiches',
        difficulty: 'facil',
        difficultyLabel: 'Fácil',
        time: '40 min',
        servings: '8 fatias',
        img: 'img/receita-quiche-alho-poro.jpg',
        desc: 'Massa leve e amanteigada que derrete na boca com recheio aveludado de alho-poró salteado, creme de leite fresco e toque de noz-moscada.',
        ingredients: [
            '2 xícaras de farinha de trigo',
            '100g de manteiga gelada cortada em cubos',
            '1 gema de ovo e 3 colheres (sopa) de água gelada',
            '2 talos grandes de alho-poró fatiados em rodelas',
            '3 ovos inteiros batidos',
            '1 caixinha (200g) de creme de leite',
            '150g de queijo mussarela ou gruyère ralado',
            'Sal, pimenta-do-reino e noz-moscada ralada a gosto'
        ],
        instructions: [
            'Misture a farinha com a manteiga gelada com as pontas dos dedos até formar uma farofa. Junte a gema e a água gelada até unir. Leve à geladeira por 15 minutos.',
            'Abra a massa e forre o fundo e as laterais de uma forma de fundo removível. Faça furinhos com um garfo.',
            'Refogue o alho-poró na manteiga com sal e pimenta até murchar e deixe amornar.',
            'Em uma tigela, bata os ovos com o creme de leite, o alho-poró refogado, metade do queijo e noz-moscada.',
            'Despeje sobre a massa, salpique o restante do queijo e asse a 180°C por 30 a 35 minutos até dourar e firmar.'
        ],
        chefTip: 'Refogue o alho-poró em fogo brando com a panela tampada para concentrar seus açúcares naturais sem queimar.',
        author: 'Chef Helena',
        likes: 63
    },
    {
        id: 'salgado-5',
        title: 'Strogonoff Clássico de Carne com Batata Palha',
        category: 'rapidas',
        categoryLabel: '⏱️ Rápidos (< 35 min)',
        difficulty: 'facil',
        difficultyLabel: 'Fácil',
        time: '30 min',
        servings: '4 porções',
        img: 'img/strogonoff_carne.jpg',
        desc: 'Tiras suculentas de filé salteadas no ponto certo, envolvidas em molho aveludado de mostarda Dijon, ketchup, cogumelos e creme de leite.',
        ingredients: [
            '600g de carne macia (alcatra, filé mignon ou contrafilé) em tiras',
            '1 cebola picadinha e 2 dentes de alho',
            '150g de cogumelos champignon fatiados',
            '2 colheres (sopa) de mostarda Dijon ou amarela',
            '3 colheres (sopa) de ketchup ou extrato de tomate',
            '1 colher (sopa) de molho inglês',
            '1 lata ou caixa de creme de leite sem soro',
            'Manteiga, azeite, sal e pimenta-do-reino a gosto'
        ],
        instructions: [
            'Aqueça uma frigideira grande com azeite e manteiga em fogo bem alto. Doure as tiras de carne aos poucos para selar e não acumular água.',
            'Reserve a carne e na mesma panela doure a cebola e o alho.',
            'Junte os cogumelos, o ketchup, a mostarda e o molho inglês, raspando o fundinho saboroso da panela.',
            'Devolva a carne para a panela e misture por mais 2 minutos.',
            'Desligue o fogo e adicione o creme de leite, mexendo até incorporar. Sirva com arroz branco e batata palha crocante.'
        ],
        chefTip: 'Adicione o creme de leite sempre com o fogo desligado para evitar que a gordura talhe e mantenha o molho sedoso.',
        author: 'Chef Carlos',
        likes: 98
    },
    {
        id: 'salgado-6',
        title: 'Risoto Cremoso de Cogumelos e Parmesão',
        category: 'massas',
        categoryLabel: '🍝 Massas & Risotos',
        difficulty: 'media',
        difficultyLabel: 'Média',
        time: '35 min',
        servings: '3 porções',
        img: 'img/risoto_cogumelos.jpg',
        desc: 'O autêntico risoto italiano com arroz arbóreo aveludado, cogumelos frescos salteados na manteiga, vinho branco e lascas de parmesão.',
        ingredients: [
            '1 e 1/2 xícara de arroz arbóreo',
            '200g de cogumelos frescos (Paris e Shimeji)',
            '1/2 xícara de vinho branco seco',
            '1 litro de caldo de legumes quente',
            '1 cebola pequena picada em cubinhos',
            '3 colheres (sopa) de manteiga bem gelada',
            '80g de queijo parmesão ralado na hora',
            'Azeite de oliva, sal, pimenta-do-reino e salsinha'
        ],
        instructions: [
            'Salteie os cogumelos em fogo alto com 1 colher de manteiga até dourarem. Reserve.',
            'Na panela do risoto, murche a cebola no azeite, junte o arroz arbóreo e refogue por 2 minutos para selar os grãos.',
            'Adicione o vinho branco e mexa até o líquido evaporar quase por completo.',
            'Vá adicionando o caldo quente concha por concha, mexendo continuamente até o arroz absorver antes de adicionar a próxima (cerca de 18 min).',
            'Quando o arroz estiver al dente, desligue o fogo, adicione os cogumelos, o parmesão e a manteiga gelada restante (mantecatura). Misture vigorosamente e sirva.'
        ],
        chefTip: 'A manteiga no final deve estar geladíssima: a emulsão térmica cria o brilho acetinado e a cremosidade perfeita do risoto.',
        author: 'Chef Luca',
        likes: 76
    },
    {
        id: 'salgado-7',
        title: 'Empadão Goiano de Frango Cremoso',
        category: 'tortas',
        categoryLabel: '🥧 Tortas & Quiches',
        difficulty: 'facil',
        difficultyLabel: 'Fácil',
        time: '55 min',
        servings: '8 porções',
        img: 'img/empadao_frango.jpg',
        desc: 'Massa podre que derrete e esfarela delicadamente a cada mordida, com recheio farto de frango bem desfiado, milho, azeitonas e requeijão.',
        ingredients: [
            '400g de farinha de trigo',
            '200g de manteiga ou banha gelada',
            '1 gema de ovo e 1 colher de café de sal',
            '50ml de água gelada',
            '600g de frango cozido e desfiado',
            '1 lata de milho verde e 1/2 xícara de azeitonas picadas',
            '1 copo de requeijão cremoso (200g)',
            '1 gema para pincelar'
        ],
        instructions: [
            'Misture a farinha com a manteiga com as pontas dos dedos. Adicione a gema e a água até unir sem sovar. Deixe descansar 30 minutos na geladeira.',
            'Refogue o frango desfiado com cebola, alho, tomates, milho, azeitonas e temperos. Deixe esfriar totalmente.',
            'Abra 2/3 da massa e forre uma travessa redonda ou forma de fundo removível.',
            'Coloque o recheio de frango e cubra com colheradas generosas de requeijão cremoso.',
            'Abra o restante da massa, cubra o empadão, sele as bordas e pincele com a gema.',
            'Asse a 180°C por 40 a 45 minutos até dourar intensamente.'
        ],
        chefTip: 'Nunca coloque o recheio morno ou quente na massa crua, pois a manteiga derrete e perde a estrutura crocante.',
        author: 'Dona Neuza',
        likes: 89
    },
    {
        id: 'salgado-8',
        title: 'Torta Rápida de Liquidificador de Queijo e Presunto',
        category: 'rapidas',
        categoryLabel: '⏱️ Rápidos (< 35 min)',
        difficulty: 'facil',
        difficultyLabel: 'Fácil',
        time: '35 min',
        servings: '6 porções',
        img: 'img/receita-quiche-alho-poro.jpg',
        desc: 'A receita prática e fofinha para quando bate aquela fome! Massa rápida batida no liquidificador e recheio caprichado de presunto, queijo e orégano.',
        ingredients: [
            '3 ovos inteiros',
            '1 xícara de óleo e 2 xícaras de leite',
            '2 xícaras de farinha de trigo e 1 colher (sopa) de fermento químico',
            '50g de queijo parmesão ralado na massa',
            '200g de presunto em cubos',
            '250g de queijo mussarela em cubos',
            '2 tomates picados e orégano a gosto'
        ],
        instructions: [
            'No liquidificador, bata os ovos, o leite, o óleo e o queijo parmesão por 1 minuto.',
            'Junte a farinha aos poucos e bata até homogeneizar. Misture o fermento por último com uma espátula.',
            'Despeje metade da massa em uma assadeira untada e enfarinhada.',
            'Espalhe o presunto, a mussarela, os tomates picados e salpique orégano.',
            'Cubra com o restante da massa e finalize com mais mussarela e orégano.',
            'Asse a 180°C por 30 a 35 minutos até dourar e firmar.'
        ],
        chefTip: 'Substituir 2 colheres de sopa de farinha por amido de milho deixa a massa de liquidificador infinitamente mais fofa e leve.',
        author: 'Receitas Fáceis',
        likes: 110
    }
];

/* ==========================================================================
   Helpers Universais
   ========================================================================== */
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

function copyToClipboard(text, successMsg = 'Texto copiado para a área de transferência!') {
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
function getTipsList() {
    const saved = localStorage.getItem('receitas_galera_tips');
    if (saved) {
        try {
            return JSON.parse(saved);
        } catch (e) {
            console.error('Erro ao ler dicas:', e);
        }
    }
    return defaultTips;
}

function saveTipsList(tips) {
    localStorage.setItem('receitas_galera_tips', JSON.stringify(tips));
}

let activeTipCategory = 'todas';
let currentTipSearchTerm = '';

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

    const favBtn = card.querySelector('.fav');
    favBtn.addEventListener('click', (e) => {
        const isFav = e.target.textContent === '⭐';
        e.target.textContent = isFav ? '💖' : '⭐';
        e.target.classList.toggle('liked');
        showToast(isFav ? `"${tip.title}" salva nos favoritos!` : `Dica removida dos favoritos.`);
    });

    const copyBtn = card.querySelector('.copy-tip-btn');
    copyBtn.addEventListener('click', () => {
        const fullText = `💡 ${tip.title}\n\n${tip.desc}\n\n${tip.secret ? 'Dica de ouro: ' + tip.secret + '\n\n' : ''}Fonte: Receitas da Galera`;
        copyToClipboard(fullText, 'Dica copiada com sucesso!');
    });

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
        const matchesCategory = (activeTipCategory === 'todas' || tip.category === activeTipCategory);
        const searchLow = currentTipSearchTerm.toLowerCase().trim();
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
    const pillButtons = document.querySelectorAll('.tips-filter-bar .pill-btn');
    pillButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            pillButtons.forEach(b => {
                b.classList.remove('active');
                b.setAttribute('aria-selected', 'false');
            });
            btn.classList.add('active');
            btn.setAttribute('aria-selected', 'true');
            activeTipCategory = btn.getAttribute('data-category');
            renderTips();
        });
    });

    const searchInput = document.getElementById('tipSearchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            currentTipSearchTerm = e.target.value;
            renderTips();
        });
    }

    const copyGoldBtn = document.getElementById('copyGoldTipBtn');
    if (copyGoldBtn) {
        copyGoldBtn.addEventListener('click', () => {
            const goldText = "💡 Como salvar comida salgada:\nCorte uma batata crua média em rodelas grossas e coloque na panela cozinhando em fogo baixo por 10 a 15 min. O amido absorve o excesso de sódio!\nFonte: Receitas da Galera";
            copyToClipboard(goldText, 'Dica de ouro copiada com sucesso!');
        });
    }

    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            const isOpen = item.classList.contains('open');

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
            currentTips.unshift(newTip);
            saveTipsList(currentTips);

            shareForm.reset();

            activeTipCategory = 'todas';
            pillButtons.forEach(b => {
                const isAll = b.getAttribute('data-category') === 'todas';
                b.classList.toggle('active', isAll);
                b.setAttribute('aria-selected', String(isAll));
            });
            renderTips();

            showToast('Sua dica foi publicada com sucesso! 🎉', '🚀');

            const container = document.getElementById('tipsContainer');
            if (container) {
                container.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    }

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

/* ==========================================================================
   Funções para a Página de Salgados (salgados.html)
   ========================================================================== */
function getSavoryList() {
    const saved = localStorage.getItem('receitas_galera_salgados');
    if (saved) {
        try {
            return JSON.parse(saved);
        } catch (e) {
            console.error('Erro ao ler salgados:', e);
        }
    }
    return defaultSavoryRecipes;
}

function saveSavoryList(recipes) {
    localStorage.setItem('receitas_galera_salgados', JSON.stringify(recipes));
}

let activeSavoryCategory = 'todas';
let currentSavorySearchTerm = '';

function createSavoryCardElement(recipe) {
    const card = document.createElement('article');
    card.className = 'recipe-card';
    card.setAttribute('data-id', recipe.id);
    card.setAttribute('data-category', recipe.category);

    const diffClass = recipe.difficulty ? recipe.difficulty.toLowerCase() : 'facil';
    const diffLabel = recipe.difficultyLabel || 'Fácil';

    card.innerHTML = `
        <div class="recipe-thumb-container">
            <div class="recipe-thumb" style="background-image: url('${recipe.img}');"></div>
            <div class="recipe-badges">
                <span class="tip-badge ${recipe.category}">${recipe.categoryLabel || recipe.category}</span>
                <span class="badge-difficulty ${diffClass}">${diffLabel}</span>
            </div>
            <button class="recipe-fav-btn" title="Favoritar receita" aria-label="Favoritar receita">⭐</button>
        </div>
        <div class="recipe-body">
            <h4>${recipe.title}</h4>
            <p>${recipe.desc}</p>
            <div class="recipe-meta-tags">
                <span>⏱️ ${recipe.time}</span>
                <span>🍽️ ${recipe.servings}</span>
                <span>👨‍🍳 ${recipe.author || 'Grupo'}</span>
            </div>
            <div class="recipe-footer-actions">
                <button class="btn-view-recipe open-recipe-btn">
                    📖 Ver Receita Completa
                </button>
            </div>
        </div>
    `;

    // Favoritar
    const favBtn = card.querySelector('.recipe-fav-btn');
    favBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isFav = e.target.textContent === '⭐';
        e.target.textContent = isFav ? '💖' : '⭐';
        e.target.classList.toggle('liked');
        showToast(isFav ? `"${recipe.title}" salva nos favoritos!` : `Receita removida dos favoritos.`);
    });

    // Abrir Modal de Receita
    const viewBtn = card.querySelector('.open-recipe-btn');
    viewBtn.addEventListener('click', () => {
        openRecipeDetailModal(recipe);
    });

    return card;
}

function renderSavoryRecipes() {
    const container = document.getElementById('savoryContainer');
    const countDisplay = document.getElementById('savoryCount');
    if (!container) return;

    const allRecipes = getSavoryList();
    const filtered = allRecipes.filter(recipe => {
        const matchesCategory = (activeSavoryCategory === 'todas' || recipe.category === activeSavoryCategory);
        const searchLow = currentSavorySearchTerm.toLowerCase().trim();
        const matchesSearch = !searchLow ||
            recipe.title.toLowerCase().includes(searchLow) ||
            recipe.desc.toLowerCase().includes(searchLow) ||
            (recipe.ingredients && recipe.ingredients.some(ing => ing.toLowerCase().includes(searchLow))) ||
            (recipe.author && recipe.author.toLowerCase().includes(searchLow));

        return matchesCategory && matchesSearch;
    });

    container.innerHTML = '';

    if (filtered.length === 0) {
        container.innerHTML = `
            <div class="no-results">
                <h4>Nenhum prato salgado encontrado 🍲</h4>
                <p>Tente buscar por outros ingredientes ou selecione "Todos os Salgados".</p>
            </div>
        `;
    } else {
        filtered.forEach(recipe => {
            container.appendChild(createSavoryCardElement(recipe));
        });
    }

    if (countDisplay) {
        countDisplay.textContent = `${filtered.length} ${filtered.length === 1 ? 'receita disponível' : 'receitas disponíveis'}`;
    }
}

function openRecipeDetailModal(recipe) {
    const modal = document.getElementById('recipeModal');
    if (!modal) return;

    const header = document.getElementById('modalRecipeHeader');
    if (header) {
        header.style.backgroundImage = `url('${recipe.img}')`;
    }

    document.getElementById('modalRecipeCategory').textContent = recipe.categoryLabel || recipe.category;
    document.getElementById('modalRecipeTitle').textContent = recipe.title;
    document.getElementById('modalRecipeTime').textContent = `⏱️ ${recipe.time}`;
    document.getElementById('modalRecipeServings').textContent = `🍽️ ${recipe.servings}`;
    document.getElementById('modalRecipeDiff').textContent = `📊 Dificuldade: ${recipe.difficultyLabel || 'Fácil'}`;

    // Ingredientes com Checkbox
    const ingContainer = document.getElementById('modalRecipeIngredients');
    ingContainer.innerHTML = '';
    if (recipe.ingredients && recipe.ingredients.length > 0) {
        recipe.ingredients.forEach((ing, idx) => {
            const li = document.createElement('li');
            li.className = 'ingredient-item';
            li.innerHTML = `
                <input type="checkbox" id="ing-${idx}" class="ingredient-checkbox">
                <label for="ing-${idx}">${ing}</label>
            `;
            const checkbox = li.querySelector('input');
            checkbox.addEventListener('change', () => {
                li.classList.toggle('checked', checkbox.checked);
            });
            ingContainer.appendChild(li);
        });
    } else {
        ingContainer.innerHTML = '<li>Ingredientes a gosto.</li>';
    }

    // Modo de Preparo
    const instContainer = document.getElementById('modalRecipeInstructions');
    instContainer.innerHTML = '';
    if (recipe.instructions && recipe.instructions.length > 0) {
        recipe.instructions.forEach(step => {
            const li = document.createElement('li');
            li.className = 'instruction-step-item';
            li.textContent = step;
            instContainer.appendChild(li);
        });
    } else {
        instContainer.innerHTML = '<li>Siga as instruções padrão de preparo.</li>';
    }

    // Dica de Chef
    const tipContainer = document.getElementById('modalRecipeChefTip');
    if (tipContainer) {
        if (recipe.chefTip) {
            tipContainer.style.display = 'block';
            tipContainer.innerHTML = `<strong>💡 Dica do Chef:</strong> ${recipe.chefTip}`;
        } else {
            tipContainer.style.display = 'none';
        }
    }

    // Botão Copiar Receita
    const copyBtn = document.getElementById('copyRecipeBtn');
    if (copyBtn) {
        copyBtn.onclick = () => {
            const ingredientsText = recipe.ingredients ? recipe.ingredients.map(i => `• ${i}`).join('\n') : '';
            const instructionsText = recipe.instructions ? recipe.instructions.map((ins, i) => `${i + 1}. ${ins}`).join('\n') : '';
            const fullRecipe = `🍽️ ${recipe.title}\n⏱️ Tempo: ${recipe.time} | 🍽️ Porções: ${recipe.servings}\n\n🥣 INGREDIENTES:\n${ingredientsText}\n\n🔥 MODO DE PREPARO:\n${instructionsText}\n\n💡 DICA DO CHEF: ${recipe.chefTip || 'Bom apetite!'}\nFonte: Receitas da Galera`;
            copyToClipboard(fullRecipe, 'Receita completa copiada com sucesso!');
        };
    }

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
}

function setupSavoryInteractions() {
    // Filtros de Categoria
    const pillButtons = document.querySelectorAll('.savory-filter-bar .pill-btn');
    pillButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            pillButtons.forEach(b => {
                b.classList.remove('active');
                b.setAttribute('aria-selected', 'false');
            });
            btn.classList.add('active');
            btn.setAttribute('aria-selected', 'true');
            activeSavoryCategory = btn.getAttribute('data-category');
            renderSavoryRecipes();
        });
    });

    // Busca
    const searchInput = document.getElementById('savorySearchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            currentSavorySearchTerm = e.target.value;
            renderSavoryRecipes();
        });
    }

    // Modal de Receita Fechamento
    const recipeModal = document.getElementById('recipeModal');
    const recipeCloseBtn = document.getElementById('recipeModalCloseBtn');
    if (recipeModal && recipeCloseBtn) {
        recipeCloseBtn.addEventListener('click', () => {
            recipeModal.classList.remove('open');
            recipeModal.setAttribute('aria-hidden', 'true');
        });
        recipeModal.addEventListener('click', (e) => {
            if (e.target === recipeModal) {
                recipeModal.classList.remove('open');
                recipeModal.setAttribute('aria-hidden', 'true');
            }
        });
    }

    // Sorteador de Salgado
    const randomSavoryBtn = document.getElementById('randomSavoryBtn');
    if (randomSavoryBtn) {
        randomSavoryBtn.addEventListener('click', () => {
            const list = getSavoryList();
            if (list.length > 0) {
                const idx = Math.floor(Math.random() * list.length);
                openRecipeDetailModal(list[idx]);
                showToast(`Sorteamos para você: ${list[idx].title}! 🎲`, '🍽️');
            }
        });
    }

    // Botão de Ver Receita do Chef Destaque
    const chefHighlightBtn = document.getElementById('viewChefHighlightBtn');
    if (chefHighlightBtn) {
        chefHighlightBtn.addEventListener('click', () => {
            const list = getSavoryList();
            const lasanha = list.find(r => r.id === 'salgado-2') || list[0];
            openRecipeDetailModal(lasanha);
        });
    }

    // Formulário de Nova Receita Salgada
    const shareSavoryForm = document.getElementById('shareSavoryForm');
    if (shareSavoryForm) {
        shareSavoryForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const title = document.getElementById('savoryTitle').value.trim();
            const category = document.getElementById('savoryCategory').value;
            const time = document.getElementById('savoryTime').value.trim();
            const servings = document.getElementById('savoryServings').value.trim();
            const difficulty = document.getElementById('savoryDifficulty').value;
            const author = document.getElementById('savoryAuthor').value.trim() || 'Comunidade';
            const desc = document.getElementById('savoryDesc').value.trim();
            const ingText = document.getElementById('savoryIngredients').value.trim();
            const instText = document.getElementById('savoryInstructions').value.trim();
            const chefTip = document.getElementById('savoryChefTip').value.trim();

            const categoryMap = {
                'principais': '🥘 Pratos Principais',
                'tortas': '🥧 Tortas & Quiches',
                'petiscos': '🍗 Petiscos & Salgadinhos',
                'massas': '🍝 Massas & Risotos',
                'rapidas': '⏱️ Rápidos (< 35 min)'
            };

            const diffMap = {
                'facil': 'Fácil',
                'media': 'Média',
                'avancada': 'Avançada'
            };

            const ingredientsArray = ingText.split('\n').map(i => i.trim()).filter(i => i.length > 0);
            const instructionsArray = instText.split('\n').map(i => i.trim()).filter(i => i.length > 0);

            // Seleciona uma imagem padrão baseada na categoria
            const defaultImgs = {
                'principais': 'img/Escondidinho-de-carne-moida.jpg',
                'tortas': 'img/empadao_frango.jpg',
                'petiscos': 'img/coxinha_cremosa.jpg',
                'massas': 'img/lasanha_bolonhesa.jpg',
                'rapidas': 'img/strogonoff_carne.jpg'
            };

            const newRecipe = {
                id: 'salgado-' + Date.now(),
                title: title,
                category: category,
                categoryLabel: categoryMap[category] || '🥘 Salgado',
                difficulty: difficulty,
                difficultyLabel: diffMap[difficulty] || 'Fácil',
                time: time || '40 min',
                servings: servings || '4 porções',
                img: defaultImgs[category] || 'img/Escondidinho-de-carne-moida.jpg',
                desc: desc,
                ingredients: ingredientsArray,
                instructions: instructionsArray,
                chefTip: chefTip,
                author: author,
                likes: 1
            };

            const list = getSavoryList();
            list.unshift(newRecipe);
            saveSavoryList(list);

            shareSavoryForm.reset();

            // Resetar filtros e renderizar
            activeSavoryCategory = 'todas';
            pillButtons.forEach(b => {
                const isAll = b.getAttribute('data-category') === 'todas';
                b.classList.toggle('active', isAll);
                b.setAttribute('aria-selected', String(isAll));
            });
            renderSavoryRecipes();

            showToast('Receita salgada publicada com sucesso! 🎉', '🚀');

            const container = document.getElementById('savoryContainer');
            if (container) {
                container.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    }
}

/* ==========================================================================
   Funções para a Página de Doces (doces.html)
   ========================================================================== */
function initSweetRecipesPage() {
    const searchInput = document.getElementById('recipe-search');
    const filterButtons = document.querySelectorAll('.filter-button');
    const recipeCards = document.querySelectorAll('.page-doces .recipe-card');
    const toggleButtons = document.querySelectorAll('.recipe-toggle');
    const resultsCount = document.getElementById('results-count');
    const noResults = document.getElementById('no-results');

    if (!searchInput || !recipeCards.length || !resultsCount || !noResults) {
        return;
    }

    let activeFilter = 'all';

    function normalizeText(text) {
        return text
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .trim();
    }

    function updateResultsCount(total) {
        if (total === 0) {
            resultsCount.textContent = 'Nenhuma receita encontrada';
        } else if (total === 1) {
            resultsCount.textContent = '1 receita encontrada';
        } else {
            resultsCount.textContent = `${total} receitas encontradas`;
        }
    }

    function filterSweetRecipes() {
        const searchTerm = normalizeText(searchInput.value);
        let visibleRecipes = 0;

        recipeCards.forEach(card => {
            const recipeName = normalizeText(card.dataset.name || '');
            const difficulty = card.dataset.difficulty || '';
            const matchesSearch = recipeName.includes(searchTerm);
            const matchesDifficulty =
                activeFilter === 'all' || difficulty === activeFilter;
            const shouldShow = matchesSearch && matchesDifficulty;

            card.hidden = !shouldShow;

            if (shouldShow) {
                visibleRecipes += 1;
            }
        });

        updateResultsCount(visibleRecipes);
        noResults.hidden = visibleRecipes !== 0;
    }

    function selectSweetFilter(selectedButton) {
        filterButtons.forEach(button => {
            const isSelected = button === selectedButton;
            button.classList.toggle('active', isSelected);
            button.setAttribute('aria-pressed', String(isSelected));
        });

        activeFilter = selectedButton.dataset.filter || 'all';
        filterSweetRecipes();
    }

    function toggleSweetRecipe(button) {
        const contentId = button.getAttribute('aria-controls');
        const content = document.getElementById(contentId);

        if (!content) {
            return;
        }

        const isExpanded = button.getAttribute('aria-expanded') === 'true';
        content.hidden = isExpanded;
        button.setAttribute('aria-expanded', String(!isExpanded));
        button.textContent = isExpanded
            ? 'Mostrar receita'
            : 'Ocultar receita';
    }

    searchInput.addEventListener('input', filterSweetRecipes);

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            selectSweetFilter(button);
        });
    });

    toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            toggleSweetRecipe(button);
        });
    });

    filterSweetRecipes();
}

/* ==========================================================================
   Inicialização Global
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
    // 1. Página Inicial (index.html)
    if (document.getElementById('cards')) {
        initHomePage();
    }

    // 2. Página de Dicas (dicas.html)
    if (document.getElementById('tipsContainer')) {
        renderTips();
        setupTipsInteractions();
    }

    // 3. Página de Salgados (salgados.html)
    if (document.getElementById('savoryContainer')) {
        renderSavoryRecipes();
        setupSavoryInteractions();
    }

    // 4. Página de Doces (doces.html)
    if (document.body.classList.contains('page-doces')) {
        initSweetRecipesPage();
    }
});

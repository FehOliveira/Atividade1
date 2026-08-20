document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('recipe-search');
    const filterButtons = document.querySelectorAll('.filter-button');
    const recipeCards = document.querySelectorAll('.recipe-card');
    const toggleButtons = document.querySelectorAll('.recipe-toggle');
    const resultsCount = document.getElementById('results-count');
    const noResults = document.getElementById('no-results');

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
            return;
        }

        if (total === 1) {
            resultsCount.textContent = '1 receita encontrada';
            return;
        }

        resultsCount.textContent = `${total} receitas encontradas`;
    }

    function filterRecipes() {
        const searchTerm = normalizeText(searchInput.value);
        let visibleRecipes = 0;

        recipeCards.forEach((card) => {
            const recipeName = normalizeText(card.dataset.name);
            const difficulty = card.dataset.difficulty;

            const matchesSearch = recipeName.includes(searchTerm);

            const matchesDifficulty =
                activeFilter === 'all' ||
                difficulty === activeFilter;

            const shouldShow =
                matchesSearch && matchesDifficulty;

            card.hidden = !shouldShow;

            if (shouldShow) {
                visibleRecipes += 1;
            }
        });

        updateResultsCount(visibleRecipes);

        noResults.hidden = visibleRecipes !== 0;
    }

    function selectFilter(selectedButton) {
        filterButtons.forEach((button) => {
            const isSelected = button === selectedButton;

            button.classList.toggle('active', isSelected);
            button.setAttribute('aria-pressed', isSelected);
        });

        activeFilter = selectedButton.dataset.filter;

        filterRecipes();
    }

    function toggleRecipe(button) {
        const contentId = button.getAttribute('aria-controls');
        const content = document.getElementById(contentId);

        if (!content) {
            return;
        }

        const isExpanded =
            button.getAttribute('aria-expanded') === 'true';

        content.hidden = isExpanded;

        button.setAttribute(
            'aria-expanded',
            String(!isExpanded)
        );

        button.textContent = isExpanded
            ? 'Mostrar receita'
            : 'Ocultar receita';
    }

    searchInput.addEventListener('input', filterRecipes);

    filterButtons.forEach((button) => {
        button.addEventListener('click', () => {
            selectFilter(button);
        });
    });

    toggleButtons.forEach((button) => {
        button.addEventListener('click', () => {
            toggleRecipe(button);
        });
    });

    filterRecipes();
});
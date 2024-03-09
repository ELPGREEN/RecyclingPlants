<script>
    document.addEventListener("DOMContentLoaded", function() {
        // Função para filtrar produtos por categoria
        function filterProducts(category) {
            const products = document.querySelectorAll('.fables-product-block');
            products.forEach(product => {
                if (category === 'all') {
                    product.style.display = 'block'; // Mostrar todos os produtos se a categoria for 'all'
                } else {
                    if (product.classList.contains(category)) {
                        product.style.display = 'block'; // Mostrar o produto se pertencer à categoria selecionada
                    } else {
                        product.style.display = 'none'; // Ocultar o produto se não pertencer à categoria selecionada
                    }
                }
            });
        }

        // Event listener para cliques nas opções de categoria
        const categorySelect = document.getElementById('categorySelector');
        categorySelect.addEventListener('change', function() {
            const category = this.value; // Obter a categoria selecionada
            filterProducts(category); // Chamar a função de filtro de produtos
        });

        // Função para filtrar produtos por termo de pesquisa
        function searchProducts(searchTerm) {
            const products = document.querySelectorAll('.fables-product-block');
            products.forEach(product => {
                const title = product.querySelector('.card-title').textContent.toLowerCase();
                if (title.includes(searchTerm.toLowerCase())) {
                    product.style.display = 'block'; // Mostrar o produto se o título corresponder ao termo de pesquisa
                } else {
                    product.style.display = 'none'; // Ocultar o produto se o título não corresponder ao termo de pesquisa
                }
            });
        }

        // Event listener para input de pesquisa
        const searchInput = document.querySelector('.fables-store-input');
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.trim(); // Obter o termo de pesquisa e remover espaços em branco extras
            if (searchTerm !== '') {
                searchProducts(searchTerm); // Chamar a função de pesquisa de produtos
            } else {
                filterProducts('all'); // Se o campo de pesquisa estiver vazio, mostrar todos os produtos
            }
        });
    });
</script>

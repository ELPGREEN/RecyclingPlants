// Adiciona classe 'active' ao botão do menu quando clicado
document.querySelector('.menu-btn').addEventListener('click', function() {
    this.classList.toggle('active');
});

// Event listener para os itens do dropdown
document.addEventListener("DOMContentLoaded", function() {
    var dropdownItems = document.querySelectorAll('.dropdown-item');
    dropdownItems.forEach(function(item) {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            var parent = this.parentElement;
            if (parent.classList.contains('open')) {
                parent.classList.remove('open');
            } else {
                parent.classList.add('open');
            }
        });
    });
});

// Função para traduzir o conteúdo da página para o idioma selecionado
function setLanguage(language) {
    var translator = new google.translate.TranslateElement({ pageLanguage: 'en', includedLanguages: language }, 'google_translate_element');
}

// Função para buscar a especificação da API do Google Tradutor
function fetchAPISpecification(url) {
    fetch(url)
    .then(response => response.json())
    .then(data => {
        // Manipular os dados da especificação da API, se necessário
        console.log(data);
    })
    .catch(error => {
        console.error('Erro ao recuperar a especificação da API:', error);
    });
}

// URL da especificação da API do Google Tradutor
const discoveryUrlV3 = 'https://translate.googleapis.com/$discovery/rest?version=v3';

// Carregar a especificação da API do Google Tradutor
fetchAPISpecification(discoveryUrlV3);

// Inicialização do elemento de tradução do Google
function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}

// $(".player").mb_YTPlayer();  // Removido porque parece ser uma chamada a um plugin externo

function expandImage(image) {
    // Create overlay element
    var overlay = document.createElement("div");
    overlay.className = "overlay";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.zIndex = "9999";
    
    // Create image element inside overlay
    var img = document.createElement("img");
    img.src = image.src;
    img.alt = image.alt;
    img.style.maxWidth = "100%";
    img.style.maxHeight = "100%";
    img.style.position = "absolute";
    img.style.top = "50%";
    img.style.left = "50%";
    img.style.transform = "translate(-50%, -50%)";
    
    // Append image to overlay
    overlay.appendChild(img);
    
    // Append overlay to body
    document.body.appendChild(overlay);
    
    // Close overlay when clicked outside the image
    overlay.onclick = function() {
        overlay.remove();
    };
}


  

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

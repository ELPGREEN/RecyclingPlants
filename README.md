# Site-ELP

Este repositório contém o código fonte e o conteúdo do site ELP (ELPGREEN).

## Estrutura de Pastas

- **RecyclingPlants**: Contém o conteúdo principal do site.
- **.github/workflows**: Configurações para o GitHub Actions para implantar o conteúdo estático no GitHub Pages.
- **custom**: Arquivos personalizados.
- **vendor**: Dependências ou bibliotecas de terceiros.

## Instruções para Implantação

1. **Inicialize o repositório Git:**
   ```bash
git add .
git commit -m "Adiciona o conteúdo do site na pasta RecyclingPlants"
git branch -M main
git push -u origin main
# Inicializa um repositório Git
git init

# Adiciona todos os arquivos ao repositório
git add .

# Realiza o primeiro commit com uma mensagem descritiva
git commit -m "Adiciona a pasta e a página index"

# Cria o branch 'main'
git branch -M main

# Adiciona o repositório remoto do GitHub
git remote add origin https://github.com/ELPGREEN/site-ELP.git

# Envia as alterações para o repositório remoto no branch principal
git push -u origin main

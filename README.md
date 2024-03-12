# Inicializa um repositório Git
git init

# Adiciona todos os arquivos da pasta ao repositório
git add .

# Realiza o primeiro commit com uma mensagem descritiva
git commit -m "Adiciona o conteúdo do site na pasta RecyclingPlants"

# Renomeia o branch para 'main'
git branch -M main

# Adiciona o repositório remoto do GitHub
git remote add origin https://github.com/ELPGREEN/RecyclingPlants.git

# Envia as alterações para o repositório remoto no branch principal
git push -u origin main

# Inicializar o repositório Git
git init

# Adicionar o arquivo README.md ao staging area
git add README.md

# Criar o primeiro commit com uma mensagem descritiva
git commit -m "Primeiro commit"

# Renomear o branch para 'main'
git branch -M main

# Conectar o repositório local ao repositório remoto no GitHub
git remote add origin https://github.com/ELPGREEN/site-ELP.git

# Enviar as alterações para o repositório remoto no branch principal
git push -u origin main
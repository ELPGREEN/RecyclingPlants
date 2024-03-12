# Inicializa um repositório Git
git init 

# Adiciona o arquivo index.htm ao repositório
git add index.htm

# Realiza o primeiro commit
git commit -m "index.htm"

# Renomeia o branch para 'main'
git branch -M main 

# Adiciona o repositório remoto do GitHub
git remote add origin https://github.com/ELPGREEN/site-ELP.git 

# Envia as alterações para o repositório remoto no branch principal
git push -u origin main

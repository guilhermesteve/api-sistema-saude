# Define a imagem base
FROM node:18

# Define o diretório de trabalho no contêiner
WORKDIR /usr/src/app

# Copia os arquivos de definição de pacote para o diretório de trabalho
COPY package*.json ./

# Instala todas as dependências (incluindo as de desenvolvimento)
RUN npm install

# Copia os arquivos de código fonte para o diretório de trabalho
COPY . .

# Compila o TypeScript para JavaScript
RUN npm run build

# Expõe a porta que a aplicação utiliza
EXPOSE 8080

# Define o comando para executar a aplicação
CMD ["node", "dist/index.js"]
Lamborghini Showcase App
Esta é uma aplicação interativa desenvolvida para exibir modelos exclusivos da Lamborghini, consumindo dados de uma API simulada (fake API) para listar nomes, valores e imagens dos veículos.

📱 Screenshots
<br/>
<img width="343" height="754" alt="image" src="https://github.com/user-attachments/assets/2cf66f62-b4eb-4e40-b57a-76cc7c371754" />
<img width="343" height="754" alt="image" src="https://github.com/user-attachments/assets/0ee63a32-e032-4dbd-8f8a-89c03961417e" />


🚀 Tecnologias Utilizadas
O projeto foi construído utilizando as seguintes ferramentas:

React Native / Expo: Framework para o desenvolvimento da interface mobile.

Axios: Biblioteca para realização de requisições HTTP e consumo da API.

TypeScript/JavaScript: Linguagem base para lógica e tipagem.

Fake API (JSON Server/Mock): Utilizada para simular o banco de dados dos carros.

🛠️ Funcionalidades
Listagem Dinâmica: Renderização dos carros a partir dos dados retornados pela API.

Navegação: Sistema de carrossel/navegação para alternar entre os modelos.

Consumo de API com Axios: Gerenciamento eficiente das chamadas assíncronas para buscar:

Marca e Modelo.

Imagem do veículo.

Preço formatado.

Interface Premium: Design com tema escuro (Dark Mode) inspirado na identidade visual da Lamborghini.

📦 Como executar o projeto
Clone o repositório:

Bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
Instale as dependências:

Bash
npm install
# ou
yarn install
Inicie a Fake API:
(Caso esteja usando json-server, por exemplo)

Bash
npx json-server --watch db.json --port 3000
Inicie o projeto:

Bash
npx expo start
💻 Exemplo de Consumo da API
JavaScript
import axios from 'axios';

// Exemplo de como o Axios foi configurado para buscar os dados
const fetchCarData = async () => {
  try {
    const response = await axios.get('URL_DA_SUA_API/cars');
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar dados da API: ", error);
  }
};
🤝 Contribuição
Sinta-se à vontade para abrir uma Issue ou enviar um Pull Request. Feedbacks sobre a UI ou melhorias no consumo da API são sempre bem-vindos!

Desenvolvido com 🏁 por [Seu Nome]

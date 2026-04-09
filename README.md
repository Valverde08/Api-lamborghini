
Lamborghini Showcase App
Esta é uma aplicação interativa desenvolvida em TypeScript com Expo para exibir modelos exclusivos da Lamborghini. O projeto consome dados de uma API simulada (fake API) para renderizar informações detalhadas como nomes, valores e imagens dos veículos.

📱 Screenshots
<br/>
<img width="343" height="754" alt="image" src="https://github.com/user-attachments/assets/2cf66f62-b4eb-4e40-b57a-76cc7c371754" />
<img width="343" height="754" alt="image" src="https://github.com/user-attachments/assets/0ee63a32-e032-4dbd-8f8a-89c03961417e" />


🚀 Tecnologias e Ferramentas
O projeto foi estruturado para garantir escalabilidade e tipagem forte:

Expo: Plataforma para desenvolvimento e execução do ecossistema React Native.

TypeScript: Utilizado em todo o projeto para garantir segurança de tipos e melhor experiência de desenvolvimento.

Axios: Cliente HTTP para o consumo da API de forma assíncrona.

Fake API: Fonte de dados mockada para simular o inventário da marca.

🛠️ Funcionalidades
Tipagem de Dados: Interfaces TypeScript definidas para os objetos de carros, garantindo que os preços e nomes sejam renderizados corretamente.

Consumo de API com Axios: Gerenciamento de requisições GET para buscar o catálogo de carros.

Interface Premium: Design com tema dark sofisticado, otimizado para dispositivos mobile através do Expo.

Navegação Fluida: Navegação entre modelos com atualização dinâmica de estado.

📦 Como executar o projeto
Clone o repositório:

Bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
Instale as dependências:

Bash
npm install
Inicie o servidor da Fake API:

Bash
npx json-server --watch db.json --port 3000
Inicie o ambiente Expo:

Bash
npx expo start
💻 Exemplo de Tipagem e Requisição
TypeScript
// Exemplo de interface TypeScript utilizada
interface Car {
  id: number;
  name: string;
  price: number;
  image: string;
}

// Consumo com Axios
const getCars = async (): Promise<Car[]> => {
  const { data } = await axios.get<Car[]>('URL_DA_API/cars');
  return data;
};
Desenvolvido com 🏁 por Vinicius Valverde

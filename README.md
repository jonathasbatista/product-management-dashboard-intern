> ⚠️ **ATENÇÃO DESENVOLVEDORES**
>
> **Não comite** diretamente neste responsitório!
>
> Este é um **repositório template** e não deve ser modificado diretamente.
>
> Ao invés disso, siga estes passos para usá-lo corretamente:
## 🚀 Como usar este repositório:

1. **Clone este repo:**
   ```bash
   git clone https://github.com/romulorocha-voltalia/product-management-dashboard-intern.git

2. **Crie um novo repositório na sua conta do GitHub**
3. **Altere a origin remota para o seu novo repositório:**
   ```bash
    cd your-template-repo
    git remote remove origin
    git remote add origin https://github.com/YOUR_USERNAME/your-new-repo.git
    git push -u origin main

<img width="4707" height="1129" alt="Logo_Voltalia-White" src="https://github.com/user-attachments/assets/c4812952-af71-4ebe-af2b-97303db80ed0" />

# Teste: Frontend Developer (React/TS + Dashboard CRUD)

## 🎯 Objetivo

Olá, candidato! O objetivo deste teste é avaliar sua habilidade em construir uma aplicação "business-oriented" completa, consumindo uma API pública.

Queremos ver como você estrutura uma aplicação **React** com **TypeScript**, gerencia o estado da UI (especialmente após ações de CRUD), cria um layout responsivo com **TailwindCSS** e implementa as operações de **CRUD** (Create, Read, Update, Delete) de forma simulada.

## 📖 O Desafio: Dashboard de Gerenciamento de Produtos

Seu desafio é criar um "Product Management Dashboard", uma interface de administração para gerenciar o inventário de produtos de uma empresa fictícia.

Você usará a API pública **DummyJSON** (https://dummyjson.com/docs/products), que é uma API REST de teste que simula um ambiente de e-commerce.

### 🥞 Stack 

* **Build Tool:** ViteJS (inicializar com `npm create vite@latest -- --template react-ts`)
* **Biblioteca/Framework:** ReactJS
* **Linguagem:** TypeScript
* **Estilização:** TailwindCSS (Sugestão)

---

### 📝 Requisitos Obrigatórios

Seu projeto deve conter duas áreas principais, consumindo os *endpoints* da DummyJSON:

#### 1. Página de Dashboard (Read)

* Esta deve ser a página inicial (`/`).
* Ela deve buscar os produtos da API.
    * **Endpoint:** `GET https://dummyjson.com/products`
* Com os dados retornados, você deve exibir **Cards de Métricas** (KPIs) calculados no frontend:
    * **Valor Total do Estoque:** Soma de (`price * stock`) de todos os produtos.
    * **Média de Preço:** Preço médio de todos os produtos.
    * **Total de Categorias:** Número de categorias únicas presentes na lista (ex: "smartphones", "laptops", etc.).
* Abaixo dos cards, exiba a **Tabela de Produtos** (descrita no próximo requisito).

#### 2. Gerenciamento de Produtos (CRUD Simulado)

* *Você pode optar por fazer esta em uma nova página (`/products`) ou na própria home, abaixo dos cards do Dashboard.*
* **Read (Leitura):**
    * Exibir todos os produtos (obtidos do `GET /products`) em uma **tabela** estilizada com Tailwind.
    * A tabela deve ser responsiva.
    * Colunas: Nome, Categoria, Preço, Estoque, e Ações.
* **Create (Criação):**
    * Um botão "Adicionar Produto" deve abrir um **Modal** (ou formulário na página).
    * O formulário deve conter campos para `title`, `category`, `price` e `stock`.
    * Ao submeter, deve fazer uma requisição `POST https://dummyjson.com/products/add` com os dados do novo produto no *body*.
    * **Importante:** A API irá *simular* a criação e retornar o novo objeto (com um novo ID). Você deve usar essa resposta para **atualizar o estado da sua aplicação** e adicionar o novo produto à tabela (sem precisar recarregar a página).
* **Update (Atualização):**
    * Na coluna "Ações" da tabela, cada linha deve ter um botão "Editar".
    * Clicar em "Editar" deve abrir um **Modal** pré-preenchido com os dados daquele produto.
    * Ao submeter, deve fazer uma requisição `PUT https://dummyjson.com/products/:id` (substitua `:id` pelo ID do produto).
    * A API irá *simular* a atualização e retornar o objeto atualizado. Você deve usar essa resposta para atualizar a linha correspondente na tabela.
* **Delete (Deleção):**
    * Na coluna "Ações", deve haver um botão "Excluir".
    * Clicar em "Excluir" deve exibir uma confirmação.
    * Ao confirmar, deve fazer uma requisição `DELETE https://dummyjson.com/products/:id`.
    * A API irá *simular* a deleção e retornar o objeto deletado. Você deve usar essa resposta para **remover o produto da tabela** no seu estado local.

**Observação sobre o CRUD:** Como a DummyJSON é uma API de teste, as alterações (Create, Update, Delete) não são persistentes. Se você recarregar a página, os dados originais voltarão. O objetivo é avaliar como você lida com a **requisição e a atualização do estado da UI (a "experiência" do CRUD)**.

#### 3. Requisitos Técnicos

* **TypeScript:** Crie uma `interface` (ex: `IProduct`) para tipar os dados dos produtos que vêm da API (veja a documentação da DummyJSON para a estrutura). Use tipos em seus estados (`useState`), props de componentes e funções de API.
* **Estrutura de Componentes:** Separe a lógica em componentes reutilizáveis (ex: `<Table />`, `<ProductFormModal />`, `<MetricCard />`).
* **Estilização:** Use **TailwindCSS** para todo o layout e estilização. A interface deve ser limpa e profissional.

### ⭐ Requisitos Bônus (Diferenciais)

Quer se destacar? Tente implementar um ou mais destes itens:

* **React Query (TanStack Query):** Use a biblioteca React Query para gerenciar todo o *data fetching* (`useQuery`) e as *mutations* (`useMutation`). Isso é um ENORME diferencial e demonstra conhecimento em gerenciamento de estado de servidor moderno.
* **Gráficos no Dashboard:** No lugar (ou além) dos cards de métrica, use uma biblioteca de gráficos (como `Recharts` ou `Chart.js`) para mostrar um gráfico simples (ex: "Produtos por Categoria").

### 🚚 O que entregar

1.  Um link para um repositório público no **GitHub** contendo todo o código-fonte.
2.  O repositório deve conter um `README.md` claro, explicando:
    * Quais requisitos (obrigatórios e bônus) você cumpriu.
    * Como rodar o projeto (ex: `npm install`, `npm run dev` ou `yarn dev`...).
3.  **(Super Bônus)** Um link para o projeto funcionando, hospedado gratuitamente (ex: Vercel, Netlify, etc).

### 🚀 Critérios de Avaliação

* **Funcionalidade:** O Dashboard e o CRUD (simulado) funcionam conforme o esperado?
* **Qualidade do Código:** Seu código é limpo, organizado e legível?
* **React:** Você entende a estrutura de componentes, props, e o uso de *hooks*? O gerenciamento de estado é eficiente (especialmente ao atualizar a UI após mutações)?
* **TypeScript:** Você aplicou a tipagem de forma correta e útil?
* **TailwindCSS:** A interface é responsiva, limpa e bem-construída?
* **Lógica de API:** Você sabe lidar com requisições assíncronas (async/await, Promises) e atualizar a UI de forma otimista ou após a resposta?

---

Boa sorte! Estamos ansiosos para ver seu dashboard.

# 🎯 Dashboard de Gerenciamento de Produtos

Este projeto é um *Dashboard de Gerenciamento de Produtos* que implementa todas as operações CRUD (Create, Read, Update, Delete) consumindo a API REST de testes [DummyJSON](https://dummyjson.com/).

O objetivo principal foi demonstrar proficiência em React com TypeScript, gerenciamento de estado assíncrono, boas práticas de código e estilização moderna com Tailwind CSS.

## 🚀 Tecnologias e Stack

| Categoria | Tecnologia |
| :--- | :--- |
| **Framework** | React |
| **Linguagem** | TypeScript |
| **Estilização** | Tailwind CSS |
| **Build Tool** | ViteJS |
| **Deploy** | Vercel (Super Bônus) |
| **API** | DummyJSON (Simulação REST) |

---

## ✨ Requisitos Cumpridos (Funcionalidades e UX)

Todos os requisitos foram implementados, com foco em uma experiência de usuário (UX) limpa e consistente com o tema **Amarelo/Branco**.

### 1. Funcionalidade Principal (CRUD Completo)

| Operação | Detalhes da Implementação |
| :--- | :--- |
| **READ (Leitura)** | Busca de produtos ao carregar, cálculo e exibição de 3 KPIs (`Valor Total do Estoque`, `Preço Médio`, `Total de Categorias`), e Tabela responsiva. |
| **CREATE (Criação)** | Modal centralizado e estilizado que submete um `POST` e adiciona o novo produto à lista localmente. |
| **UPDATE (Atualização)** | Botão "Editar" abre o Modal **pré-preenchido**. A submissão faz `PUT` e atualiza a linha localmente. |
| **DELETE (Exclusão)** | Botão "Excluir" com confirmação. Faz a requisição `DELETE` e remove o item da lista local. |

### 2. Design e Boas Práticas (Bônus)

| Bônus | Status | Implementação |
| :--- | :--- | :--- |
| **Estilização Completa** | ✅ Completo | Design moderno com tema **Amarelo/Branco** aplicado consistentemente em Cards, Modal e Tabela. |
| **Formatação de Valores** | ✅ Completo | Valores monetários formatados no padrão **R$ 999.999,99** (`toLocaleString`) nos Cards e Tabela. |
| **Tipagem Estrita** | ✅ Completo | Uso de `import type` e tipos utilitários (`Omit`) em todas as funções de `Create` e `Update`. |
| **Layout Profissional** | ✅ Completo | Layout principal em um box arredondado centralizado, com alinhamento preciso de elementos e responsividade. |

---

## ⭐️ Super Bônus: Deploy na Vercel

O projeto está configurado para ser facilmente implantado e acessado publicamente através da plataforma Vercel.

**https://product-management-dashboard-nu.vercel.app/**

---

## ⚙️ Como Rodar o Projeto Localmente

Siga estes passos simples para configurar e executar o dashboard na sua máquina.

### Pré-requisitos

Você precisa ter o [Node.js](https://nodejs.org/) e o [npm](https://www.npmjs.com/) instalados.

### 1. Instalação das Dependências

Abra o terminal na pasta raiz do projeto (`product-management-dashboard`) e execute:

npm install

### 2. Execução do Servidor de Desenvolvimento

Após a instalação, inicie o servidor de desenvolvimento com o Vite:

npm run dev
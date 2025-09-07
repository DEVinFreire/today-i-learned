# Today I Learned

Este é um projeto **pessoal** desenvolvido para estudo e prática das tecnologias **React**, **Supabase** e **Netlify**. O objetivo é criar uma aplicação web onde usuários podem compartilhar fatos interessantes, votar neles e filtrar por categorias.

## Tecnologias Utilizadas

- **React**  
  Utilizado para construir a interface do usuário de forma reativa e modular, com componentes funcionais e hooks (`useState`, `useEffect`).

- **Supabase**  
  Utilizado como backend-as-a-service, fornecendo banco de dados PostgreSQL e autenticação. Todas as operações de CRUD (criação, leitura, atualização) dos fatos são feitas via Supabase.

- **Netlify**  
  O projeto está hospedado gratuitamente no Netlify, facilitando o deploy contínuo e acesso público.  
  **Acesse em:** [https://devinfreirelearned.netlify.app/](https://devinfreirelearned.netlify.app/)

## Funcionalidades

- **Compartilhar fatos:**  
  Usuários podem enviar fatos preenchendo um formulário, informando texto, fonte confiável e categoria.

- **Votação:**  
  Cada fato pode receber votos de "Interessante", "Mindblowing" ou "Falso". Os votos são atualizados em tempo real no banco de dados.

- **Filtragem por categoria:**  
  É possível visualizar fatos por categoria, facilitando a navegação e descoberta de novos conteúdos.

- **Validação de dados:**  
  O formulário valida se o texto está preenchido, se a fonte é uma URL válida e se uma categoria foi escolhida.

- **Feedback visual:**  
  Fatos com mais votos de "Falso" do que "Interessante" e "Mindblowing" são marcados como **DISPUTED**.

## Estrutura do Projeto

- `src/App.js`:  
  Componente principal, gerencia estado global, renderiza o formulário, lista de fatos e filtro de categorias.
- `src/supabase.js`:  
  Configuração da conexão com Supabase.
- `src/style.css`:  
  Estilos da aplicação.

## Como rodar localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/today-i-learned.git
   cd today-i-learned
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Configure o arquivo `src/supabase.js` com suas credenciais do Supabase.
4. Inicie o projeto:
   ```bash
   npm start
   ```
5. Acesse em `http://localhost:3000`.

## Deploy

O deploy é feito automaticamente no Netlify a cada push na branch principal.  
Acesse: [https://devinfreirelearned.netlify.app/](https://devinfreirelearned.netlify.app/)

---

**Este projeto é apenas para fins de estudo e aprendizado das tecnologias citadas. Sinta-se à vontade para explorar, modificar e sugerir melhorias!**
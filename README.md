Projeto Monorepo: Sistema de Autenticação
Este projeto é um monorepo que contém dois subprojetos: um frontend construído com Next.js e um backend desenvolvido em NestJS. O sistema é projetado para autenticar usuários via login e exibir uma lista de usuários autenticados, demonstrando a integração entre frontend e backend com autenticação baseada em JWT e cookies.

Frontend
O frontend é uma aplicação Next.js que roda em localhost na porta 3000. Este subprojeto inclui:

Tela de Login: Permite ao usuário se autenticar no backend.
Tela de Listagem de Usuários: Exibe uma lista de usuários, acessível somente após autenticação. Essa rota requer a validação de um token JWT armazenado em cookies, configurado durante o processo de login.
Configurações Importantes:
Rotas: O acesso à tela de listagem de usuários é restrito a usuários autenticados, requerendo validação do cookie de autenticação pelo backend.
Backend
O backend é uma aplicação NestJS responsável pela autenticação dos usuários e fornecimento de dados. Principais características:

Rota de Login: Valida as credenciais do usuário; em caso de sucesso, gera um token JWT armazenado em cookies com a flag httpOnly.
Rota Autenticada: Retorna informações do usuário, exigindo autenticação via token JWT.
Configurações de Segurança:
Cookies: Para testes locais sob o protocolo HTTP, a flag Secure não é habilitada, mas é obrigatória em produção.
Atributo SameSite: Configurado como Strict para evitar o envio de cookies em requisições cross-origin, aumentando a segurança da autenticação.
CORS e Cookies:
CORS: Configurações específicas são necessárias para permitir a comunicação segura entre o frontend e o backend, incluindo a definição do domínio do frontend nas políticas de CORS do backend.
Cookies: É crucial configurar o atributo credentials: true para que as credenciais sejam transmitidas via cookies.
Preparação e Execução
Requisitos:
Node.js instalado.
Gerenciador de pacotes (npm ou yarn).
Executando Localmente:
Clone o repositório:
bash
Copy code
git clone URL_DO_REPOSITORIO
Frontend:
Navegue até o subdiretório do frontend e instale as dependências:

bash
Copy code
cd caminho_para_o_frontend
npm install # ou yarn
Execute o projeto:

bash
Copy code
npm run dev # ou yarn dev
Backend:
Navegue até o subdiretório do backend e instale as dependências:

bash
Copy code
cd caminho_para_o_backend
npm install # ou yarn
Execute o projeto:

bash
Copy code
npm run start # ou yarn start
Preparação para Produção:
Assegure-se de habilitar a flag Secure nos cookies.
Configure as políticas de CORS para incluir o domínio específico do frontend.
Valide todas as configurações de segurança e teste a aplicação completamente.
# CRM Project

Este é um projeto de CRM (Customer Relationship Management) com frontend em React/Vite e backend em Python/Flask.

## Estrutura do Projeto

- `frontend/`: Aplicação React criada com Vite.
- `backend/`: API RESTful construída com Flask.

## Pré-requisitos

- Node.js e npm
- Python 3.x

## Como Executar

### Backend

1.  Navegue até a pasta `backend`:
    ```bash
    cd backend
    ```
2.  (Opcional) Crie e ative um ambiente virtual:
    ```bash
    python -m venv venv
    # Windows
    venv\Scripts\activate
    # Linux/Mac
    source venv/bin/activate
    ```
3.  Instale as dependências:
    ```bash
    pip install -r requirements.txt
    ```
4.  Execute a aplicação:
    ```bash
    python run.py
    ```
    O servidor iniciará em `http://localhost:5000`.

### Frontend

1.  Navegue até a pasta `frontend`:
    ```bash
    cd frontend
    ```
2.  Instale as dependências (se ainda não fez):
    ```bash
    npm install
    ```
3.  Inicie o servidor de desenvolvimento:
    ```bash
    npm run dev
    ```
4.  Acesse a aplicação em `http://localhost:5173`.

## Roadmap (Funcionalidades Futuras)

Para transformar este esqueleto em um CRM completo, as seguintes funcionalidades serão implementadas:

- [ ] **Gestão de Contatos Avançada**: Histórico de interações, tags, segmentação.
- [ ] **Funil de Vendas Personalizado**: Visualização Kanban, múltiplos pipelines, drag-and-drop.
- [ ] **Automação de Marketing**: Campanhas de email, gatilhos automáticos, pontuação de leads.
- [ ] **Integrações**: Conexão com WhatsApp, Email, Calendário e outras ferramentas.
- [ ] **Relatórios e Análises**: Dashboards em tempo real, previsão de vendas, KPIs.
- [ ] **Gestão de Tarefas**: Lembretes, delegação de tarefas, follow-ups.
- [ ] **Autenticação e Controle de Acesso**: Login seguro, níveis de permissão (admin, vendedor).

## Estrutura Atual

### Frontend
- **Layout**: Sidebar, Header, Navegação.
- **Páginas**: Dashboard, Contatos, Oportunidades, Relatórios.
- **Estilização**: Tailwind CSS.

### Backend
- **Framework**: Flask.
- **Banco de Dados**: SQLite (configurado via SQLAlchemy).
- **Modelos**: Contact, Opportunity, User.
- **API**: Rotas básicas para listar e criar contatos/oportunidades.

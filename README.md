# Liferay Spaces - Portal de Gerenciamento de Espaços para Eventos

Este projeto foi desenvolvido pela Squad 14 da turma do 2º periodo da Faculdade Católica Imaculada Conceição do Recife em parceria com a Liferay e visa solucionar a falta de um portal centralizado 
para divulgar e administrar reservas dos espaços do escritório da Liferay em Recife. O objetivo é transformar processos manuais, demorados e pouco eficientes em uma experiência 
digital ágil e transparente para o agendamento de eventos.

## O Problema

O escritório da Liferay enfrentava dificuldades na gestão de reservas de seus espaços, resultando em:

* Processos manuais e demorados.
* Agendamentos duplicados e falta de visibilidade da disponibilidade.
* Frustração entre colaboradores e atrasos no planejamento.
* Sobrecarga da equipe administrativa.

## A Solução Proposta

Um portal web integrado ao ecossistema Liferay que oferece:

* **Informações da Instituição:** Detalhes sobre a Liferay e o propósito do escritório de Recife.
* **Galeria de Espaços:** Visualização detalhada dos ambientes com fotos, capacidade e recursos.
* **Formulário de Pré-Reserva:** Processo online simplificado para solicitar agendamentos.
* **Avaliação de Uso do Espaço:** Feedback de usuários para promover melhoria contínua.
* **Painel Administrativo:** Para gerenciamento de solicitações, eventos e relatórios.

## Funcionalidades Principais

### Para Usuários (Colaboradores e Comunidades):

* **Página Institucional:** Conhecer a Liferay Recife e seus objetivos.
* **Galeria de Espaços:** Explorar fotos em alta resolução, detalhes técnicos (capacidade, recursos como projetor, Wi-Fi) e regras de uso de cada ambiente (auditório, salas de reunião).
* **Formulário de Pré-Reserva:** Preencher dados do evento, escolher até dois espaços, aceitar termos e receber confirmação por e-mail, com verificação automática de conflitos de agenda.
* **Avaliação de Uso do Espaço:** Ler as avaliações sobre os espaços utilizados.

### Para Administradores (Equipe Liferay):

* **Painel de Solicitações:** Visualizar e gerenciar todas as solicitações de reserva com filtros e ordenação.
* **Aprovação Rápida de Reservas:** Aprovar ou reprovar solicitações com um clique, notificando o solicitante por e-mail.
* **Gestão de Eventos Confirmados:** Editar, atualizar ou cancelar eventos, com atualização automática da agenda pública e notificações.
* **Relatórios e Análises:** Acompanhar métricas como total de eventos por mês, taxa de ocupação e comparativo de uso entre espaços através de gráficos interativos, com possibilidade de exportação.

## Stack de Desenvolvimento

* **Framework Frontend:** React.js
* **Linguagem:** JavaScript / TypeScript
* **Estilização:** Tailwind CSS
* **Ferramenta de Build:** Vite
* **Plataforma Alvo:** Liferay Portal
* **Versionamento e Hospedagem:** Git e GitHub

## Estrutura do Projeto

O código-fonte principal reside dentro do diretório `liferay-space/` na raiz do repositório. Uma estrutura típica para este tipo de projeto Liferay incluiria:

* `liferay-space/`:
    * `package.json`: Define metadados do projeto, dependências de frontend (React, Vite, Tailwind CSS) e scripts de build.
    * `vite.config.js` (ou similar): Configurações da ferramenta de build Vite.
    * `tailwind.config.js`: Configurações do Tailwind CSS.
    * `src/`: Contém os arquivos fonte TypeScript (`.ts`, `.tsx`), CSS (`.css`, `.scss`), componentes React e outros assets.
    * Arquivos de configuração específicos do Liferay (ex: `bnd.bnd`, configurações de portlet) para integração com a plataforma Liferay.
    * `dist/` ou `build/` (gerado após o build): Contendo o artefato implantável (ex: `.jar` ou arquivos estáticos para serem servidos como um módulo Liferay).

## Pré-requisitos

Antes de começar, garanta que você possui:

* Node.js (versão LTS recomendada) e npm/Yarn.
* Conhecimento em desenvolvimento frontend com React, TypeScript, Vite e Tailwind CSS.
* Conhecimento em desenvolvimento de módulos/portlets para Liferay.

## Instalação e Build

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/MariTronix/liferay-space.git](https://github.com/MariTronix/liferay-space.git)
    cd liferay-space
    ```

2.  **Navegue até o diretório do módulo:**
    ```bash
    cd liferay-space
    ```
    *(Este é o diretório que contém o `package.json`)*

3.  **Instale as dependências do frontend:**
    ```bash
    npm install
    # OU
    # yarn install
    ```

4.  **Construa o módulo (Build):**
    Verifique os scripts no `package.json`. Um comando comum com Vite é:
    ```bash
    npm run dev
    ```

## Links Úteis

* **Protótipo do Projeto (Figma):** [https://www.figma.com/design/2ooxLbQmCutuL234RUEbYx/Liferay-Spaces?node-id=0-1&t=YMLHn96cnrQDnhdS-1](https://www.figma.com/design/2ooxLbQmCutuL234RUEbYx/Liferay-Spaces?node-id=0-1&t=YMLHn96cnrQDnhdS-1)
* **Quadro de Desenvolvimento (Trello):** [https://trello.com/b/GrnqBekg/liferay-space](https://trello.com/b/GrnqBekg/liferay-space)


## Equipe (Squad 14)

| Foto                                                                 | Nome                                           | GitHub                                                       |
| :------------------------------------------------------------------: | :--------------------------------------------- | :-----------------------------------------------------------: |
|  <img src="https://github.com/user-attachments/assets/d7c3145c-1370-4073-9698-d31189c2393f" width="100" alt="Danilo André Dias de Assis Santana"/> | Danilo André Dias de Assis Santana             | [DaniloNero](https://github.com/DaniloNero)                    |
| <img src="https://avatars.githubusercontent.com/u/146151483?v=4" width="100" alt="Arthur Antunes Alves de Moura"/> | Arthur Antunes Alves de Moura                  | [Arthur-antunes98](https://github.com/Arthur-antunes98)        |
| -                                                   | Guilherme Cauã Gonzalez Cintra Regis         | - |
| -                                                 | Kauã Felipe Souza da Silva                     | [KauaOliveira17](https://github.com/KauaOliveira17)            |
| <img src="https://avatars.githubusercontent.com/u/181266574?v=4" width="100" alt="Guilherme Lira Torres de Souza"/> | Guilherme Lira Torres de Souza               | [guiLira04](https://github.com/guiLira04)                      |
| <img src="https://avatars.githubusercontent.com/u/191589441?v=4" width="100" alt="Jhonata Marcelino da Silva"/>                                                  | Jhonata Marcelino da Silva                   | [Jhonydev21](https://github.com/Jhonydev21) |
| <img src="https://avatars.githubusercontent.com/u/187022467?v=4" width="100" alt="Carolina Melo Silva de Oliveira "/> | Carolina Melo Silva de Oliveira                | [Carolina-0701](https://github.com/Carolina-0701)              |
| <img src="https://avatars.githubusercontent.com/u/98923335?v=4" width="100" alt="Mariana Mendes de Lima"/> | Mariana Mendes de Lima (Mantenedora)         | [MariTronix](https://github.com/MariTronix)                    |
| <img src="https://avatars.githubusercontent.com/u/183922350?v=4" width="100" alt="Marcos Paulo Oliveira da Silva Júnior"/> | Marcos Paulo Oliveira da Silva Júnior          | [Marcopolojr360](https://github.com/Marcopolojr360)            |
| <img src="https://avatars.githubusercontent.com/u/157994507?v=4" width="100" alt="Luan Richard Paes Teixeira"/> | Luan Richard Paes Teixeira                     | [luanrichardsz](https://github.com/luanrichardsz)              |


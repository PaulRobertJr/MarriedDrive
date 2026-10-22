<div align="center">

# MarriedDrive

**Geibson & Lauren — 01 de novembro de 2026**

Um site de casamento para compartilhar os registros do grande dia.
Os convidados acessam um álbum coletivo e enviam suas fotos e vídeos.

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white&style=flat-square)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white&style=flat-square)](https://vite.dev)
[![Oxlint](https://img.shields.io/badge/Oxlint-1-1F2A24?style=flat-square)](https://oxc.rs)
[![Deploy](https://img.shields.io/badge/deploy-site%20est%C3%A1tico-B98B4E?style=flat-square)](#-deploy)

</div>

---

## Sobre

Uma página leve e responsiva que reúne o convite do casamento e um botão
direto para o álbum compartilhado no Google Drive. A identidade visual usa
tons de marfim, vinho e dourado, com tipografia serifada elegante e animações
suaves de entrada conforme o usuário rola a página.

## Seções

| Seção | Descrição |
| --- | --- |
| **Hero** | Foto do casal com monograma *G & L*, nomes e data do casamento |
| **Convite** | Mensagem aos convidados com divisórias decorativas e assinatura |
| **Álbum** | Botão que leva ao Google Drive para envio de fotos e vídeos |
| **Footer** | Rodapé reservado para créditos |

## Tecnologias

- **React 19** — interface em componentes
- **Vite 8** — dev server e build
- **Oxlint** — lint rápido
- **CSS puro** — design tokens em `src/styles/tokens.css`
- **IntersectionObserver** — animações de entrada (`src/hooks/useInView.js`)

## Como rodar

Requisitos: **Node.js 20+** e **npm** (ou yarn/pnpm).

```bash
# instalar dependências
npm install

# ambiente de desenvolvimento
npm run dev

# build de produção
npm run build

# pré-visualizar o build
npm run preview

# lint
npm run lint
```

O servidor de desenvolvimento sobe em `http://localhost:5173`.

## Estrutura

```text
MarriedDrive/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   └── casal.jpg          # foto de fundo do Hero
│   ├── components/
│   │   ├── Hero.jsx           # abertura com foto, monograma e data
│   │   ├── Invitation.jsx     # mensagem para os convidados
│   │   ├── DriveButton.jsx    # link para o álbum no Google Drive
│   │   ├── Monogram.jsx       # monograma G & L em SVG
│   │   └── Footer.jsx
│   ├── hooks/
│   │   └── useInView.js       # hook de animação ao aparecer na tela
│   ├── styles/
│   │   ├── tokens.css         # cores e fontes
│   │   └── global.css         # reset e estilos base
│   ├── App.jsx
│   └── main.jsx
├── index.html
└── vite.config.js
```

## Personalização

- **Cores e fontes** — edite as variáveis em `src/styles/tokens.css`.
- **Foto do casal** — substitua `src/assets/casal.jpg` (mesmo nome).
- **Texto do convite** — `src/components/Invitation.jsx`.
- **Link do álbum** — constante `DRIVE_LINK` em `src/components/DriveButton.jsx`.
- **Título e metadados** — `index.html`, incluindo as tags Open Graph.

## Deploy

O projeto gera um site estático. Basta rodar `npm run build` e publicar a
pasta `dist/` em qualquer hospedagem estática, como **Vercel**, **Netlify**
ou **GitHub Pages**.

## Licença

Projeto pessoal de uso privado.

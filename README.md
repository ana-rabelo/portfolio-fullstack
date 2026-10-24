# Portfólio de Ana Paula Rabelo

Portfólio full-stack em Angular, publicado em [ana-rabelo-dev.vercel.app](https://ana-rabelo-dev.vercel.app/). O GitHub Pages mantém uma cópia em [ana-rabelo.github.io/portfolio-fullstack](https://ana-rabelo.github.io/portfolio-fullstack/).

## Desenvolvimento

Requer Node.js 22.

```bash
npm ci --legacy-peer-deps
npm start
```

Abra `http://localhost:4200`. Para validar o filtro de projetos e gerar o site:

```bash
npm test
npm run build -- --base-href /portfolio-fullstack/
```

## Conteúdo e publicação

As experiências e a formação foram resumidas a partir do currículo de Ana Paula. O site publica apenas e-mail, LinkedIn e GitHub como contatos. Os sistemas em produção são descritos de forma genérica; apenas o Sistema de Apoio Legislativo aponta para um endereço público. As prévias desses sistemas são imagens conceituais ou capturas adaptadas e anonimizadas, sem logotipos institucionais, nomes pessoais ou créditos de fornecedor. O caso acadêmico INSIS resume o trabalho em repositórios privados; os demais cartões de estudo apontam para repositórios públicos.

O deploy do GitHub Pages é feito automaticamente pelo workflow em `.github/workflows/pages.yml` após cada push para `main`. Em **Settings → Pages**, a fonte precisa estar configurada como **GitHub Actions**. A Vercel usa o mesmo repositório e a branch `main` para o deploy de produção.

O design usa como inspiração a [página de trabalhos de Gabriel Valdivia](https://www.gabrielvaldivia.com/work), com composição, conteúdo e prévias gráficas próprias.

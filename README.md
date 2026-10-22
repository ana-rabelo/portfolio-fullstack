# Portfólio de Ana Paula Rabelo

Portfólio full-stack em Angular, publicado em [ana-rabelo.github.io/portfolio-fullstack](https://ana-rabelo.github.io/portfolio-fullstack/).

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

As experiências e a formação foram resumidas a partir do currículo de Ana Paula. O site publica apenas e-mail, LinkedIn e GitHub como contatos. O caso acadêmico INSIS resume o trabalho em repositórios privados; os demais cartões apontam para repositórios públicos.

O deploy é feito automaticamente pelo workflow em `.github/workflows/pages.yml` após cada push para `main`. Em **Settings → Pages**, a fonte precisa estar configurada como **GitHub Actions**.

O design usa como inspiração a [página de trabalhos de Gabriel Valdivia](https://www.gabrielvaldivia.com/work), com composição, conteúdo e prévias gráficas próprias.

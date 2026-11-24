# Acervo LICHTARA

Biblioteca digital dos campos e manuais do Sistema LICHTARA. O site lê os Markdown nas pastas numeradas do repositório, oferece busca local de texto completo e disponibiliza os PDFs originais em uma biblioteca própria.

## Executar localmente

Use Node.js 24 LTS com npm e um clone Git do acervo. No terminal, comece pela raiz do repositório.

```sh
cd site
npm ci
npm start
```

O comando gera o catálogo, o site estático e o índice de busca antes de iniciar a prévia local. Use `Ctrl+C` para encerrar a prévia ou `npm run preview -- stop` se ela estiver em segundo plano. [Abrir a prévia em 127.0.0.1:4321](http://127.0.0.1:4321/)

| Comando | Uso |
| --- | --- |
| `npm run build` | Regenera o catálogo e produz o site e o índice em `dist/`. |
| `npm run preview` | Abre localmente o último build, com busca. |
| `npm run dev` | Prévia de desenvolvimento das páginas Astro. O índice Pagefind é gerado pelo build. |
| `npm run catalogo` | Atualiza somente o catálogo JSON. |

Na entrada, escolha um campo ou digite um termo de busca. No leitor, selecione um trecho e use **Copiar contexto para o ChatGPT**. A cópia reúne trecho, título, caminho e link da origem. Sem seleção, a cópia reúne a referência. Cole o texto no chat de sua escolha.

## Arquivos do projeto

- [Código-fonte do Acervo](src/README.md)
- [Preparação de arquivos para o build](scripts/README.md)
- [Catálogo gerado](catalogo.json)
- [Protótipo de Ferramentas e Ativações](ATIVACOES.md)
- [Decisões técnicas e revisão editorial](DECISOES.md)
- [Resumo de validação](TESTES.md)

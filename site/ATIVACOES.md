# Ferramentas e Ativações

Prévia do Portal LICHTARA, da entrada à primeira pergunta. O protótipo usa a aplicação Astro em `site/`, com uma rota e um cabeçalho próprios. O cabeçalho permite visitar o Acervo. [Abrir a prévia publicada](https://acervo.lichtara.com/ativacoes/)

## Executar

Na raiz do repositório, use Node.js 24 LTS com npm.

```sh
cd site
npm ci
npm run build
npm run preview -- --port 4322
```

[Abrir a prévia local](http://127.0.0.1:4322/ativacoes/)

Se já houver uma prévia do Astro em execução neste checkout, acrescente `--ignore-lock` ao comando para abrir a segunda porta.

## O percurso

| Etapa | O que a pessoa pode fazer |
| --- | --- |
| AT-00 | Iniciar a experiência, abrir a descrição ou visitar o Acervo. |
| AT-01 | Comparar as três chaves, selecionar uma e confirmar a escolha. |
| AT-02 | Reconhecer a chave escolhida pela geometria e pelo texto, continuar ou voltar à seleção. |
| AT-03 | Iniciar uma pausa voluntária de dez segundos, interrompê-la ou pular para a pergunta. A pausa termina no mesmo painel e a pessoa decide quando avançar. |
| AT-04 | Escrever uma intenção, escolher um tema, usar **Ainda não sei** ou concluir sem registro. A conclusão é um estado desta etapa, com ações para rever a pergunta e recomeçar. |

O histórico do navegador identifica as etapas por fragmentos da URL. A escolha, o texto e o tema ficam em memória enquanto a página está aberta. A navegação durante a experiência mantém o rascunho de cada chave. Concluir sem registrar ou escolher **Ainda não sei** descarta o rascunho da chave atual. Recarregar a página ou recomeçar apaga essa memória. O histórico contém apenas a etapa e o estado de conclusão.

O protótipo reaproveita as fontes, os tokens escuros e a rosácea vetorial existentes. As geometrias de Alinhamento e Equilíbrio e Manifestação e Ação são estudos CSS identificados também na interface. O componente visual aceita conteúdos de áudio e vídeo em espaços próprios quando houver material. A pausa funciona em silêncio e as animações respeitam a preferência de movimento reduzido. [Storyboard de Ativações](../docs/STORYBOARD_ATIVACOES.md) · [Storyboard do Portal](../docs/STORYBOARD_INTERFACE.md) · [Guia de identidade visual](../docs/identidade-visual/GUIA-IDENTIDADE-VISUAL.md)

## Validação

O build local gerou 356 páginas e o Pagefind manteve os 316 capítulos do Acervo no índice. O HTML do protótipo contém cinco etapas, e a rosácea servida é idêntica ao SVG original. Os arquivos existentes do repositório foram preservados.

No Chrome, o teste em 1440 × 1000 cobriu teclado, foco visível, link de salto, retorno pelo navegador, seleção das três chaves, pausa de dez segundos, registro de tema e intenção, edição e reinício. Em 390 × 844 e 320 × 720, o percurso coube na largura disponível. Foram conferidos movimento reduzido, interrupção e salto da pausa, conclusão sem dados pessoais e descarte do rascunho ao usar **Ainda não sei**. O teste registrou zero players e zero requisições de escrita.

## Decisões pendentes

- Validar o nome da terceira chave, as formas e mensagens das chaves 02 e 03 e os usos definitivos da rosácea.
- Selecionar filme, áudios, legendas e transcrições quando o material estiver pronto.
- Testar a compreensão do percurso com pessoas novas no Portal.
- AT-05, Flux e a persistência fora da página ficam para etapas futuras.

## Publicação

A prévia foi publicada manualmente em 23 de novembro de 2026 no projeto `acervo-lichtara` do Cloudflare Pages. O deploy acrescentou a rota `/ativacoes/` e seus recursos, preservando os 778 arquivos do manifesto anterior do Acervo, incluindo o índice Pagefind. Os testes de desktop e celular foram repetidos no endereço público por HTTPS. A prévia continua com a diretiva `noindex`.

## Arquivos do protótipo

| Arquivo | Responsabilidade |
| --- | --- |
| [index.astro](src/pages/ativacoes/index.astro) | Cinco painéis e estado de conclusão. |
| [ActivationShell.astro](src/layouts/ActivationShell.astro) | Cabeçalho experiencial, tipografia e link de salto. |
| [GeometricKey.astro](src/components/ativacoes/GeometricKey.astro) e [SensoryStage.astro](src/components/ativacoes/SensoryStage.astro) | Geometrias e espaços para mídia futura. |
| [src/lib/ativacoes.ts](src/lib/ativacoes.ts) | Nomes, perguntas, mensagens e temas. |
| [src/scripts/ativacoes.ts](src/scripts/ativacoes.ts) | Transições, histórico, foco, temporizador e rascunhos em memória. |
| [ativacoes.css](src/styles/ativacoes.css) | Estilo, responsividade e movimento. |

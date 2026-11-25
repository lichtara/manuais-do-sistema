# Ferramentas e Ativações

Protótipo do Portal LICHTARA, da entrada à escolha de um caminho de exploração. A rota `/ativacoes/` usa a aplicação Astro em `site/`, com cabeçalho próprio e acesso ao Acervo LICHTARA. [Abrir as Ativações](https://acervo.lichtara.com/ativacoes/)

## Executar

Na raiz do repositório, use Node.js 24 LTS com npm.

```sh
cd site
npm ci
npm run build
npm run preview -- --port 4323
```

[Abrir a prévia local](http://127.0.0.1:4323/ativacoes/)

Se já houver uma prévia do Astro em execução neste checkout, acrescente `--ignore-lock` ao comando para abrir a segunda porta.

## O percurso

| Etapa | O que a pessoa pode fazer |
| --- | --- |
| AT-00 | Iniciar a experiência, abrir a descrição ou visitar o Acervo. |
| AT-01 | Comparar as três chaves, selecionar uma e confirmar a escolha. |
| AT-02 | Reconhecer a chave escolhida pela geometria e pelo texto, continuar ou voltar à seleção. |
| AT-03 | Iniciar uma pausa voluntária de dez segundos, interrompê-la ou pular para a pergunta. A pausa termina no mesmo painel e a pessoa decide quando avançar. |
| AT-04 | Escrever uma pergunta ou intenção, escolher um tema, usar **Ainda não sei** ou continuar sem registro. Todas as opções levam à escolha de caminhos. |
| AT-05 | Escolher e confirmar **Observar**, **Compreender** ou **Experimentar**. A confirmação apresenta a pergunta orientadora e informa a continuidade prevista. A pessoa pode voltar à pergunta, escolher outro caminho, copiar o registro ou recomeçar. |

O histórico do navegador usa fragmentos da URL e guarda somente a etapa e o estado de confirmação. O rascunho, o registro voluntário e o caminho de cada chave ficam em memória enquanto a página está aberta. **Continuar sem registrar** e **Ainda não sei** preservam o rascunho para edição. O resumo e a cópia incluem intenção e tema quando a pessoa escolhe registrá-los. Recarregar a página ou recomeçar apaga o estado em memória. Se a escrita na área de transferência for recusada, o navegador apresenta um campo selecionável para cópia manual.

Na confirmação do caminho, NAVROS emite o evento local `exploration.path_selected` com o identificador da opção escolhida. A versão atual de AT-05 segue a escolha de caminhos descrita em LIC-05. A observação guiada, a experiência Lumora e a integração operacional com Flux permanecem etapas futuras. [Storyboard do Portal](../docs/storyboard/STORYBOARD_INTERFACE.md) · [Storyboard de Ativações](../docs/storyboard/STORYBOARD_ATIVACOES.md) · [Storyboard de Aplicação e Expansão](../docs/storyboard/STORYBOARD_APLICACAO_EXPANSAO.md)

**Ação e Manifestação** é o nome definitivo da terceira chave, com o identificador `action`. A terceira camada permanece **Aplicação e Expansão**, operada por Flux. Os rótulos **Símbolo provisório** identificam as geometrias da segunda e terceira chaves, que já permitem percorrer toda a prévia. O protótipo reaproveita as fontes, os tokens escuros e a rosácea vetorial existentes. A pausa funciona em silêncio e as animações respeitam a preferência de movimento reduzido. [Camadas do Sistema](../docs/camadas-do-sistema.md) · [Guia de identidade visual](../docs/identidade-visual/GUIA-IDENTIDADE-VISUAL.md)

## Validação

O build de produção gerou 356 páginas e o Pagefind manteve os 316 capítulos do Acervo no índice. O HTML do protótipo contém seis etapas. Os manuais, a identidade visual e os storyboards de referência foram preservados.

| Percurso | Verificação no Chrome |
| --- | --- |
| A | Expansão e Clareza, pausa de dez segundos, registro de intenção e tema e confirmação de **Observar**. |
| B | Alinhamento e Equilíbrio, salto da pausa, pergunta em branco e confirmação de **Compreender** por toque. |
| C | Ação e Manifestação, nova pergunta orientadora e confirmação de **Experimentar**. |
| D | Retorno desde a escolha de caminho, edição da pergunta com tema preservado e confirmação de outra opção. |

A bateria usou desktop de 1440 × 1000 e emulação de celular de 390 × 844 e 320 × 720. Foram verificados o foco visível, as setas dos grupos de opções, o histórico do navegador, o retorno pelos botões, a largura da página e a preferência por movimento reduzido. O botão de cópia foi testado simulando a resposta do navegador para validar o texto sem sobrescrever a área de transferência do computador. A recusa da Clipboard API abriu o campo de cópia manual. O fluxo sem registro excluiu o rascunho da cópia e permitiu recuperá-lo ao editar. A extensão não introduziu armazenamento nem requisições de escrita nos percursos testados.

## Decisões pendentes

- Validar as formas das chaves 02 e 03 e os usos definitivos da rosácea.
- Selecionar filme, áudios, legendas e transcrições quando o material estiver pronto.
- Testar a compreensão do percurso com pessoas novas no Portal.
- Desenvolver a experiência de observação, a exploração Lumora e a ponte para Flux.

## Publicação

A revisão com AT-05 foi publicada manualmente em 23 de novembro de 2026 no projeto `acervo-lichtara` do Cloudflare Pages. A publicação atualizou o HTML de `/ativacoes/` e acrescentou os novos arquivos CSS e JavaScript. Os 781 demais arquivos da versão em produção foram preservados no manifesto, incluindo o índice Pagefind. Os percursos A–D foram repetidos no Chrome por HTTPS no endereço público. A prévia mantém a diretiva `noindex`. [Abrir a versão AT-05](https://acervo.lichtara.com/ativacoes/)

## Arquivos do protótipo

| Arquivo | Responsabilidade |
| --- | --- |
| [index.astro](src/pages/ativacoes/index.astro) | Seis etapas e confirmação do caminho. |
| [ActivationShell.astro](src/layouts/ActivationShell.astro) | Cabeçalho experiencial, tipografia e link de salto. |
| [GeometricKey.astro](src/components/ativacoes/GeometricKey.astro) e [SensoryStage.astro](src/components/ativacoes/SensoryStage.astro) | Geometrias e espaços para mídia futura. |
| [src/lib/ativacoes.ts](src/lib/ativacoes.ts) | Nomes, perguntas, mensagens e temas. |
| [src/scripts/ativacoes.ts](src/scripts/ativacoes.ts) | Transições, histórico, foco, temporizador e rascunhos em memória. |
| [ativacoes.css](src/styles/ativacoes.css) | Estilo, responsividade e movimento. |

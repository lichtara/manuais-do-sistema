# Decisões técnicas do Acervo LICHTARA

## Inspeção do repositório

O checkout aponta para `lichtara/sistema-lichtara`. A inspeção usou a árvore Git, os arquivos Markdown, os documentos visuais e o histórico dos índices. O repositório continha a documentação e seus originais, sem aplicação web, scripts de build ou workflows de publicação.

| Caminho de origem | Markdown |
| --- | ---: |
| `01_nucleo/` | 5 |
| `02_campo_estrutural/` | 126 |
| `03_campo_luminico/` | 18 |
| `04_campo_operacional/` | 105 |
| `06_campo_expressao/` | 12 |
| `07_campo_comunidade/` | 32 |
| `08_campo_sintese/` | 30 |
| **Total** | **328** |

Há 24 diretórios de manuais ou coleções, nove documentos diretamente na raiz de quatro campos, 16 fichas de elementos e 29 originais em `PDF/`. Os Markdown usam títulos de diferentes níveis, ênfase, listas, citações e tabelas. O arquivo `02_campo_estrutural/introducao-e-propostito-projeto.md` inclui sete links para seções do próprio texto. A auditoria inicial não encontrou metadados YAML frontais nem correspondências documentadas de PDF para capítulo ou página.

A árvore contém uma pasta com espaço final (`guias-sistema-flux `), um diretório terminado em `.md` (`construcao-de-marcas-conscientes.md`), caminhos acentuados e nomes com grafia e espaçamento próprios. Há prefixos repetidos, como `06` no manual geral do sistema. Os dois manifestos de origem Lumora nos campos 01 e 03 são idênticos byte a byte. `08_campo_sintese/sintese-final-do-sistema.md` é vazio.

## Arquitetura e identidade

Astro gera HTML estático em `site/dist/`. A descoberta começa pelas pastas numeradas e o conteúdo é lido no caminho original durante a geração. Arquivos diretamente sob um campo aparecem na coleção de navegação **Documentos avulsos**. Alguns rótulos de pastas recebem acentos e espaços para a interface. Quando o primeiro cabeçalho repete o nome do arquivo, o título de navegação vem do cabeçalho textual seguinte. Dois capítulos da introdução à bio-ressonância também trazem o nome do manual no prefácio. Esses trechos e suas âncoras são preservados na leitura. Se faltar cabeçalho, a interface usa o nome de arquivo. O catálogo registra a origem de cada título.

A entrada usa o registro experiencial escuro e o leitor usa o registro editorial claro. As cores, as famílias Cinzel, Cormorant Garamond e Manrope e os SVGs vêm das referências do repositório. A geometria da entrada foi reaproveitada como ambientação da interface. O guia visual trata a função dessa forma como marca geral como uma decisão em aberto. [Storyboard](../docs/STORYBOARD_INTERFACE.md) · [Guia visual](../docs/identidade-visual/GUIA-IDENTIDADE-VISUAL.md)

Pagefind indexa o título e o corpo renderizado dos 328 capítulos em português. O índice é servido no mesmo endereço da aplicação e consultado pelo navegador. As fontes tipográficas acompanham o build. O leitor e a navegação por links funcionam sem JavaScript. A busca e o botão de cópia usam JavaScript. A cópia acontece na área de transferência do dispositivo e oferece um campo de cópia manual quando necessário.

## Catálogo e proveniência

- Os identificadores usam um hash de tipo e caminho completo, e as rotas combinam um nome legível com parte desse hash. A geração verifica colisões. A ordem natural em português usa o caminho exato para desempatar. O caminho Git mantém a grafia original mesmo em sistemas de arquivos que decompõem caracteres Unicode.
- Os links GitHub codificam cada segmento do caminho e apontam para `main`. As citações acrescentam a linha ou o intervalo de linhas lidos no checkout. Uma edição local ou posterior pode divergir dessa referência até ser publicada ou até o próximo build.
- O leitor usa Markdown com tabelas GFM. A hierarquia de títulos é ajustada no HTML para leitura assistiva. Âncoras repetidas são diferenciadas e links internos são resolvidos para a seção ou rota correspondente. HTML cru fica fora da renderização. Destinos sem resolução são registrados em `issues.unresolvedLinks`.
- A página de elementos oferece as fichas e consultas textuais por nome. O catálogo registra relações declaradas nas listas **Interações no Ecossistema** quando o rótulo identifica um elemento do acervo. Cada relação traz evidência literal, seção, destino e link com a linha da fonte. A consulta por menções é busca textual. Relações inferidas por afinidade ou interpretação editorial dependem de curadoria.
- Os PDFs são copiados byte a byte para a prévia e organizados numa biblioteca independente. As entradas carregam o caminho exato, o formato e o link de origem.

## Revisão editorial e publicação

O MVP está disponível para consulta local e online. A revisão editorial inclui decidir o tratamento do capítulo vazio, confirmar a curadoria de conceitos e registrar correspondências documentadas entre PDFs e Markdown caso venham a ser estabelecidas. Essa revisão pode também aprovar os usos definitivos da identidade visual.

Antes da publicação, houve uma triagem de marcas de circulação e dados sensíveis evidentes nos 328 Markdown e nas camadas de texto dos 29 PDFs. O pacote de publicação contém apenas os arquivos do build, com HTML, fontes, imagens, índice de busca e PDFs. A prévia local escuta em loopback. As páginas trazem `noindex`, uma indicação aos mecanismos de busca. Controle de acesso, quando necessário, depende da hospedagem.

A produção usa o projeto `acervo-lichtara` do Cloudflare Pages, com envio direto e manual de `dist/`. O DNS permanece na Hostinger. Um CNAME liga `acervo.lichtara.com` ao endereço `acervo-lichtara.pages.dev`, e a zona foi conferida antes e depois da alteração. Para atualizar o Acervo, gere um novo build e envie o conteúdo de `dist/` ao mesmo projeto. Um pipeline de publicação e as integrações com Portal LICHTARA, Lumora, NAVROS e Flux ficam para uma etapa posterior. [Endereço Cloudflare Pages](https://acervo-lichtara.pages.dev/) · [Domínio próprio no Cloudflare Pages](https://developers.cloudflare.com/pages/configuration/custom-domains/) · [Envio direto](https://developers.cloudflare.com/pages/get-started/direct-upload/)

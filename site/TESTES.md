# Validação do MVP

Execução em macOS com Node.js 24.21.0, npm 11.19.0 e Chrome 157. A instalação isolada com `npm ci --offline` usou o lockfile e o cache npm. `npm run build` gerou 369 páginas HTML e o Pagefind indexou os 328 capítulos Markdown.

| Verificação | Resultado |
| --- | --- |
| Navegação | No Chrome, percurso da entrada ao Campo Estrutural, Manual Geral do Sistema e primeiro capítulo. Próximo, anterior e retorno ao manual funcionaram. |
| Busca | A busca enviada pela entrada com Enter retornou capítulos e trechos reais. `ressonância` e `ressonancia` retornaram 154 capítulos cada. A paginação passou de 12 para 24 itens e levou o foco ao primeiro item do novo lote. Abertura por teclado e estado sem resultados verificados. |
| Leitor | Sumário ativado por teclado, âncora acentuada aberta no texto e tabela focalizável a 320 px. A renderização foi conferida em documentos com nomes acentuados, espaço final e diretório terminado em `.md`. |
| Títulos | A seleção usa o cabeçalho textual em 56 documentos que começam com um cabeçalho idêntico ao nome de arquivo. A auditoria preservou os identificadores, as rotas e as âncoras desses documentos. |
| Cópia | No Chrome, a chamada à área de transferência foi interceptada para conferir título, caminho, fonte e trecho sem alterar a área de transferência do computador. Com a escrita recusada, o campo manual recebeu foco e apresentou o contexto selecionado. |
| Proveniência | Os 357 links de origem de capítulos e PDFs foram confrontados com os caminhos exatos de `origin/main`. Amostras remotas, incluindo caminhos com acento, espaço final e diretório terminado em `.md`, resolveram no GitHub. As 89 relações foram conferidas com a linha da fonte e a rota de destino. |
| PDFs | Os 29 PDFs do build são idênticos aos arquivos da pasta `PDF/` por SHA-256. Um original foi conferido também no GitHub. |
| Links internos | Auditoria de 9.772 referências locais em todas as páginas geradas, incluindo os sete links de seção do Markdown original e os destinos de anterior e próximo. Todos os destinos foram encontrados. |
| Responsividade e teclado | Home, Campos, Busca, Elementos, PDFs e seis capítulos foram abertos em 1440, 390 e 320 px. Foram verificados ausência de rolagem horizontal da página, regiões semânticas, nomes dos controles, foco visível, Tab e atalho para o conteúdo. |
| Integridade | O diff dos arquivos rastreados fora de `site/` permaneceu vazio. Os identificadores e as rotas são únicos, e a regeneração produziu o mesmo catálogo. |

Os testes de acessibilidade cobrem os fluxos acima no Chrome. Uma auditoria de conformidade e testes com leitores de tela nativos ficam para a revisão de publicação.

## Verificação em produção

Na publicação manual de 23 de novembro de 2026, o endereço do Cloudflare Pages serviu a entrada do Acervo e um PDF original com tipo `application/pdf`. A página inicial, o JavaScript do Pagefind e o PDF amostrado tiveram o mesmo SHA-256 que os arquivos do build local. O Chrome verificou nos dois endereços públicos o percurso até o leitor, a busca por `ressonância` e `ressonancia`, a abertura do resultado por teclado e a paginação de 12 para 24 itens.

A zona DNS da Hostinger foi comparada antes e depois. A diferença foi o novo CNAME de `acervo.lichtara.com`. O certificado do subdomínio foi validado, e o site do Instituto continuou respondendo por HTTPS no domínio principal.

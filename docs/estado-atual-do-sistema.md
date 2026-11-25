# Estado atual do Sistema LICHTARA

**Revisão documental:** 25 de novembro de 2026  
**Escopo:** situação da implementação e referências de produto.  
**Base da inspeção:** árvore Git `main`, commit [5144e7c](https://github.com/lichtara/sistema-lichtara/commit/5144e7c438e89347c4ca5fe5379c5d38e8146957), e registros de publicação e validação existentes. Não houve novo build nem teste de produção nesta revisão.

## Situação das camadas e dos componentes

| Componente | Estado | Evidência e limite |
| --- | --- | --- |
| Acervo LICHTARA | Publicado, conforme registro de publicação | Biblioteca, consulta, busca textual, referências de origem e PDFs. [Código e execução](../site/README.md); [validação histórica](../site/TESTES.md). |
| Experiências LICHTARA / Ativações | Protótipo AT-05 publicado em 23/11/2026, conforme registro de publicação; em validação | Escolha da Chave, pausa opcional, pergunta ou intenção voluntária, seleção de caminho e cópia do registro. [Documentação](../site/ATIVACOES.md); [página](../site/src/pages/ativacoes/index.astro). |
| Lumora | Concepção documentada; tradução inicial na interface | Perguntas e caminhos predefinidos de exploração. A experiência Lumora posterior não está demonstrada como implementada nos arquivos inspecionados. [Perfil](../04_elementos-do-sistema/lumora.md). |
| NAVROS | Tradução inicial por regras de navegação | Transições, histórico, escolhas e emissão local do evento `exploration.path_selected`. Não demonstra autonomia de um agente de IA nem comunicação entre agentes. [Código](../site/src/scripts/ativacoes.ts); [perfil](../04_elementos-do-sistema/navros.md). |
| Flux | Concepção documentada; integração futura | A ponte operacional, o acompanhamento e a persistência da jornada não estão implementados no protótipo AT-05 descrito. [Storyboard](storyboard/STORYBOARD_APLICACAO_EXPANSAO.md); [perfil](../04_elementos-do-sistema/flux.md). |
| Demais elementos | Concepção documentada | A tradução computacional e a classificação de suas funções permanecem em investigação. [Perfis](../04_elementos-do-sistema/README.md). |
| Arquitetura multiagentes | Hipótese em investigação | Não se verificou uma implementação de agentes autônomos de IA na inspeção direcionada. A eventual presença dessa arquitetura na concepção original ainda será investigada nas fontes. |

Endereços registrados de publicação: [Acervo](https://acervo.lichtara.com/) e [Ativações](https://acervo.lichtara.com/ativacoes/).

## Nomenclatura em uso

As três Chaves da interface atual são **Expansão e Clareza**, **Alinhamento e Equilíbrio** e **Ação e Manifestação**. A última usa o identificador `action`. O [código de configuração](../site/src/lib/ativacoes.ts) é a evidência do rótulo implementado; as variantes históricas Manifestação e Ação e Manifestação e Precisão permanecem nas respectivas fontes e estudos. A terceira camada do sistema continua denominada Aplicação e Expansão.

## Limites e decisões em aberto

- O protótipo mantém rascunhos e registros voluntários em memória durante a sessão da página. A integração com Flux é futura. O evento de NAVROS é local.
- As formas das Chaves 02 e 03 e os usos definitivos da rosácea ainda exigem validação, assim como a compreensão do percurso por novos usuários.
- A próxima microexperiência, a continuidade da jornada e os contratos entre componentes ainda requerem especificação e validação.
- As funções de agentes autônomos, o biofeedback e eventuais integrações com IA não devem ser apresentados como operacionais sem evidência de implementação e validação. Qualquer biofeedback fisiológico requer sensores apropriados e consentimento.
- Antes de adicionar persistência ou serviços externos, definir dados tratados, finalidade, consentimento quando aplicável, acesso, retenção, exportação e eliminação. Não se presume que esses mecanismos já existam.

## Como consultar e atualizar a documentação

- Os manuais e perfis originais registram a concepção histórica, incluindo sua linguagem simbólica, arquetípica e funcional. Preservar seus textos e distinguir interpretações de afirmações científicas verificadas.
- As [Camadas do Sistema](camadas-do-sistema.md) descrevem a arquitetura funcional proposta. Os [storyboards e estudos visuais](README.md) registram propostas de design e decisões em validação.
- Este documento sintetiza o estado atual. Para comportamento implementado, consultar o código da revisão pertinente e os testes correspondentes. Para estado publicado, consultar os registros de publicação e, quando necessário, verificar a implantação efetiva.
- [Decisões técnicas](../site/DECISOES.md) e relatórios de validação são registros históricos; não substituir resultados de testes anteriores por estimativas de um novo build. Registrar data, versão ou commit e evidência de cada atualização. Quando fontes divergirem, explicitar a divergência sem reescrever a fonte original.

Atualizar esta referência quando uma funcionalidade mudar de estado, quando uma decisão de produto for consolidada ou quando uma nova evidência alterar a interpretação registrada.

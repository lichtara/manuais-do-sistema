# PORTAL LICHTARA
## Storyboard de Interface — Experiência Matrioska

**Projeto:** Sistema LICHTARA / Ecossistema Oktave  
**Produto:** Portal LICHTARA  
**Experiência piloto:** Chave 01 — Expansão e Clareza  
**Versão:** 0.1 — Especificação inicial  
**Data:** 23 de novembro de 2026  
**Status:** Proposta para design, prototipagem e validação

---

## 1. Visão geral

O Portal LICHTARA é concebido como um ambiente digital de experiências interativas que integram presença, observação, exploração de conhecimento, navegação e aplicação prática.

Sua proposta é permitir que cada pessoa inicie uma experiência por meio de uma escolha simples e descubra novas camadas progressivamente.

O Portal não deve apresentar toda a complexidade do ecossistema na primeira interação.

**Princípio central de experiência:**

> Uma tela limpa. Uma escolha significativa. Uma nova camada de possibilidades.

A experiência utiliza a metáfora da **matrioska**: cada camada contém possibilidades que se tornam acessíveis conforme o usuário explora o ambiente.

A navegação é progressiva, mas não obrigatoriamente linear. A pessoa pode retornar, mudar de direção, aprofundar uma questão ou encerrar a experiência.

### 1.1. Propósito

Criar uma experiência digital que ajude o usuário a:

1. Direcionar sua atenção.
2. Reconhecer experiências, perguntas ou necessidades.
3. Explorar diferentes perspectivas.
4. Organizar sua compreensão.
5. Escolher ações concretas.
6. Acompanhar resultados e aprendizados.

### 1.2. Princípios orientadores

**Presença:** criar condições para uma interação atenta e voluntária.

**Compreensão:** favorecer exploração, interpretação e organização do conhecimento.

**Ação:** conectar aprendizados e percepções a movimentos concretos e responsáveis.

**Autonomia:** permitir que o usuário escolha seu ritmo, seus caminhos e seus limites.

**Revelação progressiva:** apresentar o necessário para a interação atual, preservando acesso às demais possibilidades.

**Rastreabilidade:** distinguir conteúdos de referência, interpretações, escolhas e resultados observados.

---

## 2. Identidade do ecossistema

### Portal LICHTARA

É a interface principal de entrada e integração das experiências.

### NAVROS — Código de Navegação

Representa a lógica de navegação, os caminhos possíveis, os gatilhos de interação e os pontos de transição.

Na implementação inicial, suas decisões serão baseadas em regras explícitas e escolhas do usuário.

### Lumora

Representa o ambiente de conhecimento, exploração conceitual, interpretação e experiências de aprendizagem.

### Flux

Representa a organização das ações, os registros operacionais, a continuidade e o acompanhamento dos resultados.

### Outros elementos

OSLO, ORIA, FINCE, KAORAN, SYNTRIA, THALEN, SOLARA e os demais elementos pertencem à arquitetura conceitual do Sistema LICHTARA.

Suas funções poderão orientar experiências futuras, desde que sejam documentadas antes de sua tradução em componentes técnicos.

**Nota:** a nomenclatura simbólica dos elementos não significa que já existam serviços de software implementados ou mecanismos energéticos mensuráveis associados a eles.

---

## 3. Modelo de interação: Arquitetura Matrioska

A navegação deverá obedecer aos seguintes princípios:

- Uma intenção principal por tela.
- Uma decisão central por interação.
- Quantidade limitada de elementos visíveis.
- Informações complementares sob demanda.
- Transições visuais coerentes entre camadas.
- Liberdade para retornar e alterar escolhas.
- Ausência de bloqueios artificiais baseados em suposta prontidão energética.
- Continuidade da experiência mesmo sem áudio, vídeo ou animações.

### 3.1. Três elementos do Código de Navegação

**Princípios:** diretrizes que sustentam a coerência da experiência.

**Gatilhos de ativação:** interações que iniciam ou modificam um percurso, como selecionar uma chave, responder a uma pergunta ou registrar uma intenção.

**Pontos de transição:** momentos em que o contexto da interface muda e uma nova camada é apresentada.

### 3.2. Tipos de gatilhos digitais

| Gatilho | Evento observável | Resposta do sistema |
|---|---|---|
| Seleção de chave | Clique, toque ou teclado | Apresenta a experiência correspondente |
| Início de pausa | Escolha explícita | Exibe exercício contemplativo opcional |
| Registro de intenção | Texto enviado pelo usuário | Disponibiliza caminhos relacionados |
| Escolha de percurso | Seleção de uma alternativa | Abre uma camada de exploração |
| Registro de aprendizado | Texto ou opção selecionada | Permite síntese e continuidade |
| Definição de ação | Confirmação do usuário | Cria um registro no Flux |
| Revisita | Acesso voluntário ao histórico | Apresenta registros e resultados anteriores |

---

## 4. Identidade visual

### 4.1. Direção estética

- Minimalismo cinematográfico.
- Geometrias luminosas originais.
- Fundo escuro com profundidade.
- Linhas finas e movimentos suaves.
- Composições centralizadas.
- Espaços generosos entre elementos.
- Tipografia legível e elegante.

### 4.2. Paleta inicial

| Token | Cor | Hexadecimal |
|---|---|---|
| Cosmic Black | Preto cósmico | `#050A15` |
| Deep Blue | Azul profundo | `#0B1E38` |
| Lumora Gold | Dourado suave | `#D8B97A` |
| Champagne Light | Champagne | `#F3E5C9` |
| Secondary Text | Azul-acinzentado | `#A6B4CC` |

A paleta deverá ser refinada e testada para contraste, sobretudo em textos e controles.

O protótipo do NotebookLM utiliza algumas tonalidades diferentes, como `#060913` e `#D4AF37`. Essas referências serão consideradas durante a consolidação dos tokens finais.

### 4.3. Tipografia proposta

**Títulos:** EB Garamond, ou outra fonte editorial de personalidade semelhante.

**Interface e textos:** Plus Jakarta Sans, ou alternativa de excelente legibilidade.

**Indicadores técnicos:** JetBrains Mono, usada pontualmente.

A identidade tipográfica definitiva dependerá dos testes no Figma.

### 4.4. Geometria da Chave 01

**Expansão e Clareza**

Símbolo-base: rosácea circular formada por seis círculos equidistantes em torno de um núcleo central, com órbita externa.

Significados visuais propostos:

- Núcleo: presença.
- Interseções: relações e conexões.
- Expansão radial: ampliação de perspectivas.
- Circunferência: integração e continuidade.

O símbolo deverá existir em SVG, com versões monocromática, luminosa e reduzida.

A versão reduzida não deverá depender de brilhos ou partículas para ser reconhecida.

---

# 5. Storyboard de telas

## LIC-00 — Entrada no Portal

**Nome da tela:** Portal LICHTARA  
**Camada:** Abertura  
**Objetivo:** estabelecer o primeiro contato.

### Composição

Fundo preto cósmico com iluminação azul muito discreta.

Ao centro, a identidade visual do Portal LICHTARA.

Abaixo, uma frase curta:

**“Toda jornada começa com uma possibilidade.”**

Uma ação principal:

**Começar**

Acesso secundário e discreto:

**Sobre o Portal**

### Conteúdo audiovisual

O filme de primeiro contato poderá aparecer antes da seleção das chaves ou ser iniciado pelo usuário.

Seu conteúdo será o storyboard cinematográfico de oito cenas, aproximadamente 60 segundos.

O vídeo deverá ser opcional, com possibilidade de pular e seguir diretamente para a experiência.

### Interações

- Iniciar a experiência.
- Assistir ao filme.
- Pular o filme.
- Acessar informações introdutórias.

### Gatilho de transição

Ativação voluntária de **Começar**.

### Destino

`LIC-01 — Escolha da Chave`

---

## LIC-01 — As Três Chaves

**Nome da tela:** Escolha sua chave  
**Camada:** Primeira escolha  
**Objetivo:** identificar a direção que o usuário deseja explorar.

### Composição

Três símbolos geométricos centralizados.

Cada símbolo é acompanhado de uma identificação curta:

**01 — Expansão e Clareza**

Explorar perspectivas e reconhecer conexões.

**02 — Alinhamento e Equilíbrio**

Observar prioridades e buscar organização.

**03 — Manifestação e Precisão**

Transformar intenção em movimento concreto.

### Mensagem principal

**“O que deseja explorar neste momento?”**

### Comportamento visual

Ao receber foco, toque ou aproximação do cursor:

- O símbolo ganha destaque.
- As linhas luminosas tornam-se mais evidentes.
- Uma descrição breve aparece.
- Os demais elementos permanecem acessíveis.

### Interações

- Selecionar uma chave.
- Comparar alternativas.
- Confirmar escolha.
- Retornar.

### Gatilho

Seleção explícita de uma das três chaves.

### Destino

`LIC-02 — Resposta da Chave`

### Regra importante

A chave não representa um diagnóstico do usuário.

Ela expressa sua escolha de percurso e pode ser modificada posteriormente.

---

## LIC-02 — Expansão e Clareza

**Nome da tela:** Abertura da Chave  
**Camada:** Resposta sensorial  
**Objetivo:** proporcionar reconhecimento visual da escolha.

### Composição

A rosácea de Expansão e Clareza ocupa o centro da interface.

Uma animação sutil organiza progressivamente seus círculos.

A luminosidade aumenta sem produzir flashes.

### Mensagem principal

**“Expansão e Clareza”**

### Texto complementar

“Você escolheu explorar novas perspectivas e reconhecer relações que merecem sua atenção.”

### Comportamento

A interface responde à seleção com:

- Destaque da geometria.
- Alteração discreta da iluminação.
- Transição suave.
- Som opcional, se autorizado.

### Ações

**Continuar**

**Escolher outra chave**

### Gatilho

Confirmação da experiência selecionada.

### Destino

`LIC-03 — Presença e Observação`

### Limite funcional

A resposta visual é produzida pela interação com o software. Não representa detecção automática de uma frequência energética.

---

## LIC-03 — Presença e Observação

**Nome da tela:** Um momento de presença  
**Camada:** Experiência contemplativa  
**Objetivo:** oferecer espaço para atenção e autopercepção.

### Composição

Geometria central com movimento lento.

Fundo escuro com baixa intensidade luminosa.

Poucos elementos visuais.

### Mensagem

**“Antes de procurar uma resposta, observe.”**

Texto secundário:

“Se desejar, faça uma breve pausa e perceba o que chama sua atenção neste momento.”

### Recurso multimídia

Áudio guiado opcional.

Duração inicial sugerida: 30 a 90 segundos para o primeiro contato.

Áudios mais longos poderão ser oferecidos em outras camadas do Portal.

### Interações

- Iniciar áudio.
- Pausar áudio.
- Prosseguir em silêncio.
- Ignorar exercício.
- Continuar.

### Gatilho

Decisão do usuário de avançar.

### Destino

`LIC-04 — Pergunta Inicial`

### Regra

Não exigir confirmação de sensação corporal, mudança emocional ou experiência energética.

A pessoa pode prosseguir mesmo sem relatar qualquer percepção particular.

---

## LIC-04 — A Pergunta Inicial

**Nome da tela:** O que merece clareza?  
**Camada:** Intenção  
**Objetivo:** permitir a formulação de uma pergunta ou necessidade.

### Composição

Interface limpa.

Uma pergunta central.

Campo de escrita opcional.

### Mensagem principal

**“O que você gostaria de enxergar com mais clareza?”**

### Possibilidades de entrada

O usuário pode:

- Escrever uma pergunta.
- Registrar uma experiência.
- Selecionar um tema sugerido.
- Prosseguir sem escrever.

### Exemplos de temas

- Uma situação que estou vivendo.
- Uma decisão que desejo compreender.
- Um projeto ou ideia.
- Um aprendizado recente.

### Interações

**Explorar possibilidades**

**Ainda não sei**

**Voltar**

### Gatilho

Registro ou seleção de um tema.

### Destino

`LIC-05 — Caminhos de Exploração`

### Dados

Registrar somente informações fornecidas voluntariamente.

---

## LIC-05 — Caminhos de Exploração

**Nome da tela:** Escolha seu caminho  
**Camada:** Navegação NAVROS  
**Objetivo:** revelar percursos relacionados à intenção.

### Composição

Três possibilidades aparecem progressivamente.

**Observar**

Examinar o que aconteceu e distinguir fatos de percepções.

**Compreender**

Explorar conceitos, perguntas e possíveis interpretações.

**Experimentar**

Definir uma pequena ação para investigar uma possibilidade.

### Mensagem principal

**“Como deseja explorar sua pergunta?”**

### Comportamento

A escolha reorganiza o próximo conteúdo.

O usuário poderá mudar de percurso durante a jornada.

### Gatilho

Seleção de uma modalidade de exploração.

### Destinos

- Observar → experiência de registro.
- Compreender → experiência Lumora.
- Experimentar → experiência prática Flux.

### Regra de navegação

Os caminhos não são níveis de superioridade nem avaliações da consciência do usuário.

São alternativas funcionais de exploração.

---

## LIC-06 — Lumora: Exploração e Compreensão

**Nome da tela:** Laboratório de Clareza  
**Camada:** Conhecimento  
**Objetivo:** oferecer recursos para aprofundar a questão escolhida.

### Composição

A interface revela um conteúdo principal por vez.

Possíveis formatos:

- Vídeo curto.
- Áudio reflexivo.
- Texto breve.
- Mapa interativo.
- Pergunta orientadora.
- Exercício de comparação.

### Mensagem inicial

**“Explore outras perspectivas.”**

### Recursos

O usuário poderá:

- Conhecer uma explicação.
- Examinar relações entre ideias.
- Consultar fontes.
- Registrar uma reflexão.
- Revisar sua interpretação.

### Ações

**Explorar outra perspectiva**

**Registrar o que compreendi**

**Transformar em ação**

### Gatilhos

Seleção de conteúdo ou registro de uma reflexão.

### Destino

Continuação em Lumora ou abertura de `LIC-07 — Flux`.

### Regra

Distinguir conteúdos fundamentados em fontes externas de interpretações simbólicas ou hipóteses da pesquisa LICHTARA.

---

## LIC-07 — Flux: Do Conhecimento à Ação

**Nome da tela:** Meu próximo movimento  
**Camada:** Aplicação prática  
**Objetivo:** ajudar o usuário a transformar sua compreensão em ação.

### Composição

Uma pergunta central.

Campos simples e progressivos.

### Mensagem principal

**“Qual pequeno passo você escolhe realizar?”**

### Sequência

**1. Minha intenção**

O que desejo explorar ou transformar?

**2. Minha ação**

O que posso fazer concretamente?

**3. Meu contexto**

Que recursos, limites ou condições devo considerar?

**4. Minha revisita**

Quando gostaria de observar os resultados?

### Ações

**Registrar meu passo**

**Reformular**

**Voltar à exploração**

### Gatilho

Confirmação voluntária da ação.

### Destino

`LIC-08 — Continuidade`

### Regra

O usuário mantém responsabilidade por suas escolhas. A interface não deve apresentar sugestões como instruções obrigatórias provenientes do Campo.

---

## LIC-08 — Continuidade e Revisita

**Nome da tela:** Minha Jornada  
**Camada:** Integração  
**Objetivo:** permitir acompanhamento e aprendizagem contínua.

### Composição

Síntese limpa da jornada.

Exibir somente informações pertinentes:

- Chave escolhida.
- Pergunta inicial.
- Conteúdos explorados.
- Percepções registradas.
- Ação definida.
- Resultado da revisita, quando disponível.

### Mensagem principal

**“O que esta experiência te ajudou a perceber?”**

### Ações

**Revisitar minha ação**

**Explorar outra chave**

**Iniciar nova jornada**

**Exportar meu registro**

### Gatilhos

Retomada, revisão ou início de novo percurso.

### Destino

Nova camada de exploração ou retorno ao Portal.

### Regra

A jornada permanece aberta. A conclusão de uma experiência não obriga o usuário a alcançar um estado predeterminado.

---

# 6. Fluxo de navegação

### Caminho principal do piloto

`LIC-00` Entrada  
↓  
`LIC-01` Três Chaves  
↓  
`LIC-02` Expansão e Clareza  
↓  
`LIC-03` Presença e Observação  
↓  
`LIC-04` Pergunta Inicial  
↓  
`LIC-05` Caminhos de Exploração  
↓  
`LIC-06` Lumora  
↓  
`LIC-07` Flux  
↓  
`LIC-08` Continuidade

### Caminhos alternativos

O usuário poderá:

- Pular conteúdos audiovisuais.
- Retornar a uma camada anterior.
- Alterar a chave escolhida.
- Sair da experiência contemplativa.
- Explorar diretamente uma ação prática.
- Revisitar conteúdos anteriores.
- Encerrar a jornada e retomá-la posteriormente.

**A revelação progressiva controla a quantidade de informação apresentada, não a liberdade do usuário.**

---

# 7. Componentes reutilizáveis no Figma

### Componentes fundamentais

**PortalShell**

Estrutura visual principal do Portal.

**NavigationHeader**

Marca, navegação discreta e acesso às configurações.

**GeometricKey**

Símbolo e identificação de uma chave.

**KeySelector**

Componente de seleção das três chaves.

**FocusQuestion**

Pergunta principal de uma camada.

**ChoiceOption**

Alternativa de navegação.

**SensoryStage**

Área de visualização geométrica ou conteúdo audiovisual.

**ReflectionInput**

Campo de registro de percepções e reflexões.

**ContentExperience**

Bloco para vídeo, áudio, texto ou interação.

**FluxActionCard**

Registro e acompanhamento de ação.

**JourneySummary**

Síntese da experiência.

### Estados necessários

Cada componente interativo deverá considerar, quando aplicável:

- Padrão.
- Foco.
- Hover.
- Selecionado.
- Desabilitado.
- Carregando.
- Erro.
- Concluído.

---

# 8. Estados e dados do sistema

Para o protótipo funcional, a navegação poderá utilizar um modelo simples de estados.

| Estado | Finalidade |
|---|---|
| `currentScreen` | Identificar a camada atual |
| `selectedKey` | Registrar a chave escolhida |
| `selectedPath` | Identificar o caminho de exploração |
| `userIntention` | Registrar pergunta ou intenção |
| `reflectionEntries` | Guardar reflexões voluntárias |
| `actionPlan` | Registrar próximo movimento |
| `revisitStatus` | Acompanhar revisita |
| `audioEnabled` | Controlar áudio |
| `reducedMotion` | Controlar animação reduzida |

### Persistência

Na primeira versão, os dados poderão permanecer no navegador ou ser exportados pelo usuário.

Contas pessoais, sincronização na nuvem e armazenamento remoto ficam fora do escopo inicial.

Dados íntimos e reflexões pessoais não devem ser enviados a serviços externos sem autorização clara.

---

# 9. Integração audiovisual

O Portal poderá utilizar:

### Filme de primeiro contato

Sequência de aproximadamente 60 segundos, com oito cenas cinematográficas.

### Áudios guiados

Experiências opcionais de presença, observação, reflexão e integração.

### Geometrias animadas

Símbolos vetoriais com movimento discreto e consistente.

### Vídeos de exploração

Conteúdos breves apresentados conforme a navegação escolhida.

### Microinterações

Transições visuais, mudanças de foco e respostas a ações do usuário.

### Princípio de multimídia

O audiovisual deve enriquecer a experiência, não impedir o acesso ao conteúdo ou obrigar o usuário a assistir para conseguir avançar.

---

# 10. Acessibilidade e responsabilidade

A interface deverá contemplar:

- Navegação por teclado.
- Estados de foco visíveis.
- Textos e controles com contraste adequado.
- Legendas para vídeos.
- Transcrições para áudios.
- Áudio desativado por padrão.
- Controle de volume.
- Preferência por movimento reduzido.
- Alternativas para gestos complexos.
- Ausência de flashes intensos.
- Conteúdo acessível sem depender exclusivamente de cor ou som.

A linguagem simbólica poderá expressar a concepção espiritual do Sistema LICHTARA.

Entretanto, o software não deverá declarar que detecta frequências do usuário, confirma comunicação com o Campo ou realiza diagnósticos energéticos sem mecanismos específicos e evidências apropriadas.

---

# 11. Relação com o protótipo do NotebookLM

O HTML `Sistema_Lichtara.html` será tratado como referência funcional, não como modelo definitivo da experiência.

### Recursos que podem ser aproveitados conceitualmente

- Seleção de três chaves.
- Feedback visual.
- Pausa contemplativa.
- Perguntas orientadoras.
- Registros pessoais.
- Simplificação de processos.
- Definição de ações.
- Acompanhamento de jornadas.
- Exportação dos resultados.

### Elementos a redesenhar

**Painel de quatro módulos → Experiências aninhadas.**

**Grande quantidade de controles → Revelação progressiva.**

**Indicadores de coerência energética → Feedback transparente sobre escolhas e registros.**

**Respostas automáticas apresentadas como consultas ao Campo → Reflexões e sugestões identificadas conforme sua origem.**

**Transmissões simuladas → Conteúdos audiovisuais reais, produzidos e identificados.**

**Dependências específicas do NotebookLM → Componentes independentes para o Portal.**

---

# 12. Escopo do MVP

O piloto inicial será considerado funcional quando permitir:

1. Acessar o Portal LICHTARA.
2. Visualizar as três chaves.
3. Selecionar Expansão e Clareza.
4. Receber uma resposta visual coerente.
5. Realizar ou pular uma breve experiência contemplativa.
6. Registrar uma pergunta ou intenção.
7. Escolher uma direção de exploração.
8. Acessar um conteúdo Lumora.
9. Definir uma ação Flux.
10. Salvar, exportar ou revisitar o registro.

### Fora do escopo inicial

- Leitura automática de estados energéticos.
- Biofeedback fisiológico sem sensores.
- Diagnósticos de prontidão.
- Inteligência artificial autônoma de tomada de decisão.
- Sistema completo de 25 Agents.
- Integrações corporativas complexas.
- Pagamentos e assinatura.
- Comunidade pública.
- Plataforma completa de cursos.

Essas possibilidades poderão ser estudadas posteriormente de acordo com relevância, viabilidade e critérios de validação.

---

# 13. Critérios de aceitação

### Experiência

- Cada tela apresenta uma finalidade central compreensível.
- O usuário sabe como avançar e retornar.
- As escolhas têm consequências visíveis e coerentes.
- Nenhuma interação importante depende de animações ou som.
- Os caminhos não impõem interpretações pessoais.

### Identidade

- A marca LICHTARA aparece como identidade principal do Portal.
- Lumora, NAVROS e Flux mantêm responsabilidades reconhecíveis.
- O símbolo Expansão e Clareza permanece consistente entre as telas.
- A linguagem audiovisual corresponde ao storyboard de produção.

### Funcionalidade

- O fluxo principal pode ser concluído.
- Os registros não são perdidos durante a navegação normal.
- O usuário pode alterar escolhas.
- As ações registradas podem ser consultadas novamente.
- As versões de desktop e celular são utilizáveis.

### Validação

- O protótipo é compreensível para pessoas que não conhecem LICHTARA.
- É possível identificar dificuldades de navegação.
- A experiência permite observar utilidade percebida sem presumir resultados terapêuticos ou espirituais.

---

# 14. Organização do arquivo Figma

Estrutura recomendada:

**00 — Foundations**

Cores, tipografia, espaçamento, geometria e identidade.

**01 — Components**

Chaves, botões, campos, áreas audiovisuais e navegação.

**02 — Storyboard Desktop**

Sequência principal das telas do piloto.

**03 — Storyboard Mobile**

Adaptações para dispositivos móveis.

**04 — Interactive Prototype**

Ligações, escolhas, transições e caminhos alternativos.

**05 — Motion & Media**

Referências dos filmes, áudios e animações.

**06 — Handoff**

Especificações funcionais, estados e notas para desenvolvimento.

### Convenção de nomes

`LIC-00_Entrada`

`LIC-01_Chaves`

`LIC-02_ExpansaoClareza`

`LIC-03_Presenca`

`LIC-04_Pergunta`

`LIC-05_Caminhos`

`LIC-06_Lumora`

`LIC-07_Flux`

`LIC-08_Revisita`

### Frames iniciais sugeridos

**Desktop:** 1440 × 900 px.

**Mobile:** 390 × 844 px.

As dimensões são referências de projeto e deverão ser testadas em diferentes tamanhos de tela.

---

# 15. Decisões consolidadas e pontos em aberto

## Decisões já estabelecidas

- O produto principal chama-se **Portal LICHTARA**.
- A experiência de entrada utiliza **revelação progressiva / arquitetura matrioska**.
- As três chaves compõem o primeiro nível de escolha.
- A primeira chave a desenvolver é **Expansão e Clareza**.
- A identidade visual utiliza preto cósmico, azul profundo e dourado.
- A experiência integra recursos audiovisuais, reflexão e ação.
- Lumora, NAVROS e Flux participam da arquitetura funcional.
- A aplicação prática faz parte do ciclo da experiência.
- O acesso inicial deve ser simples, sem cadastro obrigatório no protótipo.

## Pontos a validar

- Geometria definitiva das outras duas chaves.
- Nomenclatura final da terceira chave: Manifestação e Precisão ou Manifestação e Ação.
- Logotipo oficial do Portal LICHTARA.
- Biblioteca tipográfica definitiva.
- Tipo e duração dos áudios de cada experiência.
- Conteúdo da primeira exploração Lumora.
- Regras de recomendação e ramificação de NAVROS.
- Modelo de armazenamento para versões posteriores.
- Tratamento da linguagem simbólica em diferentes contextos de público.

---

# 16. Próximo marco

**Marco 01 — Protótipo navegável da Chave Expansão e Clareza**

Entregas esperadas:

1. Biblioteca visual inicial.
2. Símbolo geométrico mestre.
3. Telas do storyboard desktop e mobile.
4. Conexões de navegação no Figma.
5. Experiência audiovisual de entrada.
6. Primeiro fluxo de registro e aplicação com Flux.
7. Critérios documentados para o teste com usuários.

**Resultado esperado:** uma experiência digital demonstrável, na qual o usuário possa realizar uma escolha, descobrir novas camadas, explorar uma pergunta e registrar uma ação concreta.

---

## Princípio final

O Portal LICHTARA não revela toda a sua arquitetura de uma vez.

Ele oferece uma entrada simples e permite que novas camadas de conhecimento, experiência e aplicação sejam descobertas progressivamente.

Cada escolha abre possibilidades.

Cada experiência pode gerar compreensão.

Cada compreensão pode orientar uma ação.

**LICHTARA — Presença para perceber. Compreensão para escolher. Ação para transformar.**

---

*Documento de especificação inicial. Baseado na concepção do Sistema LICHTARA, nos manuais de Código de Navegação, Lumora e Flux, no storyboard audiovisual do piloto e na análise do protótipo HTML produzido no NotebookLM. As funções técnicas propostas permanecem sujeitas a implementação e validação.*

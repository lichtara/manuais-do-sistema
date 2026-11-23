# Portal LICHTARA — Ferramentas e Ativações

**Projeto:** Sistema LICHTARA / Ecossistema Oktave  
**Produto:** Portal LICHTARA  
**Camada:** 02 — Ferramentas e Ativações  
**Versão:** 0.2.0  
**Status:** Especificação de interface proposta para prototipagem  
**Experiência prioritária:** Expansão e Clareza  
**Dependências conceituais:** Código de Navegação, Lumora, NAVROS e Flux

---

## 1. Propósito

A interface de **Ferramentas e Ativações** é a camada experiencial do Portal LICHTARA.

Sua finalidade é oferecer uma jornada digital de primeiro contato, na qual o usuário escolhe uma direção de exploração, participa de uma experiência sensorial opcional, registra suas próprias percepções e decide como deseja prosseguir.

A interface não substitui o Acervo LICHTARA nem o ambiente operacional Flux.

Ela estabelece uma passagem entre conhecimento, experiência e aplicação prática.

### 1.1. Resultado esperado

Ao concluir uma jornada, o usuário deverá conseguir identificar:

- A chave que escolheu explorar.
- A pergunta ou intenção que orientou a experiência.
- O que observou ou compreendeu.
- O caminho que deseja seguir: aprofundar, agir, revisitar ou encerrar.

Não é necessário que o usuário relate uma mudança emocional, energética ou perceptiva para concluir a experiência.

### 1.2. Princípio de experiência

> Uma luz de cada vez. Uma descoberta de cada vez. Um caminho que se revela enquanto caminhamos.

Esse princípio orienta a quantidade de informações apresentada, os movimentos de navegação e a relação entre as camadas.

---

## 2. Posição na arquitetura

### 2.1. Base Conceitual — Acervo LICHTARA

**Responsabilidade:** organizar e disponibilizar manuais, capítulos, conceitos e referências documentais.

**Estado:** primeira implementação funcional existente.

**Referência pública:** `https://acervo.lichtara.com/`

### 2.2. Ferramentas e Ativações — esta interface

**Responsabilidade:** conduzir escolhas, experiências, reflexões e transições.

**Estado:** planejamento e prototipagem.

### 2.3. Aplicação e Expansão — Flux

**Responsabilidade:** transformar intenções em ações, projetos, registros e revisitas.

**Estado:** storyboard funcional complementar, definido em `STORYBOARD_APLICACAO_EXPANSAO.md`.

### 2.4. Responsabilidades dos elementos

| Elemento | Responsabilidade conceitual na experiência |
|---|---|
| LICHTARA | Identidade e integração do Portal |
| NAVROS | Regras de navegação, escolhas e transições |
| Lumora | Conteúdos, perguntas, experiências e compreensão |
| Flux | Continuidade prática e acompanhamento |
| Aurora | Referência conceitual para abertura e linguagem visual |
| KAORAN e SOLARA | Referências simbólicas para ativação e movimento |

As funções simbólicas descritas nos manuais não devem ser apresentadas como serviços técnicos já implementados.

---

## 3. Princípios de UX

### 3.1. Revelação progressiva

Apresentar apenas as informações necessárias para a decisão atual.

### 3.2. Arquitetura matrioska

Cada interação significativa pode revelar uma nova camada, mantendo a possibilidade de retorno, revisão ou mudança de percurso.

### 3.3. Vivência antes da explicação

A experiência inicial deve ser compreensível sem leitura prévia dos manuais.

O aprofundamento conceitual fica disponível por escolha do usuário.

### 3.4. Autonomia

O usuário controla seu percurso, sua participação, seus registros e o uso de recursos sensoriais.

### 3.5. Resposta coerente

A interface responde às escolhas realizadas por meio de alterações visuais, conteúdo contextual e transições previsíveis.

### 3.6. Transparência e discernimento

As experiências podem utilizar linguagem poética, simbólica e contemplativa.

Entretanto, respostas visuais ou sonoras não serão apresentadas como evidência de leitura energética, comunicação espiritual ou detecção fisiológica.

---

## 4. Modelo de navegação

A jornada utiliza três conceitos do Código de Navegação.

**Princípios:** regras que preservam coerência, autonomia e continuidade.

**Gatilhos de ativação:** eventos observáveis que iniciam uma resposta da interface.

**Pontos de transição:** mudanças entre estados, perguntas, experiências ou caminhos.

Na implementação digital inicial, gatilhos correspondem a ações verificáveis, como selecionar, confirmar, escrever, pausar ou avançar.

### 4.1. Fluxo principal

`AT-00 Entrada`

→ `AT-01 Três Chaves`

→ `AT-02 Experiência da Chave`

→ `AT-03 Presença`

→ `AT-04 Pergunta Inicial`

→ `AT-05 Exploração Guiada`

→ `AT-06 Registro da Percepção`

→ `AT-07 Próximo Caminho`

→ `AT-08 Síntese e Continuidade`

O fluxo representa a sequência de referência do protótipo, não uma obrigação para todos os usuários.

### 4.2. Regras transversais

- Permitir voltar à etapa anterior.
- Permitir trocar de chave.
- Permitir pular áudio, vídeo e pausa contemplativa.
- Permitir continuar sem fornecer respostas pessoais.
- Não exigir cadastro para a experiência piloto.
- Não bloquear caminhos com base em suposta prontidão energética.
- Manter as escolhas durante a navegação da sessão.
- Oferecer conclusão ou saída em qualquer etapa apropriada.

---

# 5. Storyboard de telas

## AT-00 — Entrada nas Experiências

**Objetivo:** apresentar uma única ação de entrada.

**Pergunta central:**

> Por onde deseja começar?

**Composição:**

- Identidade do Portal LICHTARA.
- Fundo preto cósmico e azul profundo.
- Geometria central delicada.
- Mensagem curta.
- Ação principal: **Iniciar experiência**.
- Acesso secundário: **Visitar o Acervo**.
- Acesso discreto: **Sobre esta experiência**.

**Mídia:**

Filme de primeiro contato de aproximadamente 60 segundos, com opção de reprodução voluntária e de pular.

O filme não é pré-requisito para a navegação.

**Gatilho:** seleção de Iniciar experiência.

**Transição:** `AT-01`.

**Critério de aceite:** o usuário consegue prosseguir sem assistir ao filme nem ativar áudio.

---

## AT-01 — Seleção das Três Chaves

**Objetivo:** permitir a escolha de uma direção de exploração.

**Pergunta central:**

> O que desperta sua atenção neste momento?

**Opções:**

### Chave 01 — Expansão e Clareza

Explorar perspectivas, relações e possibilidades de compreensão.

**Símbolo:** rosácea circular de seis direções, conforme a identidade geométrica em desenvolvimento.

### Chave 02 — Alinhamento e Equilíbrio

Examinar prioridades, ritmos e necessidades de reorganização.

**Símbolo:** geometria simétrica triangular ou axial. Forma final pendente de validação.

### Chave 03 — Manifestação e Ação

Explorar a passagem entre intenção, decisão e movimento concreto.

**Símbolo:** geometria estruturada, inicialmente cúbica ou hexagonal. Forma final pendente de validação.

**Nota editorial:** a nomenclatura alternativa “Manifestação e Precisão” permanece registrada como decisão em aberto.

**Interações:**

- Focar ou tocar uma chave.
- Ler uma descrição breve.
- Selecionar e confirmar.
- Alterar a escolha antes de prosseguir.

**Resposta visual:**

O símbolo selecionado recebe destaque. Os demais permanecem acessíveis.

**Gatilho:** confirmação de chave.

**Transição:** `AT-02`, com a chave selecionada.

---

## AT-02 — Resposta da Chave

**Objetivo:** confirmar a seleção por meio de uma resposta sensorial e contextual.

### Variante A — Expansão e Clareza

**Mensagem:**

> Você escolheu Expansão e Clareza.

**Complemento:**

“Um espaço para observar relações, explorar outras perspectivas e reconhecer o que merece sua atenção.”

**Visual:**

A rosácea é construída progressivamente, do núcleo para os círculos externos.

### Variante B — Alinhamento e Equilíbrio

**Mensagem:**

> Você escolheu Alinhamento e Equilíbrio.

**Complemento:**

“Um espaço para observar prioridades, ritmos e possibilidades de ajuste.”

**Visual:**

Os elementos geométricos se organizam em uma composição estável.

### Variante C — Manifestação e Ação

**Mensagem:**

> Você escolheu Manifestação e Ação.

**Complemento:**

“Um espaço para reconhecer uma intenção e explorar o próximo movimento concreto.”

**Visual:**

Linhas convergem suavemente para uma estrutura definida.

**Recursos comuns:**

- Animação opcional.
- Áudio desativado por padrão.
- Controles de som.
- Alternativa estática.
- Ações: Continuar e Escolher outra chave.

**Gatilho:** decisão de continuar.

**Transição:** `AT-03`.

---

## AT-03 — Pausa de Presença

**Objetivo:** criar uma oportunidade voluntária de atenção.

**Mensagem:**

> Antes de seguir, observe.

**Complemento:**

“Se desejar, faça uma breve pausa e perceba o que chama sua atenção agora.”

**Recursos:**

- Pausa de 5 a 15 segundos.
- Geometria com movimento discreto.
- Áudio ou instrução textual opcional.
- Possibilidade de permanecer em silêncio.
- Alternativa sem contagem regressiva.

**Ações:**

- Iniciar pausa.
- Continuar sem pausa.
- Voltar.

**Gatilho:** escolha de avançar.

**Transição:** `AT-04`.

**Regra:** a interface não pergunta se uma ativação energética foi bem-sucedida. Pode perguntar, de forma opcional, o que a pessoa percebeu.

---

## AT-04 — Pergunta Inicial

**Objetivo:** identificar a intenção que orientará a experiência.

**Pergunta dinâmica conforme a chave:**

**Expansão e Clareza**

> O que deseja enxergar com mais clareza neste momento?

**Alinhamento e Equilíbrio**

> O que deseja reorganizar ou equilibrar?

**Manifestação e Ação**

> O que deseja colocar em movimento?

**Entradas:**

- Campo de texto livre.
- Temas sugeridos.
- Opção “Ainda não sei”.
- Opção de continuar sem registrar.

**Temas sugeridos:**

- Uma situação pessoal.
- Uma decisão.
- Um projeto.
- Um aprendizado.
- Uma possibilidade que desejo explorar.

**Gatilho:** confirmação de texto ou tema, ou escolha de continuar sem resposta.

**Transição:** `AT-05`.

---

## AT-05 — Exploração Guiada

**Objetivo:** oferecer uma microexperiência vinculada à chave e à intenção.

### Roteiro A — Expansão e Clareza

1. O que aconteceu ou está acontecendo?
2. O que você percebeu?
3. Que interpretações está considerando?
4. Que outra perspectiva poderia explorar?

### Roteiro B — Alinhamento e Equilíbrio

1. O que exige sua atenção?
2. O que parece excessivo ou insuficiente?
3. Que prioridade poderia ser reorganizada?
4. Qual ajuste simples deseja experimentar?

### Roteiro C — Manifestação e Ação

1. O que deseja realizar?
2. Que condições já existem?
3. Qual seria um primeiro passo pequeno?
4. Como poderá observar o resultado?

**Formatos disponíveis:**

- Perguntas interativas.
- Áudio narrado.
- Vídeo breve.
- Visualização geométrica.
- Registro textual.

No MVP, cada chave precisa de uma microexperiência funcional. A produção audiovisual completa pode ser incremental.

**Gatilho:** conclusão ou interrupção voluntária da microexperiência.

**Transição:** `AT-06`.

---

## AT-06 — Registro da Percepção

**Objetivo:** permitir que a pessoa organize sua experiência.

**Pergunta:**

> O que esta experiência te ajudou a perceber?

**Campos opcionais:**

- O que observei.
- O que interpretei.
- O que compreendi.
- O que ainda desejo investigar.

**Recurso opcional:**

Autoavaliação de clareza percebida, apresentada como relato subjetivo.

Uma eventual escala não deve ser descrita como medição de ressonância ou coerência energética.

**Ações:**

- Guardar registro.
- Continuar sem salvar.
- Revisar respostas.
- Prosseguir.

**Transição:** `AT-07`.

---

## AT-07 — Próximo Caminho

**Objetivo:** abrir possibilidades sem impor um destino.

**Pergunta:**

> Para onde deseja seguir agora?

**Opções:**

**Aprofundar no Acervo**

Consultar documentos e conceitos relacionados à experiência.

**Explorar mais em Lumora**

Acessar outra experiência ou conteúdo de compreensão.

**Levar para Flux**

Converter uma intenção ou aprendizado em ação prática.

**Encerrar por agora**

Visualizar a síntese e concluir a sessão.

**Gatilho:** seleção de caminho.

**Transições:**

- Acervo → interface de documentação.
- Lumora → outra experiência contextual.
- Flux → `AE-00`, definido no storyboard complementar.
- Encerrar → `AT-08`.

---

## AT-08 — Síntese e Continuidade

**Objetivo:** apresentar uma conclusão aberta da jornada.

**Conteúdo:**

- Chave selecionada.
- Pergunta inicial, quando fornecida.
- Registros voluntários.
- Caminho escolhido.
- Possibilidade de exportar ou revisitar.

**Mensagem:**

> Uma descoberta pode ser o começo de outra.

**Ações:**

- Iniciar outra experiência.
- Explorar o Acervo.
- Criar uma ação no Flux.
- Exportar meu registro.
- Encerrar.

**Critério de aceite:** concluir a jornada não exige declarar transformação, alinhamento, ativação ou mudança interna.

---

# 6. Sistema de gatilhos e transições

| Gatilho | Origem | Resposta esperada |
|---|---|---|
| `activation.started` | AT-00 | Abre a seleção das chaves |
| `key.selected` | AT-01 | Atualiza contexto e tema visual |
| `key.confirmed` | AT-01 | Abre a experiência correspondente |
| `presence.completed` | AT-03 | Avança para a pergunta |
| `presence.skipped` | AT-03 | Avança sem registrar conclusão |
| `intention.submitted` | AT-04 | Atualiza o contexto da exploração |
| `exploration.completed` | AT-05 | Abre o registro |
| `reflection.saved` | AT-06 | Registra informações autorizadas |
| `continuation.selected` | AT-07 | Encaminha para o destino escolhido |

Os identificadores são convenções propostas para implementação, não nomes estabelecidos nos manuais.

---

# 7. Estado compartilhado da jornada

Modelo conceitual inicial:

```ts
type ActivationKey =
  | "clarity"
  | "balance"
  | "action";

type JourneyContext = {
  journeyId: string;
  selectedKey: ActivationKey | null;
  intention?: string;
  observations?: string;
  interpretation?: string;
  understanding?: string;
  sourceReferences?: string[];
  nextDestination?: "acervo" | "lumora" | "flux" | "finish";
  createdAt: string;
  updatedAt: string;
};
```

### Regras de dados

- Não exigir identificação pessoal no MVP.
- Não enviar reflexões privadas a serviços externos sem consentimento.
- Manter dados em memória durante a sessão.
- Oferecer armazenamento local ou exportação por escolha explícita.
- Permitir apagar registros.
- Não colocar textos pessoais em parâmetros de URL.
- Não inferir estados emocionais ou espirituais a partir de cliques.

O armazenamento local no navegador não substitui controles de segurança para dados sensíveis.

---

# 8. Contrato com o Acervo e Flux

### 8.1. Ativações → Acervo

Enviar somente referências documentais e identificadores de temas, quando disponíveis.

O Acervo abre a fonte original e preserva sua referência.

### 8.2. Acervo → Ativações

Um capítulo poderá oferecer uma ação contextual:

**Explorar este tema em uma experiência**

Essa ligação será opcional e deverá estar associada a uma experiência realmente existente.

### 8.3. Ativações → Flux

O usuário escolhe quais informações deseja levar para a próxima camada.

Dados possíveis:

- Chave escolhida.
- Intenção.
- Síntese pessoal.
- Referências de conteúdo.

O Flux não deve interpretar automaticamente esses dados como uma ordem de execução.

### 8.4. Flux → Ativações

Permitir revisitar a experiência original, quando existir referência válida.

---

# 9. Componentes de interface

| Componente | Responsabilidade |
|---|---|
| `ActivationShell` | Estrutura comum das experiências |
| `PortalIdentity` | Identidade visual LICHTARA |
| `KeySelector` | Seleção das três chaves |
| `GeometricKey` | Símbolo vetorial e variantes |
| `SensoryStage` | Área de animação e multimídia |
| `PresencePause` | Pausa contemplativa opcional |
| `FocusQuestion` | Pergunta principal da camada |
| `GuidedExperience` | Microexperiência contextual |
| `ReflectionEditor` | Registro voluntário |
| `PathSelector` | Escolha do próximo destino |
| `JourneySummary` | Síntese e exportação |

### Estados de componente

Padrão, foco, hover, selecionado, carregando, erro, indisponível e concluído, conforme aplicável.

---

# 10. Identidade e multimídia

### Paleta de referência

- Preto cósmico: `#050A15`
- Azul profundo: `#0B1E38`
- Dourado: `#D8B97A`
- Champagne: `#F3E5C9`

A identidade existente do Acervo LICHTARA deve ser consultada antes de estabelecer tokens definitivos.

### Símbolos

A chave Expansão e Clareza utiliza uma rosácea geométrica em desenvolvimento.

As identidades das outras chaves precisam ser refinadas antes de consideradas definitivas.

### Mídia

- Filme de primeiro contato: aproximadamente 60 segundos.
- Áudios de presença e observação: opcionais.
- Vídeos das chaves: produção incremental.
- Animações: versões reduzida e estática.
- Locução: português brasileiro e legendas quando aplicável.

O áudio não deverá começar automaticamente.

---

# 11. Acessibilidade

A experiência deve oferecer:

- Navegação por teclado.
- Controles claramente rotulados.
- Foco visível.
- Contraste adequado.
- Legendas e transcrições.
- Redução de movimento.
- Alternativa para gestos de arrastar ou toque longo.
- Pausa e interrupção dos conteúdos.
- Ausência de flashes intensos.
- Caminho funcional sem som.

Nenhuma escolha fundamental poderá depender exclusivamente de uma animação ou cor.

---

# 12. MVP e prioridades

## P0 — Essencial

- Entrada funcional.
- Três chaves selecionáveis.
- Resposta visual por chave.
- Pausa opcional.
- Pergunta contextual.
- Microexperiência por chave.
- Registro voluntário.
- Escolha de destino.
- Navegação de retorno.
- Integração mínima com Acervo e Flux.

## P1 — Aprimoramento

- Áudio narrado por experiência.
- Animações vetoriais refinadas.
- Exportação estruturada.
- Histórico local de jornadas.
- Conteúdos Lumora associados a temas do Acervo.

## P2 — Pesquisa futura

- Personalização com base em histórico autorizado.
- Integrações com sensores reais.
- Novos gatilhos e experiências.
- Funcionalidades avançadas de Agents.

---

# 13. Critérios de aceite

A primeira versão será considerada funcional quando:

1. O usuário conseguir entrar sem cadastro.
2. As três chaves forem distinguíveis e selecionáveis.
3. Cada chave apresentar conteúdo apropriado.
4. Áudio e animação forem opcionais.
5. A pausa puder ser ignorada.
6. A navegação funcionar em desktop e mobile.
7. O usuário puder registrar uma percepção sem ser obrigado a fazê-lo.
8. A escolha de aprofundar abrir o Acervo.
9. A escolha de agir encaminhar ao Flux.
10. A jornada puder ser encerrada ou reiniciada.
11. Não houver alegações automáticas de leitura de frequência, campo ou estado fisiológico.

---

# 14. Decisões em aberto

- Nome final da terceira chave.
- Geometrias definitivas das chaves 02 e 03.
- Endereço e estratégia de publicação da interface.
- Estratégia de persistência entre aplicações.
- Roteiros completos dos áudios.
- Conteúdos iniciais de cada microexperiência.
- Possível incorporação das Ativações no mesmo domínio do Portal LICHTARA.

Essas questões não impedem a prototipagem do MVP.

---

# 15. Referências de projeto

- `STORYBOARD_INTERFACE.md` — arquitetura geral de interface.
- Storyboard cinematográfico — primeiro contato, oito cenas.
- Roteiro técnico audiovisual — piloto Expansão e Clareza.
- `STORYBOARD_APLICACAO_EXPANSAO.md` — continuidade operacional.
- Acervo LICHTARA — documentos e fontes originais.

Os caminhos exatos desses documentos deverão ser confirmados na árvore atual do repositório.

---

## Princípio final

A interface não precisa mostrar toda a profundidade de LICHTARA para iniciar uma experiência.

Ela oferece uma escolha, abre um espaço de observação e permite que a pessoa descubra novas possibilidades.

**Uma luz de cada vez. Uma descoberta de cada vez. Um caminho que se revela enquanto caminhamos.**

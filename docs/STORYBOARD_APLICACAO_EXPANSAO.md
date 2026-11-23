# STORYBOARD_APLICACAO_EXPANSAO.md

# Sistema LICHTARA — Aplicação e Expansão
## Storyboard de Interface · Flux

**Projeto:** Sistema LICHTARA / Ecossistema Oktave  
**Produto público:** LICHTARA  
**Camada:** 03 — Aplicação e Expansão  
**Interface:** LICHTARA · Flux  
**Versão:** 0.2.0  
**Status:** Especificação para prototipagem  
**Princípio de experiência:** Presença · Compreensão · Ação

---

## 1. Visão geral

A camada **Aplicação e Expansão** representa a dimensão prática do Sistema LICHTARA.

Sua interface, **Flux**, permite que o usuário transforme uma intenção, percepção, descoberta ou aprendizado em um movimento concreto, acompanhe seu desenvolvimento e revisite os resultados.

A experiência não começa com um painel complexo de gerenciamento de projetos.

Começa com uma pergunta simples:

> **O que você escolhe colocar em movimento?**

A partir dessa escolha, o sistema revela progressivamente as informações necessárias à organização da ação.

### 1.1. Propósito

Permitir que uma pessoa:

- Identifique algo que deseja realizar.
- Traduza uma intenção em um próximo passo.
- Considere os recursos e limites envolvidos.
- Organize sua execução.
- Acompanhe o que acontece.
- Registre resultados e aprendizados.
- Amplie, ajuste ou encerre o percurso.

### 1.2. Princípio central

**Uma intenção se transforma em possibilidade.  
Uma escolha se transforma em ação.  
Uma ação produz experiências que podem ser observadas e compreendidas.**

A manifestação é compreendida, na interface operacional, como o processo de dar forma concreta a intenções e projetos por meio de escolhas e ações observáveis.

---

## 2. Nomenclatura e posição no ecossistema

### LICHTARA

Nome público do produto digital, responsável por integrar as interfaces do sistema.

### Camada 03 — Aplicação e Expansão

Nome da terceira camada funcional.

Abrange planejamento, realização, acompanhamento e aprendizagem a partir dos resultados.

### Flux

Nome do componente operacional e da interface responsável por apoiar a execução prática.

### Ação e Manifestação

Nome da terceira Chave de Ativação, pertencente à camada **Ferramentas e Ativações**.

A chave oferece uma direção de entrada experiencial, mas não substitui Flux nem representa toda a terceira camada.

### Lumora

Participa da compreensão, da exploração de conhecimentos e da reflexão que pode anteceder ou acompanhar a ação.

### NAVROS

Organiza escolhas, transições e possibilidades de continuidade entre as interfaces.

### Regra arquitetural

**O usuário pode acessar Flux independentemente da chave escolhida.**

As três chaves não correspondem diretamente às três camadas do sistema.

---

## 3. Relação com as outras camadas

| Origem | O que oferece ao Flux |
|---|---|
| **Acervo LICHTARA** | Conceitos, materiais, referências e perguntas |
| **Experiências LICHTARA / Lumora** | Intenções e percepções voluntariamente registradas |
| **Acesso direto** | Uma intenção nova, sem percurso anterior |

O Flux deve aceitar qualquer uma dessas origens.

A passagem de informações entre interfaces será explícita e controlada pelo usuário.

---

## 4. Princípios de UX

### 4.1. Arquitetura matrioska

Uma pergunta central por tela e revelação progressiva de informações.

### 4.2. Primeiro o movimento, depois a complexidade

O usuário pode começar com uma única ação.

A criação de projetos, subtarefas e fluxos complexos será opcional e posterior.

### 4.3. Ação consciente

A interface ajuda a organizar possibilidades, mas não substitui a decisão do usuário.

### 4.4. Continuidade

Cada ação poderá ser acompanhada, revisitada, modificada ou encerrada.

### 4.5. Liberdade de percurso

O usuário pode voltar, reformular, pausar ou abandonar uma ação sem penalização.

### 4.6. Aprendizagem pela experiência

Os resultados são oportunidades de observação e compreensão, não classificações automáticas de sucesso espiritual ou energético.

---

# 5. Storyboard de telas

## AE-00 — A Entrada no Flux

**Camada de experiência:** Abertura  
**Objetivo:** estabelecer a passagem entre intenção e aplicação.

### Composição visual

- Fundo preto cósmico.
- Caminho luminoso dourado em perspectiva.
- Geometria sutil associada a continuidade e direção.
- Identidade LICHTARA.
- Identificação discreta do ambiente Flux.
- Uma pergunta central.

### Mensagem principal

> **O que você escolhe colocar em movimento?**

### Texto complementar

“Todo movimento pode começar com um pequeno passo.”

### Ações

**Criar meu próximo movimento**

**Retomar uma ação**

**Voltar ao Portal LICHTARA**

### Comportamento contextual

Quando o usuário chega de uma experiência Lumora, a tela pode oferecer:

“Você gostaria de continuar a partir da sua reflexão anterior?”

A importação só ocorre após confirmação.

### Gatilho

`flux.started`

### Transição

`AE-01 — Contexto`

---

## AE-01 — O Contexto da Ação

**Camada de experiência:** Direcionamento  
**Objetivo:** identificar o ambiente em que a intenção será aplicada.

### Pergunta principal

> **Onde deseja colocar essa intenção em prática?**

### Opções

**Minha vida**

Organização pessoal, rotina, decisões e pequenas mudanças.

**Meu projeto**

Ideias, desenvolvimento, criação e entregas.

**Meu trabalho**

Processos, prioridades, atividades e melhorias.

**Ainda não sei**

Continuar sem escolher um contexto.

### Comportamento

A seleção adapta exemplos e perguntas futuras.

A classificação pode ser modificada posteriormente.

### Gatilho

`context.selected`

### Transição

`AE-02 — Intenção`

### Regra

O contexto não representa uma avaliação da prontidão do usuário.

---

## AE-02 — Clareza da Intenção

**Camada de experiência:** Formulação  
**Objetivo:** tornar explícito o que a pessoa deseja realizar.

### Pergunta principal

> **O que deseja realizar neste momento?**

### Campo principal

**Minha intenção**

Espaço livre de escrita.

### Campos secundários opcionais

**Por que isso importa para mim?**

**O que já existe ou está acontecendo?**

### Exemplo ilustrativo

Intenção:

“Quero transformar os materiais do meu projeto em uma ferramenta que outras pessoas consigam utilizar.”

### Comportamento

Se a jornada tiver origem em Lumora, a interface poderá apresentar a pergunta ou reflexão anterior como sugestão de contexto.

O usuário pode aceitar, modificar ou ignorar essa informação.

### Ações

**Continuar**

**Reformular**

**Voltar**

### Gatilho

`intention.confirmed`

### Transição

`AE-03 — Primeiro Movimento`

---

## AE-03 — O Primeiro Movimento

**Camada de experiência:** Ação  
**Objetivo:** transformar a intenção em algo realizável.

### Pergunta principal

> **Qual é o próximo passo possível?**

### Texto de apoio

“Não precisa ser o projeto inteiro. Apenas um movimento que você consiga realizar e observar.”

### Campo principal

**Minha próxima ação**

### Exemplo ilustrativo

Intenção:

“Quero criar uma experiência interativa para meu projeto.”

Próxima ação:

“Construir uma primeira tela navegável e testá-la no computador e no celular.”

### Ações

**Registrar este passo**

**Dividir em um passo menor**

**Rever a intenção**

### Comportamento

Se a ação for ampla, o usuário poderá optar por simplificá-la com perguntas orientadoras.

A interface não deve impor uma versão automaticamente considerada ideal.

### Gatilho

`action.defined`

### Transição

`AE-04 — Plano Essencial`

---

## AE-04 — Plano Essencial

**Camada de experiência:** Preparação  
**Objetivo:** organizar as condições mínimas de execução.

### Pergunta principal

> **O que você precisa para começar?**

### Estrutura progressiva

**1. Recursos**

O que já tenho disponível?

**2. Condições**

O que depende de outra pessoa, ferramenta ou decisão?

**3. Momento**

Quando desejo começar?

**4. Revisita**

Quando gostaria de observar o resultado?

Todos os campos, exceto a ação anteriormente definida, poderão ser opcionais.

### Composição

A tela apresenta um campo por vez.

A geometria de fundo permanece discreta para favorecer concentração.

### Ações

**Confirmar meu plano**

**Guardar como rascunho**

**Simplificar**

### Gatilho

`plan.confirmed`

### Transição

`AE-05 — Acompanhamento`

---

## AE-05 — O Movimento em Curso

**Camada de experiência:** Execução  
**Objetivo:** permitir acompanhamento simples da ação.

### Mensagem principal

> **Como está seu movimento?**

### Composição

Um cartão principal apresenta:

- Ação escolhida.
- Contexto.
- Data de criação.
- Data planejada, quando informada.
- Estado atual.
- Próxima revisita, quando definida.

### Estados possíveis

| Estado | Significado |
|---|---|
| Planejado | A ação foi definida |
| Em andamento | O usuário iniciou a execução |
| Concluído | O usuário registrou a realização |
| Pausado | A ação foi temporariamente interrompida |
| Descartado | O usuário decidiu não prosseguir |

### Ações

**Iniciar**

**Marcar como concluído**

**Pausar**

**Reformular**

**Registrar uma observação**

### Comportamento

O Flux não presume que uma ação foi realizada apenas porque chegou a data planejada.

### Gatilho

`action.status_changed`

### Transição

Acompanhar a mesma ação ou abrir `AE-06 — Revisita`.

---

## AE-06 — Revisita e Aprendizado

**Camada de experiência:** Observação dos resultados  
**Objetivo:** permitir reflexão sobre o que ocorreu.

### Pergunta principal

> **O que aconteceu depois?**

### Perguntas complementares

**O que consegui realizar?**

**O que observei durante a experiência?**

**O que funcionou?**

**O que mudou em relação ao plano inicial?**

**O que aprendi?**

### Recursos

- Registro textual.
- Data da revisita.
- Comparação com a intenção inicial.
- Histórico das observações anteriores.
- Possibilidade de acrescentar novas revisitas.

### Ações

**Registrar minha revisita**

**Ajustar o plano**

**Criar outro movimento**

### Gatilho

`review.saved`

### Transição

`AE-07 — Expansão`

### Regra

Resultados inesperados, inconclusivos ou negativos são registros legítimos.

Não devem produzir mensagens automáticas de desalinhamento ou fracasso pessoal.

---

## AE-07 — Expansão e Continuidade

**Camada de experiência:** Integração  
**Objetivo:** abrir caminhos a partir do que foi aprendido.

### Pergunta principal

> **O que deseja fazer com o que aprendeu?**

### Composição

Síntese da jornada:

- Intenção inicial.
- Próximo movimento definido.
- Estado da ação.
- Resultados.
- Aprendizados.
- Referências de origem, quando existirem.

### Possibilidades

**Continuar no Flux**

Criar outro movimento ou aprofundar o plano.

**Explorar em Lumora**

Retornar à experiência e à compreensão.

**Consultar o Acervo**

Investigar conceitos e referências documentais.

**Encerrar este ciclo**

Guardar a síntese sem criar outra ação.

### Gatilho

`continuation.selected`

### Transição

Novo percurso no sistema ou encerramento da jornada.

---

# 6. Fluxo de navegação

```text
AE-00  Entrada no Flux
          |
          v
AE-01  Contexto
          |
          v
AE-02  Intenção
          |
          v
AE-03  Primeiro Movimento
          |
          v
AE-04  Plano Essencial
          |
          v
AE-05  Acompanhamento
          |
          v
AE-06  Revisita
          |
          v
AE-07  Expansão e Continuidade
          |
          +--> Novo movimento no Flux
          |
          +--> Experiência Lumora
          |
          +--> Acervo LICHTARA
          |
          +--> Encerrar
```

### Caminhos alternativos

- Entrada direta, sem ativação anterior.
- Entrada a partir do Acervo.
- Entrada a partir de uma experiência Lumora.
- Omissão de campos opcionais.
- Retorno a etapas anteriores.
- Alteração de uma ação.
- Pausa ou descarte de uma atividade.
- Conclusão sem criação de uma nova ação.

A navegação é progressiva, mas não rigidamente linear.

---

# 7. Relação com as três Chaves de Ativação

As Chaves de Ativação pertencem à camada de Ferramentas e Ativações.

Elas podem influenciar a forma de introduzir uma experiência, mas não alteram a finalidade básica do Flux.

| Chave de origem | Possível conexão com Flux |
|---|---|
| Expansão e Clareza | Transformar uma compreensão em experimento |
| Alinhamento e Equilíbrio | Organizar prioridades ou ajustar uma rotina |
| Ação e Manifestação | Definir e iniciar um movimento concreto |

Esses são exemplos, não restrições.

Qualquer usuário pode utilizar qualquer funcionalidade do Flux.

---

# 8. Integração das interfaces

## 8.1. Acervo → Flux

Um documento pode apresentar a opção:

**Aplicar este conhecimento**

O Flux poderá receber o identificador, título e URL da fonte, desde que a associação seja válida.

## 8.2. Lumora → Flux

Uma experiência pode apresentar:

**Levar esta intenção para Flux**

O usuário seleciona quais informações deseja transportar.

## 8.3. Flux → Lumora

Durante a execução, o usuário pode retornar a uma pergunta ou experiência relacionada.

## 8.4. Flux → Acervo

O usuário pode consultar documentos e retornar à ação.

### Requisitos de integração

- Preservar referências de origem.
- Evitar duplicação desnecessária de registros.
- Solicitar confirmação antes de transferir conteúdo pessoal.
- Não colocar reflexões privadas em URLs.
- Garantir continuidade mesmo quando uma interface estiver indisponível.

---

# 9. Modelo conceitual de dados

```ts
type ActionStatus =
  | "planned"
  | "in_progress"
  | "completed"
  | "paused"
  | "discarded";

type ActionContext =
  | "personal"
  | "project"
  | "work"
  | "unspecified";

type ActionPlan = {
  id: string;
  originJourneyId?: string;
  originKey?: "clarity" | "balance" | "action";
  context: ActionContext;

  intention: string;
  reason?: string;
  nextStep: string;
  firstMove?: string;
  requirements?: string;

  plannedDate?: string;
  reviewDate?: string;

  status: ActionStatus;
  sourceReferences?: string[];

  createdAt: string;
  updatedAt: string;
};

type ActionReview = {
  id: string;
  actionId: string;
  recordedAt: string;

  observedResult?: string;
  whatWorked?: string;
  whatChanged?: string;
  learning?: string;
  nextDecision?: string;
};
```

### Regras

- Uma ação pode existir sem ativação anterior.
- Uma experiência pode originar nenhuma ou várias ações.
- Uma ação pode ter múltiplas revisitas.
- As revisitas não sobrescrevem o histórico.
- O usuário pode modificar ou descartar ações.
- As alterações importantes devem ser rastreáveis.
- A exclusão e a exportação dos registros devem ser previstas.

---

# 10. Design visual

A terceira camada deverá conservar a identidade do Portal LICHTARA.

### Paleta inicial

| Token | Valor |
|---|---|
| Preto cósmico | `#050A15` |
| Azul profundo | `#0B1E38` |
| Dourado | `#D8B97A` |
| Champagne | `#F3E5C9` |
| Texto secundário | `#A6B4CC` |

Esses valores devem ser reconciliados com os tokens efetivamente implementados no Acervo.

### Linguagem visual

**Ativações:** geometrias, movimento contemplativo, presença e descoberta.

**Flux:** geometria discreta, hierarquia clara, campos objetivos e feedback operacional.

### Princípio

Flux não precisa parecer uma planilha ou um gerenciador empresarial convencional.

Também não deve sacrificar usabilidade em favor da estética sensorial.

**A experiência pode ser bonita sem tornar a execução complicada.**

---

# 11. Componentes para Figma e desenvolvimento

| Componente | Função |
|---|---|
| `FluxShell` | Estrutura principal |
| `ContextSelector` | Escolha do contexto |
| `IntentionEditor` | Registro da intenção |
| `NextStepEditor` | Formulação da ação |
| `PlanEssentials` | Recursos e condições |
| `ActionCard` | Visualização da ação |
| `ActionStatusControl` | Atualização de estado |
| `ReviewEditor` | Registro da revisita |
| `JourneyTimeline` | Histórico |
| `CycleSummary` | Síntese |
| `CrossLayerNavigation` | Integração com Acervo e Lumora |

### Estados de interface

Padrão, foco, edição, carregamento, erro, salvo, pausado e concluído.

---

# 12. Multimídia

Flux poderá utilizar recursos audiovisuais quando forem pertinentes à experiência.

### Possibilidades

- Pequenas introduções narradas.
- Vídeos de orientação.
- Animações de transição.
- Recursos visuais para organizar ações.
- Áudios breves de reflexão durante revisitas.

Entretanto, o uso de áudio e vídeo não será obrigatório para criar, acompanhar ou concluir uma ação.

**A execução prática permanece como prioridade funcional.**

---

# 13. Privacidade, responsabilidade e acessibilidade

### Privacidade

- Não exigir cadastro no MVP.
- Informar onde os registros são armazenados.
- Permitir exclusão e exportação.
- Não transferir registros privados automaticamente entre aplicações.
- Não utilizar textos pessoais em URLs compartilháveis.
- Evitar envio a serviços externos sem autorização explícita.

### Responsabilidade

O Flux é uma ferramenta de apoio à organização e à reflexão.

Não deve apresentar decisões sugeridas como verdades absolutas ou determinações provenientes do Campo.

Decisões de alto impacto exigem avaliação contextual e, quando adequado, orientação especializada.

### Acessibilidade

- Navegação por teclado.
- Rótulos claros nos campos.
- Foco visível.
- Contraste adequado.
- Mensagens de erro compreensíveis.
- Uso responsivo.
- Alternativas a animações.
- Funcionamento sem áudio.

---

# 14. MVP da terceira camada

## P0 — Primeira versão funcional

O usuário deverá conseguir:

1. Entrar no Flux.
2. Escolher um contexto ou ignorar essa classificação.
3. Registrar uma intenção.
4. Definir uma próxima ação.
5. Criar um plano essencial.
6. Salvar a ação.
7. Alterar seu estado.
8. Registrar uma revisita.
9. Consultar seu histórico.
10. Escolher outro caminho no sistema.

## P1 — Ampliação funcional

- Várias ações por projeto.
- Organização de prioridades.
- Filtros.
- Exportação estruturada.
- Histórico de jornadas.
- Conexões documentais.
- Recursos para simplificação de processos.

## P2 — Expansão futura

- Contas e sincronização.
- Projetos colaborativos.
- Permissões.
- Integrações com ferramentas externas.
- Automação supervisionada.
- Recomendações contextuais.
- Indicadores operacionais.

---

# 15. Critérios de aceite

O protótipo será considerado funcional quando:

- A navegação principal puder ser concluída.
- O usuário compreender o propósito de cada tela.
- A ação for formulada sem necessidade de criar um projeto complexo.
- Dados obrigatórios e opcionais estiverem claramente diferenciados.
- O registro puder ser salvo e recuperado.
- O estado da ação puder ser modificado.
- A revisita puder ser registrada sem sobrescrever histórico anterior.
- Os caminhos de retorno funcionarem.
- As interfaces desktop e mobile forem utilizáveis.
- Os controles principais forem acessíveis por teclado.
- O software não presumir resultados, sentimentos ou mudanças não registrados.

---

# 16. Critérios de validação com usuários

A primeira avaliação deverá investigar:

**Clareza:** a pessoa entende o que está sendo proposto?

**Simplicidade:** consegue criar uma ação sem esforço desnecessário?

**Autonomia:** sente que pode modificar ou abandonar o percurso?

**Continuidade:** consegue reencontrar seus registros?

**Aplicabilidade:** a interface ajuda a organizar um movimento que pode ser realizado na vida real?

**Aprendizado:** a revisita ajuda a compreender o que aconteceu?

As respostas serão dados de avaliação de experiência, não evidências automáticas de efeitos energéticos ou terapêuticos.

---

# 17. Decisões consolidadas

1. A terceira camada chama-se **Aplicação e Expansão**.
2. Sua interface operacional é **Flux**.
3. A terceira Chave de Ativação chama-se **Ação e Manifestação**.
4. Todas as chaves podem conduzir ao Flux.
5. Flux pode ser acessado diretamente.
6. A experiência utiliza revelação progressiva.
7. O primeiro movimento concreto antecede funcionalidades avançadas de gestão.
8. A revisita faz parte do percurso.
9. O usuário mantém autonomia sobre decisões, registros e continuidade.
10. A identidade pública permanece **LICHTARA**.

---

# 18. Próximos marcos de desenvolvimento

### Marco 01 — Protótipo visual

Criar no Figma as telas `AE-00` a `AE-04`.

### Marco 02 — Ciclo funcional

Implementar criação e acompanhamento de uma ação simples.

### Marco 03 — Revisita

Permitir registrar resultados e aprendizados.

### Marco 04 — Integração

Conectar Flux ao Acervo e às Experiências LICHTARA por meio de referências e transições explícitas.

---

## Princípio final

A experiência não termina quando uma pessoa percebe uma possibilidade.

Ela pode continuar quando essa possibilidade se transforma em uma escolha.

A escolha pode dar origem a uma ação.

A ação pode produzir resultados que merecem ser observados, compreendidos e revisados.

**LICHTARA — Presença para perceber. Compreensão para escolher. Ação para transformar.**

*Uma luz de cada vez. Uma descoberta de cada vez. Um caminho que se revela enquanto caminhamos.*

---

*Documento de especificação funcional do Sistema LICHTARA. A implementação técnica deverá ser validada de acordo com o comportamento real do software e as necessidades de seus usuários.*

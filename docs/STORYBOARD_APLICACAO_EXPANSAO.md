# Portal LICHTARA — Aplicação e Expansão

**Projeto:** Sistema LICHTARA / Ecossistema Oktave  
**Produto:** Portal LICHTARA  
**Camada:** 03 — Aplicação e Expansão  
**Motor funcional de referência:** Flux  
**Versão:** 0.1.0  
**Status:** Especificação inicial para design e desenvolvimento  
**Dependências:** Acervo LICHTARA, Lumora, NAVROS e Ferramentas e Ativações

---

# 1. Propósito

A interface de **Aplicação e Expansão** é o ambiente de continuidade prática do Portal LICHTARA.

Sua função é permitir que uma intenção, percepção, descoberta ou aprendizado seja traduzido em uma ação possível, acompanhado ao longo do tempo e revisitado a partir de resultados observáveis.

Essa interface utiliza Flux como referência conceitual para organização e execução.

Ela não substitui ferramentas completas de gerenciamento de projetos em sua primeira versão.

Seu objetivo inicial é oferecer uma passagem simples e funcional entre compreensão e movimento.

### 1.1. Princípio central

> O que compreendi? O que escolho fazer? O que aconteceu depois?

A interface deverá ajudar o usuário a formular essas perguntas e registrar suas próprias respostas.

### 1.2. Resultado esperado

O usuário deverá conseguir:

- Registrar uma intenção ou objetivo.
- Identificar uma ação realizável.
- Considerar recursos e condições necessárias.
- Definir um momento de acompanhamento.
- Atualizar o estado da ação.
- Registrar resultados.
- Revisar a estratégia.
- Retornar ao Acervo ou às experiências de Lumora quando precisar de mais compreensão.

---

# 2. Posição na arquitetura

## 2.1. Relação com o Acervo

O Acervo oferece fundamentos e referências documentais.

Uma pessoa poderá consultar um manual, explorar um conceito e iniciar uma aplicação relacionada.

A navegação deverá preservar a referência ao material consultado, quando disponível.

## 2.2. Relação com Ferramentas e Ativações

As Ativações permitem formular uma intenção, realizar uma experiência guiada e registrar percepções.

O Flux recebe somente os dados que o usuário escolher encaminhar.

A aplicação não presume que uma experiência subjetiva produziu uma transformação objetiva.

## 2.3. Relação com NAVROS

NAVROS representa a lógica de escolhas e transições entre caminhos.

Nesta camada, poderá organizar alternativas como:

- Criar uma ação.
- Dividir uma ação em passos menores.
- Revisar uma decisão.
- Investigar um obstáculo.
- Retornar ao conhecimento.
- Encerrar ou pausar uma atividade.

## 2.4. Relação com Lumora

Lumora contribui com perguntas, conteúdo e aprofundamento.

Flux organiza a aplicação e o acompanhamento.

**Lumora favorece a compreensão. Flux sustenta a continuidade.**

---

# 3. Princípios de UX

### 3.1. Uma ação de cada vez

A primeira experiência não deve exigir a criação de um projeto completo.

O usuário poderá começar com um único próximo passo.

### 3.2. Simplicidade sem simplificação excessiva

A interface oferece um caminho curto, mas permite adicionar informações quando forem necessárias.

### 3.3. Autonomia

O software pode sugerir perguntas e estruturas. A decisão de agir pertence ao usuário.

### 3.4. Acompanhamento sem cobrança

Pausas, mudanças de prioridade e abandono de uma ação são possibilidades legítimas.

### 3.5. Aprendizado a partir dos resultados

A revisita permite comparar intenção, execução e resultado sem atribuir automaticamente sucesso ou fracasso à experiência inicial.

### 3.6. Continuidade entre camadas

O usuário pode retornar ao Acervo ou às Ativações sem perder o contexto autorizado.

---

# 4. Organização funcional

A interface contempla três modos iniciais de aplicação.

## 4.1. Vida pessoal

Exemplos:

- Organizar uma rotina.
- Explorar uma decisão cotidiana.
- Iniciar um hábito.
- Resolver uma pendência simples.
- Acompanhar uma mudança de organização pessoal.

## 4.2. Projetos e criação

Exemplos:

- Transformar uma ideia em tarefa.
- Definir um primeiro protótipo.
- Organizar entregas.
- Identificar dependências.
- Reduzir etapas desnecessárias.

## 4.3. Trabalho e organizações

Exemplos:

- Examinar gargalos operacionais.
- Definir prioridades.
- Registrar decisões.
- Planejar melhorias.
- Acompanhar resultados.

O modo selecionado ajusta a linguagem e alguns campos, mas não altera os princípios fundamentais da interface.

No MVP, os três modos poderão utilizar o mesmo motor de ações.

---

# 5. Fluxo principal

`AE-00 Entrada no Flux`

→ `AE-01 Contexto`

→ `AE-02 Intenção`

→ `AE-03 Próximo Movimento`

→ `AE-04 Plano Essencial`

→ `AE-05 Acompanhamento`

→ `AE-06 Revisita`

→ `AE-07 Síntese e Expansão`

A ordem é uma referência para construção, não um bloqueio rígido.

O usuário poderá retornar, editar, pausar ou encerrar o processo.

---

# 6. Storyboard de telas

## AE-00 — Entrada no Flux

**Objetivo:** apresentar a passagem para a aplicação prática.

**Mensagem principal:**

> O que deseja colocar em movimento?

**Texto de apoio:**

“Uma intenção pode começar com um pequeno passo.”

### Composição

- Identidade visual LICHTARA.
- Geometria suave relacionada a movimento e continuidade.
- Uma pergunta central.
- Uma ação principal.
- Acesso discreto às experiências e ao Acervo.

### Possíveis estados de entrada

**Entrada direta:** o usuário inicia uma aplicação sem experiência anterior.

**Entrada a partir das Ativações:** a interface oferece importar a intenção ou reflexão selecionada.

**Entrada a partir do Acervo:** a interface apresenta uma referência documental de origem, quando disponível.

### Ações

- Criar meu próximo movimento.
- Retomar uma ação existente.
- Voltar ao Portal.

### Transição

`AE-01 — Contexto`

---

## AE-01 — Escolha do Contexto

**Objetivo:** compreender onde a ação será aplicada.

**Pergunta:**

> Em que área deseja atuar?

### Opções

**Vida pessoal**

Organização, escolhas e rotina.

**Projeto ou criação**

Ideias, protótipos e entregas.

**Trabalho ou organização**

Processos, decisões e melhorias.

**Ainda não sei**

Permite prosseguir sem classificação.

### Comportamento

A escolha ajusta exemplos, terminologia e perguntas posteriores.

Não restringe funcionalidades essenciais.

### Gatilho

Confirmação do contexto.

### Transição

`AE-02 — Intenção`

---

## AE-02 — Clareza da Intenção

**Objetivo:** transformar uma percepção geral em uma intenção compreensível.

**Pergunta principal:**

> O que deseja realizar ou compreender melhor?

### Composição

Uma pergunta central e um campo de registro.

Se a jornada vier das Ativações, exibir um resumo opcional e editável:

- Chave escolhida.
- Pergunta original.
- Reflexão selecionada.

### Campos

**Intenção**

O que desejo?

**Motivo**

Por que isso importa neste momento?

**Situação atual**

O que já acontece ou existe?

Os dois últimos campos serão opcionais.

### Ações

- Continuar.
- Editar.
- Voltar.
- Consultar uma referência no Acervo.

### Gatilho

Confirmação da intenção.

### Transição

`AE-03 — Próximo Movimento`

---

## AE-03 — O Próximo Movimento

**Objetivo:** definir uma ação pequena e observável.

**Pergunta principal:**

> Qual é o próximo passo possível?

### Apoio contextual

“Comece por algo que consiga descrever e verificar.”

### Campos

**Ação**

O que farei?

**Primeiro gesto**

Como começarei?

**Condição necessária**

De que preciso antes de executar?

### Orientação de design

Se a pessoa apresentar uma ação muito ampla, oferecer a possibilidade de dividi-la em passos menores.

Exemplo:

**Intenção:** organizar meu projeto.

**Ação ampla:** concluir todo o planejamento.

**Primeiro movimento possível:** listar as três entregas prioritárias.

### Ações

- Registrar este passo.
- Dividir em partes menores.
- Rever minha intenção.

### Gatilho

Definição da ação.

### Transição

`AE-04 — Plano Essencial`

### Regra

Não apresentar a ação sugerida pelo sistema como orientação obrigatória ou infalível.

---

## AE-04 — Plano Essencial

**Objetivo:** estruturar a execução sem produzir sobrecarga.

**Mensagem:**

> O que precisa estar pronto para começar?

### Componentes

**Ação definida**

Resumo editável.

**Recursos**

O que está disponível ou será necessário?

**Dependências**

Há algo que precisa acontecer antes?

**Momento de execução**

Quando desejo começar?

**Momento de revisita**

Quando quero observar o resultado?

### Comportamento

A interface revela os campos progressivamente.

Na primeira versão, não é necessário mostrar uma estrutura completa de gestão de projetos.

### Ações

- Confirmar meu plano.
- Simplificar ainda mais.
- Guardar como rascunho.

### Gatilho

Confirmação do plano.

### Transição

`AE-05 — Acompanhamento`

---

## AE-05 — Acompanhamento

**Objetivo:** permitir que o usuário acompanhe uma ação registrada.

**Mensagem principal:**

> Como está seu próximo movimento?

### Estados possíveis

**Planejado**

A ação foi definida, mas não iniciada.

**Em andamento**

A execução começou.

**Concluído**

O usuário declara que realizou a ação.

**Pausado**

A ação foi temporariamente interrompida.

**Descartado**

O usuário decidiu não prosseguir.

### Elementos

- Descrição da ação.
- Contexto.
- Data de criação.
- Estado atual.
- Momento de revisita.
- Histórico de atualizações.

### Ações

- Iniciar.
- Marcar como concluído.
- Pausar.
- Reformular.
- Descartar.
- Registrar observação.

### Gatilho

Alteração explícita do estado da ação.

### Transição

Permanecer em acompanhamento ou seguir para `AE-06`.

### Regra

A interface não presume que uma ação foi realizada por ter chegado a data prevista.

---

## AE-06 — Revisita

**Objetivo:** apoiar a reflexão sobre o que ocorreu após a ação.

**Mensagem principal:**

> O que aconteceu depois?

### Perguntas

**O que foi realizado?**

Registro do acontecimento ou resultado.

**O que observei?**

Percepções sobre a execução.

**O que funcionou?**

Aspectos úteis ou positivos.

**O que precisa mudar?**

Obstáculos, limites e ajustes.

**O que aprendi?**

Síntese pessoal.

### Recursos opcionais

- Comparação entre intenção inicial e resultado.
- Registro de indicadores concretos, quando existirem.
- Histórico de alterações.
- Anotações.
- Nova data de acompanhamento.

### Ações

- Registrar revisita.
- Ajustar a ação.
- Criar outro passo.
- Voltar ao Acervo.
- Retomar uma experiência Lumora.

### Gatilho

Registro voluntário de resultado ou aprendizado.

### Transição

`AE-07 — Síntese e Expansão`

### Regra

Resultados inesperados, neutros ou negativos devem poder ser registrados sem julgamento automático.

---

## AE-07 — Síntese e Expansão

**Objetivo:** integrar os registros e abrir novas possibilidades.

**Mensagem principal:**

> O que deseja fazer com o que aprendeu?

### Síntese apresentada

- Intenção inicial.
- Contexto.
- Ação escolhida.
- Estado atual.
- Resultados registrados.
- Aprendizados.
- Referências relacionadas.

### Novos caminhos

**Continuar no Flux**

Criar um próximo passo.

**Aprofundar no Lumora**

Explorar outra pergunta ou experiência.

**Consultar o Acervo**

Examinar conceitos ou fontes relacionadas.

**Encerrar este ciclo**

Guardar a síntese.

**Exportar registro**

Gerar uma cópia dos dados selecionados.

### Gatilho

Escolha do próximo caminho.

### Destino

Nova ação, Acervo, Ativações ou encerramento da sessão.

---

# 7. Modelo inicial de dados

O sistema deverá representar ações e revisitas com identificadores estáveis.

Modelo conceitual:

```ts
type ActionStatus =
  | "planned"
  | "in_progress"
  | "completed"
  | "paused"
  | "discarded";

type ActionPlan = {
  id: string;
  originJourneyId?: string;
  context?: "personal" | "project" | "work";
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

### Regras de implementação

- Uma ação pode existir sem jornada de ativação anterior.
- Uma jornada pode originar nenhuma, uma ou várias ações ao longo do tempo.
- Uma ação pode ter várias revisitas.
- Revisitas não devem sobrescrever registros históricos.
- O usuário pode editar ou descartar uma ação.
- Ações descartadas não devem ser interpretadas automaticamente como fracasso.
- Informações pessoais não devem ser compartilhadas entre aplicações sem consentimento.

---

# 8. Integração entre as três camadas

## 8.1. Acervo → Flux

Um capítulo ou conceito poderá oferecer uma ação contextual:

**Aplicar este conhecimento**

O Flux receberá, quando possível:

- Identificador da fonte.
- Título do conteúdo.
- Link de referência.
- Tema selecionado.

O sistema não deverá presumir uma ação específica sem escolha do usuário.

## 8.2. Ativações → Flux

A jornada poderá oferecer:

**Transformar esta percepção em ação**

O usuário poderá revisar e escolher o conteúdo transferido:

- Intenção.
- Reflexão.
- Chave escolhida.
- Referências documentais.

A informação será apresentada como contexto, não como comando.

## 8.3. Flux → Acervo

Durante uma ação, o usuário poderá consultar fontes e retornar ao plano sem perder o estado da sessão.

## 8.4. Flux → Ativações

A pessoa poderá iniciar outra experiência quando desejar explorar uma pergunta, reorganizar prioridades ou reconsiderar uma decisão.

## 8.5. Regra de integração

No MVP, priorizar identificadores estáveis, referências e dados exportáveis.

Não transportar textos pessoais por parâmetros de URL.

Caso as interfaces sejam publicadas em domínios diferentes, definir uma estratégia explícita de transferência de dados antes de implementar sincronização automática.

---

# 9. Componentes reutilizáveis

| Componente | Função |
|---|---|
| `FluxShell` | Estrutura visual da aplicação |
| `ContextSelector` | Escolha do contexto |
| `IntentionEditor` | Formulação da intenção |
| `NextStepEditor` | Definição da ação |
| `EssentialPlan` | Recursos, dependências e datas |
| `ActionStatusControl` | Atualização do estado |
| `ReviewEditor` | Registro de resultados |
| `ActionTimeline` | Histórico de revisitas |
| `CycleSummary` | Síntese da jornada |
| `CrossLayerNavigation` | Navegação entre Acervo, Ativações e Flux |

### Estados de componente

Padrão, foco, edição, validação, salvando, salvo, erro e indisponível, conforme aplicável.

---

# 10. Identidade visual

A interface Flux deverá integrar-se à identidade do Portal LICHTARA.

### Diretrizes

- Azul profundo e preto cósmico como base.
- Dourado em ações e pontos de destaque.
- Tipografia consistente com o Acervo.
- Geometrias utilizadas com discrição.
- Espaços generosos.
- Hierarquia visual clara.
- Formulários simples.
- Feedback textual compreensível.

### Diferença de linguagem visual

**Ativações:** experiência sensorial, contemplativa e exploratória.

**Flux:** experiência objetiva, organizada e orientada à execução.

A unidade visual permanece, mas a quantidade de estímulos e controles deverá se adequar à função de cada interface.

---

# 11. Segurança, privacidade e acessibilidade

### Privacidade

- Não exigir cadastro no MVP.
- Evitar coleta de dados além do necessário.
- Permitir exclusão e exportação.
- Informar claramente onde os registros são armazenados.
- Não enviar registros pessoais para serviços de IA sem autorização.
- Não usar dados subjetivos para inferir estados psicológicos ou espirituais.

### Responsabilidade

A plataforma apoia organização e reflexão.

Não substitui aconselhamento profissional ou análise apropriada para decisões de alto impacto.

Ações importantes poderão exigir investigação adicional, consulta a especialistas e consideração de riscos.

### Acessibilidade

- Navegação por teclado.
- Controles com foco visível.
- Campos com rótulos.
- Mensagens de erro compreensíveis.
- Contraste adequado.
- Uso em celular.
- Ausência de dependência de animações.
- Disponibilidade de recursos sem áudio.

---

# 12. MVP

## P0 — Essencial

1. Entrar na interface Flux.
2. Selecionar um contexto ou prosseguir sem classificação.
3. Registrar uma intenção.
4. Criar um próximo movimento.
5. Definir uma revisita opcional.
6. Salvar uma ação.
7. Atualizar seu estado.
8. Registrar um resultado.
9. Criar uma nova ação a partir do aprendizado.
10. Retornar ao Acervo ou às Ativações.

## P1 — Aprimoramento

- Várias ações por projeto.
- Organização de prioridades.
- Histórico local de ciclos.
- Exportação em Markdown ou JSON.
- Visualização de dependências.
- Filtros de ações.
- Conteúdos Lumora relacionados.

## P2 — Evolução futura

- Contas e sincronização.
- Gestão colaborativa.
- Permissões por projeto.
- Integrações com ferramentas externas.
- Recomendações contextuais por IA.
- Automação supervisionada.
- Indicadores de projetos e organizações.
- Expansão comunitária.

---

# 13. Critérios de aceite

O MVP estará funcional quando:

1. O usuário conseguir iniciar uma aplicação sem participar das Ativações.
2. Uma intenção puder ser transformada em ação.
3. A ação puder ser editada e salva.
4. O estado da ação puder ser atualizado.
5. Uma revisita puder ser registrada.
6. O histórico de revisitas permanecer consultável.
7. O usuário puder retornar às outras camadas.
8. A aplicação funcionar em desktop e celular.
9. Os controles funcionarem por teclado.
10. A interface não declarar resultados não observados.
11. A ação não for marcada automaticamente como concluída.
12. Dados pessoais não forem transmitidos sem autorização.

---

# 14. Indicadores de validação do piloto

A validação inicial deverá observar utilidade e comportamento, não supostos efeitos energéticos.

### Indicadores possíveis

**Compreensão da interface**

O usuário entende o que deve fazer?

**Conversão de intenção em ação**

Consegue formular um passo concreto?

**Continuidade**

Consegue retornar ao registro?

**Revisita**

Consegue registrar o que aconteceu?

**Utilidade percebida**

Considera que a experiência ajudou a organizar uma decisão ou atividade?

Esses indicadores não devem ser apresentados como comprovação de efeitos espirituais, fisiológicos ou terapêuticos.

---

# 15. Decisões em aberto

- Nome público definitivo da interface operacional.
- Local de hospedagem.
- Estratégia de persistência.
- Integração com outras ferramentas.
- Modelo de projetos com múltiplas ações.
- Política de notificações.
- Modelo de usuários e permissões.
- Conteúdos audiovisuais complementares.
- Relatórios e indicadores futuros.

Essas definições podem ser feitas após o primeiro ciclo de testes.

---

# 16. Conexão com a arquitetura matrioska

A terceira camada também seguirá o princípio de revelação progressiva.

Exemplo:

**O que deseja realizar?**

↓

**Qual é o próximo passo possível?**

↓

**O que precisa para começar?**

↓

**Como está seu movimento?**

↓

**O que aconteceu depois?**

↓

**O que deseja fazer com o que aprendeu?**

O usuário não precisa criar um plano complexo antes de realizar sua primeira ação.

A profundidade da ferramenta cresce conforme a necessidade.

---

# 17. Referências de projeto

- `STORYBOARD_INTERFACE.md` — arquitetura geral.
- `STORYBOARD_ATIVACOES.md` — experiência sensorial e navegação.
- Acervo LICHTARA — base documental e fontes originais.
- Manuais Flux — referência conceitual para organização e aplicação.
- Manuais Lumora — referência para experiências e aprofundamento.

Os caminhos e as relações documentais deverão ser conferidos no repositório antes de criar links definitivos.

---

## Princípio final

A experiência não termina quando surge uma compreensão.

Ela pode continuar por meio de uma escolha, de uma ação, de um resultado e de uma nova pergunta.

**Presença para perceber.  
Compreensão para escolher.  
Ação para transformar.**

*Uma luz de cada vez. Uma descoberta de cada vez. Um caminho que se revela enquanto caminhamos.*

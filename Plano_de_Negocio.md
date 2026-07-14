# PLANO DE NEGÓCIOS & ARQUITETURA TECNOLÓGICA
## PLATAFORMA EDENILSON - MARKETPLACE DE SERVIÇOS E MATERIAIS DE CONSTRUÇÃO

---

## 1. INTRODUÇÃO E RESUMO EXECUTIVO

A **Plataforma Edenilson** nasce com o propósito de resolver uma das maiores dores do mercado brasileiro de construção civil e serviços gerais: a descentralização, a falta de confiança e a dificuldade de orçamentação. 

Ao criar um ecossistema integrado que une **Prestadores de Serviços (mão de obra)** e **Lojas de Varejo (materiais de construção)**, a plataforma elimina o atrito de ter que procurar profissionais de forma avulsa e cotar materiais em múltiplos canais de venda. O cliente final tem a possibilidade de simular uma reforma inteira, ver a estimativa de custo de material e mão de obra, contratar o profissional e comprar os insumos de maneira unificada e otimizada por geolocalização.

---

## 2. O MARKETPLACE E SEGMENTOS DE ATUAÇÃO

O marketplace atuará em duas grandes verticais integradas:

### A. Serviços de Mão de Obra
*   **Pintura:** Pintores residenciais, comerciais, especializados em texturização, grafiato e aplicação por método airless.
*   **Pedreiros e Mestres de Obra:** Construção civil do alicerce ao acabamento, reboco, alvenaria, contrapiso e assentamento de pisos.
*   **Funilaria e Pintura Automotiva / Serviços Gerais:** Pequenos reparos automotivos (martelinho de ouro, funilaria rápida) e profissionais eletricistas/encanadores para manutenção geral.

### B. Lojas de Materiais de Construção
*   **Materiais Básicos:** Cimento, areia, blocos, tijolos, vergalhões, brita, argamassas.
*   **Acabamento e Decoração:** Tintas, lixas, pincéis, rolos, cerâmicas, porcelanatos, gesso.
*   **Elétrica e Hidráulica:** Fios, conduítes, disjuntores, conexões PVC, registros.

---

## 3. MODELO DE MONETIZAÇÃO (COMO O PORTAL GANHA DINHEIRO)

Para garantir alta lucratividade e escalabilidade, o modelo de negócios é híbrido, composto por quatro fontes principais de receita:

| Canal de Receita | Descrição | Percentual/Taxa Sugerida |
| :--- | :--- | :--- |
| **Comissão sobre Serviços** | Taxa cobrada do profissional autônomo sobre o valor da diária ou do serviço fechado através da plataforma. | **5% a 10%** por serviço contratado |
| **Comissão sobre Materiais** | Comissão cobrada das lojas de construção por cada venda realizada dentro do aplicativo. | **3% a 8%** por transação de venda |
| **Assinatura de Destaque** | Mensalidade paga por lojas ou profissionais para aparecerem no topo das buscas regionais (Selo Premium). | **R$ 49,90/mês** (Profissional)<br>**R$ 199,90/mês** (Loja) |
| **Anúncios Patrocinados** | Parceria com grandes marcas (ex: Coral, Suvinil, Votorantim) para exibição de anúncios no aplicativo. | Sob consulta (Modelo de CPM/CPC) |

---

## 4. FLUXOS DE EXPERIÊNCIA DO USUÁRIO (USER JOURNEY)

### Fluxo do Cliente Final
1.  **Acesso e Localização:** O cliente abre a plataforma e o sistema identifica sua localização atual.
2.  **Pesquisa / Simulação:** O cliente pode buscar por um profissional direto ou usar o **Simulador de Orçamento** para estimar os custos agregados de sua obra (ex: 5 sacos de cimento + 2 dias de pedreiro).
3.  **Contratação Unificada:** O cliente adiciona os insumos e a agenda do profissional em um carrinho único.
4.  **Pagamento Integrado:** Realiza o pagamento em até 12x no cartão de crédito via intermediador de pagamento da plataforma.
5.  **Acompanhamento:** Acompanha a entrega dos materiais pela loja e o início da agenda contratada com o profissional.

### Fluxo do Prestador de Serviço (Profissional)
1.  **Cadastro e Portfólio:** Cria um perfil com fotos de obras concluídas, especialidades, diária média desejada e área de cobertura.
2.  **Recebimento de Propostas:** Recebe convites de serviço com descrição, fotos do local e data sugerida pelo cliente.
3.  **Execução e Liberação de Valores:** Após a conclusão física do serviço e aprovação do cliente, o valor da diária (descontada a comissão) é liberado em sua carteira digital.

---

## 5. ARQUITETURA DE TECNOLOGIA RECOMENDADA

Para construir um sistema robusto, rápido e capaz de escalar nacionalmente, propõe-se a seguinte pilha de tecnologia:

### A. Frontend (Interface do Usuário)
*   **Web Portal:** **Next.js** (React) com Tailwind CSS para carregamento rápido, excelente indexação de SEO no Google e design responsivo premium.
*   **Aplicativo Mobile (iOS & Android):** **React Native** com Expo para desenvolvimento unificado e rápido acesso a recursos nativos como geolocalização e câmera.

### B. Backend (Serviço e Lógica de Negócio)
*   **Framework:** **Node.js** com NestJS (pela excelente arquitetura modular) ou **Python** com FastAPI para processamento veloz de dados e algoritmos de cálculo.
*   **API:** RESTful API documentada com Swagger para integração de parceiros externos.

### C. Banco de Dados e Cache
*   **Principal:** **PostgreSQL** por sua estabilidade, integridade transacional de dados (segurança financeira) e suporte a buscas espaciais via extensão PostGIS (essencial para encontrar profissionais próximos).
*   **Cache & Mensageria:** **Redis** para caching de preços de materiais que sofrem pouca oscilação e controle rápido de sessões.

### D. Integrações de Terceiros Necessárias
*   **Pagamentos:** **Stripe** ou **Asaas** (para suporte a Split de Pagamentos automático: o cliente paga e o sistema envia a fatia da loja, a fatia do pedreiro e retém a comissão do Edenilson automaticamente).
*   **Geolocalização:** **Google Maps API** (Directions e Geocoding) para calcular distância de frete de materiais e distância de deslocamento de prestadores.

---

## 6. O DIFERENCIAL COMPETITIVO: O SIMULADOR DE OBRAS

Diferente de marketplaces tradicionais como GetNinjas (que apenas vendem leads) ou Mercado Livre (que apenas vende materiais), o diferencial do **Edenilson** é a **inteligência de conversão**:
*   O cliente não precisa saber quantos tijolos ou quanto cimento gasta para fazer uma parede. O simulador faz uma conta paramétrica rápida baseada nas dimensões da reforma fornecidas pelo usuário.
*   A plataforma sugere o pedreiro ideal e já calcula a quantidade de sacos de cimento e areia das lojas mais próximas dele, gerando um frete consolidado mais econômico.

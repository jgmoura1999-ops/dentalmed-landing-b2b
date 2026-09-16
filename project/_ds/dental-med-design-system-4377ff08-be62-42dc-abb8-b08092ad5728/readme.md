# Dental Med Empresarial — Design System

Sistema de design para a operação **B2B da Dental Med**, plano odontológico com sede no Rio Grande do Norte. O foco desta biblioteca é uma superfície: a **landing page de conversão para empresas privadas**, voltada a RH, diretores e C-level que avaliam oferecer benefício odontológico aos colaboradores. Todo o sistema é dimensionado para essa tarefa — capturar leads qualificados por meio de um formulário de quatro campos (Nome, Cargo, Telefone, E-mail corporativo).

## Contexto da empresa

- Operação consolidada no RN, com rede própria + credenciada e marca reconhecida no estado.
- Meta declarada internamente: **50.000 clientes ativos até 2030** — "com experiência, retenção e rentabilidade. Não só volume."
- Assinatura verbal: **"Motivos para sorrir."**
- Valores declarados: Cuidado · Compromisso · Segurança · Vendemos a Verdade · Proatividade · Reciprocidade.
- Linhas de produto identificadas na tabela comercial: Modelar, Modelar Kids (até 12 anos), Ortodôntico, Ortodôntico Estético, Ortodôntico Plus, Ortodôntico Estético Plus e **Empresas Privadas** (2 a 29 / 30 a 99 / 100+ vidas, com modalidade compulsória a partir de 30 vidas).

## Fontes usadas

Todas em `sources/` (cópias dos arquivos fornecidos pela pasta local `comercial/`):

| Arquivo | O que forneceu |
|---|---|
| `sources/TABELA_DE_PLANOS.pdf` | Faixas e valores por vida das modalidades empresariais; regras de adesão e observações comerciais. |
| `sources/Cartao_Eu_Tambem_Vendo.pdf` | Assinatura "Motivos para sorrir.", valores da marca, meta 2030, lockup verbal "dentalmed / PLANOS ODONTOLÓGICOS". |
| `sources/Cultura_Comercial.pptx` | 17 slides da Reunião de Líderes (março/2026): tom de voz interno, vocabulário comercial, posicionamento e paleta usada no deck. |

**Nenhum arquivo de logotipo, fonte de marca ou manual de identidade foi fornecido.** Consequências registradas em "Substituições" abaixo.

## Fundamentos de conteúdo (CONTENT FUNDAMENTALS)

Português do Brasil, registro profissional e direto. O material de origem é notavelmente franco — "Vendemos a Verdade" é um valor declarado — e a escrita acompanha.

- **Pessoa.** Fala-se com o decisor em segunda pessoa ("sua equipe", "o que o RH ganha"), e a empresa aparece em primeira pessoa do plural ("devolvemos a proposta em 1 dia útil"). Nunca "eu".
- **Frases curtas, afirmativas, com número dentro.** "Carteirinhas em 5 dias." "A partir de 2 vidas." "R$ 0 de taxa de implantação." O deck interno faz o mesmo: "Crescer é fácil. Sustentar crescimento exige cultura."
- **Contraste como recurso retórico.** O material original usa pares NÃO É / É e "não só volume" para delimitar promessas. Use com parcimônia — no máximo uma vez por página.
- **Benefício de negócio antes de benefício clínico.** Headline fala de absenteísmo, retenção e custo; a cobertura odontológica vem logo depois como prova.
- **Caixa.** Sentence case em títulos e botões ("Solicitar proposta", não "SOLICITAR PROPOSTA"). Caixa alta só em eyebrows e rótulos de estatística, sempre com tracking 0.1em.
- **CTAs são verbos de ação em primeira pessoa do plural implícita:** "Solicitar proposta", "Falar com um especialista", "Quero começar a cotação". Nunca "Saiba mais", "Clique aqui" ou "Enviar".
- **Objeções são nomeadas, não contornadas.** O FAQ usa as palavras que o cliente usa: carência, custo por vida, adesão mínima, prazo de implantação, quem custeia.
- **Números sempre no formato brasileiro:** R$ 23,90 · 50.000+ · 4,8/5 · "1 dia útil".
- **Sem emoji.** Em nenhuma superfície — nem interna, nem comercial. Sem exclamações; a confiança vem do dado, não do entusiasmo.
- **Evitar:** superlativos vazios ("o melhor plano do Brasil"), jargão de seguradora ("sinistralidade", "beneficiário titular" no material de marketing), promessas sem número.

## Fundamentos visuais (VISUAL FOUNDATIONS)

**Paleta.** Azul é a âncora (`--blue-600 #0E5AA7` para marca, `--blue-800 #0B2A4A` para seções escuras e títulos), sobre fundo branco e cinza-claro clínico (`--neutral-50 #F4F7FA`). O verde-menta (`--teal-400 #2FBFA4`) é apoio: ícones, confirmações, destaques de saúde — nunca botão. O **coral (`--coral-400 #FF6B3D`) é reservado exclusivamente a CTAs de conversão**; uma única ocorrência coral por dobra. Máximo de dois fundos por página: branco e `--surface-subtle`, mais as faixas navy (`--surface-inverse`) que funcionam como pontuação.

**Tipografia.** Manrope em todo o sistema (display + corpo), com Lora reservada a citações de depoimentos. Headlines 800 com tracking −0.025em; corpo 400/16px com line-height 1.65; eyebrow 12px caixa alta 800 com tracking 0.1em em azul. Figuras de prova em 38–48px/800.

**Espaçamento e layout.** Escala base 4px. Seções verticais de 96px (64px nas compactas), contêiner de 1200px, coluna de leitura de 760px, gutter de 24px. Grade de 3 colunas para benefícios/planos/passos; hero e CTA final em duas colunas assimétricas, com o formulário sempre à direita. Muito respiro: o branco é parte da promessa de higiene.

**Fundos.** Sem imagens de stock no sistema (nenhuma foi fornecida). O único gradiente permitido é o do hero: `linear-gradient(180deg,var(--blue-50),var(--neutral-0))`, sutil e vertical. Sem texturas, sem padrões repetidos, sem ilustrações desenhadas à mão.

**Cards.** Fundo branco, raio 16px, borda `1px var(--border-subtle)` e sombra `--shadow-sm`; padding padrão 28px. Cards interativos sobem 3px no hover e trocam para `--shadow-lg`. O card de plano recomendado inverte para navy sólido, sem borda, com `--shadow-xl`.

**Sombras.** Frias, tingidas de azul-petróleo (rgba(11,42,74,·)), nunca cinza neutro puro. Seis degraus (xs→xl) mais `--shadow-cta`, que é coral translúcido sob o botão primário — a única sombra colorida do sistema.

**Bordas e raios.** 4/6/10/16/24px e pill (999px). Botões e tags são pill; campos de formulário e cards são 10–16px. Borda padrão de 1px; 2px apenas no botão outline e no estado de foco.

**Estados.** Hover de CTA escurece (`--coral-400 → --coral-500`), nunca clareia nem muda de matiz. Botões secundários trocam para `--action-secondary-soft`. Press reduz para `scale(.98)` e usa o tom 600. Links sublinham no hover. Foco visível sempre: anel de 2px `--focus-ring` com offset de 2px (`--shadow-focus` na versão em sombra).

**Animação.** Discreta e curta: 120ms para cor, 200ms para transformações de card, 320ms para entradas. Easing padrão `cubic-bezier(.2,.6,.3,1)` — saída rápida, chegada suave. Sem bounce, sem parallax, sem animação de rolagem elaborada. Fades e deslocamentos de 3–8px apenas.

**Transparência e blur.** Um único uso: o header fixo, em `rgba(255,255,255,.92)` com `backdrop-filter: blur(10px)`. Sobre a faixa navy, divisores usam `rgba(255,255,255,.14)`. Nada de vidro fosco decorativo.

**Elementos fixos.** Header sticky de 76px com CTA coral sempre visível; no mobile, prever barra inferior fixa com o mesmo CTA. O formulário é ancorado em `#proposta`; todo CTA da página rola até ele ou abre o Dialog de especialista.

**Imagens.** Quando entrarem fotos, o direcionamento é: luz alta, tons frios e limpos, ambiente de clínica ou escritório real, pessoas sorrindo sem exagero, sem grão e sem filtro quente. Retratos recortados em raio 16px; nunca em círculo, exceto avatares de depoimento (40px, círculo, iniciais quando não houver foto).

## Iconografia (ICONOGRAPHY)

As fontes fornecidas **não contêm nenhum ícone, sprite, fonte de ícones ou SVG** — o deck é composto só de texto e formas do PowerPoint, e os PDFs são documentos de texto. Portanto:

- **Substituição declarada: [Lucide](https://lucide.dev) 0.544.0**, carregado por CDN (`cdn.jsdelivr.net/npm/lucide-static@0.544.0/icons/`). Traço de 2px, cantos arredondados, geometria neutra — o conjunto que mais se aproxima do tom clínico e sóbrio da marca.
- O componente `Icon` busca o SVG e o injeta inline, então o glifo herda `currentColor`. Uso: `<Icon name="shield-check" size={22}/>`.
- Tamanhos: 16px em rótulos, 20px em botões, 22–24px em blocos de benefício, 28px em estatísticas.
- Cor: azul (`--brand`) para navegação e informação; verde-menta (`--teal-600`) para confirmação e saúde; branco sobre navy; coral **nunca** em ícone, para não competir com o CTA.
- Ícones em bloco de benefício vão dentro de um quadrado de 44px, raio 10px, fundo `--surface-support-soft`.
- **Sem emoji** e sem caracteres unicode como ícone. A única exceção tipográfica é a seta "→" em links de texto.
- Nenhum ícone é desenhado à mão neste sistema.

## Substituições e lacunas (a confirmar com a marca)

1. **Sem arquivo de logotipo.** O componente `Wordmark` compõe "dentalmed" em tipografia (Manrope 800, "dental" em navy e "med" em verde-menta), com a linha "PLANOS ODONTOLÓGICOS" — reproduzindo a estrutura do lockup visto nos PDFs, sem tentar recriar o desenho real da marca. **Envie o SVG oficial** e ele substitui o componente.
2. **Sem fontes de marca.** Os documentos usam Calibri (padrão do Office), o que não indica uma escolha tipográfica. Adotamos **Manrope** (display/corpo) e **Lora** (citações) via Google Fonts. Troque se houver fonte oficial.
3. **Paleta do deck interno diverge.** O PPTX de cultura comercial usa periwinkle `#6B6BF0` + navy `#0F2847`. Como se trata de um material interno provavelmente montado em template genérico, seguimos a paleta do briefing (azul + verde-menta + coral). Se `#6B6BF0` for cor oficial, avise.
4. **Números de prova são placeholders** (vidas atendidas, dentistas credenciados, anos de mercado, nota de satisfação), assim como logos de clientes, depoimentos, registro ANS e contatos.

## Índice do repositório

| Caminho | Conteúdo |
|---|---|
| `styles.css` | Entrada global — apenas `@import`s. É o arquivo que o consumidor linka. |
| `tokens/` | `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `elevation.css`, `motion.css`, `base.css`. |
| `guidelines/` | 18 cards de especificação (cores, tipo, espaçamento, marca) exibidos na aba Design System. |
| `components/core/` | Primitivas de interface. |
| `components/brand/` | Blocos de conversão específicos da landing B2B. |
| `ui_kits/landing/` | Recreação completa e clicável da landing page (`index.html`, `Sections.jsx`, `README.md`). |
| `sources/` | Materiais originais fornecidos. |
| `thumbnail.html` | Tile do sistema na home. |
| `SKILL.md` | Empacotamento como Agent Skill. |

### Componentes

**Core (`components/core/`):** Button, IconButton, Icon, Input, Select, Checkbox, Radio, Switch, Card, Badge, Tag, Tabs, Dialog, Toast, Tooltip.

**Brand (`components/brand/`):** Wordmark, Stat, PlanCard, StepItem, Testimonial, Accordion, LeadForm.

Cada componente tem `.jsx`, `.d.ts` (contrato de props) e `.prompt.md` (quando usar + exemplo). Os cards `core.card.html` e `brand.card.html` mostram estados e variantes.

#### Adições intencionais

Nenhuma fonte definia inventário de componentes (não havia código nem Figma), então o conjunto core é o padrão mínimo de uma landing de conversão. Os sete componentes `brand/` existem porque a estrutura de página pedida pelo briefing exige: prova social (`Stat`), comparativo de planos (`PlanCard`), como funciona (`StepItem`), depoimentos (`Testimonial`), FAQ de objeções (`Accordion`), captura de lead (`LeadForm`) e assinatura da marca (`Wordmark`).

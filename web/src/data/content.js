export const WHATSAPP_NUMBER = '5584991746767';
export const WHATSAPP_DEFAULT_MESSAGE =
  'Olá! Gostaria de solicitar uma proposta de plano odontológico empresarial para minha empresa.';

export function whatsappLink(message = WHATSAPP_DEFAULT_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const dores = [
  {
    icon: 'user-search',
    title: 'Dificuldade para atrair talentos',
    text: 'Empresário, está difícil contratar bons profissionais? Hoje, não é só salário que chama atenção. Benefícios também fazem a diferença na hora de escolher onde trabalhar.',
  },
  {
    icon: 'user-minus',
    title: 'Perda de bons colaboradores',
    text: 'Você investe tempo treinando um funcionário e depois perde esse profissional. Um bom pacote de benefícios ajuda a valorizar sua equipe e pode contribuir para a retenção.',
  },
  {
    icon: 'heart-handshake',
    title: 'Colaborador não se sente valorizado',
    text: 'Às vezes, um benefício de baixo custo para a empresa representa muito para quem trabalha nela. O colaborador percebe quando a empresa também cuida dele.',
  },
  {
    icon: 'trending-down',
    title: 'Dor de dente também vira problema da empresa',
    text: 'Funcionário com dor de dente não consegue trabalhar da mesma maneira. Pode faltar, precisar sair para procurar atendimento e ter sua produtividade prejudicada.',
  },
  {
    icon: 'hourglass',
    title: 'Dificuldade de acesso ao atendimento',
    text: 'Nem todo colaborador consegue pagar um tratamento particular. E dependendo exclusivamente da disponibilidade do atendimento público, ele pode enfrentar espera e dificuldade para conseguir determinados procedimentos.',
  },
];

export const coberturas = [
  { icon: 'siren', label: 'Urgência e emergência 24h' },
  { icon: 'stethoscope', label: 'Consultas' },
  { icon: 'sparkles', label: 'Limpeza, prevenção e aplicação de flúor' },
  { icon: 'heart-pulse', label: 'Tratamento de gengiva (periodontia)' },
  { icon: 'shield-check', label: 'Restaurações (dentística)' },
  { icon: 'scissors', label: 'Cirurgia e extrações' },
  { icon: 'activity', label: 'Tratamento de canal (endodontia)' },
  { icon: 'scan', label: 'Radiografias e documentação' },
];

export const vantagens = [
  {
    icon: 'map-pin',
    title: 'Rede própria e credenciada',
    text: 'Atendimento nas quatro clínicas próprias e na rede credenciada em 23 cidades do RN.',
  },
  {
    icon: 'microscope',
    title: 'Equipamentos sofisticados',
    text: 'Estrutura de última geração com profissionais especializados em todas as áreas.',
  },
  {
    icon: 'shield-check',
    title: 'Biossegurança',
    text: 'Material odontológico de alta qualidade, esterilizado em autoclave.',
  },
  {
    icon: 'wallet',
    title: 'Sem taxa de adesão',
    text: 'Preço acessível por vida e nenhuma cobrança de implantação para a empresa.',
  },
  {
    icon: 'clock',
    title: 'Urgência 24 horas',
    text: 'Suporte em situações de emergência a qualquer hora, todos os dias.',
  },
  {
    icon: 'truck',
    title: 'Unidade móvel',
    text: 'Clínica móvel para levar o atendimento até a sede da empresa.',
  },
];

export const featClinico = [
  '206 procedimentos cobertos',
  'Urgência 24h na rede própria e credenciada',
  'Sem taxa de adesão',
  'Gestão de vidas com o time comercial',
];

export const featMedOrto = [
  'Cobertura clínica completa',
  'Documentação e raio-x',
  'Instalação e manutenção do aparelho',
  'Aparelho tradicional ou estético',
];

export const featOrto = [
  'Documentação e raio-x',
  'Instalação do aparelho ortodôntico',
  'Manutenção mensal',
  'Mesmo valor para todas as faixas etárias',
];

export const unidades = [
  { cidade: 'Natal', endereco: 'Av. Rio Branco, 440 — Centro', fone: '(84) 3133-3566' },
  { cidade: 'Parnamirim', endereco: 'Av. Bela Parnamirim, 14 — Vida Nova', fone: '(84) 3133-3560' },
  { cidade: 'Goianinha', endereco: 'R. Dom Nivaldo Monte, 126 — Centro', fone: '(84) 3133-3579' },
  { cidade: 'Santa Cruz', endereco: 'R. João Bianor Bezerra, 139 — Centro', fone: '(84) 3133-3574' },
];

export const cidadesCredenciadas = [
  'Alto do Rodrigues', 'Aréz', 'Assu', 'Carnaubais', 'Ceará-Mirim', 'Goianinha',
  'Ipanguaçu', 'Jaçanã', 'João Câmara', 'Jundiá', 'Lajes', 'Macau', 'Macaíba',
  'Natal', 'Parnamirim', 'Pendências', 'Santa Cruz', 'Serra Caiada',
  'São Gonçalo do Amarante', 'São José do Mipibu', 'São José do Campestre',
  'São Tomé', 'Tangará', 'Touros',
].join(', ');

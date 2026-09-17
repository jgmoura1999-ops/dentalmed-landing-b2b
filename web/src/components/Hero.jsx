import heroImg from '../assets/images/01-hero-decisor.jpg';
import Button from './ui/Button';
import Card from './ui/Card';
import LeadForm from './ui/LeadForm';
import { whatsappLink } from '../data/content';

export default function Hero() {
  return (
    <section className="hero" style={{ background: 'linear-gradient(180deg,var(--blue-50) 0%,var(--neutral-0) 100%)', padding: '64px 0 48px' }}>
      <div className="wrap grid-hero">
        <div>
          <div className="eyebrow">Plano odontológico empresarial · RN</div>
          <h1 style={{ fontSize: 56, lineHeight: 1.1, margin: 0 }}>
            Saúde bucal como benefício. Sua equipe merece esse cuidado.
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.65, marginTop: 20, maxWidth: '52ch' }}>
            Operadora potiguar desde 2000, com quatro clínicas próprias, rede credenciada em 23 cidades do RN e
            urgência 24h. Planos empresariais a partir de R$ 25,00 por colaborador, sem taxa de adesão.
          </p>
          <div style={{ display: 'flex', gap: 14, marginTop: 32, flexWrap: 'wrap' }}>
            <Button as="a" href="#proposta" variant="primary" size="lg" iconRight="arrow-right">
              Solicitar proposta
            </Button>
            <Button as="a" href={whatsappLink()} target="_blank" rel="noreferrer" variant="outline" size="lg">
              Falar com um especialista
            </Button>
          </div>
          <div style={{ display: 'flex', gap: 10, marginTop: 28, flexWrap: 'wrap', fontSize: 14, color: 'var(--text-muted)' }}>
            <span>Registro ANS nº 41.394-1</span>
            <span>·</span>
            <span>Proposta sem ônus para a empresa</span>
          </div>
        </div>

        <Card elevation="xl" padding={28}>
          <LeadForm title="Receba uma proposta sob medida" description="Quatro campos. Nosso time comercial retorna com os valores por vida." />
        </Card>
      </div>

      <div className="wrap" style={{ marginTop: 48 }}>
        <img
          src={heroImg}
          alt="Gestora e diretor avaliando a proposta empresarial"
          className="wide-img"
        />
      </div>
    </section>
  );
}

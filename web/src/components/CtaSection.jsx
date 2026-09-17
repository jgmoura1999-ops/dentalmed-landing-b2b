import Card from './ui/Card';
import LeadForm from './ui/LeadForm';

export default function CtaSection() {
  return (
    <section id="proposta" className="section" style={{ background: 'var(--surface-inverse)' }}>
      <div className="wrap grid-cta">
        <div>
          <div className="eyebrow" style={{ color: '#EBF1F7' }}>Solicite sua proposta</div>
          <h2 style={{ fontSize: 46, color: '#fff' }}>Motivos para sorrir na sua empresa</h2>
          <p style={{ fontSize: 18, lineHeight: 1.65, color: 'var(--blue-100)', marginTop: 18, maxWidth: '46ch' }}>
            Diga quantas vidas sua empresa tem e nosso time comercial devolve uma proposta sob medida, com total
            transparência e sem ônus para o grupo.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.6, color: '#fff', marginTop: 24 }}>
            Comercial: (84) 99174-6767 · Ouvidoria: (84) 3133-3596
          </p>
        </div>
        <Card elevation="xl" padding={28}>
          <LeadForm title="Solicitar proposta" description="Quatro campos. Retorno do time comercial." />
        </Card>
      </div>
    </section>
  );
}

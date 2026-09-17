import PlanCard from './ui/PlanCard';
import { featClinico, featMedOrto, featOrto, whatsappLink } from '../data/content';

export default function Plans() {
  return (
    <section id="planos" className="section" style={{ background: 'var(--surface-subtle)' }}>
      <div className="wrap">
        <div className="eyebrow">Planos empresariais</div>
        <h2 style={{ fontSize: 38, maxWidth: '22ch' }}>Escolha a cobertura e receba o valor por vida</h2>
        <p style={{ fontSize: 17, lineHeight: 1.65, marginTop: 16, maxWidth: '60ch' }}>
          O valor final depende do número de vidas e da cobertura escolhida. A proposta é enviada fechada, com
          total transparência e sem ônus para a empresa.
        </p>

        <div className="grid-3" style={{ marginTop: 40, alignItems: 'start' }}>
          <PlanCard
            name="Clínico Empresarial"
            price="R$ 25,00"
            unit="/vida/mês"
            features={featClinico}
            description="A partir de R$ 25,00 por vida. Prevenção, urgência 24h e os 206 procedimentos."
            ctaLabel="Solicitar proposta"
            ctaAs="a"
            ctaHref="#proposta"
          />

          <div style={{ '--plan-inverse-bg': '#003576', display: 'flex', flexDirection: 'column' }}>
            <PlanCard
              featured
              flag="Mais completo"
              name="Med Orto Empresarial"
              price="A definir"
              unit=""
              features={featMedOrto}
              description="Valor por vida sob proposta. Cobertura clínica somada ao tratamento ortodôntico."
              ctaLabel="Solicitar proposta"
              ctaAs="a"
              ctaHref="#proposta"
            />
          </div>

          <PlanCard
            name="Ortodôntico"
            price="A definir"
            unit=""
            features={featOrto}
            description="Valor por vida sob proposta. Aparelho tradicional ou estético, com valores diferenciados."
            ctaLabel="Falar com a gerência"
            ctaAs="a"
            ctaHref={whatsappLink('Olá! Gostaria de falar com a gerência sobre o plano Ortodôntico empresarial.')}
            ctaTarget="_blank"
            ctaRel="noreferrer"
          />
        </div>

        <p style={{ fontSize: 14, color: 'var(--text-muted)', marginTop: 20 }}>
          Ortodôntico Plus: acréscimo de R$ 10,00 na mensalidade, com limpezas periódicas e clareamento ao término
          do tratamento.
        </p>
      </div>
    </section>
  );
}

import Card from './ui/Card';
import Icon from './ui/Icon';
import Button from './ui/Button';
import { dores } from '../data/content';

export default function Challenges() {
  return (
    <section id="desafios" className="section" style={{ background: 'var(--neutral-0)' }}>
      <div className="wrap">
        <div className="eyebrow">O que o RH enfrenta</div>
        <h2 style={{ fontSize: 38, maxWidth: '24ch' }}>
          Cinco situações que um plano odontológico ajuda a resolver
        </h2>

        <div className="grid-3" style={{ marginTop: 40, alignItems: 'stretch' }}>
          {dores.map((item) => (
            <Card key={item.title} padding={28}>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 10,
                  background: 'var(--surface-support-soft)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--teal-600)',
                  marginBottom: 16,
                }}
              >
                <Icon name={item.icon} size={22} />
              </div>
              <h3 style={{ fontSize: 19, margin: '0 0 10px', lineHeight: 1.3 }}>{item.title}</h3>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--text-muted)' }}>{item.text}</p>
            </Card>
          ))}

          <div
            style={{
              background: 'var(--surface-inverse)',
              borderRadius: 16,
              padding: 28,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: 20,
            }}
          >
            <p style={{ fontSize: 19, lineHeight: 1.5, color: '#fff' }}>
              Sua empresa pode ajudar a mudar essa realidade oferecendo um plano odontológico acessível. Valorize
              sua equipe, fortaleça seus benefícios e torne sua empresa mais atrativa.
            </p>
            <Button as="a" href="#proposta" variant="inverse" size="lg" iconRight="arrow-right">
              Solicitar proposta
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

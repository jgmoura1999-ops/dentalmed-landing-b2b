import advantagesImg from '../assets/images/03-beneficio-para-todos.jpg';
import Card from './ui/Card';
import Icon from './ui/Icon';
import { vantagens } from '../data/content';

export default function Advantages() {
  return (
    <section id="vantagens" className="section" style={{ background: 'var(--neutral-0)' }}>
      <div className="wrap">
        <div className="grid-2">
          <div>
            <div className="eyebrow">Vantagens para o colaborador</div>
            <h2 style={{ fontSize: 38, maxWidth: '22ch' }}>Um benefício que a equipe usa e reconhece</h2>
            <p style={{ fontSize: 17, lineHeight: 1.65, marginTop: 18, maxWidth: '52ch' }}>
              Sem cobrança de taxa de adesão. Além da cobertura odontológica, os pacientes Dental Med têm
              descontos exclusivos em redes parceiras.
            </p>
          </div>
          <img
            src={advantagesImg}
            alt="Colaboradores conversando em ambiente de trabalho"
            style={{ width: '100%', aspectRatio: '3/2', objectFit: 'cover', borderRadius: 16, display: 'block' }}
          />
        </div>

        <div className="grid-3" style={{ marginTop: 40 }}>
          {vantagens.map((item) => (
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
              <h3 style={{ fontSize: 19, margin: '0 0 8px' }}>{item.title}</h3>
              <p style={{ fontSize: 15, lineHeight: 1.55, color: 'var(--text-muted)' }}>{item.text}</p>
            </Card>
          ))}
        </div>

        <div
          style={{
            display: 'flex',
            gap: 24,
            flexWrap: 'wrap',
            marginTop: 24,
            background: 'var(--surface-subtle)',
            borderRadius: 16,
            padding: '22px 26px',
            alignItems: 'center',
          }}
        >
          <span style={{ fontSize: 15, color: 'var(--text-strong)' }}>Descontos exclusivos para os pacientes:</span>
          <span style={{ fontSize: 15 }}>Óticas Diniz — 15% em armações, óculos de sol e lentes</span>
          <span style={{ color: 'var(--border-strong)' }}>·</span>
          <span style={{ fontSize: 15 }}>Drogasil — até 40% nas compras</span>
        </div>
      </div>
    </section>
  );
}

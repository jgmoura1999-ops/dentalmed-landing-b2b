import coverageImg from '../assets/images/04-experiencia-clinica.jpg';
import Icon from './ui/Icon';
import { coberturas } from '../data/content';

export default function Coverage() {
  return (
    <section id="cobertura" className="section" style={{ background: 'var(--surface-subtle)' }}>
      <div className="wrap">
        <div className="eyebrow">Cobertura</div>
        <h2 style={{ fontSize: 38, maxWidth: '26ch' }}>
          206 procedimentos, da prevenção ao tratamento de canal
        </h2>

        <div className="grid-coverage" style={{ marginTop: 40 }}>
          <div className="grid-coverage-list">
            {coberturas.map((item) => (
              <div
                key={item.label}
                style={{
                  background: '#fff',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 10,
                  padding: '18px 20px',
                  display: 'flex',
                  gap: 12,
                  alignItems: 'flex-start',
                }}
              >
                <Icon name={item.icon} size={20} />
                <span style={{ fontSize: 15, lineHeight: 1.45 }}>{item.label}</span>
              </div>
            ))}
          </div>
          <div>
            <img
              src={coverageImg}
              alt="Consultora e colaborador em conversa sobre o benefício"
              style={{ width: '100%', aspectRatio: '3/2', objectFit: 'cover', borderRadius: 16, display: 'block' }}
            />
            <p style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--text-muted)', marginTop: 16 }}>
              Urgência e emergência 24 horas, todos os dias, na rede própria e credenciada.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

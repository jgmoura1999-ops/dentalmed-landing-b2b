import Stat from './ui/Stat';

const STATS = [
  { value: '25 anos', label: 'De atuação no RN', icon: 'award' },
  { value: '25.000', label: 'Usuários atendidos', icon: 'users' },
  { value: '100+', label: 'Empresas clientes', icon: 'building-2' },
  { value: '206', label: 'Procedimentos cobertos', icon: 'stethoscope' },
];

export default function StatsBand() {
  return (
    <section style={{ background: 'var(--surface-inverse)', padding: '36px 0' }}>
      <div className="wrap grid-4">
        {STATS.map((s) => (
          <Stat key={s.label} tone="inverse" {...s} />
        ))}
      </div>
    </section>
  );
}

import Icon from './Icon';

export default function Stat({ value, label, icon, tone = 'default' }) {
  const light = tone === 'inverse';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'flex-start' }}>
      {icon && (
        <Icon
          name={icon}
          size={22}
          style={{ color: light ? 'var(--teal-300)' : 'var(--teal-500)', marginBottom: 4 }}
        />
      )}
      <span
        style={{
          fontSize: 'var(--text-4xl)',
          fontWeight: 800,
          letterSpacing: 'var(--tracking-tight)',
          lineHeight: 1,
          color: light ? '#fff' : 'var(--blue-700)',
        }}
      >
        {value}
      </span>
      <span
        style={{
          fontSize: 'var(--text-sm)',
          fontWeight: 'var(--weight-medium)',
          lineHeight: 1.35,
          color: light ? 'rgba(255,255,255,.72)' : 'var(--text-muted)',
        }}
      >
        {label}
      </span>
    </div>
  );
}

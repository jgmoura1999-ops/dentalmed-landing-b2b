import Icon from './Icon';
import Badge from './Badge';
import Button from './Button';

export default function PlanCard({
  name,
  price,
  unit = '/vida/mês',
  description,
  features = [],
  flag,
  featured,
  ctaLabel = 'Solicitar proposta',
  ctaHref,
  ctaAs,
  ctaTarget,
  ctaRel,
}) {
  return (
    <div
      className="dm-plancard"
      data-featured={featured ? 'true' : 'false'}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 18,
        padding: 28,
        background: featured ? 'var(--plan-inverse-bg, var(--surface-inverse))' : 'var(--surface-card)',
        border: featured ? '1px solid var(--blue-700)' : '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-lg)',
        boxShadow: featured ? 'var(--shadow-xl)' : 'var(--shadow-sm)',
        transition: 'transform .2s ease, box-shadow .2s ease',
        height: '100%',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, minHeight: 28 }}>
        <span style={{ fontSize: 'var(--text-lg)', fontWeight: 800, color: featured ? '#fff' : 'var(--text-strong)' }}>
          {name}
        </span>
        {flag && <Badge tone={featured ? 'action' : 'brand'}>{flag}</Badge>}
      </div>

      <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
        <span
          style={{
            fontSize: 'var(--text-4xl)',
            fontWeight: 800,
            letterSpacing: 'var(--tracking-tight)',
            color: featured ? '#fff' : 'var(--blue-700)',
          }}
        >
          {price}
        </span>
        {unit && (
          <span style={{ fontSize: 'var(--text-sm)', color: featured ? 'rgba(255,255,255,.65)' : 'var(--text-muted)' }}>
            {unit}
          </span>
        )}
      </div>

      {description && (
        <p style={{ fontSize: 'var(--text-sm)', color: featured ? 'rgba(255,255,255,.78)' : 'var(--text-muted)' }}>
          {description}
        </p>
      )}

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 10,
          paddingTop: 14,
          borderTop: `1px solid ${featured ? 'rgba(255,255,255,.12)' : 'var(--border-subtle)'}`,
        }}
      >
        {features.map((ft, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 9 }}>
            <Icon name="check" size={16} style={{ color: featured ? 'var(--teal-300)' : 'var(--teal-500)', marginTop: 3 }} />
            <span style={{ fontSize: 'var(--text-sm)', lineHeight: 1.45, color: featured ? 'rgba(255,255,255,.85)' : 'var(--text-body)' }}>
              {ft}
            </span>
          </div>
        ))}
      </div>

      <Button
        as={ctaAs}
        href={ctaHref}
        target={ctaTarget}
        rel={ctaRel}
        variant={featured ? 'inverse' : 'outline'}
        fullWidth
        style={{
          marginTop: 'auto',
          ...(featured
            ? { background: '#fff', color: 'var(--blue-600)', boxShadow: '0 10px 24px rgba(0,26,60,.35)' }
            : null),
        }}
      >
        {ctaLabel}
      </Button>
    </div>
  );
}

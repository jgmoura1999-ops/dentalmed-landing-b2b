const TONES = {
  brand: { background: 'var(--blue-50)', color: 'var(--blue-700)' },
  action: { background: 'var(--coral-100)', color: 'var(--coral-600)' },
};

export default function Badge({ tone = 'brand', children, style, ...rest }) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: '5px 12px',
        fontSize: 'var(--text-xs)',
        fontWeight: 'var(--weight-bold)',
        letterSpacing: 'var(--tracking-caps)',
        textTransform: 'uppercase',
        borderRadius: 'var(--radius-pill)',
        ...(TONES[tone] || TONES.brand),
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}

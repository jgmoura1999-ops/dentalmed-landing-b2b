export default function Tag({ children, style, ...rest }) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        padding: '6px 12px',
        fontSize: 'var(--text-sm)',
        fontWeight: 'var(--weight-medium)',
        color: 'var(--text-body)',
        background: 'var(--neutral-0)',
        border: '1px solid var(--border-default)',
        borderRadius: 'var(--radius-pill)',
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}

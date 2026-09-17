export default function Card({ padding = 28, elevation = 'sm', interactive, style, className = '', children, ...rest }) {
  return (
    <div
      className={`dm-card${interactive ? ' dm-card--interactive' : ''} ${className}`.trim()}
      style={{
        padding,
        borderRadius: 'var(--radius-lg)',
        background: 'var(--surface-card)',
        border: '1px solid var(--border-subtle)',
        boxShadow: `var(--shadow-${elevation})`,
        transition: 'transform .2s ease, box-shadow .2s ease',
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}

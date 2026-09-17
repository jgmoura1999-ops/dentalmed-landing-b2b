import Icon from './Icon';

const SIZES = {
  sm: { padding: '8px 16px', fontSize: 'var(--text-sm)', height: 36, gap: 6, iconSize: 16 },
  md: { padding: '12px 22px', fontSize: 'var(--text-md)', height: 46, gap: 8, iconSize: 18 },
  lg: { padding: '16px 30px', fontSize: 'var(--text-lg)', height: 56, gap: 10, iconSize: 20 },
};

const VARIANTS = {
  primary: {
    background: 'var(--action-primary)',
    color: 'var(--action-primary-text)',
    border: '1px solid transparent',
    boxShadow: 'var(--shadow-cta)',
  },
  outline: {
    background: 'transparent',
    color: 'var(--blue-600)',
    border: '1px solid var(--blue-200)',
    boxShadow: 'none',
  },
  inverse: {
    background: '#fff',
    color: 'var(--blue-700)',
    border: '1px solid transparent',
    boxShadow: 'var(--shadow-sm)',
  },
};

export default function Button({
  as: Tag = 'button',
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  fullWidth,
  disabled,
  children,
  style,
  ...rest
}) {
  const s = SIZES[size] || SIZES.md;
  const base = VARIANTS[variant] || VARIANTS.primary;

  return (
    <Tag
      disabled={Tag === 'button' ? disabled : undefined}
      className="dm-button"
      data-variant={variant}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: s.gap,
        padding: s.padding,
        minHeight: s.height,
        width: fullWidth ? '100%' : undefined,
        fontFamily: 'var(--font-sans)',
        fontSize: s.fontSize,
        fontWeight: 'var(--weight-bold)',
        letterSpacing: 'var(--tracking-snug)',
        lineHeight: 1,
        borderRadius: 'var(--radius-pill)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.45 : 1,
        transition: 'background .15s ease, transform .1s ease, box-shadow .15s ease',
        textDecoration: 'none',
        ...base,
        ...style,
      }}
      {...rest}
    >
      {iconLeft && <Icon name={iconLeft} size={s.iconSize} />}
      {children}
      {iconRight && <Icon name={iconRight} size={s.iconSize} />}
    </Tag>
  );
}

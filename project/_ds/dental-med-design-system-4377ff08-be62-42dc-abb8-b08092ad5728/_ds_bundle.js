/* @ds-bundle: {"format":4,"namespace":"DentalMedDesignSystem_4377ff","components":[{"name":"Accordion","sourcePath":"components/brand/Accordion.jsx"},{"name":"LeadForm","sourcePath":"components/brand/LeadForm.jsx"},{"name":"PlanCard","sourcePath":"components/brand/PlanCard.jsx"},{"name":"Stat","sourcePath":"components/brand/Stat.jsx"},{"name":"StepItem","sourcePath":"components/brand/StepItem.jsx"},{"name":"Testimonial","sourcePath":"components/brand/Testimonial.jsx"},{"name":"Wordmark","sourcePath":"components/brand/Wordmark.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Checkbox","sourcePath":"components/core/Checkbox.jsx"},{"name":"Dialog","sourcePath":"components/core/Dialog.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Radio","sourcePath":"components/core/Radio.jsx"},{"name":"Select","sourcePath":"components/core/Select.jsx"},{"name":"Switch","sourcePath":"components/core/Switch.jsx"},{"name":"Tabs","sourcePath":"components/core/Tabs.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Toast","sourcePath":"components/core/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/core/Tooltip.jsx"}],"sourceHashes":{"components/brand/Accordion.jsx":"4cae4c7a6517","components/brand/LeadForm.jsx":"b5683ab5a1d5","components/brand/PlanCard.jsx":"b5ef51752d66","components/brand/Stat.jsx":"2ab99ffb35ca","components/brand/StepItem.jsx":"11170fad3330","components/brand/Testimonial.jsx":"60606f779b07","components/brand/Wordmark.jsx":"ab643c6d883e","components/core/Badge.jsx":"274f60710a07","components/core/Button.jsx":"cf8c3cc35715","components/core/Card.jsx":"3b5ebcfa5d73","components/core/Checkbox.jsx":"3dc20950d8a2","components/core/Dialog.jsx":"416729ae0a22","components/core/Icon.jsx":"3a128dcfaa8a","components/core/IconButton.jsx":"7feea2be1d5e","components/core/Input.jsx":"becf7ad7cb25","components/core/Radio.jsx":"b992ab31d299","components/core/Select.jsx":"ec9fa56fbf55","components/core/Switch.jsx":"330e6d9227bc","components/core/Tabs.jsx":"3dfd8d374da0","components/core/Tag.jsx":"2a59ebbf9661","components/core/Toast.jsx":"0d44e2dc7e31","components/core/Tooltip.jsx":"b28b77df5760","ui_kits/landing/Sections.jsx":"1e19e010ba12"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DentalMedDesignSystem_4377ff = window.DentalMedDesignSystem_4377ff || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/StepItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function StepItem({
  step,
  title,
  children,
  tone = 'default',
  style,
  ...rest
}) {
  const light = tone === 'inverse';
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      ...style
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 44,
      height: 44,
      borderRadius: 'var(--radius-pill)',
      background: light ? 'rgba(255,255,255,.12)' : 'var(--blue-50)',
      color: light ? '#fff' : 'var(--blue-600)',
      fontFamily: 'var(--font-sans)',
      fontWeight: 800,
      fontSize: 'var(--text-lg)'
    }
  }, step), /*#__PURE__*/React.createElement("h4", {
    style: {
      fontSize: 'var(--text-xl)',
      color: light ? '#fff' : 'var(--text-strong)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-sm)',
      lineHeight: 1.65,
      color: light ? 'rgba(255,255,255,.75)' : 'var(--text-muted)'
    }
  }, children));
}
Object.assign(__ds_scope, { StepItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/StepItem.jsx", error: String((e && e.message) || e) }); }

// components/brand/Testimonial.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Testimonial({
  quote,
  name,
  role,
  company,
  tone = 'default',
  style,
  ...rest
}) {
  const light = tone === 'inverse';
  return /*#__PURE__*/React.createElement("figure", _extends({}, rest, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      margin: 0,
      padding: 28,
      background: light ? 'rgba(255,255,255,.06)' : 'var(--surface-card)',
      border: `1px solid ${light ? 'rgba(255,255,255,.12)' : 'var(--border-subtle)'}`,
      borderRadius: 'var(--radius-lg)',
      boxShadow: light ? 'none' : 'var(--shadow-sm)',
      ...style
    }
  }), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--text-lg)',
      lineHeight: 1.55,
      color: light ? 'rgba(255,255,255,.92)' : 'var(--text-strong)'
    }
  }, "\u201C", quote, "\u201D"), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 40,
      height: 40,
      flex: 'none',
      borderRadius: 'var(--radius-pill)',
      background: light ? 'rgba(255,255,255,.14)' : 'var(--blue-50)',
      color: light ? '#fff' : 'var(--blue-600)',
      fontFamily: 'var(--font-sans)',
      fontWeight: 800,
      fontSize: 'var(--text-sm)'
    }
  }, String(name || '').split(' ').map(w => w[0]).slice(0, 2).join('')), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-bold)',
      color: light ? '#fff' : 'var(--text-strong)'
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: light ? 'rgba(255,255,255,.65)' : 'var(--text-muted)'
    }
  }, role, company ? ` · ${company}` : ''))));
}
Object.assign(__ds_scope, { Testimonial });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Testimonial.jsx", error: String((e && e.message) || e) }); }

// components/brand/Wordmark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Type-only wordmark. Dental Med supplied no logo file, so the brand name is
 * set in Manrope 800 with "dental" in brand blue and "med" in teal.
 */
function Wordmark({
  size = 24,
  tone = 'default',
  tagline = false,
  style,
  ...rest
}) {
  const light = tone === 'inverse';
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      gap: 2,
      ...style
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: size,
      fontWeight: 800,
      letterSpacing: '-0.035em',
      lineHeight: 1,
      color: light ? '#fff' : 'var(--blue-700)'
    }
  }, "dental", /*#__PURE__*/React.createElement("span", {
    style: {
      color: light ? 'var(--teal-300)' : 'var(--teal-500)'
    }
  }, "med")), tagline && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: Math.round(size * 0.42),
      color: light ? 'rgba(255,255,255,.7)' : 'var(--text-muted)',
      lineHeight: 1.2
    }
  }, "Motivos para sorrir."));
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  brand: {
    background: 'var(--blue-50)',
    color: 'var(--blue-700)'
  },
  support: {
    background: 'var(--teal-50)',
    color: 'var(--teal-600)'
  },
  action: {
    background: 'var(--coral-100)',
    color: 'var(--coral-600)'
  },
  neutral: {
    background: 'var(--neutral-100)',
    color: 'var(--neutral-600)'
  },
  inverse: {
    background: 'rgba(255,255,255,.14)',
    color: '#fff'
  }
};
function Badge({
  tone = 'brand',
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: '5px 12px',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-bold)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      borderRadius: 'var(--radius-pill)',
      ...(TONES[tone] || TONES.brand),
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  default: {
    background: 'var(--surface-card)',
    border: '1px solid var(--border-subtle)',
    color: 'var(--text-body)'
  },
  subtle: {
    background: 'var(--surface-subtle)',
    border: '1px solid var(--border-subtle)',
    color: 'var(--text-body)'
  },
  brand: {
    background: 'var(--surface-brand-soft)',
    border: '1px solid var(--border-brand)',
    color: 'var(--text-body)'
  },
  inverse: {
    background: 'var(--surface-inverse)',
    border: '1px solid rgba(255,255,255,.1)',
    color: 'rgba(255,255,255,.82)'
  }
};
function Card({
  tone = 'default',
  elevation = 'sm',
  interactive,
  padding = 28,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest, {
    style: {
      padding,
      borderRadius: 'var(--radius-lg)',
      boxShadow: `var(--shadow-${elevation})`,
      transition: 'transform var(--duration-base) var(--ease-standard), box-shadow var(--duration-base) var(--ease-standard)',
      ...(TONES[tone] || TONES.default),
      ...(interactive && hover ? {
        transform: 'translateY(-3px)',
        boxShadow: 'var(--shadow-lg)'
      } : null),
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CDN = 'https://cdn.jsdelivr.net/npm/lucide-static@0.544.0/icons/';
const cache = {};

/** Lucide (2px stroke) glyph, inlined so it inherits currentColor. */
function Icon({
  name,
  size = 20,
  strokeColor,
  style,
  ...rest
}) {
  const [svg, setSvg] = React.useState(cache[name] || null);
  React.useEffect(() => {
    let alive = true;
    if (cache[name]) {
      setSvg(cache[name]);
      return;
    }
    fetch(`${CDN}${name}.svg`).then(r => r.ok ? r.text() : Promise.reject()).then(t => {
      cache[name] = t;
      if (alive) setSvg(t);
    }).catch(() => {});
    return () => {
      alive = false;
    };
  }, [name]);
  return /*#__PURE__*/React.createElement("span", _extends({
    role: "img",
    "aria-label": name
  }, rest, {
    dangerouslySetInnerHTML: svg ? {
      __html: svg.replace(/width="[^"]*"/, `width="${size}"`).replace(/height="[^"]*"/, `height="${size}"`)
    } : undefined,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      flex: 'none',
      color: strokeColor || 'currentColor',
      ...style
    }
  }));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/brand/Accordion.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Accordion({
  items = [],
  defaultOpen = 0,
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      ...style
    }
  }), items.map((it, i) => {
    const on = open === i;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        background: 'var(--surface-card)',
        border: `1px solid ${on ? 'var(--border-brand)' : 'var(--border-subtle)'}`,
        borderRadius: 'var(--radius-md)',
        boxShadow: on ? 'var(--shadow-sm)' : 'none',
        transition: 'var(--transition-base)'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpen(on ? -1 : i),
      "aria-expanded": on,
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 16,
        width: '100%',
        padding: '18px 20px',
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        textAlign: 'left',
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--text-md)',
        fontWeight: 'var(--weight-bold)',
        color: 'var(--text-strong)'
      }
    }, it.question, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "chevron-down",
      size: 20,
      style: {
        color: 'var(--blue-500)',
        transform: on ? 'rotate(180deg)' : 'none',
        transition: 'transform var(--duration-base) var(--ease-standard)'
      }
    })), on && /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '0 20px 20px',
        fontSize: 'var(--text-sm)',
        lineHeight: 1.65,
        color: 'var(--text-body)'
      }
    }, it.answer));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/brand/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Stat({
  value,
  label,
  icon,
  tone = 'default',
  align = 'left',
  style,
  ...rest
}) {
  const light = tone === 'inverse';
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      alignItems: align === 'center' ? 'center' : 'flex-start',
      textAlign: align,
      ...style
    }
  }), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 22,
    style: {
      color: light ? 'var(--teal-300)' : 'var(--teal-500)',
      marginBottom: 4
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-4xl)',
      fontWeight: 800,
      letterSpacing: 'var(--tracking-tight)',
      lineHeight: 1,
      color: light ? '#fff' : 'var(--blue-700)'
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-medium)',
      lineHeight: 1.35,
      color: light ? 'rgba(255,255,255,.72)' : 'var(--text-muted)'
    }
  }, label));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Stat.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    padding: '8px 16px',
    fontSize: 'var(--text-sm)',
    height: 36,
    gap: 6
  },
  md: {
    padding: '12px 22px',
    fontSize: 'var(--text-md)',
    height: 46,
    gap: 8
  },
  lg: {
    padding: '16px 30px',
    fontSize: 'var(--text-lg)',
    height: 56,
    gap: 10
  }
};
const VARIANTS = {
  primary: {
    background: 'var(--action-primary)',
    color: 'var(--action-primary-text)',
    border: '1px solid transparent',
    boxShadow: 'var(--shadow-cta)'
  },
  secondary: {
    background: 'var(--action-secondary)',
    color: '#fff',
    border: '1px solid transparent',
    boxShadow: 'var(--shadow-sm)'
  },
  outline: {
    background: 'transparent',
    color: 'var(--blue-600)',
    border: '1px solid var(--blue-200)',
    boxShadow: 'none'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--blue-600)',
    border: '1px solid transparent',
    boxShadow: 'none'
  },
  inverse: {
    background: '#fff',
    color: 'var(--blue-700)',
    border: '1px solid transparent',
    boxShadow: 'var(--shadow-sm)'
  }
};
const HOVER = {
  primary: {
    background: 'var(--action-primary-hover)'
  },
  secondary: {
    background: 'var(--action-secondary-hover)'
  },
  outline: {
    background: 'var(--blue-50)',
    borderColor: 'var(--blue-300)'
  },
  ghost: {
    background: 'var(--blue-50)'
  },
  inverse: {
    background: 'var(--blue-50)'
  }
};
function Button({
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
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  return /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false)
  }, rest, {
    style: {
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
      transition: 'background var(--duration-base) var(--ease-standard), transform var(--duration-fast) var(--ease-standard), box-shadow var(--duration-base) var(--ease-standard)',
      opacity: disabled ? 0.45 : 1,
      transform: press && !disabled ? 'translateY(1px) scale(.99)' : 'none',
      ...(VARIANTS[variant] || VARIANTS.primary),
      ...(hover && !disabled ? HOVER[variant] : null),
      ...style
    }
  }), iconLeft && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: size === 'lg' ? 20 : 18
  }), children, iconRight && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: size === 'lg' ? 20 : 18
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/brand/PlanCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function PlanCard({
  name,
  price,
  unit = '/vida/mês',
  description,
  features = [],
  flag,
  featured,
  ctaLabel = 'Solicitar proposta',
  onCta,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18,
      padding: 28,
      background: featured ? 'var(--surface-inverse)' : 'var(--surface-card)',
      border: featured ? '1px solid var(--blue-700)' : '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: featured ? 'var(--shadow-xl)' : hover ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
      transform: hover ? 'translateY(-3px)' : 'none',
      transition: 'transform var(--duration-base) var(--ease-standard), box-shadow var(--duration-base) var(--ease-standard)',
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 12,
      minHeight: 28
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-lg)',
      fontWeight: 800,
      color: featured ? '#fff' : 'var(--text-strong)'
    }
  }, name), flag && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: featured ? 'action' : 'brand'
  }, flag)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-4xl)',
      fontWeight: 800,
      letterSpacing: 'var(--tracking-tight)',
      color: featured ? '#fff' : 'var(--blue-700)'
    }
  }, price), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: featured ? 'rgba(255,255,255,.65)' : 'var(--text-muted)'
    }
  }, unit)), description && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-sm)',
      color: featured ? 'rgba(255,255,255,.78)' : 'var(--text-muted)'
    }
  }, description), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      paddingTop: 4,
      borderTop: `1px solid ${featured ? 'rgba(255,255,255,.12)' : 'var(--border-subtle)'}`
    }
  }, features.map((ft, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 9,
      paddingTop: i === 0 ? 14 : 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 16,
    style: {
      color: featured ? 'var(--teal-300)' : 'var(--teal-500)',
      marginTop: 3
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      lineHeight: 1.45,
      color: featured ? 'rgba(255,255,255,.85)' : 'var(--text-body)'
    }
  }, ft)))), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: featured ? 'primary' : 'outline',
    fullWidth: true,
    onClick: onCta,
    style: {
      marginTop: 'auto'
    }
  }, ctaLabel));
}
Object.assign(__ds_scope, { PlanCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/PlanCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  checked,
  onChange,
  disabled,
  id,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      display: 'inline-flex',
      alignItems: 'flex-start',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    disabled: disabled
  }, rest, {
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 'none',
      width: 20,
      height: 20,
      marginTop: 2,
      borderRadius: 'var(--radius-xs)',
      background: checked ? 'var(--action-secondary)' : 'var(--neutral-0)',
      border: `1px solid ${checked ? 'var(--action-secondary)' : 'var(--border-strong)'}`,
      transition: 'var(--transition-base)',
      color: '#fff'
    }
  }, checked && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 14
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-body)',
      lineHeight: 1.45
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: 32,
  md: 40,
  lg: 48
};
function IconButton({
  icon,
  label,
  variant = 'ghost',
  size = 'md',
  disabled,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const d = SIZES[size] || SIZES.md;
  const base = {
    ghost: {
      background: 'transparent',
      color: 'var(--neutral-600)'
    },
    soft: {
      background: 'var(--blue-50)',
      color: 'var(--blue-600)'
    },
    solid: {
      background: 'var(--action-secondary)',
      color: '#fff'
    }
  }[variant];
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: d,
      height: d,
      border: '1px solid transparent',
      borderRadius: 'var(--radius-pill)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transition: 'var(--transition-base)',
      ...base,
      ...(hover && !disabled ? {
        background: variant === 'solid' ? 'var(--action-secondary-hover)' : 'var(--blue-100)'
      } : null),
      ...style
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size === 'sm' ? 16 : 20
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Dialog.jsx
try { (() => {
function Dialog({
  open = true,
  title,
  description,
  onClose,
  footer,
  width = 480,
  children
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'rgba(11,42,74,.45)',
      backdropFilter: 'blur(3px)',
      padding: 24,
      zIndex: 50
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      maxWidth: width,
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-xl)',
      padding: 28,
      position: 'relative'
    }
  }, onClose && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 16,
      right: 16
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Fechar",
    onClick: onClose
  })), title && /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--text-2xl)',
      marginBottom: description ? 8 : 18,
      paddingRight: 32
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      marginBottom: 20
    }
  }, description), children, footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 12,
      marginTop: 24
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  hint,
  error,
  icon,
  id,
  required,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || `in-${label ? label.replace(/\s+/g, '-').toLowerCase() : 'field'}`;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      width: '100%'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-strong)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--coral-500)'
    }
  }, " *")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '0 14px',
      height: 48,
      background: 'var(--neutral-0)',
      borderRadius: 'var(--radius-md)',
      border: `1px solid ${error ? 'var(--danger)' : focus ? 'var(--blue-400)' : 'var(--border-default)'}`,
      boxShadow: focus ? 'var(--shadow-focus)' : 'none',
      transition: 'var(--transition-base)'
    }
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 18,
    style: {
      color: 'var(--neutral-400)'
    }
  }), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    required: required,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false)
  }, rest, {
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-md)',
      color: 'var(--text-strong)',
      ...style
    }
  }))), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: error ? 'var(--danger)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Radio({
  label,
  checked,
  onChange,
  name,
  value,
  disabled,
  id,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    onChange: onChange,
    disabled: disabled
  }, rest, {
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 'none',
      width: 20,
      height: 20,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--neutral-0)',
      border: `1px solid ${checked ? 'var(--action-secondary)' : 'var(--border-strong)'}`,
      transition: 'var(--transition-base)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: 'var(--radius-pill)',
      background: checked ? 'var(--action-secondary)' : 'transparent',
      transition: 'var(--transition-base)'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-body)'
    }
  }, label));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Radio.jsx", error: String((e && e.message) || e) }); }

// components/core/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  options = [],
  hint,
  required,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      width: '100%'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-strong)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--coral-500)'
    }
  }, " *")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false)
  }, rest, {
    style: {
      appearance: 'none',
      width: '100%',
      height: 48,
      padding: '0 42px 0 14px',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-md)',
      color: 'var(--text-strong)',
      background: 'var(--neutral-0)',
      borderRadius: 'var(--radius-md)',
      border: `1px solid ${focus ? 'var(--blue-400)' : 'var(--border-default)'}`,
      boxShadow: focus ? 'var(--shadow-focus)' : 'none',
      outline: 'none',
      transition: 'var(--transition-base)',
      ...style
    }
  }), options.map(o => {
    const value = typeof o === 'string' ? o : o.value;
    const text = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: value,
      value: value
    }, text);
  })), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 18,
    style: {
      position: 'absolute',
      right: 14,
      color: 'var(--neutral-400)',
      pointerEvents: 'none'
    }
  })), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Select.jsx", error: String((e && e.message) || e) }); }

// components/core/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  checked,
  onChange,
  label,
  disabled,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch",
    checked: checked,
    onChange: onChange,
    disabled: disabled
  }, rest, {
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: 44,
      height: 26,
      flex: 'none',
      borderRadius: 'var(--radius-pill)',
      background: checked ? 'var(--teal-500)' : 'var(--neutral-300)',
      transition: 'var(--transition-base)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      left: checked ? 21 : 3,
      width: 20,
      height: 20,
      borderRadius: 'var(--radius-pill)',
      background: '#fff',
      boxShadow: 'var(--shadow-sm)',
      transition: 'left var(--duration-base) var(--ease-standard)'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-body)'
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Switch.jsx", error: String((e && e.message) || e) }); }

// components/core/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tabs({
  items = [],
  value,
  onChange,
  style,
  ...rest
}) {
  const active = value ?? (items[0] && (items[0].value ?? items[0]));
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist"
  }, rest, {
    style: {
      display: 'inline-flex',
      gap: 4,
      padding: 4,
      background: 'var(--neutral-50)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-pill)',
      ...style
    }
  }), items.map(it => {
    const v = it.value ?? it;
    const label = it.label ?? it;
    const on = v === active;
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      role: "tab",
      "aria-selected": on,
      onClick: () => onChange && onChange(v),
      style: {
        padding: '9px 20px',
        border: 'none',
        cursor: 'pointer',
        borderRadius: 'var(--radius-pill)',
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--text-sm)',
        fontWeight: 'var(--weight-bold)',
        background: on ? 'var(--neutral-0)' : 'transparent',
        color: on ? 'var(--blue-700)' : 'var(--text-muted)',
        boxShadow: on ? 'var(--shadow-sm)' : 'none',
        transition: 'var(--transition-base)'
      }
    }, label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  icon,
  children,
  onRemove,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '6px 12px',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--text-body)',
      background: 'var(--neutral-0)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-pill)',
      ...style
    }
  }), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 14,
    style: {
      color: 'var(--teal-500)'
    }
  }), children, onRemove && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 14,
    onClick: onRemove,
    style: {
      cursor: 'pointer',
      color: 'var(--neutral-400)'
    }
  }));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/core/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  success: {
    icon: 'check-circle-2',
    color: 'var(--teal-600)',
    background: 'var(--teal-50)',
    border: 'var(--teal-200)'
  },
  info: {
    icon: 'info',
    color: 'var(--blue-600)',
    background: 'var(--blue-50)',
    border: 'var(--blue-200)'
  },
  warning: {
    icon: 'triangle-alert',
    color: '#8A6A12',
    background: 'var(--warning-bg)',
    border: '#F0DFAE'
  },
  error: {
    icon: 'circle-alert',
    color: 'var(--danger)',
    background: 'var(--danger-bg)',
    border: '#F5C9C6'
  }
};
function Toast({
  tone = 'success',
  title,
  message,
  onClose,
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.success;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status"
  }, rest, {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 12,
      padding: '14px 16px',
      maxWidth: 420,
      background: t.background,
      border: `1px solid ${t.border}`,
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-md)',
      ...style
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: t.icon,
    size: 20,
    style: {
      color: t.color,
      marginTop: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-bold)',
      color: 'var(--text-strong)'
    }
  }, title), message && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-body)'
    }
  }, message)), onClose && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 16,
    onClick: onClose,
    style: {
      cursor: 'pointer',
      color: 'var(--neutral-400)'
    }
  }));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Toast.jsx", error: String((e && e.message) || e) }); }

// components/brand/LeadForm.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const FIELDS = [{
  key: 'nome',
  label: 'Nome',
  icon: 'user',
  type: 'text',
  placeholder: 'Seu nome completo'
}, {
  key: 'cargo',
  label: 'Cargo',
  icon: 'briefcase',
  type: 'text',
  placeholder: 'Ex.: Gerente de RH'
}, {
  key: 'telefone',
  label: 'Telefone',
  icon: 'phone',
  type: 'tel',
  placeholder: '(84) 90000-0000'
}, {
  key: 'email',
  label: 'E-mail corporativo',
  icon: 'mail',
  type: 'email',
  placeholder: 'voce@empresa.com.br'
}];
function LeadForm({
  title = 'Solicitar proposta',
  description,
  submitLabel = 'Solicitar proposta',
  tone = 'default',
  onSubmit,
  style,
  ...rest
}) {
  const [values, setValues] = React.useState({
    nome: '',
    cargo: '',
    telefone: '',
    email: ''
  });
  const [consent, setConsent] = React.useState(false);
  const [sent, setSent] = React.useState(false);
  const light = tone === 'inverse';
  const set = k => e => setValues(v => ({
    ...v,
    [k]: e.target.value
  }));
  const submit = e => {
    e.preventDefault();
    setSent(true);
    onSubmit && onSubmit(values);
  };
  return /*#__PURE__*/React.createElement("form", _extends({
    onSubmit: submit
  }, rest, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      padding: 28,
      background: light ? 'rgba(255,255,255,.07)' : 'var(--surface-card)',
      border: `1px solid ${light ? 'rgba(255,255,255,.14)' : 'var(--border-subtle)'}`,
      borderRadius: 'var(--radius-lg)',
      boxShadow: light ? 'none' : 'var(--shadow-lg)',
      ...style
    }
  }), title && /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--text-2xl)',
      color: light ? '#fff' : 'var(--text-strong)'
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-sm)',
      marginTop: -8,
      color: light ? 'rgba(255,255,255,.72)' : 'var(--text-muted)'
    }
  }, description), sent ? /*#__PURE__*/React.createElement(__ds_scope.Toast, {
    tone: "success",
    title: "Recebemos sua solicita\xE7\xE3o",
    message: "Um consultor entra em contato em at\xE9 1 dia \xFAtil.",
    style: {
      maxWidth: 'none'
    }
  }) : /*#__PURE__*/React.createElement(React.Fragment, null, FIELDS.map(fd => /*#__PURE__*/React.createElement(__ds_scope.Input, {
    key: fd.key,
    label: fd.label,
    icon: fd.icon,
    type: fd.type,
    placeholder: fd.placeholder,
    value: values[fd.key],
    onChange: set(fd.key),
    required: true
  })), /*#__PURE__*/React.createElement(__ds_scope.Checkbox, {
    id: "lead-consent",
    checked: consent,
    onChange: e => setConsent(e.target.checked),
    label: "Autorizo a Dental Med a entrar em contato sobre planos empresariais."
  }), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    type: "submit",
    variant: "primary",
    size: "lg",
    fullWidth: true,
    iconRight: "arrow-right"
  }, submitLabel), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      fontSize: 'var(--text-xs)',
      color: light ? 'rgba(255,255,255,.6)' : 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "lock",
    size: 13
  }), " Seus dados ficam s\xF3 com a Dental Med. Sem spam.")));
}
Object.assign(__ds_scope, { LeadForm });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/LeadForm.jsx", error: String((e && e.message) || e) }); }

// components/core/Tooltip.jsx
try { (() => {
function Tooltip({
  content,
  placement = 'top',
  children
}) {
  const [show, setShow] = React.useState(false);
  const pos = placement === 'bottom' ? {
    top: 'calc(100% + 8px)',
    left: '50%',
    transform: 'translateX(-50%)'
  } : {
    bottom: 'calc(100% + 8px)',
    left: '50%',
    transform: 'translateX(-50%)'
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex'
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false)
  }, children, show && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      ...pos,
      whiteSpace: 'nowrap',
      zIndex: 20,
      padding: '7px 11px',
      background: 'var(--blue-800)',
      color: '#fff',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-medium)',
      borderRadius: 'var(--radius-sm)',
      boxShadow: 'var(--shadow-md)'
    }
  }, content));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tooltip.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Sections.jsx
try { (() => {
const {
  Button,
  Icon,
  Card,
  Badge,
  Tag,
  Wordmark,
  Stat,
  PlanCard,
  StepItem,
  Testimonial,
  Accordion,
  LeadForm,
  Toast
} = window.DentalMedDesignSystem_4377ff;
const wrap = {
  maxWidth: 'var(--container-max)',
  margin: '0 auto',
  padding: '0 24px'
};
const eyebrow = {
  fontSize: 'var(--eyebrow-size)',
  letterSpacing: 'var(--eyebrow-tracking)',
  fontWeight: 800,
  textTransform: 'uppercase',
  color: 'var(--brand)',
  marginBottom: 12
};
function Header({
  onCta
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      background: 'rgba(255,255,255,.92)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 76,
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    size: 24
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 28,
      fontSize: 15,
      fontWeight: 600,
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#beneficios",
    style: {
      color: 'inherit'
    }
  }, "Benef\xEDcios"), /*#__PURE__*/React.createElement("a", {
    href: "#planos",
    style: {
      color: 'inherit'
    }
  }, "Planos"), /*#__PURE__*/React.createElement("a", {
    href: "#como-funciona",
    style: {
      color: 'inherit'
    }
  }, "Como funciona"), /*#__PURE__*/React.createElement("a", {
    href: "#faq",
    style: {
      color: 'inherit'
    }
  }, "D\xFAvidas")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    iconLeft: "phone",
    size: "sm"
  }, "(84) 3000-0000"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    onClick: onCta
  }, "Solicitar proposta"))));
}
function Hero({
  onCta,
  onSpecialist
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'linear-gradient(180deg,var(--blue-50) 0%,var(--neutral-0) 100%)',
      paddingTop: 72,
      paddingBottom: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.05fr) minmax(0,.95fr)',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: eyebrow
  }, "Plano odontol\xF3gico empresarial"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--text-6xl)',
      fontWeight: 800,
      lineHeight: 'var(--leading-tight)',
      letterSpacing: 'var(--tracking-tight)'
    }
  }, "Menos faltas na equipe.", /*#__PURE__*/React.createElement("br", null), "Mais motivos para sorrir."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-lg)',
      marginTop: 20,
      maxWidth: '52ch'
    }
  }, "Cobertura odontol\xF3gica completa para seus colaboradores, com rede credenciada ampla, gest\xE3o pelo portal do RH e o melhor custo por vida do Rio Grande do Norte."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginTop: 32,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    iconRight: "arrow-right",
    onClick: onCta
  }, "Solicitar proposta"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg",
    iconLeft: "headset",
    onClick: onSpecialist
  }, "Falar com um especialista")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 24,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    icon: "check"
  }, "Sem car\xEAncia para urg\xEAncia"), /*#__PURE__*/React.createElement(Tag, {
    icon: "check"
  }, "A partir de 2 vidas"), /*#__PURE__*/React.createElement(Tag, {
    icon: "check"
  }, "Implanta\xE7\xE3o em 5 dias"))), /*#__PURE__*/React.createElement(Card, {
    elevation: "xl",
    padding: 28
  }, /*#__PURE__*/React.createElement(LeadForm, {
    title: "Receba uma proposta sob medida",
    description: "Preencha em 30 segundos. Um consultor responde em at\xE9 1 dia \xFAtil."
  }))));
}
function ProofBar() {
  const logos = ['Grupo Potiguar', 'Construtora Dunas', 'Rede Sal', 'Têxtil Natal', 'Log Nordeste'];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-inverse)',
      padding: '36px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,minmax(0,1fr))',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    tone: "inverse",
    value: "50.000+",
    label: "Vidas sob cuidado",
    icon: "users"
  }), /*#__PURE__*/React.createElement(Stat, {
    tone: "inverse",
    value: "1.200",
    label: "Dentistas na rede credenciada",
    icon: "stethoscope"
  }), /*#__PURE__*/React.createElement(Stat, {
    tone: "inverse",
    value: "18 anos",
    label: "De mercado no RN",
    icon: "award"
  }), /*#__PURE__*/React.createElement(Stat, {
    tone: "inverse",
    value: "4,8/5",
    label: "Satisfa\xE7\xE3o dos benefici\xE1rios",
    icon: "star"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 36,
      alignItems: 'center',
      flexWrap: 'wrap',
      marginTop: 32,
      paddingTop: 24,
      borderTop: '1px solid rgba(255,255,255,.14)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      fontWeight: 700,
      color: 'var(--blue-200)'
    }
  }, "Empresas que confiam"), logos.map(l => /*#__PURE__*/React.createElement("span", {
    key: l,
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 17,
      color: 'rgba(255,255,255,.72)'
    }
  }, l)))));
}
function Benefits() {
  const items = [['trending-down', 'Menos absenteísmo', 'Dor de dente é uma das principais causas de falta não planejada. Atendimento rápido devolve a equipe ao trabalho.'], ['heart-handshake', 'Retenção de talentos', 'Benefício odontológico é o segundo mais desejado depois do plano de saúde — e o de melhor relação custo/percepção.'], ['layout-dashboard', 'Gestão simples', 'Portal do RH para incluir, excluir e acompanhar uso. Faturamento único, sem planilha paralela.'], ['shield-check', 'Cobertura ampla', 'Consultas, urgência 24h, prevenção, restaurações, próteses e ortodontia opcional.'], ['file-check', 'Sem burocracia', 'Contrato digital, sem taxa de implantação e sem exigência de tempo mínimo de casa.'], ['map-pin', 'Rede perto de todos', 'Clínica própria e credenciados em Natal, interior e principais capitais.']];
  return /*#__PURE__*/React.createElement("section", {
    id: "beneficios",
    style: {
      padding: 'var(--section-y) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement("div", {
    style: eyebrow
  }, "Para quem decide"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-4xl)',
      maxWidth: '22ch'
    }
  }, "O que o RH ganha ao levar a Dental Med"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
      gap: 24,
      marginTop: 40
    }
  }, items.map(([icon, t, d]) => /*#__PURE__*/React.createElement(Card, {
    key: t,
    elevation: "sm",
    interactive: true,
    padding: 26
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: 44,
      height: 44,
      borderRadius: 'var(--radius-md)',
      background: 'var(--surface-support-soft)',
      color: 'var(--teal-600)',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 22
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--text-xl)',
      marginTop: 18
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 8,
      fontSize: 15
    }
  }, d))))));
}
function Plans({
  onCta
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "planos",
    style: {
      background: 'var(--surface-subtle)',
      padding: 'var(--section-y) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 24,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: eyebrow
  }, "Planos empresariais"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-4xl)',
      maxWidth: '20ch'
    }
  }, "Custo por vida que cabe no or\xE7amento")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      color: 'var(--text-muted)',
      maxWidth: '34ch'
    }
  }, "Valores de refer\xEAncia para empresas privadas. Acima de 100 vidas, a condi\xE7\xE3o \xE9 negociada caso a caso.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
      gap: 24,
      marginTop: 40,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(PlanCard, {
    name: "Empresarial 2 a 29 vidas",
    price: "R$ 26,90",
    description: "Entrada para equipes enxutas, com cobertura cl\xEDnica completa.",
    features: ['Consultas e urgência 24h', 'Prevenção, limpeza e restaurações', 'Raio-X e cirurgias simples', 'Portal do RH incluso'],
    ctaLabel: "Solicitar proposta",
    onCta: onCta
  }), /*#__PURE__*/React.createElement(PlanCard, {
    featured: true,
    flag: "Mais escolhido",
    name: "Empresarial 30 a 99 vidas",
    price: "R$ 23,90",
    description: "A faixa com melhor equil\xEDbrio entre custo e cobertura.",
    features: ['Tudo da faixa anterior', 'Próteses e endodontia', 'Gestor de conta dedicado', 'Relatório de utilização trimestral'],
    ctaLabel: "Solicitar proposta",
    onCta: onCta
  }), /*#__PURE__*/React.createElement(PlanCard, {
    name: "Mais de 100 vidas",
    price: "R$ 21,90",
    description: "Condi\xE7\xF5es sob medida, com implanta\xE7\xE3o assistida.",
    features: ['Tudo das faixas anteriores', 'Ortodontia opcional por adesão', 'Ações de prevenção na empresa', 'SLA de atendimento contratual'],
    ctaLabel: "Falar com a ger\xEAncia",
    onCta: onCta
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 24,
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, "Valores por vida/m\xEAs, faturamento \xFAnico para a empresa. Planos ortod\xF4nticos e ortod\xF4ntico est\xE9tico dispon\xEDveis como ades\xE3o individual do colaborador.")));
}
function Steps({
  onCta
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "como-funciona",
    style: {
      padding: 'var(--section-y) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement("div", {
    style: eyebrow
  }, "Como funciona"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-4xl)'
    }
  }, "Da cota\xE7\xE3o ao primeiro atendimento em 3 passos"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
      gap: 32,
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement(StepItem, {
    step: "1",
    title: "Cota\xE7\xE3o em 1 dia \xFAtil"
  }, "Voc\xEA informa o n\xFAmero de vidas e o perfil da equipe. Devolvemos a proposta com valor fechado por vida."), /*#__PURE__*/React.createElement(StepItem, {
    step: "2",
    title: "Contrato digital"
  }, "Assinatura eletr\xF4nica e envio da base de colaboradores em planilha. Sem taxa de implanta\xE7\xE3o."), /*#__PURE__*/React.createElement(StepItem, {
    step: "3",
    title: "Carteirinhas em 5 dias"
  }, "Ativa\xE7\xE3o em at\xE9 5 dias \xFAteis, com acesso ao portal do RH e rede credenciada liberada.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    iconRight: "arrow-right",
    onClick: onCta
  }, "Quero come\xE7ar a cota\xE7\xE3o"))));
}
function Voices() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-brand-soft)',
      padding: 'var(--section-y-compact) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement("div", {
    style: eyebrow
  }, "Quem j\xE1 implantou"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-3xl)'
    }
  }, "Gestores de RH falando do dia a dia"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
      gap: 24,
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(Testimonial, {
    quote: "As faltas por dor de dente sumiram da planilha. Em tr\xEAs meses o benef\xEDcio se pagou.",
    name: "Renata Alves",
    role: "Coordenadora de RH",
    company: "Grupo Potiguar \xB7 340 vidas"
  }), /*#__PURE__*/React.createElement(Testimonial, {
    quote: "Inclus\xE3o de dependente leva dois minutos no portal. Antes era uma troca de e-mails por semana.",
    name: "Marcos Beltr\xE3o",
    role: "Gerente de Pessoas",
    company: "Construtora Dunas \xB7 120 vidas"
  }), /*#__PURE__*/React.createElement(Testimonial, {
    quote: "A ades\xE3o passou de 80% no primeiro m\xEAs, coisa que nenhum outro benef\xEDcio conseguiu aqui.",
    name: "Patr\xEDcia Souza",
    role: "Diretora Administrativa",
    company: "Rede Sal \xB7 76 vidas"
  }))));
}
function Faq() {
  return /*#__PURE__*/React.createElement("section", {
    id: "faq",
    style: {
      padding: 'var(--section-y) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: 'grid',
      gridTemplateColumns: 'minmax(0,.8fr) minmax(0,1.2fr)',
      gap: 56,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: eyebrow
  }, "D\xFAvidas frequentes"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-4xl)'
    }
  }, "Antes de decidir"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 16
    }
  }, "N\xE3o achou sua d\xFAvida? Um consultor responde por telefone ou WhatsApp no mesmo dia.")), /*#__PURE__*/React.createElement(Accordion, {
    items: [{
      question: 'Existe carência?',
      answer: 'Consultas, urgência e emergência não têm carência. Procedimentos como próteses e ortodontia seguem os prazos do contrato, informados na proposta.'
    }, {
      question: 'Qual é o custo por vida?',
      answer: 'A partir de R$ 21,90 por vida/mês, conforme a faixa de vidas e o escopo de cobertura escolhido. A proposta traz o valor fechado, sem custos de implantação.'
    }, {
      question: 'Qual a adesão mínima?',
      answer: 'Empresas privadas contratam a partir de 2 vidas. Acima de 30 vidas há a modalidade compulsória, com valor por vida menor.'
    }, {
      question: 'Quanto tempo leva a implantação?',
      answer: 'Até 5 dias úteis entre a assinatura digital e a liberação das carteirinhas, incluindo o acesso do RH ao portal.'
    }, {
      question: 'A empresa precisa custear 100% do plano?',
      answer: 'Não. O plano pode ser integralmente custeado, coparticipado ou descontado em folha — a escolha é da empresa e é configurada no contrato.'
    }]
  })));
}
function FinalCta() {
  return /*#__PURE__*/React.createElement("section", {
    id: "proposta",
    style: {
      background: 'var(--surface-inverse)',
      padding: 'var(--section-y) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,.85fr)',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      ...eyebrow,
      color: 'var(--teal-300)'
    }
  }, "Solicite sua proposta"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-5xl)',
      color: '#fff',
      letterSpacing: 'var(--tracking-tight)'
    }
  }, "Leve o benef\xEDcio que a equipe usa todo m\xEAs"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-lg)',
      color: 'var(--blue-100)',
      marginTop: 18,
      maxWidth: '46ch'
    }
  }, "Diga quantas vidas sua empresa tem e devolvemos uma proposta fechada em 1 dia \xFAtil \u2014 sem compromisso."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 28,
      marginTop: 32,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    tone: "inverse",
    value: "1 dia",
    label: "Para receber a proposta",
    icon: "clock"
  }), /*#__PURE__*/React.createElement(Stat, {
    tone: "inverse",
    value: "R$ 0",
    label: "Taxa de implanta\xE7\xE3o",
    icon: "badge-percent"
  }))), /*#__PURE__*/React.createElement(Card, {
    elevation: "xl",
    padding: 28
  }, /*#__PURE__*/React.createElement(LeadForm, {
    title: "Solicitar proposta",
    description: "Quatro campos. Resposta em at\xE9 1 dia \xFAtil."
  }))));
}
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--blue-900)',
      color: 'var(--blue-200)',
      padding: '40px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: 'flex',
      justifyContent: 'space-between',
      gap: 24,
      flexWrap: 'wrap',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    size: 22,
    tone: "inverse",
    tagline: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      lineHeight: 1.9
    }
  }, "Av. Exemplo, 000 \u2014 Natal/RN", /*#__PURE__*/React.createElement("br", null), "(84) 3000-0000 \xB7 comercial@dentalmed.com.br"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13
    }
  }, "ANS n\xBA 00000-0 \xB7 \xA9 2026 Dental Med")));
}
Object.assign(window, {
  Header,
  Hero,
  ProofBar,
  Benefits,
  Plans,
  Steps,
  Voices,
  Faq,
  FinalCta,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Sections.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.LeadForm = __ds_scope.LeadForm;

__ds_ns.PlanCard = __ds_scope.PlanCard;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.StepItem = __ds_scope.StepItem;

__ds_ns.Testimonial = __ds_scope.Testimonial;

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

})();

import { useId, useState } from 'react';
import Icon from './Icon';

export default function Input({ label, icon, id, required, ...rest }) {
  const [focus, setFocus] = useState(false);
  const autoId = useId();
  const inputId = id || autoId;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, width: '100%' }}>
      {label && (
        <label htmlFor={inputId} style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-semibold)', color: 'var(--text-strong)' }}>
          {label}
          {required && <span style={{ color: 'var(--coral-500)' }}> *</span>}
        </label>
      )}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          padding: '0 14px',
          height: 48,
          background: 'var(--neutral-0)',
          borderRadius: 'var(--radius-md)',
          border: `1px solid ${focus ? 'var(--blue-400)' : 'var(--border-default)'}`,
          boxShadow: focus ? 'var(--shadow-focus)' : 'none',
          transition: 'border-color .15s ease, box-shadow .15s ease',
        }}
      >
        {icon && <Icon name={icon} size={18} style={{ color: 'var(--neutral-400)' }} />}
        <input
          id={inputId}
          required={required}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={{
            flex: 1,
            width: '100%',
            border: 'none',
            outline: 'none',
            background: 'transparent',
            fontFamily: 'var(--font-sans)',
            fontSize: 'var(--text-md)',
            color: 'var(--text-strong)',
          }}
          {...rest}
        />
      </div>
    </div>
  );
}

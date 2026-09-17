import { useId, useState } from 'react';
import Icon from './Icon';
import Input from './Input';
import Button from './Button';

const FIELDS = [
  { key: 'nome', label: 'Nome', icon: 'user', type: 'text', placeholder: 'Seu nome completo' },
  { key: 'cargo', label: 'Cargo', icon: 'briefcase', type: 'text', placeholder: 'Ex.: Gerente de RH' },
  { key: 'telefone', label: 'Telefone', icon: 'phone', type: 'tel', placeholder: '(84) 90000-0000' },
  { key: 'email', label: 'E-mail corporativo', icon: 'mail', type: 'email', placeholder: 'voce@empresa.com.br' },
];

export default function LeadForm({ title = 'Solicitar proposta', description, submitLabel = 'Solicitar proposta', tone = 'default' }) {
  const [values, setValues] = useState({ nome: '', cargo: '', telefone: '', email: '' });
  const [consent, setConsent] = useState(false);
  const [sent, setSent] = useState(false);
  const consentId = useId();
  const light = tone === 'inverse';

  const set = (key) => (e) => setValues((v) => ({ ...v, [key]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    // TODO: plugar num endpoint/CRM real. Por enquanto o lead fica só
    // registrado no console para validação local do formulário.
    console.info('[LeadForm] Nova solicitação de proposta:', values);
    setSent(true);
  };

  return (
    <form
      onSubmit={submit}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        padding: 28,
        background: light ? 'rgba(255,255,255,.07)' : 'var(--surface-card)',
        border: `1px solid ${light ? 'rgba(255,255,255,.14)' : 'var(--border-subtle)'}`,
        borderRadius: 'var(--radius-lg)',
        boxShadow: light ? 'none' : 'var(--shadow-lg)',
      }}
    >
      {title && <h3 style={{ fontSize: 'var(--text-2xl)', color: light ? '#fff' : 'var(--text-strong)' }}>{title}</h3>}
      {description && (
        <p style={{ fontSize: 'var(--text-sm)', marginTop: -8, color: light ? 'rgba(255,255,255,.72)' : 'var(--text-muted)' }}>
          {description}
        </p>
      )}

      {sent ? (
        <div
          style={{
            padding: '18px 20px',
            borderRadius: 'var(--radius-md)',
            background: 'var(--teal-50)',
            border: '1px solid var(--teal-200)',
            color: 'var(--teal-700)',
          }}
        >
          <strong style={{ display: 'block', marginBottom: 4 }}>Recebemos sua solicitação</strong>
          <span style={{ fontSize: 'var(--text-sm)' }}>Um consultor entra em contato em até 1 dia útil.</span>
        </div>
      ) : (
        <>
          {FIELDS.map((fd) => (
            <Input
              key={fd.key}
              label={fd.label}
              icon={fd.icon}
              type={fd.type}
              placeholder={fd.placeholder}
              value={values[fd.key]}
              onChange={set(fd.key)}
              required
            />
          ))}

          <label htmlFor={consentId} style={{ display: 'inline-flex', alignItems: 'flex-start', gap: 10, cursor: 'pointer' }}>
            <input
              id={consentId}
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              required
              style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }}
            />
            <span
              aria-hidden="true"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                flex: 'none',
                width: 20,
                height: 20,
                marginTop: 2,
                borderRadius: 'var(--radius-xs)',
                background: consent ? 'var(--blue-600)' : 'var(--neutral-0)',
                border: `1px solid ${consent ? 'var(--blue-600)' : 'var(--border-strong)'}`,
                color: '#fff',
              }}
            >
              {consent && <Icon name="check" size={14} />}
            </span>
            <span style={{ fontSize: 'var(--text-sm)', color: light ? 'rgba(255,255,255,.85)' : 'var(--text-body)', lineHeight: 1.45 }}>
              Autorizo a Dental Med a entrar em contato sobre planos empresariais.
            </span>
          </label>

          <Button type="submit" variant="primary" size="lg" fullWidth iconRight="arrow-right">
            {submitLabel}
          </Button>

          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 7,
              fontSize: 'var(--text-xs)',
              color: light ? 'rgba(255,255,255,.6)' : 'var(--text-muted)',
            }}
          >
            <Icon name="lock" size={13} /> Seus dados ficam só com a Dental Med. Sem spam.
          </span>
        </>
      )}
    </form>
  );
}

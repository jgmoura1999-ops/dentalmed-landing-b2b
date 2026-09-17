import logo from '../assets/images/logo-dentalmed.png';

export default function Footer() {
  return (
    <footer style={{ background: 'var(--neutral-0)', padding: '36px 0', borderTop: '1px solid var(--border-subtle)' }}>
      <div className="wrap" style={{ display: 'flex', gap: 24, flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
        <img src={logo} alt="Dental Med" style={{ height: 32, width: 'auto', display: 'block' }} />
        <p style={{ fontSize: 14, color: 'var(--text-muted)' }}>
          Dental Med Center · Registro ANS nº 41.394-1 · ouvidoria@dentalmedcenter.com.br
        </p>
      </div>
    </footer>
  );
}

import logo from '../assets/images/logo-dentalmed.png';
import Button from './ui/Button';

export default function Header() {
  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 20,
        background: 'rgba(255,255,255,.92)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid var(--border-subtle)',
      }}
    >
      <div className="wrap header-bar">
        <img src={logo} alt="Dental Med — Planos Odontológicos" className="header-logo" />
        <nav>
          <a href="#cobertura" style={{ color: 'var(--text-body)' }}>Cobertura</a>
          <a href="#planos" style={{ color: 'var(--text-body)' }}>Planos</a>
          <a href="#rede" style={{ color: 'var(--text-body)' }}>Rede</a>
          <a href="#proposta" style={{ color: 'var(--text-body)' }}>Proposta</a>
        </nav>
        <Button as="a" href="#proposta" variant="primary" size="sm">Solicitar proposta</Button>
      </div>
    </header>
  );
}

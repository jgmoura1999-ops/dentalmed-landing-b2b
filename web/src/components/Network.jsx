import networkImg from '../assets/images/05-decisao-com-seguranca.jpg';
import Card from './ui/Card';
import { unidades, cidadesCredenciadas } from '../data/content';

export default function Network() {
  return (
    <section id="rede" className="section" style={{ background: 'var(--neutral-0)' }}>
      <div className="wrap">
        <div className="eyebrow">Rede de atendimento</div>
        <h2 style={{ fontSize: 38, maxWidth: '24ch' }}>
          Quatro clínicas próprias e rede credenciada em 23 cidades
        </h2>

        <div className="grid-4" style={{ marginTop: 40 }}>
          {unidades.map((u) => (
            <Card key={u.cidade} padding={28}>
              <h3 style={{ fontSize: 20, margin: '0 0 10px' }}>{u.cidade}</h3>
              <p style={{ fontSize: 15, lineHeight: 1.55, color: 'var(--text-muted)', margin: '0 0 10px' }}>
                {u.endereco}
              </p>
              <p style={{ fontSize: 15, color: 'var(--brand)', margin: 0 }}>{u.fone}</p>
            </Card>
          ))}
        </div>

        <div className="grid-2" style={{ marginTop: 48 }}>
          <div>
            <h3 style={{ fontSize: 26, margin: '0 0 14px' }}>Unidade móvel</h3>
            <p style={{ fontSize: 17, lineHeight: 1.65, maxWidth: '52ch' }}>
              Além das clínicas próprias e da rede credenciada, a Dental Med dispõe de uma clínica totalmente
              móvel, que leva o atendimento até a sua empresa com comodidade e segurança.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--text-muted)', marginTop: 18 }}>
              Cidades credenciadas: {cidadesCredenciadas}.
            </p>
          </div>
          <img
            src={networkImg}
            alt="Gestora de RH sorrindo em seu escritório"
            style={{ width: '100%', aspectRatio: '16/10', objectFit: 'cover', borderRadius: 16, display: 'block' }}
          />
        </div>
      </div>
    </section>
  );
}

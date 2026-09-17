import aboutImg from '../assets/images/02-empresa-que-cuida.jpg';
import Tag from './ui/Tag';

export default function AboutUs() {
  return (
    <section id="quem-somos" className="section" style={{ background: 'var(--neutral-0)' }}>
      <div className="wrap grid-about">
        <img
          src={aboutImg}
          alt="Dentista em atendimento na clínica própria Dental Med"
          style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', borderRadius: 16, display: 'block' }}
        />
        <div>
          <div className="eyebrow">Quem somos</div>
          <h2 style={{ fontSize: 38, maxWidth: '24ch' }}>
            Assistência odontológica genuinamente potiguar desde 2000
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.65, marginTop: 18, maxWidth: '60ch' }}>
            A Dental Med Center é referência no Rio Grande do Norte pela experiência e credibilidade. Hoje atende
            aproximadamente 25.000 usuários e mais de 100 empresas, com quatro clínicas próprias e rede
            credenciada criteriosamente selecionada.
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.65, marginTop: 14, maxWidth: '60ch' }}>
            Equipamentos de última geração, material esterilizado em autoclave e especialistas em todos os
            setores da odontologia. Credenciada na ANS sob o registro nº 41.394-1.
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 24, flexWrap: 'wrap' }}>
            <Tag>4 clínicas próprias</Tag>
            <Tag>23 cidades credenciadas</Tag>
            <Tag>Unidade móvel</Tag>
          </div>
        </div>
      </div>
    </section>
  );
}

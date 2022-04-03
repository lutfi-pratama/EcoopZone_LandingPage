import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Fitur Aplikasi Ecoopzone"
    description="Apapun bisnis Anda, Ecoopzone adalah solusi untuk mempercepat pertumbuhan bisnis jangka panjang!, Ecoopzone solusi bisnis koperasi."
  >
    <VerticalFeatureRow
      title="Data Master"
      description="Pada fitur ini aplikasi dapat mencatat dan mengarsipkan database secara maksimal."
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Pengelolaan Simpanan"
      description="Mengelola simpanan pokok, simpanan wajib, simpanan sukarela dan simpanan lain."
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Laporan Keuangan"
      description="Sebagai ujung tombak atas transaksi bisnis koperasi, fitur laporan keuangan"
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };

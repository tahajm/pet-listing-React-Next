import { Card } from '@/components/Card';
import { Container } from '@/components/Container';
import { Header } from '@/components/Header';

import styles from './page.module.css';

export default function Home() {
  return (
    <div>
      <Header />
      <div className="main">
        <Container>
          <h1>Pets</h1>

          <h2>Results</h2>
          <div className={styles.cardContainer}>
            <Card name="Dann" image="/images/ES0AHRx.jpg" />
            <Card name="Annemie" image="/images/wt5AGpR.jpg" />
            <Card name="Daamin" image="/images/cL9Su9q.jpg" />
          </div>
        </Container>
      </div>
      <div className={styles.footer}>
        <Container>&nbsp;</Container>
      </div>
    </div>
  );
}

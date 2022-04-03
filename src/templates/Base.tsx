import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Banner } from './Banner';
// import { Footer } from './Footer';
import { Header } from './Header';
import { Opening } from './Opening';
import {Ekosistem} from './Ekosistem';
import { CardFeatures } from './CardFeatures';
import { ProductOverview } from './ProductOverview';

const Base = () => (
  <div className="text-gray-600 font-['Poppins']">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Header />
    {/* Page 1 */}
    <Opening />
    {/* Page 2 */}
    <Ekosistem />
    {/* Page 3 */}
    <CardFeatures />
    {/* Page 4 */}
    <ProductOverview />
    {/* Addition */}
    <Banner />
    {/* <Footer /> */}
  </div>
);

export { Base };

// Custom components
import QuoteSection from './QuoteSection/QuoteSection';
import ConfirmModal from './QuoteSection/ConfirmModal';

import './Home.css';

const Home = () => (
    <div className="Home">
			<ConfirmModal />
        <QuoteSection />
    </div>
)

export default Home;

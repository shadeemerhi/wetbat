// Custom components
import QuoteSectionItemHeader from '../QuoteSectionItemHeader';

// Component libraries
import FastForwardIcon from '@material-ui/icons/FastForward';

// Styles
import './QuickQuoteForm.css';
import '../../../Dashboard.css';

const QuickQuoteForm = () => {
    return (
        <div className="QuickQuoteForm DashboardComponent">
            <QuoteSectionItemHeader icon={FastForwardIcon} headerText='Quick Quote' />

        </div>
    )
}

export default QuickQuoteForm

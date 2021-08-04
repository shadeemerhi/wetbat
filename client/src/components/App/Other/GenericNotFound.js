// Styles
import './PageInProgress.css';

// Component libraries
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';

const GenericNotFound = () => (
    <div className="PageInProgress">
        <p>Whoops! Page not found</p>
        <SentimentVeryDissatisfiedIcon className="PageInProgressIcon" />
    </div>
)

export default GenericNotFound;

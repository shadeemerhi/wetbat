// Styles
import './PageInProgress.css';

// Component libraries
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

const PageInProgress = () => (
    <div className="PageInProgress">
        <p>This page is currently being built</p>
        <InsertEmoticonIcon className="PageInProgressIcon" />
    </div>
)

export default PageInProgress;

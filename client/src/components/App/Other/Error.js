import Alert from '@material-ui/lab/Alert';
import './Error.css';

const Error = ({ text }) => <Alert className="Error" severity="error">{text}</Alert>;

export default Error;

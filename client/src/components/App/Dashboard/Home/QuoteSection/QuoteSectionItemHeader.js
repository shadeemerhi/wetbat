import './QuoteSectionItemHeader.css';

const QuoteSectionItemHeader = (props) => (
        <div className="QuoteSectionItemHeader">
            <props.icon className="Icon" />
            <h3 className="Text">{props.headerText}</h3>
        </div>
);

export default QuoteSectionItemHeader;

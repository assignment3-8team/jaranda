import './style.css';

const PageHeader = (props) => {
    const { title, englishTitle } = props;

    return (
        <header className="page-header">
            <span>{title}</span>
            <span>{englishTitle}</span>
        </header>
    )
}

export default PageHeader;
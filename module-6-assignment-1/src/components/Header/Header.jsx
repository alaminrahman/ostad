import './Header.css'

function Header({ text, classes }) {

    return (
        <>
        <header className={ classes }>
            <h1>{ text.length > 0 ? text : 'This is header' }</h1>
        </header>
            
        </>
    );
}

export default Header;

function Footer({ text, classes }) {

    return (
        <>
        <footer className={ classes }>
            <h1>{ text.length > 0 ? text : 'This is footer' }</h1>
        </footer>
            
        </>
    );
}

export default Footer;
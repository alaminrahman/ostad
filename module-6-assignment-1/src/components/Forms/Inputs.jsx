
export function Button ({ buttonName = 'Submit', type = 'button', classes = 'form-control'  }){
    return (
        <>
            <button type={ type } className={ classes }>{ buttonName }</button>
        </>
    );
}
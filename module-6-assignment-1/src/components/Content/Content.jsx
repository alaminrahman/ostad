
import { useState } from 'react';
import { Button } from './../Forms/Inputs.jsx'
import ShowText from './ShowText.jsx';


function Content (){

    const [textValue, setTextValue] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        setTextValue(data.textArea);
      }

    return (
        <>
            <div className="container">
                <div className="row my-3">
                    <div className="col-md-12">

                        <form onSubmit={ handleSubmit }>
                            <textarea 
                                name='textArea'
                                className="form-control" 
                                rows="5"
                                cols="5"
                                placeholder="Write something"
                            ></textarea>

                            <Button type='submit' buttonName='Click and Display Content' classes='btn btn-light my-3 btn-block w-100' />

                            <ShowText text={ textValue.length > 0 ? `Your content is : ${textValue}` : '' } classes=""/>
                        </form>

                    </div>
                </div>
            </div> 
        </>
    );
}

export default Content;
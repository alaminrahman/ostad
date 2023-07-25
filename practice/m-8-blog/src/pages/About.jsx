import { useParams } from 'react-router-dom';
import Menu from './../components/Menu'

export default function About () {

    const { id, type } = useParams();

    return (
        <>
        <Menu />
        <h1>{ id } { type }</h1>
        <h1>This is about page</h1>
        </>
    );
}
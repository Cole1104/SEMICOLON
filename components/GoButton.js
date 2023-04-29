"use client"
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
function GoButton(props) {
    let hreff;
    switch(props.title){
        case 'Go to chat':
            hreff = '/chat'
            break;
        case 'Go to cards':
            hreff = '/cards'
            break;
        case 'Go to study':
            hreff = '/MMB'
            break;
    }
    return(
    <>
    <Button variant="dark" href={hreff}>{props.title}</Button>
    </>)
}
export default GoButton;
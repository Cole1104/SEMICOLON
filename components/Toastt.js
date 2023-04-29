"use client"
import Toast from 'react-bootstrap/Toast';
function Toastt(props) {
    return(
    <>
    <div className='toastt'>
        <Toast>
        <Toast.Header closeButton={false}>
        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
        <strong className="me-auto">한줄평</strong>
        <small>{props.name}</small>
        </Toast.Header>

        <Toast.Body>{props.texts}</Toast.Body>

        </Toast>
    </div>
    </>
    )
}
export default Toastt;
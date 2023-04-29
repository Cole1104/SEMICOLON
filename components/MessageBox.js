function MessageBox(props){
    return <>
    <div key={props.index} style={{
        marginBottom:"8vh",
        marginLeft:"2vh",
        borderRadius:"2rem",
        border:"2px solid #E2E2E2",
        height:"13vh",
        padding:"3vh",
        maxWidth:"60vw",
        minWidth:"20rem",
        backgroundColor:"#E2E2E2"
        }}>
    <h5>{props.value.user}</h5>
    {props.value.value}
    </div>
    <style jsx>{`
    .myBox{

    }
    .yourBox{

    }
    
    `}
    </style>
    </>
}
export default MessageBox;
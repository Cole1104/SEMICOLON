"use client"
import Link from "next/link";
import Router from "next/router";

function MenuButton(props){
    let classname;
    let handleClickk;
    switch (props.title){
        case '채팅' :
            classname = 'a';
            
            break;
        case '카드' :
            classname = 'b';
            
            break;
        case '난 시험 싫어' :
            classname = 'c';
            
            break;
        case '업데이트' :
            classname = 'd';
            
            break;
    } 
    return(
        <>
        
        <div className="menuButton">
            <div className={classname}>
            <Link href={props.URL}>
            <h3>{props.title}</h3>
            </Link>
            <h5>{props.semiTitle}</h5>
            </div>
        </div>
        
        </>
    )
}
export default MenuButton;
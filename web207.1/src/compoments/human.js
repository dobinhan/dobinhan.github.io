import React from 'react'

const Human = (props) => {
    console.log(props);
    return(
        <>Tên tôi là: {props.age}  </>
    )
}

export default Human;

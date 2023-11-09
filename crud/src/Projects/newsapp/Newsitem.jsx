import React from 'react';
import news from "./img/news.jpeg"
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
} from 'mdb-react-ui-kit';

export default function Newsitem({ title, description, src, url }) {
    return (
        <>
        <MDBCard style={{ maxWidth: "345px" }} className='bg-dark text-light d-inline-block m-3 p-2'>
            <MDBCardImage src={src ? src : news} style={{ height: "200px", width: "325px" }} position='top' alt='...' />
            <MDBCardBody>
                <MDBCardTitle>{title.slice(0, 50)}</MDBCardTitle>
                <MDBCardText>{description ? description.slice(0, 90) : "No description"}</MDBCardText>
                <MDBBtn href={url}>Read More</MDBBtn>
            </MDBCardBody>
            </MDBCard>
            
        </>

        
    );
}

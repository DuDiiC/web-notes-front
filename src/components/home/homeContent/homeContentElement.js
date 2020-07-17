import React from 'react';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

function HomeContentElement(props) {
    return (
        <div>
            <Row className='d-flex justify-content-center'>
                <h2 className='white-text text-shadow'>
                    <b>{props.header}</b>
                </h2>
            </Row>
            <Row className='d-flex justify-content-center'>
                <Image src={props.image}></Image>
            </Row>
            <Row className='d-flex justify-content-center'>
                <p className='white-text text-shadow'>
                    {props.content}
                </p>
            </Row>
        </div>
    );
}

export default HomeContentElement;
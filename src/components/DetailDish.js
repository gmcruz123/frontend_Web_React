import React from "react";
import { Card, CardBody, CardTitle, CardImg } from "reactstrap";

function RenderComments({ comments }) {

    return (
        <ul className="list-unstyled">
            <li>{comments.label}</li>
            <li>{comments.description}</li>
        </ul>
    );

}

function RenderDish({ dish }) {
    return (

        <Card key={dish.id}>
            <CardImg src={dish.image} />
            <CardBody>
                <CardTitle></CardTitle>
            </CardBody>
        </Card>
    )
}

const Detail = (props) => {

    return (
        <div className='container'>
            <div className='row mt-5'>
                <div className="col">
                    <RenderDish dish={props.dish}/>
                </div>
                <div className='col'>
                    <RenderComments comments={props.dish} />
                </div>
            </div>

        </div>

    );
}


export default Detail;
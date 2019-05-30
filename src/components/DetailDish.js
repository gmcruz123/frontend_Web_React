import React from "react";
import { Card, CardBody, CardTitle, CardImg } from "reactstrap";

function RenderComments({ comments }) {
    
    return (
        <div className="col">
            <ul className="list-unstyled">
                <li>{comments.label}</li>
                <li>{comments.description}</li>
            </ul>
        </div>);

}

const Detail = (props) => {

    return (
        <div className='container'>
            <div className='row mt-5'>
                <div className="col">
                    <Card key={props.dish.id}>
                        <CardImg src={props.dish.image} />
                        <CardBody>
                            <CardTitle></CardTitle>
                        </CardBody>
                    </Card>
                </div>
                <RenderComments comments={props.dish}/>
            </div>

        </div>

    );
}


export default Detail;
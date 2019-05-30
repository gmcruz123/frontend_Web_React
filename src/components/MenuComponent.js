import React from 'react';
import { Media, Card, CardBody, CardTitle, CardSubtitle, CardImg, CardText } from 'reactstrap';


function RenderMenuItem({ dish, onClick }) {


    return (
            <Card onClick={() => onClick(dish.id)}>
                <CardImg src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                </CardBody>
            </Card>);
}


const Menu = (props) => {

    const menu = props.dishes.map((dish) => {
        return (
            <div key={dish.id} className='col-12 col-sm-6  col-md-4 col-lg-3 mt-4'>
                <RenderMenuItem dish={dish} onClick={props.onClick} />
            </div>
        );
    });


    return (
        <div className='container'>
            <div className='row'>
                {menu}
            </div>
        </div>
    );
}




export default Menu;
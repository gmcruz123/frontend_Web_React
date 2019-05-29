import React, { Component } from 'react';
import { Media, Card,CardBody,CardTitle,CardSubtitle, CardImg, CardText } from 'reactstrap';

class Menu extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className='col-12 col-sm-6  col-md-4 col-lg-3 mt-4'>
                   <Card onClick={()=> this.props.onClick(dish.id)}>
                       <CardImg src={dish.image} alt={dish.name} />
                       <CardBody>
                           <CardTitle>{dish.name}</CardTitle>
                       </CardBody>
                   </Card>

                                   </div>
            );
        });

        return (
            <div className='container'>

                <div className='row'>
                    {menu}
                </div>
            </div>

        )
    };
}

export default Menu;
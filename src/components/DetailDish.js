import React ,{ Component } from "react";
import { Card, CardBody, CardTitle, CardImg } from "reactstrap";

class Detail extends Component {

  constructor(props) {
    super(props);
  }


  render() {
    return (
        <div className='container'>
        
        <div className='row mt-5'>
        <div className="col">
          <Card key={this.props.dish.id}>
            <CardImg src={this.props.dish.image} />
            <CardBody>
              <CardTitle>{this.props.dish.name}</CardTitle>
            </CardBody>
          </Card>
        </div>

        <div className="col">
          <ul className="list-unstyled">
            <li>{this.props.dish.label}</li>
            <li>{this.props.dish.description}</li>
          </ul>
        </div>

        </div>
       
        </div>
        
    );
  }
}

export default Detail;
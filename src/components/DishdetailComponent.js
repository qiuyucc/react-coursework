import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle,Breadcrumb,BreadcrumbItem } from
    "reactstrap";
import {Link} from 'react-router-dom';

    function RenderDetail({dish}){
        return (
            <div>
                        <Card>
                            <CardImg width="100%" src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
            </div>
        );
    }

    function RenderComment({comments}){
        if (comments != null) {
            let comms = comments.map((comm, i) => {
                let date = new Intl.DateTimeFormat('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: '2-digit'
                }).format(new Date(Date.parse(comm.date)))
                return (
                    <ul key={comm.id} className="list-unstyled">
                        <li className="comment">{comm.comment}</li>
                        <li className="author">-- {comm.author}, {date}</li>
                    </ul>
                );
            })
            return (
                <div>
                    <h4>Comments</h4>
                    <div>{comms}</div>
                </div>
    
            );
        }
        else {
            return (
                <div></div>
            )
        }
    }

    const DishDetails = (props) =>{
        if (props.dish != null) {
                return (
                    <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{props.dish.name}</h3>
                            <hr />
                        </div>                
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <RenderDetail dish={props.dish} />
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <RenderComment comments={props.comments} />
                        </div>
                    </div>
                    </div>
                );
        }else{
            return (
                <div></div>
            );
    }
    }

        //console.log('DishDetail render invoked');




export default DishDetails

import React, { Component } from 'react'
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from
    "reactstrap"

const Dishdetail = ({ selectedDish }) => {
    return (
        <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={selectedDish.image} alt={selectedDish.name} />
                        <CardBody>
                            <CardTitle>{selectedDish.name}</CardTitle>
                            <CardText>{selectedDish.description}</CardText>
                        </CardBody>
                    </Card>
        </div>
    )
};

const DishComment = ({ comments }) => {
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
            <div className="col-12 col-md-5 m-1">
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

const DishdetailComponent = ({ selectedDish }) => {
    if (selectedDish != null) {
        return (
            <div className="container">
                <div className="row">
                <Dishdetail selectedDish={selectedDish} />
                <DishComment comments={selectedDish.comments} />
                </div>               
            </div>     
        );
    }else{
        return (
            <div></div>
        );
    }
}
export default DishdetailComponent

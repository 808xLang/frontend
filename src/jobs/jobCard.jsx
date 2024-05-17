import React from "react";
import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";
import "./jobCard.css";

const JobCard = ({ id, title, salary, equity, companyName }) => {
    return (
        <div>
            <Card>
                <CardBody className="cardBody">
                    <CardTitle className="jobTitle">
                        {title}
                    </CardTitle>
                    <CardText>
                        <p>{companyName}</p>
                        {salary}
                        {equity !== null ? (<div>Equity: {equity}</div>) :
                            (<div>Equity: 0</div>)}
                    </CardText>
                </CardBody>
            </Card>
        </div>
    )
}

export default JobCard  
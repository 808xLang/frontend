import React from "react";
import { Redirect, useParams } from "react-router-dom/cjs/react-router-dom.min";


function CompanyDetails({item, cantFind}) {
    const { id } = useParams();

    let companyDetails = item.find(companyDetails => companyDetails.id ===id);
    if (!companyDetails) return <Redirect to={cantFind}/>;

    return (
        <h3>
            Details about the company you clicked on
        </h3>
        
    )
}

export default CompanyDetails
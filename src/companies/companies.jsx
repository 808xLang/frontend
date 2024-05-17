import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
// import JoblyApi from "../api/api";
import SearchForm from "../search/search";
import { ListGroup } from "reactstrap";
import './companies.css';


const Companies = ({ companies }) => {
  const [search, setSearch] = useState();
  console.log({ companies });
  return (
    <div>
      <h1>What company are you looking for?</h1>
      <SearchForm {...{ search: setSearch }} />
      <h3>
        These are a list of companies
      </h3>
      <div className="companies">
        <ul >
          {companies?.
            filter(company => search ? company.name.toLowerCase().includes(search.toLowerCase()) : true)
            ?.map((company) =>
              <li key={company.handle} className="company-card">
                <h1 className="title">{company.name}</h1>
                <div>{company.description}</div>
                {/* {company.name}   */}
              </li>)}
          {/* { companies?.map(company => <li>{company.description}</li>)} */}
        </ul>
      </div>
    </div>
  )
}
export default withRouter(Companies);
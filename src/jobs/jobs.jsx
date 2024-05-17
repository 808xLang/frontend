import React, { useEffect, useState } from "react";
import JoblyApi from "../api/api";
import JobCards from "./jobCards";

const Jobs = ({jobs}) => {
    console.log({jobs})



    return (
        <div>
        <h3>
            These are a list of Jobs!!
        </h3>
        <ul>
          <JobCards jobs={jobs} />
        </ul>
        </div>
    )
}

export default Jobs;
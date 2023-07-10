import logo from "./logo.svg";
import "./App.css";
import { API } from "aws-amplify";
import { graphqlOperation } from "aws-amplify";
import JobsUpdateForm from "./ui-components/JobsUpdateForm";
import createJobs from "./graphql/mutations";
import Display from "./Display";
import * as mdb from "mdb-ui-kit"; // lib
import { Input } from "mdb-ui-kit"; // module
import Jobs from "./Jobs";
import { useState } from "react";

function App() {
  const [show, setshow] = useState(false);
  // async function postData() {
  //   const apiName = "jobseekers";
  //   const path = "/jobseekers";
  //   const myInit = {
  //     body: {
  //       id: "1",
  //       name: "chaitanya",
  //     }, // replace this with attributes you need
  //     headers: {}, // OPTIONAL
  //   };

  //   return await API.post(apiName, path, myInit);
  // }
  // async function fetchAllEntries() {
  //   try {
  //     const response = await API.graphql({
  //       query: "query ListEntries { listJobs { items { id name } } }",
  //     });
  //     const entries = response.data.listEntries;
  //     console.log(entries);
  //   } catch (error) {
  //     console.error("Error fetching entries:", error);
  //   }
  // }

  // async function createJob() {
  //   try {
  //     const mutation = `mutation MyMutation($input: CreateJobsInput!) {
  //     createJobs(input: $input) {
  //       id
  //     }
  //   }`;

  //     const variables = {
  //       input: {
  //         id: "4",
  //         name: "sai",
  //       },
  //     };

  //     const response = await API.graphql(graphqlOperation(mutation, variables));
  //     const createdJob = response.data.createJobs;
  //     console.log("Created job:", createdJob);
  //   } catch (error) {
  //     console.error("Error creating job:", error);
  //   }
  // }
  // Call the fetchAllEntries function

  return (
    <div className="App" style={{ height: "100%" }}>
      <div className="p-5 d-flex justify-content-center">
        <button onClick={() => setshow(!show)} className="p-2 px-6">
          Application Form{" "}
        </button>
        <button onClick={() => setshow(!show)} className="p-2 px-6">
          Applications{" "}
        </button>
      </div>
      {/* <Jobs/> */}
      {show ? <Display /> : <Jobs />}
      {/* <Jobs /> */}
    </div>
  );
}

export default App;

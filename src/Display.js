import { API, graphqlOperation } from "aws-amplify";
import React, { useState } from "react";
import createJobs from "./graphql/mutations";

function Display() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phonenumber: "",
    subject: "",
    comments: "",
    typejob: "",
    message: "",
  });

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform actions on form submission, such as sending data to a server
    async function createJob() {
      try {
        const mutation = `mutation MyMutation($input: CreateJobsInput!) {
        createJobs(input: $input) {
          id
        }
      }`;

        const variables = {
          input: formData,
        };

        const response = await API.graphql(
          graphqlOperation(mutation, variables)
        );
        const createdJob = response.data.createJobs;
        console.log("Created job:", createdJob);
      } catch (error) {
        console.error("Error creating job:", error);
      }
    }
    createJob();
    console.log(formData);
  };
  return (
    <div className="">
      <div class="relative">
        <h1 className="text-center p-5 pb-1" style={{ fontSize: "20px" }}>
          Application Form
        </h1>
      </div>

      <section class="relative md:py-10 py-5">
        <div class="container relative">
          <div class="grid lg:grid-cols-12 grid-cols-1" id="reserve-form">
            <div class="lg:col-start-2 lg:col-span-10">
              <div class="rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900 p-6">
                <form>
                  <div class="grid lg:grid-cols-12 gap-6">
                    <div class="lg:col-span-6">
                      <div class="text-start">
                        <label for="name" class="font-semibold">
                          Your Name:
                        </label>
                        <input
                          name="name"
                          id="name"
                          type="text"
                          value={formData.name}
                          onChange={handleInputChange}
                          class="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                          placeholder="Name :"
                        />
                      </div>
                    </div>

                    <div class="lg:col-span-6">
                      <div class="text-start">
                        <label for="email" class="font-semibold">
                          Your Email:
                        </label>
                        <input
                          name="email"
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          class="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                          placeholder="Email :"
                        />
                      </div>
                    </div>

                    <div class="lg:col-span-6">
                      <div class="text-start">
                        <label for="subject" class="font-semibold">
                          Phone No.:
                        </label>
                        <input
                          name="number"
                          id="phonenumber"
                          value={formData.phonenumber}
                          onChange={handleInputChange}
                          class="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                          placeholder="Phone No. :"
                        />
                      </div>
                    </div>

                    <div class="lg:col-span-6">
                      <div class="text-start">
                        <label for="subject" class="font-semibold">
                          Job Title:
                        </label>
                        <input
                          name="subject"
                          id="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          class="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                          placeholder="Job title :"
                        />
                      </div>
                    </div>

                    <div class="lg:col-span-6">
                      <label for="typejob" class="font-semibold">
                        Types of Job:
                      </label>
                      <select
                        id="typejob"
                        value={formData.typeJob}
                        onChange={handleInputChange}
                        class="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                      >
                        <option>All Jobs</option>
                        <option>Full Time</option>
                        <option>Half Time</option>
                        <option>Remote</option>
                        <option>In Office</option>
                      </select>
                    </div>

                    <div class="lg:col-span-12">
                      <div class="text-start">
                        <label for="comments" class="font-semibold">
                          Your Comment:
                        </label>
                        <textarea
                          name="comments"
                          id="comments"
                          value={formData.comments}
                          onChange={handleInputChange}
                          class="form-input mt-3 w-full py-2 px-3 h-28 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                          placeholder="Message :"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    id="submit"
                    name="send"
                    class="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-4"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Display;

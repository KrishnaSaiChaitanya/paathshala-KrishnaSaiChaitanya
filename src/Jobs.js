import { API } from "aws-amplify";
import React, { useEffect, useState } from "react";

function Jobs() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    async function fetchAllEntries() {
      try {
        const response = await API.graphql({
          query:
            "query ListEntries { listJobs { items { id name email subject typejob comments  } } }",
        });
        const entries = response.data.listJobs.items;
        setdata(entries);
        console.log(entries);
      } catch (error) {
        console.error("Error fetching entries:", error);
      }
    }
    fetchAllEntries();
  }, []);

  return (
    <div>
      <h1 className="text-center p-5" style={{ fontSize: "20px" }}>
        Applications
      </h1>
      <section class="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800">
        <div class="container relative">
          <div class="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[30px]">
            {data.map((itm) => (
              <div class="group relative p-6 rounded-md shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 bg-white dark:bg-slate-900 transition duration-500 text-center">
                <div class="mt-8">
                  <img
                    src="	https://shreethemes.in/techwind/layouts/assets/images/client/01.jpg
"
                    class="rounded-full shadow-md h-20 w-20 mx-auto block"
                    alt=""
                  />

                  <div class="mt-3">
                    <a
                      href="page-job-candidate-detail.html"
                      class="text-lg font-medium hover:text-indigo-600 transition duration-500 block"
                    >
                      {itm.name}
                    </a>
                    <span class="block text-sm text-slate-400">
                      {itm.subject}
                    </span>
                  </div>
                </div>

                <div class="flex items-center justify-around my-4">
                  <span class="text-slate-400">
                    <i class="uil uil-map-marker text-indigo-600 me-1"></i>
                    {itm.typejob}
                  </span>
                  <span class="text-slate-400">
                    <i class="uil uil-dollar-sign text-indigo-600 me-1"></i>
                    {itm.email}
                  </span>
                </div>

                {/* <a
                  href="/"
                  class="bg-gray-100 dark:bg-gray-800 text-slate-400 text-xs font-medium px-3 py-1 rounded-lg h-[24px] inline-block m-1"
                >
                  PHP
                </a>
                <a
                  href="/"
                  class="bg-gray-100 dark:bg-gray-800 text-slate-400 text-xs font-medium px-3 py-1 rounded-lg h-[24px] inline-block m-1"
                >
                  HTML
                </a>
                <a
                  href="/"
                  class="bg-gray-100 dark:bg-gray-800 text-slate-400 text-xs font-medium px-3 py-1 rounded-lg h-[24px] inline-block m-1"
                >
                  CSS
                </a>
                <a
                  href="/"
                  class="bg-gray-100 dark:bg-gray-800 text-slate-400 text-xs font-medium px-3 py-1 rounded-lg h-[24px] inline-block m-1"
                >
                  WordPress
                </a> */}

                <div class="mt-4">
                  <a
                    href="page-job-candidate-detail.html"
                    class="btn bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white rounded-md w-full"
                  >
                    View Profile
                  </a>
                </div>

                <div class="absolute top-6 start-6">
                  <span class="bg-indigo-600/5 text-indigo-600 text-sm font-medium px-4 py-1 rounded-full h-[28px]">
                    Featured
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Jobs;

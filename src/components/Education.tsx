const Education = () => {
  return (
    <section className=" ">
      <section className="bg-violet-100 dark:bg-black text-black dark:text-white">
        <div className="container max-w-5xl px-4 py-12 mx-auto">
          <div className="grid gap-4 mx-4 sm:grid-cols-12">
            <div className="col-span-12 sm:col-span-3">
              <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-green-600 before:dark:bg-green-600">
                <h3 className="text-3xl font-semibold">Academics</h3>
                <span className="text-sm font-bold tracking-wider uppercase text-gray-400 dark:text-gray-600">
                  Details 2020 - 2026
                </span>
              </div>
            </div>
            <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
              <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-700 before:dark:bg-gray-300">
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-green-600 before:dark:bg-green-600">
                  <h3 className="text-xl font-semibold tracking-wide">
                    SRI KRISHNA COLLEGE OF ENGINEERING AND TECHNOLOGY{" COIMBATORE "}
                  </h3>
                  <time className="text-xs tracking-wide uppercase text-gray-400 dark:text-gray-600">
                    2023 - 2026
                  </time>
                  <p className="mt-3">
                    B.Tech Information Technology
                  </p>
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-green-600 before:dark:bg-green-600">
                  <h3 className="text-xl font-semibold tracking-wide">
                    PERIYAR CENTENARY POLYTECHNIC COLLEGE {"THANJAVUR"}
                  </h3>
                  <time className="text-xs tracking-wide uppercase text-gray-400 dark:text-gray-600">
                    2020 - 2023
                  </time>
                  <p className="mt-3">
                    Diplomo in Computer Engineering
                  </p>
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-green-600 before:dark:bg-green-600">
                  <h3 className="text-xl font-semibold tracking-wide">
                    St.ANTONY'S HIGHER SECONDARY SCHOOL {"THANJAVUR"}
                  </h3>
                  <time className="text-xs tracking-wide uppercase text-gray-400 dark:text-gray-600">
                    2019 - 2020
                  </time>
                  <p className="mt-3">
                    SSLC
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Education;

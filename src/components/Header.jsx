import React from 'react'

const Header = () => {
  return (
   <>
<section className="mt-10 bg-gray-50">
      <div className="flex flex-col md:flex-row justify-center items-center md:ml-52 lg:max-w-none lg:ml-52">
        <div className="">
          <h3 className="font-bold text-lime-500 text-xl mb-1 text-center lg:text-justify">
            Join Us
          </h3>
          <div className="mt-3 lg:mt-10">
            <h2 className="text-lg lg:text-6xl font-bold text-center lg:text-justify">
              25K+ STUDENTS <br />TRUST US
            </h2>
          </div>
          <p className="text-gray text-xl mt-10 lg:tracking-wide lg:w-3/4 text-center lg:text-justify">
            Every day brings with it a fresh set of learning possibilities.
          </p>
          <div className="mt-10 mb-10 flex justify-center lg:justify-start gap-3">
            <button className="inline-block rounded border bg-lime-600 px-3 md:px-10 lg:px-12 py-3 text-sm font-medium text-white focus:outline-none" href="/download">
              Get Quote Now
            </button>
            <button className="inline-block rounded border border-lime-600 bg-white px-3 md:px-10 lg:px-12 py-3 text-sm font-medium text-lime-600 focus:outline-none" href="/download">
              Get Quote Now
            </button>
          </div>
        </div>
        <div className="lg:w-1/2">
          <img src="https://faazizpro.github.io/online-class-landing-page/Assets/images/hero-bg.webp" className="" alt="kid-school" />
        </div>
      </div>
    </section>

   </>
  )
}

export default Header

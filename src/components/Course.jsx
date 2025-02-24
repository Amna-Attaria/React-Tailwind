import React from 'react';

const Course = () => {
  return (
    <>
    <section class="mb-20 mt-20">
      <div class="lg:max-w-5xl md:max-w-3xl mx-auto">
        <h1 class="text-3xl mb-6 font-semibold text-center text-black capitalize lg:font-bold lg:text-5xl">
          Our Popular Courses
        </h1>
        <div class="ml-5 lg:ml-0 md:grid-cols-2 md:grid lg:grid-cols-3">
          <div class="max-w-xs lg overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 mb-3 lg:mb-0">
            <div class="px-4 py-2">
              <h1 class="text-3xl font-bold text-gray-800 uppercase dark:text-white">
                Graphic Design
              </h1>
              <p class="mt-1 text-sm text-white">
                Graphic designers create visual concepts, using computer
                software or by hand, to communicate ideas that inspire, inform,
                and captivate consumers.
              </p>
            </div>
            <img class="object-cover w-full h-48 " src="https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80" alt="NIKE AIR" />
            <div class="flex items-center justify-between px-4 py-2 bg-gray-900">
              <h1 class="text-lg font-bold text-white">$129</h1>
              <button class="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">
                Add to cart
              </button>
            </div>
          </div>
          <div class="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 mb-3 lg:mb-0">
            <div class="px-4 py-2">
              <h1 class="text-3xl font-bold text-gray-800 uppercase dark:text-white">
                Web Development
              </h1>
              <p class="mt-1 text-sm text-white">
                Web development is the work involved in developing a website for
                the Internet or an intranet.
              </p>
            </div>
            <img class="object-cover w-full h-48 " src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80" alt="Web Development" />
            <div class="flex items-center justify-between px-4 py-2 bg-gray-900">
              <h1 class="text-lg font-bold text-white">$180</h1>
              <button class="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">
                Add to cart
              </button>
            </div>
          </div>
          <div class="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 mb-3 lg:mb-0">
            <div class="px-4 py-2">
              <h1 class="text-3xl font-bold text-gray-800 uppercase dark:text-white">
                SEO
              </h1>
              <p class="mt-1 text-sm text-white">
                SEO (Search Engine Optimization) is the practice of growing a
                website's traffic from organic search results.
              </p>
            </div>
            <img class="object-cover w-full h-48 mt-2" src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1551&amp;q=80" alt="SEO" />
            <div class="flex items-center justify-between px-4 py-2 bg-gray-900">
              <h1 class="text-lg font-bold text-white">$250</h1>
              <button class="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default Course;

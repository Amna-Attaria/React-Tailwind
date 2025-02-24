import React from 'react';

const Testinomial = () => {
  return (
   <>
    <section>
      <div>
        <section class="text-black">
          <div class="container px-6 py-10 mx-auto">
            <h1 class="text-3xl font-semibold text-center text-black capitalize lg:text-4xl">
              What our <span class="text-blue-500">clients</span> say
            </h1>

            <p class="max-w-2xl mx-auto mt-6 text-center text-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              incidunt ex placeat modi magni quia error alias, adipisci rem
              similique, at omnis eligendi optio eos harum.
            </p>

            <section class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 lg:grid-cols-3">
              <div class="p-8 border rounded-lg dark:border-gray-700">
                <p class="leading-loose text-gray-500">
                  “Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Tempore quibusdam ducimus libero ad tempora doloribus expedita
                  laborum saepe voluptas perferendis delectus assumenda rerum,
                  culpa aperiam dolorum, obcaecati corrupti aspernatur a.”.
                </p>

                <div class="flex items-center mt-8 -mx-2">
                  <img class="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700" src="https://images.unsplash.com/photo-1536548665027-b96d34a005ae?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80" alt="" />

                  <div class="mx-2">
                    <h1 class="font-semibold text-gray-800">Robert</h1>
                    <span class="text-sm text-gray-500">CTO, Robert Consultency</span>
                  </div>
                </div>
              </div>

              <div class="p-8 border rounded-lg dark:border-gray-700">
                <p class="leading-loose text-gray-500 dark:text-gray-400">
                  “Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Tempore quibusdam ducimus libero ad tempora doloribus expedita
                  laborum saepe voluptas perferendis delectus assumenda rerum,
                  culpa aperiam dolorum, obcaecati corrupti aspernatur a.”.
                </p>

                <div class="flex items-center mt-8 -mx-2">
                  <img class="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700" src="https://images.unsplash.com/photo-1528900403525-dc523d4f18d6?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=688&amp;q=80" alt="" />

                  <div class="mx-2">
                    <h1 class="font-semibold text-black">David Henry</h1>
                    <span class="text-sm text-gray-500">CEO, Jeny Consultency</span>
                  </div>
                </div>
              </div>

              <div class="p-8 border rounded-lg dark:border-gray-700">
                <p class="leading-loose text-gray-500 dark:text-gray-400">
                  “Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Tempore quibusdam ducimus libero ad tempora doloribus expedita
                  laborum saepe voluptas perferendis delectus assumenda rerum,
                  culpa aperiam dolorum, obcaecati corrupti aspernatur a.”.
                </p>

                <div class="flex items-center mt-8 -mx-2">
                  <img class="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700" src="https://plus.unsplash.com/premium_photo-1667511131806-5907723694fa?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1974&amp;q=80" alt="" />

                  <div class="mx-2">
                    <h1 class="font-semibold text-black">Mark Toun</h1>
                    <span class="text-sm text-gray-500">Marketing Manager at Stech</span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
    </section>
   </>
  );
}

export default Testinomial;

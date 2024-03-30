


export default function ForumThread() {
    return (
        <main className="py-8">
            <div className="max-w-7xl mx-auto px-6 space-y-3 sm:px-6 lg:px-8">

            

            <div className="block border border-black p-6 rounded-lg shadow-md">
                <div className="col-span-1 bg-gray-200 rounded-lg p-4">
                    {/* Content for the left side */}
                    <div class="text-slate-700 dark:text-slate-500">
                    Professor ...
                    </div>
                    <div class="text-sky-500 dark:text-sky-400">
                    Teacher
                    </div>
                </div>
                
                {/* Right side taking up 80% */}
                <div className="flex py-2">
                    {/* Content for the right side */}
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>

                <div className="flex justify-end space-x-2">
                    {/* Like section */}
                    <div>
                        Like
                    </div>

                    {/* Reply section */}
                    <div>
                        Reply
                    </div>
                </div>
            </div>

            

            <div class="block p-6 border border-black rounded-md shadow-md hover:bg-gray-100 flex items-end justify-between">
              <div class="flex-grow">
                <h5 class="mb-2 text-xl font-bold  ">Lorem Ipsum</h5>
                <p class="font-normal text-gray-6000 ">By Anon, December 31, 2024</p>
              </div>
              <div className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M1 8.74c0 .983.713 1.825 1.69 1.943.904.108 1.817.19 2.737.243.363.02.688.231.85.556l1.052 2.103a.75.75 0 0 0 1.342 0l1.052-2.103c.162-.325.487-.535.85-.556.92-.053 1.833-.134 2.738-.243.976-.118 1.689-.96 1.689-1.942V4.259c0-.982-.713-1.824-1.69-1.942a44.45 44.45 0 0 0-10.62 0C1.712 2.435 1 3.277 1 4.26v4.482Zm3-3.49a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5A.75.75 0 0 1 4 5.25ZM4.75 7a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5h-2.5Z" clipRule="evenodd" />
                  </svg>

                      <span className="text-sm text-gray-400">1 replies</span>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
                        <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
                        <path fillRule="evenodd" d="M1.38 8.28a.87.87 0 0 1 0-.566 7.003 7.003 0 0 1 13.238.006.87.87 0 0 1 0 .566A7.003 7.003 0 0 1 1.379 8.28ZM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" clipRule="evenodd" />
                      </svg>

                      <span className="text-sm text-gray-400">99 views</span> 
              </div>
            </div>
            </div>

        </main>


    )
}

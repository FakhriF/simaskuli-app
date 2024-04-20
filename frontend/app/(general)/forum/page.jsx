import Thread from "./thread";

export default function ForumThread() {


    return (
        <main className="py-8">

            <div className="max-w-7xl mx-auto px-6 space-y-3 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center space-x-1 mb-4">
                    <div className="flex space-x-2">
                        <button className="text-gray-700 bg-gray-100 border border-gray-300 rounded-md px-3 py-2 hover:bg-gray-200">
                            Home
                        </button>
                    </div>

                    <div className="flex justify-end">
                        <input
                            type="text"
                            placeholder="Search"
                            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>
                </div>

                <h1 className="text-3xl font-bold">Forum</h1>


                <Thread />

                {/* <CreateThread /> */}

            </div>
        </main>
    );
}

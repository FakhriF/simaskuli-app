export default function ForumPost({ params }) {

    try {
        const response = await axios.post(
    return (
        <form className="bg-white shadow-md rounded-lg p-4" autoComplete="off">
            <h1 className="text-2xl font-semibold mb-4">Write Reply</h1>
            <div className="mb-4">
                <label className="block mb-2">Content</label>
                <textarea className="w-full px-4 py-2 border rounded-lg" required></textarea>
            </div>
            <button className="text-white bg-blue-500 border border-gray-300 rounded-md px-3 py-2 hover:bg-blue-300">Submit</button>
        </form>
    );
}

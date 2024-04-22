import { format } from 'date-fns';
import Link from 'next/link';

export const metadata = {
    title: "Info",
};

export default async function Info({id}) {
    
    let data = null;
    try {
        const res = await fetch(`http://localhost:8000/api/course/${id}`);
        data = await res.json();
    } catch (error) {
        console.error('Error fetching data:', error);
    }

    if (!data) return (
        <div>
            <h1>Course not found</h1>
        </div>
    );

    return (
        <div>
            <div className="p-8 sm:flex sm:items-center sm:justify-between sm:space-x-4 space-y-4 sm:space-y-0 sm:p-8 rounded-lg shadow-lg">
                <div>
                <h1 className="text-2xl font-bold mb-4">{data.title}</h1>
                <p className="text-gray-500 mr-2">
                    {data.description}
                </p>

                <br />
                <p className="font-bold mb-4">Lecturer: </p>
                <p className="text-gray-500 mr-2">{data.user_id}</p>
                </div>
                <div className="sm:min-w-64 md:max-w-128 max-w-32 sm:mr-120">
                <img src={data.image_url} alt="Course cover" className="rounded-lg" />
                </div>
            </div>
            <div className="my-8">
                <div className="mx-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <h2 className="text-xl font-bold mb-2">Learning Outcomes</h2>
                    {data.learning_outcomes}
                </div>
                <div>
                    <h2 className="text-xl font-bold mb-2">Course Materials</h2>
                    <ul className="list-disc pl-6 mt-2">
                    <li>Lecture Notes</li>
                    <li>Assignments</li>
                    <li>Discussions</li>
                    </ul>
                </div>
                </div>
            </div>
        </div>
    );
}

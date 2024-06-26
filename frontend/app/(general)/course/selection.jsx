import { format } from 'date-fns';
import Link from 'next/link';

export const metadata = {
    title: "Selection",
};

export default async function Selection() {
    const res = await fetch(`${process.env.BACKEND_URL}/course`);
    const data = await res.json();

    
    return (
        <div>
            {data.map((course) => (
                <div key={course.id} className="border border-gray-300 rounded-lg p-4 mb-4 hover:text-cyan-500 hover:bg-cyan-100 hover:border-cyan-300">
                    <Link href={`/course/${course.id}`}>
                    <div className="flex gap-4">
                    <div>
                    <h3 className="text-lg font-bold mb-2">{course.title}</h3>
                    <h4 className="font-bold mb-2">{course.user_id}</h4>
                    <p className="text-gray-500 hover:text-cyan-500">{course.description}</p>
                    </div>
                    <div className="flex-shrink-0 sm:min-w-64 md:max-w-128 max-w-32">
                      <img src={course.image_url} alt="Course cover" className="rounded-lg" />
                    </div>
                    </div>
                    </Link>
                </div>
            ))}
        </div>
    );
}

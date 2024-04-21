import { format } from 'date-fns';
import Link from 'next/link';

export const metadata = {
    title: "Selection",
};

export default async function Selection() {
    const res = await fetch('http://localhost:8000/api/course');
    const data = await res.json();

    for (let i = 0; i < data.length; i++) {
        const userId = data[i].id;
        /*
        const userRes = await fetch(`http://localhost:8000/api/course/${userId}`);
        
        const userData = await userRes.json();
        data[i].id = userData;
        */
    }

    return (
        <div>
            {data.map((course) => (
                <div key={course.id} className="border border-gray-300 rounded-lg p-4 mb-4 hover:text-cyan-500 hover:bg-cyan-100 hover:border-cyan-300">
                    <Link href={`/course/${course.id}`}>
                    <h3 className="text-lg font-bold mb-2">{course.title}</h3>
                    <p>{course.description}</p>
                    <div className="sm:mr-120">
                      <img src={course.image_url} alt="Course cover" className="rounded-lg" />
                    </div>
                    </Link>
                </div>
            ))}
        </div>
    );
}

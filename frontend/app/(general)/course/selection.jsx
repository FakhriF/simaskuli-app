export default async function Selection() {
    const res = await fetch('http://localhost:8000/api/course');
    const data = await res.json();

    for (let i = 0; i < data.length; i++) {
        const id = data[i].id;
        const userRes = await fetch(`http://localhost:8000/api/users/${id}`);
        const userData = await userRes.json();
        data[i].user = userData;
    }
    return (
      <div>
            {data.map((course) => (
                <div className="space-y-6" key={course.id}>
                    <Link href={`/forum/${course.id}`}>
                        <div className="block p-6 border border-black rounded-md shadow-md hover:bg-gray-100 flex items-end justify-between">
                            <div className="flex-grow">
                                <h5 className="mb-2 text-xl font-bold">
                                    {thread.title}
                                </h5>
                                <p className="font-normal text-gray-6000">
                                </p>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="flex items-center space-x-1 hover:text-cyan-700">
                                    <AiOutlineLike />
                                    <span>Like</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                    <AiOutlineMessage />
                                    <span>Views</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
  }
  
  
  
export default function QuizPage() {
    return (
        <div className="w-full p-4 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold my-8">PELAJARAN LOREM IPSUM</h1>
            <div>
                <div className="border border-gray-300 rounded-lg mb-4">
                    <div className="text-white bg-gray-800 p-4 rounded-t-lg">
                        <h1 className="text-xl font-bold">Question 1</h1>
                    </div>
                <div className="p-4">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam interdum, erat a scelerisque ultrices, tortor mauris hendrerit lacus, ac luctus urna quam non quam. Duis eget congue dolor. Praesent sit amet porttitor purus. Suspendisse porttitor efficitur ultricies. Integer quis pulvinar lectus. Nulla pellentesque, metus sed convallis fermentum, justo sapien hendrerit est, eget venenatis justo urna non libero. Curabitur ultrices lorem eros. Quisque aliquam ultricies urna ut accumsan.</p>
                    <p>Select one:</p>
                    <div className="my-4">
        <h2 className="text-xl font-bold mb-2">Modules</h2>
        {[...Array(4).keys()].map((module) => (
          <div key={module} className="border border-gray-300 rounded-lg p-4 mb-4 hover:bg-cyan-200 hover:border-blue-500">
            <h3 className="text-lg font-bold mb-2">Module {module + 1}</h3>
            <ul className="list-disc pl-6 mt-2">
              <li>Lecture</li>
              <li>Assignment</li>
              <li>Discussion</li>
            </ul>
          </div>
        ))}
      </div>
                </div>
                </div>
            </div>
        </div>
    );
}
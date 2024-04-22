import Info from "./info";

export default function CoursePage({ params }) {
  
  return (
    <div className="w-full p-4 mb-8">
      <Info id={params.id} />
    
      

      <div className="my-4">
        <h2 className="text-xl font-bold mb-2">Modules</h2>
        {[...Array(4).keys()].map((module) => (
          
          <div key={module} className="border border-gray-300 rounded-lg p-4 mb-4 hover:text-cyan-500 hover:bg-cyan-100 hover:border-cyan-300">
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
  );
}



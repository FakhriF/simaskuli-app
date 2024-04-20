export default function CoursePage() {
  return (
    <div className="w-full p-4 mb-8">
      
      <div className="p-8 sm:flex sm:items-center sm:justify-between sm:space-x-4 space-y-4 sm:space-y-0 sm:p-8 rounded-lg shadow-lg">
        <div>
          <h1 className="text-2xl font-bold mb-4">Introduction to Programming </h1>
          <p className="text-gray-500 mr-2">
            Welcome to our online course on Introduction to Programming. This course
            covers the basics of programming, including data types, control flow,
            functions, and more. With interactive activities and practice questions,
            you'll be able to reinforce your knowledge and gain practical
            experience.
          </p>
        </div>
        <div className="sm:min-w-64 md:max-w-128 max-w-32 sm:mr-120">
          <img src="https://via.placeholder.com/400x300" alt="Course cover" className="rounded-lg" />
        </div>
      </div>
    
      <div className="my-8">
        <div className="mx-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h2 className="text-xl font-bold mb-2">Learning Outcomes</h2>
            <ul className="list-disc pl-6 mt-2">
              <li>Understand the basics of programming</li>
              <li>Improve problem-solving and logical thinking skills</li>
              <li>Develop a solid foundation in data types and control flow</li>
              <li>Enhance your ability to write and debug code</li>
            </ul>
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



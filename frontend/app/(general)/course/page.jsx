export default function CourseSelectionPage() {
    return (
      <div className="w-full p-4 mb-8">
        
        <div className="p-8 sm:flex sm:items-center sm:justify-between sm:space-x-4 space-y-4 sm:space-y-0 sm:p-8 rounded-lg shadow-lg">
          <div>
            <h1 className="text-2xl font-bold mb-4">Select your course</h1>
            <p className="text-gray-500 mr-2">
              Find and select your desired course to enhance your programming skills.
            </p>
          </div>
        </div>
      
        
        <div className="my-4">
          <h2 className="text-xl font-bold mb-2">Courses</h2>
          {[...Array(4).keys()].map((course) => (
            <div key={course} className="border border-gray-300 rounded-lg p-4 mb-4 hover:text-cyan-500 hover:bg-cyan-100 hover:border-cyan-300">
              <h3 className="text-lg font-bold mb-2">Course {course + 1}</h3>
              Welcome to our online course on Introduction to Programming. This course
            covers the basics of programming, including data types, control flow,
            functions, and more. With interactive activities and practice questions,
            you'll be able to reinforce your knowledge and gain practical
            experience.
            <div className="sm:mr-120">
          <img src="https://via.placeholder.com/400x300" alt="Course cover" className="rounded-lg" />
        </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  
  
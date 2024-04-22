import Selection from "./selection";

export default function CourseSelectionPage() {
    return (
      <div className="w-full p-4 mb-8">
        
        <div className="p-8 sm:flex sm:items-center sm:justify-between sm:space-x-4 space-y-4 sm:space-y-0 sm:p-8 rounded-lg shadow-lg">
          <div>
            <h1 className="text-2xl font-bold mb-4">Select your course</h1>
            <p className="text-gray-500 mr-2">
              Find and select your desired course to enhance your skills.
            </p>
          </div>
        </div>
      
        
        <div className="my-4">
          <h2 className="text-xl font-bold mb-2">Courses</h2>

          <Selection />
        </div>
      </div>
    );
  }
  
  
  
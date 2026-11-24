
import { useState } from "react";
import SearchBox from "./components/SearchBox";
import CourseList from "./components/CourseList";
import Clock from "./components/Clock";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const courses = [
    "Web Development",
    "React Development",
    "Python Programming",
    "C Programming",
    "Database Management",
    "Computer Networks"
  ];

  return (
    <div>
      <h1>Student Course Search</h1>

      <Clock />

      <SearchBox
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <CourseList
        courses={courses}
        searchTerm={searchTerm}
      />
    </div>
  );
}

export default App;

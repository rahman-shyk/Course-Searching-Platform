
function CourseList({ courses, searchTerm }) {
  const filteredCourses = courses.filter((course) =>
    course.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Available Courses</h2>

      {filteredCourses.length > 0 ? (
        <ul>
          {filteredCourses.map((course, index) => (
            <li key={index}>{course}</li>
          ))}
        </ul>
      ) : (
        <p>No matching courses found.</p>
      )}
    </div>
  );
}

export default CourseList;

// Display text for 400 level courses

const displayText400 = () => {
  // "400level"
  const courses = document.getElementsByClassName('400level'); 

  // convert to array
  Array.from(courses).forEach(course => {
      console.log(course.textContent); // print
  });
};

// call function
displayText400();

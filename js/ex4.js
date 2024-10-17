// add COB Link

const addCOBLink = () => {
  // create a new anchor (hyperlink) element
  const collegeLink = document.createElement('a');
  collegeLink.href = 'https://www.csulb.edu/college-of-business'; // set URL
  collegeLink.textContent = 'College of Business'; // set text

  // add to list
  const listItem = document.createElement('li');
  listItem.appendChild(collegeLink); // add to list

  // insert new link before information systems
  document.getElementById('links').insertBefore(listItem, document.getElementById('is'));
};

// Call the function to add the link
addCOBLink();

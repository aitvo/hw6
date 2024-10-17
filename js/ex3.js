//bold with yellow for paragraph

const changeParagraphElement = () => {

// get div elements
const paragraphs = document.getElementsByTagName("p");

//if i want to use a forEach loop, convert to an array
//use one step to convert and loop
  Array.from(paragraphs).forEach(paragraph => {
    paragraph.style.fontWeightt = 'bold'; // Set bold text
    paragraph.style.backgroundColor = 'yellow'; // Set background color
  });
};

// Call the function
changeParagraphElement();



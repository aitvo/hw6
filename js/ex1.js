// Displays all body nodes
const bodyNodes = () => {
  const b = document.body; // b = body

  // display nodes and text content
  const displayNodes = node => {
      console.log(node); // Log the node
      console.log("Text content:", node.textContent); // print text

      // convert childNodes into an array
      Array.from(node.childNodes)
          .filter(child => child.textContent !== '') // remove spaces
          .map(displayNodes); // go through (don't use loops!!)
  };

  displayNodes(b); 
};

// Call the function
bodyNodes();



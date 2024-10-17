// array and definitions
const words = [
  {
      term: "Procrastination",
      definition: "Avoidance of doing a task that needs to be accomplished"
  },
  {
      term: "Tautology",
      definition: "Logical argument constructed in such a way that it is logically irrefutable"
  },
  {
      term: "Oxymoron",
      definition: "Figure of speech that juxtaposes elements that appear to be contradictory"
  }
];

// content div
const contentDiv = document.getElementById('content');

// <dl> element
const dl = document.createElement('dl');

// go over the words in array
words.forEach(word => {
  //  create <dt> for the terms
  const dt = document.createElement('dt');
  dt.innerHTML = `<b>${word.term}</b>`; // <b> = bold

  //  <dd> for the definition
  const dd = document.createElement('dd');
  dd.textContent = word.definition;

  // append <dt> and <dd> to <dl>
  dl.appendChild(dt);
  dl.appendChild(dd);
});

// add <dl> to the div
contentDiv.appendChild(dl);

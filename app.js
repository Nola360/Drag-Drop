const fill = document.querySelector('.fill');
//This Query Selector All will be put into a node list
const empties = document.querySelectorAll('.empty');

///Fill Listeners
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

function dragOver(e) {
  console.log('over');
  e.preventDefault();

}

function dragEnter(e) {
  console.log('enter');
  e.preventDefault();
  //append hovered to give it the dashed border and background
  this.className += ' hovered';
}

function dragLeave() {
  console.log('leave');
  this.className = 'empty'
}

function dragDrop() {
  console.log('end');
  this.className = 'empty';
  //appends the fill element into empty div
  this.append(fill);
}




//Loop through the empties
for (const empty of empties) {
  empty.addEventListener('dragover', dragOver);
  empty.addEventListener('dragenter', dragEnter);
  empty.addEventListener('dragleave', dragLeave);
  empty.addEventListener('drop', dragDrop);
}


//Drag functions
function dragStart() {
  console.log('start');
  this.className += ' hold';
  setTimeout(() => (this.className = 'invisible'), 0);

}

function dragEnd() {
  this.className = 'fill';
  console.log('end');
}


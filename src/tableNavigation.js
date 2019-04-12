var currentPage = 1
var maxPage = 0

var leftPageBtn = document.getElementById('leftPageBtn')
var rightPageBtn = document.getElementById('rightPageBtn')
var currentPageDisplay = document.getElementById('currentPageDisplay')
var maxPageDisplay = document.getElementById('maxPageDisplay')
var thNavigation = document.getElementById('test')


// function showNavigation (x) {
//   if (x === 1) {
//     thNavigation.innerHTML = '<th></th>'
//   } else {
//     thNavigation.innerHTML = `
//     <th class='thNavigation' id='test' onchange='calcMaxPage()'>
//     <button id='leftPageBtn'>L</button>
//     <button id='rightPageBtn'>R</button>
//     <p id='currentPageDisplay'>0</p>
//     <p id='maxPageDisplay'>0</p>
//     </th>`
//     console.log("test")
//   }
// }

// function splitArray() {
//   if (maxPage ){
//   console.log('maxPage is higher then 0')
//   }else{
//   console.log('maxPage is 0')
//   }
// }
// splitArray()

function calcMaxPage () {
  var valueDropDown = document.getElementById('select').value
  dropDownMenu(valueDropDown)
  maxPage = Math.ceil(agentList.length / valueDropDown)
  maxPageDisplay.innerHTML = maxPage
}

function dropDownMenu (valueDropDown) {
  if (valueDropDown) {
    resetCurrentPage()
  }
}

function increasePage () {
  if (currentPage >= 0 && currentPage < maxPage) {
    currentPage++
    currentPageDisplay.innerText = currentPage
  } else {
    console.log('Error, max page reached')
  }
}

function decreasePage () {
  if (currentPage > 1) {
    currentPage--
    currentPageDisplay.innerText = currentPage
  } else console.log('Error, currentPage is 0')
}
//after switching dropdown reset current page to 0
function resetCurrentPage(x) {
  
  if(!x){
    currentPage = 0
    currentPageDisplay.innerHTML = currentPage
  
  } else {

  }
}

leftPageBtn.addEventListener('click', decreasePage)
rightPageBtn.addEventListener('click', increasePage)

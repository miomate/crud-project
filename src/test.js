const sortByName = (users, order) => {
  return users.sort((a, b) => {
    return order === 'ASC'
      ? ('' + a.name).localeCompare(b.name)
      : ('' + b.name).localeCompare(a.name)
  })
}
---
Show max working switch
function handleClick (e) {
  var id = e.target.id
  console.log("beginning of handelclick() x is" + x)
  //if another botton is hit, reset each value
  function isOdd(num) {  
    return  num % 2; 
  }

    switch (id) {
    case 'btnSortAge':
    if(isOdd(x) === 0) {
    agentList = agentList.slice().sort(sortAge)
    tableReady()
    x++;
    y = 0;
    z = 0;
    console.log("1 x is " + x)
    return

    } else {
      agentList.reverse();
      tableReady()
      x++;
      y = 0;
      z = 0;
    console.log("0 x is " + x)

    }
      break

    case 'btnSortName':
    agentList = agentList.slice().sort(sortName)
    if(isOdd(y) === 0) {
      agentList = agentList.slice().sort(sortName)
      tableReady()
      y++;
      x = 0;
      z = 0;

      } else {
        agentList.reverse();
        tableReady()
        y++;
        x = 0;
        z = 0;
      }
      break

    case 'btnSortStatus':
    agentList = agentList.slice().sort(sortStatus)
    if(isOdd(z) === 0) {
      agentList = agentList.slice().sort(sortStatus)
      tableReady()
      z++;
      x = 0;
      y = 0;

      } else {
        agentList.reverse();
        tableReady()
        z++;
        x = 0;
        y = 0;
      }
      break
  }
}
---
Version where sort reverse broken
var x = 0;
var z = 0;
var y = 0;

function handleClick (e) {
  var id = e.target.id
  console.log("beginning of handelclick() x is" + x)
  //if
  function isOdd(num) {  
    return  num % 2; 
  }

    switch (id) {
    case 'btnSortAge':
    if(isOdd(x) === 0) {
    agentList = agentList.slice().sort(sortAge)
    tableReady()
    x++;
    console.log("1 x is " + x)
    return

    } else {
      agentList.reverse();
      tableReady()
      x++;
    console.log("0 x is " + x)

    }
      break

    case 'btnSortName':
    agentList = agentList.slice().sort(sortName)
    if(isOdd(y) === 0) {
      agentList = agentList.slice().sort(sortName)
      tableReady()
      y++;
    console.log("1 y is " + z)

      } else {
        agentList.reverse();
        tableReady()
        y++;
    console.log("0 y is " + y)


      }

      break

    case 'btnSortStatus':
    agentList = agentList.slice().sort(sortStatus)
    if(isOdd(z) === 0) {
      agentList = agentList.slice().sort(sortStatus)
      tableReady()
      z++;
    console.log("1 z is " + z)

      } else {
        agentList.reverse();
        tableReady()
        z++;
    console.log("0 z is " + z)

      }
      break
    
  }
}
---
---
switch (id) {
  case 'btnSortAge' && isOdd(x) === 1:
  agentList = agentList.slice().sort(sortAge(x))
  tableReady()
  break;
Sort is broken suddely, broken code:
var x = 0;
function isOdd(num) {  
  x++;
  return num % 2; 

}
function handleClick (e) {
  var id = e.target.id

    switch (id) {
    case 'btnSortAge':
    if(isOdd(x) === 1) {
    agentList = agentList.slice().sort(sortAge)
    tableReady()
    } else {
      agentList.reverse();
      tableReady()
    }
      break

    case 'btnSortName':
    agentList = agentList.slice().sort(sortName)
    if(isOdd(x) === 1) {
      agentList = agentList.slice().sort(sortName)
      tableReady()
      } else {
        agentList.reverse();
        tableReady()
      }
      break

    case 'btnSortStatus':
    agentList = agentList.slice().sort(sortStatus)
    if(isOdd(x) === 1) {
      agentList = agentList.slice().sort(sortStatus)
      tableReady()
      } else {
        agentList.reverse();
        tableReady()
      }
      break
  }
}

const buttons = document.querySelectorAll('.sortButtons')
for (let button of buttons) {
  button.addEventListener('click', handleClick)
}
  tung:
  switch (id) {
    case 'btnSortAge' && isOdd(x) === 1:
    agentList = agentList.slice().sort(sortAge(x))
    tableReady()
    break;

    case 'btnSortAge' && isOdd(x) === 0:
    agentList.reverse();
    tableReady()
      break
    case 'btnSortName':
    agentList = agentList.slice().sort(sortName)
    emptyTabel()
    buildTable()
      break
    case 'btnSortStatus':
    agentList = agentList.slice().sort(sortStatus)
    emptyTabel()
    buildTable()
      break
    default:
      text = 'what is my purpose?'
  }



const sortByAge = (users, order) => {
  return users.sort((a, b) =>
    order === 'ASC' ? a.age - b.age : b.age - a.age
  )
}

const sortByActive = (users, order) => {
  return users.sort((a, b) => {
    if (a === b) {
      return 0
    } else {
      if (order === 'ASC') {
        if (a.isActive) {
          return -1
        } else {
          return 1
        }
      } else {
        if (a.isActive) {
          return 1
        } else {
          return -1
        }
      }
    }
  })
}

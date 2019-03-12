var agentList = [
  {
    agentNumber: 1, // format should be 000
    agentName: 'Peter Pan',
    agentStatus: true // if t. show active, if f. inactve
  },
  {
    agentNumber: 8,
    agentName: 'Eric Cartman',
    agentStatus: false
  }
]

function errorHandling (a, b, c) {
  if (
    a === null || a === '' ||
    b === null || b === '' ||
    c === null || c === '') {
    console.log('error')
    return false
  } else {
    return true
  }
}

function readFormData () {
  var formData = {}
  formData['number'] = document.getElementById('agentNumber').value
  formData['name'] = document.getElementById('agentName').value
  formData['salstatusary'] = document.getElementById('agentStatus').value
  console.log(formData)
  return formData
}

var formSubmit = function () {
  var a = document.getElementById('agentNumber').value
  var b = document.getElementById('agentName').value
  var c = document.getElementById('agentStatus').value
  if (!errorHandling(a, b, c)) {
    return
  }
  console.log('test')
  readFormData()
}





// for easier testing
window.onload = function () {
  document.getElementById('agentNumber').value = 'a'
  document.getElementById('agentName').value = 'b'
  document.getElementById('agentStatus').value = 'active'
}

// build this into finished code

window.addEventListener('keyup', function (event) {
  if (event.keyCode === 13) {
    if (errorHandling()) {
      formSubmit()
    }
  }
})

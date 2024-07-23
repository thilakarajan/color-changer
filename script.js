var element = document.getElementById('btn')

let index = 0
element.addEventListener('click', (e) => {
  e.preventDefault()
  if (index == 4) index = 0
  else index++
  switch (index) {
    case 0:
      document.getElementById('red').style.backgroundColor = 'red'
      document.getElementById('para').innerHTML = 'Background color:red'
      break
    case 1:
      document.getElementById('para').innerHTML = 'Background color:blue'
      document.getElementById('red').style.backgroundColor = 'blue'
      break
    case 2:
      document.getElementById('para').innerHTML = 'Background color:green'
      document.getElementById('red').style.backgroundColor = 'green'
      break
    case 3:
      document.getElementById('para').innerHTML = 'Background color:yellow'
      document.getElementById('red').style.backgroundColor = 'yellow'
      break
    case 4:
      document.getElementById('para').innerHTML = 'Background color:brown'
      document.getElementById('red').style.backgroundColor = 'brown'
  }
})

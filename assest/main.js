// variable
const courses = document.querySelector('#shopping-cart')

// eventListeners
evenetListeners()
function evenetListeners() {
  courses.addEventListener('click', buyCourses)
}

// functions
function buyCourses(e) {
  e.preventDefault()
  if (e.target.classList.contains('add-to-card')) {
    const course = e.target.parentElement
    console.log(course);
  }
}
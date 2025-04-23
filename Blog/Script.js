const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      modeToggle = document.querySelector(".dark-light"),
      searchToggle = document.querySelector(".searchToggle"),
      sidebarOpen = document.querySelector(".sidebarOpen"),
      siderbarClose = document.querySelector(".siderbarClose");


      let getMode = localStorage.getItem("mode")
        if(getMode && getMode === "darkmode"){
            body.classList.toggle("dark");
        }
      




//JS code for Toggle dark and light mode
      modeToggle.addEventListener("click" , () =>{
        modeToggle.classList.toggle("active");
        body.classList.toggle("dark");

//Js code to keep user selected mode even page refresh or file reopen
        if(!body.classList.contains("dark")){
            localStorage.setItem("mode" , "light-mode");
        }
        else{
            localStorage.setItem("mode" , "dark-mode");
        }
      })


//JS code for Toggle search box
searchToggle.addEventListener("click" , () =>{
    searchToggle.classList.toggle("active");
    
  })


//JS code to toggle sidebar
sidebarOpen.addEventListener("click", () =>{
    nav.classList.add("active");
})

body.addEventListener("click", e =>{
    let clickedElm = e.target;

    if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu"))
        nav.classList.remove("active");
})


    let currentIndex = 0;
    const slides = document.querySelectorAll('.hero-slide');
    const totalSlides = slides.length;
    const slider = document.getElementById('slider');
    let autoSlide;

    function updateSlide() {
        slider.style.transition = "transform 1s ease-in-out";
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlide();
        resetAutoSlide();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateSlide();
        resetAutoSlide();
    }

    function startAutoSlide() {
        autoSlide = setInterval(nextSlide, 3000);
    }

    function resetAutoSlide() {
        clearInterval(autoSlide);
        startAutoSlide();
    }

    document.querySelector('.next').addEventListener('click', nextSlide);
    document.querySelector('.prev').addEventListener('click', prevSlide);

    startAutoSlide();

// Show or hide scroll buttons on scroll
window.onscroll = function () {
    const topBtn = document.getElementById("topBtn");
    const bottomBtn = document.getElementById("bottomBtn");

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topBtn.style.display = "block";
        bottomBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
        bottomBtn.style.display = "none";
    }
};

// Scroll to top
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Scroll to bottom
function scrollToBottom() {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
}




  // Accordion toggle
  const questions = document.querySelectorAll('.faq-question');
  questions.forEach(q => {
    q.addEventListener('click', () => {
      const answer = q.nextElementSibling;
      const expanded = answer.style.display === 'block';
      document.querySelectorAll('.faq-answer').forEach(a => a.style.display = 'none');
      answer.style.display = expanded ? 'none' : 'block';
    });
  });

  // Search functionality
  function filterFAQs() {
    const input = document.getElementById('faqSearch').value.toLowerCase();
    const items = document.querySelectorAll('.faq-item');

    items.forEach(item => {
      const question = item.querySelector('.faq-question').textContent.toLowerCase();
      const answer = item.querySelector('.faq-answer').textContent.toLowerCase();
      if (question.includes(input) || answer.includes(input)) {
        item.style.display = '';
      } else {
        item.style.display = 'none';
      }
    });
  }



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

document.querySelector('.whatsapp-float').addEventListener('click', () => {
    console.log('Opening WhatsApp...');
  });

  

  const pages = [
    { title: "Home", url: "index.html", keywords: "home landing intro" },
    { title:  "About Us", url: "About Us.html", keywords: "About Us Management Core"},
    { title: "Who We Are", url: "About Us.html", keywords: "about company team mission vision" },
    { title: "Our Services", url: "Pages/Service.html", keywords: "services pre-travel itinerary transportation accommodation" },
    { title: "Business & Corporate Travel", url: "Pages/Business.html", keywords: "business corporate travel" },
    { title: "Bildung Bridge Program", url: "Pages/Bildung Bridge.html", keywords: "bridge education exchange" },
    { title: "Travel Insights", url: "Pages/Travel Insight.html", keywords: "blog travel insight tips history" },
    { title: "Contact Us", url: "Pages/Contact.html", keywords: "contact support faq quote help" }
  ];

  const input = document.getElementById("siteSearchInput");
  const resultList = document.getElementById("searchResults");

  input.addEventListener("input", () => {
    const value = input.value.toLowerCase();
    resultList.innerHTML = "";
    
    if (value.length < 1) return;

    const filtered = pages.filter(page =>
      page.title.toLowerCase().includes(value) || page.keywords.toLowerCase().includes(value)
    );

    filtered.forEach(page => {
      const li = document.createElement("li");
      li.innerHTML = `<a href="${page.url}">${page.title}</a>`;
      resultList.appendChild(li);
    });
  });

  // Optional: Hide results on click outside
  document.addEventListener("click", (e) => {
    if (!e.target.closest('.searchBox')) {
      resultList.innerHTML = "";
    }
  });

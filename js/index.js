const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


// Navigation

const navLinks = document.querySelectorAll('header nav a')

navLinks[0].textContent = siteContent.nav["nav-item-1"]
navLinks[1].textContent = siteContent.nav["nav-item-2"]
navLinks[2].textContent = siteContent.nav["nav-item-3"]
navLinks[3].textContent = siteContent.nav["nav-item-4"]
navLinks[4].textContent = siteContent.nav["nav-item-5"]
navLinks[5].textContent = siteContent.nav["nav-item-6"]

// Header

const ctaHeading = document.querySelector('.cta-text h1')

ctaHeading.textContent = siteContent.cta.h1

const ctaButton = document.querySelector('.cta-text button')

ctaButton.textContent = siteContent.cta.button

const ctaImg = document.querySelector('#cta-img')

ctaImg.src = siteContent.cta["img-src"]

// Main top

const topContentHeading = document.querySelectorAll('.top-content .text-content h4')
const topContentText = document.querySelectorAll('.top-content .text-content p')

topContentHeading[0].textContent = siteContent["main-content"]["features-h4"]
topContentHeading[1].textContent = siteContent["main-content"]["about-h4"]

topContentText[0].textContent = siteContent["main-content"]["features-content"]
topContentText[1].textContent = siteContent["main-content"]["about-content"]

// Main middle

const middleImg = document.querySelector('#middle-img')

middleImg.src = siteContent["main-content"]["middle-img-src"]

// Main bottome

const bottomContentHeading = document.querySelectorAll('.bottom-content .text-content h4')
const bottomContentText = document.querySelectorAll('.bottom-content .text-content p')

bottomContentHeading[0].textContent = siteContent["main-content"]["services-h4"]
bottomContentHeading[1].textContent = siteContent["main-content"]["product-h4"]
bottomContentHeading[2].textContent = siteContent["main-content"]["vision-h4"]

bottomContentText[0].textContent = siteContent["main-content"]["services-content"]
bottomContentText[1].textContent = siteContent["main-content"]["product-content"]
bottomContentText[2].textContent = siteContent["main-content"]["vision-content"]

// Contact section

const contactTitle = document.querySelector('.contact h4')
const contactItems = document.querySelectorAll('.contact p')

contactTitle.textContent = siteContent.contact["contact-h4"]

contactItems[0].textContent = siteContent.contact.address
contactItems[1].textContent = siteContent.contact.phone
contactItems[2].textContent = siteContent.contact.email

// Footer

const copyright = document.querySelector('footer p')

copyright.textContent = siteContent.footer.copyright
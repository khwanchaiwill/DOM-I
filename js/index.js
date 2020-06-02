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

//Create selectors by using any of the DOM element's methods
let navOne = document.getElementsByTagName("a")
navOne[0].innerHTML = siteContent["nav"]["nav-item-1"]
let navTwo = document.getElementsByTagName("a")
navTwo[1].innerHTML = siteContent["nav"]["nav-item-2"]
let navThree = document.getElementsByTagName("a")
navThree[2].innerHTML = siteContent["nav"]["nav-item-3"]
let navFour = document.getElementsByTagName("a")
navFour[3].innerHTML = siteContent["nav"]["nav-item-4"]
let navFive = document.getElementsByTagName("a")
navFive[4].innerHTML = siteContent["nav"]["nav-item-5"]
let navSix = document.getElementsByTagName("a")
navSix[5].innerHTML = siteContent["nav"]["nav-item-6"]

//Note that IDs have been used on all images. Use the IDs to update src path content
let imgHeader = document.getElementById("cta-img");
imgHeader.setAttribute('src',siteContent["cta"]["img-src"])

let ctaH1 = document.getElementsByTagName('h1');
ctaH1[0].innerHTML = siteContent["cta"]["h1"]

let ctaButton = document.getElementsByTagName('button');
ctaButton[0].innerHTML = siteContent["cta"]["button"]

// main-content 
let mainH4 = document.getElementsByTagName('h4');
mainH4[0].innerHTML = siteContent['main-content']['features-h4']
mainH4[1].innerHTML = siteContent['main-content']['about-h4']
mainH4[2].innerHTML = siteContent['main-content']['services-h4']
mainH4[3].innerHTML = siteContent['main-content']['product-h4']
mainH4[4].innerHTML = siteContent['main-content']['vision-h4']
mainH4[5].innerHTML = siteContent["contact"]["contact-h4"]

let mianPtag = document.getElementsByTagName('p');
mianPtag[0].innerHTML = siteContent["main-content"]["features-content"]
mianPtag[1].innerHTML = siteContent["main-content"]["about-content"]
mianPtag[2].innerHTML = siteContent["main-content"]["services-content"]
mianPtag[3].innerHTML = siteContent["main-content"]["product-content"]
mianPtag[4].innerHTML = siteContent["main-content"]["vision-content"]
mianPtag[5].innerHTML = siteContent["contact"]["address"]
mianPtag[6].innerHTML = siteContent["contact"]["phone"]
mianPtag[7].innerHTML = siteContent["contact"]["email"]
mianPtag[8].innerHTML = siteContent["footer"]["copyright"]

let imgMiddle = document.getElementById('middle-img');
imgMiddle.setAttribute('src', siteContent["main-content"]["middle-img-src"])

//## Task 2: Update the HTML with the JSON data

/* [ ] Remember, NO direct updating of the HTML source is allowed.
* [ ] Using your selectors, update the content to match the example file.
* [ ] Remember to update the src attributes on images*/
const brText = document.querySelector(".cta-text h1");
brText.innerHTML = siteContent['cta']['h1'].replace(/\s/g, "</br>");


//## Task 3: Add new content
/** [x] Change the color of the navigation text to be green.
* [ ] Utilize `.appendChild()` and `.prepend()` to add two new items to the navigation system. You can call them whatever you want.
* [ ] Check your work by looking at the [original html](original.html) in the browser*/

let aTag = document.querySelectorAll("a")
aTag.forEach(nav =>{
  nav.style.color = "green"
})
const newNavigate = document.querySelector("nav")

const home = document.createElement("a");
home.textContent = "Home";
home.href = "#";
home.style.color = "green";

const hiRing = document.createElement("a");
hiRing.textContent = "Hiring";
hiRing.hrdf = "#";
hiRing.style.color = "green";

newNavigate.prepend(home);
newNavigate.appendChild(hiRing);


















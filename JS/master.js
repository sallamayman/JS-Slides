// Get Slider Items | Array.form [ES6 Feature]
var sliderImages = Array.from(document.querySelectorAll('.slider-container img'));

// Get Number Of Slides 
var slidesCount = sliderImages.length;

// Set Current Slide
var currentSlide = 1;

//Slide Number Element
var slideNumberElement = document.getElementById('slide-number');

// Previous And Next Buttons
var nextButton = document.getElementById('next');
var prevButton = document.getElementById('prev');

// Handle Click On Previous And Next Button
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;


// Create The Main Ul Element
var paginationElement = document.createElement('ul');

// Set ID Create Ul Element
paginationElement.setAttribute('id', 'pagination-ul');

// Create List Items Based On Slide Count
for (var i = 1; i<= slidesCount; i++) {

    // Create The LI
    var paginationItem = document.createElement('li');

    // Set Custom Attribute
paginationItem.setAttribute('data-index', i);

    // Set Item Content
    paginationItem.appendChild(document.createTextNode(i));

    //Append Item To The Main Ul List
    paginationElement.appendChild(paginationItem);

}

// Add The Created Ul Element To The Page
document.getElementById('indicators').appendChild(paginationElement);


// Get The New Create UL
var paginationCreateUl = document.getElementById('pagination-ul');

// Get Pagination Items | Array.form [ES6 Feature]
var paginationsBullets = Array.from(document.querySelectorAll('#pagination-ul li'));


// Loop Through All Bullets Item
for (var i = 0; i < paginationsBullets.length; i++) {
    paginationsBullets[i].onclick =function () {
        
        currentSlide = parseInt(this.getAttribute('data-index'));

        theChecker();
    }
}


// Trigger The Checker Function
theChecker();


// Next Slide Function
function nextSlide() {
    if (nextButton.classList.contains('disabled')) {
        
        // Do Nothing    
        return false;
    
    } else {
        currentSlide++;

        theChecker();
    }
}

// Previous Slide Function
function prevSlide() {
    if (prevButton.classList.contains('disabled')) {
        
        // Do Nothing    
        return false;
    
    } else {
        currentSlide--;

        theChecker();
    }
}

// Create The Checker Function
function theChecker() {

    // Set The SLide Number
    slideNumberElement.textContent = 'Slide #' + (currentSlide) + ' of ' + (slidesCount);


        // Remove All Active Classes
        removeAllActive();

    // Set Active Class On Current Slide
    sliderImages[currentSlide - 1].classList.add('active');

    // Set Active Class On Current Pagination Item
    paginationCreateUl.children[currentSlide - 1].classList.add('active');

    // Check If Current Slide Is The First

    if (currentSlide == 1) {

        // Add Disabled Class On Previous Button
        
        prevButton.classList.add('disabled');
    
    } else {

                // Remove Disabled Class On Previous Button
                
                prevButton.classList.remove('disabled');
    
    }

    // Check If Current Slide Is The Last

    if (currentSlide == slidesCount) {

        // Add Disabled Class On Next Button
        
        nextButton.classList.add('disabled');
    
    } else {

        // Remove Disabled Class On Next Button
                
        nextButton.classList.remove('disabled');
    
    }

}


// Remove All Active Classes From Images And Pagination Bullets
function removeAllActive() {

    // Loop Through Images
    sliderImages.forEach(function (img) {
        img.classList.remove('active');
    });


    // Loop Through Pagination Bullets
    paginationsBullets.forEach(function (bullet) {

        bullet.classList.remove('active');

    });
}
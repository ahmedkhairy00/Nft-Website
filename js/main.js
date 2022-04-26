/* make Header Fixed When Scroll down > 70px */
let header = document.querySelector('header');

window.onscroll = function(){
    if ( window.pageYOffset >= 70){
         header.style.position="fixed";
         header.style.backgroundColor="var(--mainColor)";
        
         menuIcon.style.color="white";
    }  else if  (window.pageYOffset < 70){
        header.style.position="absolute";
        header.style.backgroundColor="transparent";
        
    }
};

/* appear Menu When Click On the menuIcon */
let menu = document.querySelector('header nav ul');
let menuIcon = document.querySelector('.menu-icon');
menuIcon.addEventListener('click' , function (){
menu.classList.toggle('appear');
});

/* Close ul block on click close icon 
get element by use its id name
*/
let closeIcon = document.getElementById('close');
closeIcon.addEventListener('click', function (){
    menu.classList.toggle('appear');

});

/* Variable to Create  Shuffile */
let shuffileKeywords = document.querySelectorAll('.gallary .container ul li');
let shuffileDivs = document.querySelectorAll('.gallary .container div');

/* When Click Every Li  */
shuffileKeywords.forEach((item) => {
    /* Create Function to  Compare From Li data-item with div data-filter 
       are equal make this divs display block and other display none
       li data-item == all => make all divs display block
       
    */
    item.addEventListener('click', function(){
        
        /* Change Color Of Clicked Li */
       document.querySelector('.container ul li.click').classList.remove('click');
       this.classList.add('click');

        shuffileDivs.forEach((div) => {
         if (item.dataset.item == 'all' || item.dataset.item == div.dataset.filter){
             div.style.display="block";
        } else {
            div.style.display="none";
        }
        });
        
    });
});

/* Slide Icons */
let rightIcon = document.querySelector('.characters .right-slide span');
let leftIcon = document.querySelector('.characters .left-slide span');

/* div that Contains all images slide characters */
let slideChar = document.querySelector('.characters .slide-characters');
let slideCharImg = document.querySelectorAll('.characters .slide-characters img');
let x = 0;

/* Move Slide To Right by Clicking RightIcon */
rightIcon.addEventListener('click', function(){
    x++;
  for (let index = 0; index < slideCharImg.length; index++) {
/*       const element = slideCharImg[index];
 */      if(x==0){slideCharImg[index].style.left ="0px"};
         if(x==1){slideCharImg[index].style.left ="-200px"};
         if(x==2){slideCharImg[index].style.left ="-400px"};
         if(x==3){slideCharImg[index].style.left ="-600px"};
         if(x==4){slideCharImg[index].style.left ="-800px"};
         if(x==5){slideCharImg[index].style.left ="-1000px"};
         if(x==6){slideCharImg[index].style.left ="-1200px"};
         if(x>6) {x=6;}

  }
});

/* Move Slide To left by Clicking LeftIcon */
leftIcon.addEventListener('click', function(){
    x--;
  for (let index = 0; index < slideCharImg.length; index++) {
/*       const element = slideCharImg[index];
 */      if(x==0){slideCharImg[index].style.left ="0px"};
         if(x==1){slideCharImg[index].style.left ="-200px"};
         if(x==2){slideCharImg[index].style.left ="-400px"};
         if(x==3){slideCharImg[index].style.left ="-600px"};
         if(x==4){slideCharImg[index].style.left ="-800px"};
         if(x==5){slideCharImg[index].style.left ="-1000px"};
         if(x==6){slideCharImg[index].style.left ="-1200px"};
         if(x < 0) {x=0;}
        }
});

/*  */
slideCharImg.forEach((img) => {
    img.addEventListener('click' , function(){
        let imgSrc = img.getAttribute('src');
        console.log(imgSrc);
        /* Put result in Bollean Variable */
        let result = confirm('You Need This Image Data');
        /* If Confirm true add this image to the div , = false dont add this image */
        if (result == true) {
        document.querySelector('.characters-data .characters-img').innerHTML =`<img src="${imgSrc}">`;
        let img = document.querySelector('.characters-data .characters-img img').getAttribute('src');
        parseInt(localStorage.setItem('img' ,img));
        } else if (document.querySelector('.characters-data .characters-img img') == true){
             
            /* If container div have image change it src to selected image */
            document.querySelector('.characters-data .characters-img img').getAttribute('src') = imgSrc;
        }

    });
});
/* Git Image From Local Stroge To Appear It on website by change it src */
document.querySelector('.characters-data .characters-img img').setAttribute('src', localStorage.getItem('img'));


/* Change Main Color By Setting Icons */
let settingIcon = document.querySelector('.landing .setting-icon span');
let mainDiv = document.querySelector('.landing .change-color');
let colorDivs = document.querySelectorAll('.landing .change-color div');

/* Button to Appear Div Contains Colors  */
let btnColor = document.querySelector('.change-color button');
settingIcon.addEventListener('click', () => {
mainDiv.classList.toggle('active');
});

/* Click on div Color And storged in variable */
colorDivs.forEach((div) => {
div.addEventListener('click' , function(){

    let changeColor = div.style.backgroundColor;

    /* Click Submit Button and Save color in variable into Local Stroge */
    btnColor.addEventListener('click' , function(){
        document.documentElement.style.setProperty('--mainColor', changeColor);
        parseInt(localStorage.setItem('color',changeColor));

    });
    });
});


/* Get --mainColor From LocalStroge */
document.documentElement.style.setProperty('--mainColor', localStorage.getItem('color'));

/* Reset Local Stroge When Click on Reset Button */
let resetBtn = document.querySelector('.change-color button[type=reset]');
resetBtn.addEventListener('click' , function(){
    localStorage.removeItem('color');
    document.location.reload(true);
});

/* Send Data From Contact Form to backend */
let contactForm = document.querySelector('.contact-form');

let userName = document.querySelector('#username');
let email = document.querySelector('#email');
let subject = document.querySelector('#subject');
let message = document.querySelector('#message');

contactForm.addEventListener('submit' , (e) => {
e.preventDefault();
let dataForm = {
    name :userName.value,
    email :email.value,
    subject :subject.value,
    message :message.value
};
/* Send Message From to send email By use Mailto */
location.href = `mailto:ahmedkhairy201628@gmail.com?from=${email.value}&subject=Subject : ${subject.value}&body=${message.value}`;
});

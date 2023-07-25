function toggleNavLinks() {
    var navLinks = document.querySelector('.nav-links');
    var toggleIcon = document.querySelectorAll('.toggle-icon');
    var dropdownLinks = document.querySelector('.dropdown-links');

    if (dropdownLinks.style.display === 'none') {
        dropdownLinks.style.display = 'block';
    } else {
        dropdownLinks.style.display = 'none';
    }
}



function loadDescription(step) {
    var descriptionDiv = document.getElementById("description");
    var description = "The first and foremost step is to map a draft of the final outcome through the eyes of the client. We believe interior designing is personal, rather a unique concern. Getting to know the client’s vision is very vital in bringing out the spectacle. We then carefully inspect the job site at this stage. Design Square will be very attentive to the nature of the space/business, occupants’ lifestyle and behavior, colour matches and favourations and even tiny details such as pets, vehicles, surrounding when creating and designing concepts. Discussions and more discussions, one thing we at Design Square believe in as one important and continuing activity to the desired magic. Budget discussions is also an important corridor to walk-through carefully at this stage. The goal is to delight  the client without making a hole in the pocket. We finalize which design ideology to go on in this imperative phase.";
    var verticalLine1 = document.getElementById("vertical-line1");
    var verticalLine2 = document.getElementById("vertical-line2");
    var verticalLine3 = document.getElementById("vertical-line3");
    var verticalLine4 = document.getElementById("vertical-line4");
    var step1 = document.getElementById("step1");
    var step2 = document.getElementById("step2");
    var step3 = document.getElementById("step3");
    var step4 = document.getElementById("step4");

    switch (step) {
        case 1:
            description = "The first and foremost step is to map a draft of the final outcome through the eyes of the client. We believe interior designing is personal, rather a unique concern. Getting to know the client’s vision is very vital in bringing out the spectacle. We then carefully inspect the job site at this stage. Design Square will be very attentive to the nature of the space/business, occupants’ lifestyle and behavior, colour matches and favourations and even tiny details such as pets, vehicles, surrounding when creating and designing concepts. Discussions and more discussions, one thing we at Design Square believe in as one important and continuing activity to the desired magic. Budget discussions is also an important corridor to walk-through carefully at this stage. The goal is to delight  the client without making a hole in the pocket. We finalize which design ideology to go on in this imperative phase.";
            verticalLine1.style.display = 'block';
            verticalLine1.style.backgroundColor = '#5d9e5d';
            verticalLine2.style.display = 'none';
            verticalLine2.style.backgroundColor = 'transparent';
            verticalLine3.style.display = 'none';
            verticalLine3.style.backgroundColor = 'transparent';
            verticalLine4.style.display = 'none';
            verticalLine4.style.backgroundColor = 'transparent';

            step1.style.backgroundColor = '#f5f5f5';
            step1.style.color = "black";
            step1.style.border = "2px solid green";
            step2.style.backgroundColor = 'green';
            step2.style.color = "white";
            step2.style.border = "2px solid #f5f5f5";
            step3.style.backgroundColor = 'green';
            step3.style.color = "white";
            step3.style.border = "2px solid #f5f5f5";
            step4.style.backgroundColor = 'green';
            step4.style.color = "white";
            step4.style.border = "2px solid #f5f5f5";

            break;
        case 2:
            description = "We then design. We draw. We map. We sketch. We do a lot of them, guessing what the client would prefer one over the other. After further discussions, we make any alterations, changes, colour grading, and enhancing the design further to fine-tune the best outcome yet to happen.";
            verticalLine2.style.display = 'block';
            verticalLine2.style.backgroundColor = '#5d9e5d';
            verticalLine1.style.display = 'none';
            verticalLine1.style.backgroundColor = 'transparent';
            verticalLine3.style.display = 'none';
            verticalLine3.style.backgroundColor = 'transparent';
            verticalLine4.style.display = 'none';
            verticalLine4.style.backgroundColor = 'transparent';

            step2.style.backgroundColor = '#f5f5f5';
            step2.style.color = "black";
            step2.style.border = "2px solid green";
            step1.style.backgroundColor = 'green';
            step1.style.color = "white";
            step1.style.border = "2px solid #f5f5f5";
            step3.style.backgroundColor = 'green';
            step3.style.color = "white";
            step3.style.border = "2px solid #f5f5f5";
            step4.style.backgroundColor = 'green';
            step4.style.color = "white";
            step4.style.border = "2px solid #f5f5f5";

            break;
        case 3:
            description = "The magic converted in to reality in this phase. Once the agreeable design is finalized along with other resources, we focus on getting the real work done.In this phase, the excellence of work will be the rule to follow in order to achieve the craftsmanship to the utmost quality and standards. Compromising is out of the context in delivering what we promise. Just-in-Time (JIT) delivery of work will also be one of our biggest considerations at this stage. Our expert team will assist and keep a keen eye until the project is fully completed. We then do the final inspections and go through each and every single detail before the project is handed over to the happy client.";
            verticalLine3.style.display = 'block';
            verticalLine3.style.backgroundColor = '#5d9e5d';
            verticalLine1.style.display = 'none';
            verticalLine1.style.backgroundColor = 'transparent';
            verticalLine2.style.display = 'none';
            verticalLine2.style.backgroundColor = 'transparent';
            verticalLine4.style.display = 'none';
            verticalLine4.style.backgroundColor = 'transparent';

            step3.style.backgroundColor = '#f5f5f5';
            step3.style.color = "black";
            step3.style.border = "2px solid green";
            step2.style.backgroundColor = 'green';
            step2.style.color = "white";
            step2.style.border = "2px solid #f5f5f5";
            step1.style.backgroundColor = 'green';
            step1.style.color = "white";
            step1.style.border = "2px solid #f5f5f5";
            step4.style.backgroundColor = 'green';
            step4.style.color = "white";
            step4.style.border = "2px solid #f5f5f5";

            break;
        case 4:
            description = "Our concern for our clients’ satisfaction is not over yet. We care about the continuing satisfaction of our clients by providing comprehensive support and services even after the successful completion of the project. From enhancements to alterations and modifications, we are happy to continue the delivery of support and services with no delay.We are unique in terms of our tradition of building trusted and long-lasting corporate relationships with our clients.";
            verticalLine4.style.display = 'block';
            verticalLine4.style.backgroundColor = '#5d9e5d';
            verticalLine1.style.display = 'none';
            verticalLine1.style.backgroundColor = 'transparent';
            verticalLine3.style.display = 'none';
            verticalLine3.style.backgroundColor = 'transparent';
            verticalLine2.style.display = 'none';
            verticalLine2.style.backgroundColor = 'transparent';
            step4.style.backgroundColor = '#f5f5f5';
            step4.style.color = "black";
            step4.style.border = "2px solid green";
            step2.style.backgroundColor = 'green';
            step2.style.color = "white";
            step2.style.border = "2px solid #f5f5f5";
            step3.style.backgroundColor = 'green';
            step3.style.color = "white";
            step3.style.border = "2px solid #f5f5f5";
            step1.style.backgroundColor = 'green';
            step1.style.color = "white";
            step1.style.border = "2px solid #f5f5f5";
            break;
        default:
            description = "Invalid step";
            break;
    }

    descriptionDiv.textContent = description;


    const stepWraps = document.querySelectorAll('.step_wrap');
    stepWraps.forEach((stepWrap) => {
        stepWrap.addEventListener('click', () => {
            stepWraps.forEach((otherStepWrap) => {
                if (otherStepWrap !== stepWrap) {
                    otherStepWrap.classList.remove('clicked');
                }
            });

            stepWrap.classList.toggle('clicked');
        });
    });


}

function loadDescMain(step) {

    var descDiv = document.getElementById("product_des_main");
    var descSub1 = document.getElementById("product_des-1");
    var descSub2 = document.getElementById("product_des-2");
    var descSub3 = document.getElementById("product_des-3");
    var descSub4 = document.getElementById("product_des-4");
    var descSub5 = document.getElementById("product_des-5");
    var descTitle = document.getElementById("produc_des_main_title");
    var productWrap1 = document.getElementById("product_wrap-1");
    var productWrap2 = document.getElementById("product_wrap-2");
    var productWrap3 = document.getElementById("product_wrap-3");
    var productWrap4 = document.getElementById("product_wrap-4");
    var productWrap5 = document.getElementById("product_wrap-5");

    var productBox1 = document.getElementById("product_box-1");
    var productBox2 = document.getElementById("product_box-2");
    var productBox3 = document.getElementById("product_box-3");
    var productBox4 = document.getElementById("product_box-4");
    var productBox5 = document.getElementById("product_box-5");


    var descMain = "The first and foremost step is to map a draft of the final outcome through the eyes of the client. We believe interior designing is personal, rather a unique concern. Getting to know the client’s vision is very vital in bringing out the spectacle. We then carefully inspect the job site at this stage. Design Square will be very attentive to the nature of the space/business, occupants’ lifestyle and behavior, colour matches and favourations and even tiny details such as pets, vehicles, surrounding when creating and designing concepts. Discussions and more discussions, one thing we at Design Square believe in as one important and continuing activity to the desired magic. Budget discussions is also an important corridor to walk-through carefully at this stage. The goal is to delight  the client without making a hole in the pocket. We finalize which design ideology to go on in this imperative phase.";
    var haggingTitle = document.getElementById("produc_des_main_title");

    switch (step) {
        case 1:
            descMain = "The first and foremost step is to map a draft of the final outcome through the eyes of the client. We believe interior designing is personal, rather a unique concern. Getting to know the client’s vision is very vital in bringing out the spectacle. We then carefully inspect the job site at this stage. Design Square will be very attentive to the nature of the space/business, occupants’ lifestyle and behavior, colour matches and favourations and even tiny details such as pets, vehicles, surrounding when creating and designing concepts. Discussions and more discussions, one thing we at Design Square believe in as one important and continuing activity to the desired magic. Budget discussions is also an important corridor to walk-through carefully at this stage. The goal is to delight  the client without making a hole in the pocket. We finalize which design ideology to go on in this imperative phase.";
            descSub1.textContent = descMain;
            descSub2.textContent = "";
            descSub3.textContent = "";
            descSub4.textContent = "";
            descSub5.textContent = "";
            descTitle.textContent = "Product One";

            productWrap1.classList.toggle("product_wrap_clicked");
            productWrap2.classList.remove("product_wrap_clicked");
            productWrap3.classList.remove("product_wrap_clicked");
            productWrap4.classList.remove("product_wrap_clicked");
            productWrap5.classList.remove("product_wrap_clicked");

            productBox1.classList.toggle("product_box_clicked");
            productBox2.classList.remove("product_box_clicked");
            productBox3.classList.remove("product_box_clicked");
            productBox4.classList.remove("product_box_clicked");
            productBox5.classList.remove("product_box_clicked");


            break;
        case 2:
            descMain = "We then design. We draw. We map. We sketch. We do a lot of them, guessing what the client would prefer one over the other. After further discussions, we make any alterations, changes, colour grading, and enhancing the design further to fine-tune the best outcome yet to happen.";
            descSub2.textContent = descMain;
            descSub1.textContent = "";
            descSub3.textContent = "";
            descSub4.textContent = "";
            descSub5.textContent = "";
            descTitle.textContent = "Product Two";

            productWrap1.classList.remove("product_wrap_clicked");
            productWrap2.classList.toggle("product_wrap_clicked");
            productWrap3.classList.remove("product_wrap_clicked");
            productWrap4.classList.remove("product_wrap_clicked");
            productWrap5.classList.remove("product_wrap_clicked");

            productBox1.classList.remove("product_box_clicked");
            productBox2.classList.toggle("product_box_clicked");
            productBox3.classList.remove("product_box_clicked");
            productBox4.classList.remove("product_box_clicked");
            productBox5.classList.remove("product_box_clicked");


            break;
        case 3:
            descMain = "The magic converted in to reality in this phase. Once the agreeable design is finalized along with other resources, we focus on getting the real work done.In this phase, the excellence of work will be the rule to follow in order to achieve the craftsmanship to the utmost quality and standards. Compromising is out of the context in delivering what we promise.Just-in-Time JIT) delivery of work will also be one of our biggest considerations at this stage. Our expert team will assist and keep a keen eye until the project is fully completed. We then do the final inspections and go through each and every single detail before the project is handed over to the happy client.";
            descSub3.textContent = descMain;
            descSub2.textContent = "";
            descSub1.textContent = "";
            descSub4.textContent = "";
            descSub5.textContent = "";
            descTitle.textContent = "Product Three";

            productWrap1.classList.remove("product_wrap_clicked");
            productWrap2.classList.remove("product_wrap_clicked");
            productWrap3.classList.toggle("product_wrap_clicked");
            productWrap4.classList.remove("product_wrap_clicked");
            productWrap5.classList.remove("product_wrap_clicked");

            productBox1.classList.remove("product_box_clicked");
            productBox2.classList.remove("product_box_clicked");
            productBox3.classList.toggle("product_box_clicked");
            productBox4.classList.remove("product_box_clicked");
            productBox5.classList.remove("product_box_clicked");


            break;
        case 4:
            descMain = "Our concern for our clients’ satisfaction is not over yet. We care about the continuing satisfaction of our clients by providing comprehensive support and services even after the successful completion of the project. From enhancements to alterations and modifications, we are happy to continue the delivery of support and services with no delay.We are unique in terms of our tradition of building trusted and long-lasting corporate relationships with our clients.";
            descSub4.textContent = descMain;
            descSub2.textContent = "";
            descSub3.textContent = "";
            descSub1.textContent = "";
            descSub5.textContent = "";
            descTitle.textContent = "Product Four";

            productWrap1.classList.remove("product_wrap_clicked");
            productWrap2.classList.remove("product_wrap_clicked");
            productWrap3.classList.remove("product_wrap_clicked");
            productWrap4.classList.toggle("product_wrap_clicked");
            productWrap5.classList.remove("product_wrap_clicked");

            productBox1.classList.remove("product_box_clicked");
            productBox2.classList.remove("product_box_clicked");
            productBox3.classList.remove("product_box_clicked");
            productBox4.classList.toggle("product_box_clicked");
            productBox5.classList.remove("product_box_clicked");


            break;
        case 5:
            descMain = "2Our concern for our clients’ satisfaction is not over yet. We care about the continuing satisfaction of our clients by providing comprehensive support and services even after the successful completion of the project. From enhancements to alterations and modifications, we are happy to continue the delivery of support and services with no delay.We are unique in terms of our tradition of building trusted and long-lasting corporate relationships with our clients.";
            descSub5.textContent = descMain;
            descSub4.textContent = "";
            descSub3.textContent = "";
            descSub2.textContent = "";
            descSub1.textContent = "";
            descTitle.textContent = "Product Five";

            productWrap1.classList.remove("product_wrap_clicked");
            productWrap2.classList.remove("product_wrap_clicked");
            productWrap3.classList.remove("product_wrap_clicked");
            productWrap4.classList.remove("product_wrap_clicked");
            productWrap5.classList.toggle("product_wrap_clicked");

            productBox1.classList.remove("product_box_clicked");
            productBox2.classList.remove("product_box_clicked");
            productBox3.classList.remove("product_box_clicked");
            productBox4.classList.remove("product_box_clicked");
            productBox5.classList.toggle("product_box_clicked");


            break;
        default:
            descMain = "Invalid step";
            break;
    }

    descDiv.textContent = descMain;
}


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 400 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 400) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    distance: '5px',
    duration: 4000,
    reset: true,
})

sr.reveal(`
        .home_content_div_h1,
        .logo,
        .client_container5
    `, {
    origin: 'top',
    interval: 500,
})

sr.reveal(`
        .home_content_div_h2,
        .p_1,
        .p_3,
        .p_5
        
    `, {
    origin: 'bottom',
    interval: 800,
})

sr.reveal(`
        .home_content_div_p,
        .home_content_div_btn_explore
        
    `, {
    origin: 'bottom',
    interval: 3000,
})

sr.reveal(`
        .about_content_div
        
    `, {
    origin: 'right',
    interval: 2000,
})


sr.reveal(`
        .about_img_div>img,
        .img_back_green-l,
        .new_services-img-r
        
    `, {
    origin: 'left',
    interval: 800,
})

sr.reveal(`
    .new_services-img-l,
    .img_back_green-r
        
    `, {
    origin: 'right',
    interval: 800,
})



/* Pop Up */
function openPopup(popup, imageSrc, description) {
    popup.querySelector('img').src = imageSrc;
    popup.querySelector('.description').textContent = description;
    popup.classList.add('active');
    popup.nextElementSibling.classList.add('active');
}

function closePopup(popup) {
    popup.classList.remove('active');
    popup.nextElementSibling.classList.remove('active');
}

function addPopupFunctionality(containerClass) {
    const imgBoxes = document.querySelectorAll(`.${containerClass} .img_box`);
    const imgPopup = document.querySelector(`.${containerClass} .img_popup`);
    const imgPopupImg = imgPopup.querySelector('img');
    const imgPopupDesc = imgPopup.querySelector('.description');
    const imgPopupBackground = document.querySelector(`.${containerClass} .img_popup_background`);

    imgBoxes.forEach((imgBox) => {
        imgBox.addEventListener('click', () => {
            const imageSrc = imgBox.querySelector('img').src;
            const description = imgBox.querySelector('.description').textContent;
            openPopup(imgPopup, imageSrc, description);
        });
    });

    imgPopupBackground.addEventListener('click', () => {
        closePopup(imgPopup);
    });
}

// Call the function to add popup functionality to the project_image_container
addPopupFunctionality('project_image_container');

// Call the function to add popup functionality to the project_image_hide_container
addPopupFunctionality('project_image_hide_container');
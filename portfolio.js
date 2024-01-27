const bgAnimation = document.getElementById('bgAnimation');

const numberOfColorBoxes = 400;

for (let i = 0; i < numberOfColorBoxes; i++) {
    const colorBox = document.createElement('div');
    colorBox.classList.add('colorBox');
    bgAnimation.append(colorBox)
}



// -------------------------------------backgound animation--------------------------------


const div = document.querySelector(".text");
const text = " Hi my name is Shayan, I'm a frontend developer!";


function textTypingEffect(element, text, i = 0){
    element.textContent += text[i];
    if(i === 0) {
        element.textContent = "";
    }

    if (i === text.length - 1) {
        return;
    }

    setTimeout(() => textTypingEffect(element, text, i + 1), 100);


}

textTypingEffect(div, text);



// ----------------------------------typing text ------------------------------



const openBtn = document.getElementById("openAbout");
const closeBtn = document.getElementById("closeAbout");
const aboutContainer = document.getElementById("aboutContainer");

openBtn.addEventListener("click", () => {
    aboutContainer.classList.add("open");
});

closeBtn.addEventListener("click", () => {
    aboutContainer.classList.remove("open");
});

// -----------------------------------button in about done----------------------------




const openMRK = document.getElementById("openMRK");
const closeMRK = document.getElementById("closeMRK");
const marketingAndSales = document.getElementById("marketingAndSales");

openMRK.addEventListener("click", () => {
    marketingAndSales.classList.add("open");
});

closeMRK.addEventListener("click", () => {
    marketingAndSales.classList.remove("open");
});


// ------------------------------------marketing and sales bnt done--------------------------



const openCng = document.getElementById("openCng");
const closeCng = document.getElementById("closeCng");
const cngContainer = document.getElementById("cngContainer");

openCng.addEventListener("click", () => {
    cngContainer.classList.add("open");
});

closeCng.addEventListener("click", () => {
    cngContainer.classList.remove("open");
});

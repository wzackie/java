let form = document.getElementById('form');
let price = document.getElementById('price');
let thePriceError = document.getElementById('thePriceError');
let years = document.getElementById('years');
let theYearsError = document.getElementById('theYearsError');
let resultDiv = document.getElementById('resultDiv');
   
//          DARK MODE
const toggleDarkMode = document.getElementById ( 'darkMode' ) ;
const body = document .body ;

toggleDarkMode . addEventListener ('click', ()=>{

    body . classList . toggle ( 'darkmode' )

    if(body . classList . contains ( 'darkmode' )){
        localStorage . setItem ( 'darkmode' , 'enabled' );
    }

    else{
        localStorage . setItem ( 'darkmode' , 'disabled' );
    }

 }
);

if(localStorage.getItem('darkmode')=== 'enabled'){
    body.classList.add('darkmode');
};
  
//              METHOD
form.addEventListener('submit', function (event) {
     event.preventDefault(); // Prevent form submission

       let hasError = false;
       thePriceError.innerHTML = "";
       theYearsError.innerHTML = "";


    if(price.value.trim() === ""){
        haserror = true ;
        thePriceError . innerHTML = "من فضلك ادخل السعر . . . "
    }
    if(years.value.trim() === ""){
        haserror = true ;
        theYearsError . innerHTML = "من فضلك ادخل عددالسنوات . . . "
    }
    if (!hasError) {
    calculateInstallment();
    }
    
});

// //             THE CALCOLAT
function calculateInstallment (){

    const thePrice = parseFloat(price.value);
    const year = parseFloat (years.value);
    const Interest = 20/100 ;

    const theFinalTotalInterest = thePrice * Interest * year
    // علشان هو ايقسط ع سنين فلازم نضيف السنين مع السعر والفايده

    const theFinaltotal = theFinalTotalInterest + thePrice
    // وكدا انا هجمعهم كلهم علشان يخرجلي 
    
    resultDiv.innerHTML = `
    <p>إجمالي الفائدة: <strong>${theFinalTotalInterest}</strong> جنيه</p>
    <p>المبلغ الإجمالي المطلوب دفعه: <strong>${theFinaltotal}</strong> جنيه</p>
`;
   }
   

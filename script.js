let elements=document.querySelectorAll(".boxM");
let periodic=document.querySelector(".spacesC01");

//save text and background colo
let originalText=periodic.textContent;
let original_color = window.getComputedStyle(periodic).backgroundColor;

elements.forEach((element)=>{
element.addEventListener("mouseenter",()=>{
    periodic.textContent=element.getAttribute("name");
    periodic.style.backgroundColor=window.getComputedStyle(element).backgroundColor;

   
});


element.addEventListener("mouseleave",()=>{
    periodic.textContent=originalText;
    periodic.style.backgroundColor=original_color;
});
});

let visualBtn = document.querySelector(".visualchart a");
let elementBoxes = document.querySelectorAll(".boxg");

elementBoxes.forEach(box=>{
box.dataset.originalContent = box.innerHTML;
});

//
visualBtn.addEventListener("click", function (e) {
    e.preventDefault(); // VERY IMPORTANT

  
    // Check if the boxes are already showing images or not
if(!elementBoxes.length)return ;


    let isImageVisible = elementBoxes[0].querySelector("img");
       elementBoxes.forEach((box) => {
        if (isImageVisible) {
            // If an image is visible, remove the image and restore the original content
            box.innerHTML = box.dataset.originalContent;
           location.reload();
        } else  {
            // show image
            let imgSrc = box.dataset.image;
            box.innerHTML = `<img src="${imgSrc}" alt="Hydrogen" class="element-img">`;
        
        }
    });    applyMetalState();
    
});


//for table to move inside

let tbs = document.querySelector(".tsize");
let tbss=Number(localStorage.getItem("tbss")) ||0;

tbs.addEventListener("click", (e) => {
       
    e.preventDefault();

    let tbss = Number(localStorage.getItem("tbss")) || 0;
    localStorage.setItem("tbss", tbss ? 0 : 1);
    window.location.href = tbss ? "index01.html" : "index.html";
});







//showing metal in periodic table
let metals1=document.querySelectorAll(".metalShow1");
let metals2=document.querySelectorAll(".metalShow2");
let metalS=document.querySelector(".metalN");
let originalColors1 = [];
let originalColors2= [];

metals1.forEach((metal, index) => {
    originalColors1[index] = window.getComputedStyle(metal).backgroundColor;
});
metals2.forEach((metal, index) => {
    originalColors2[index] = window.getComputedStyle(metal).backgroundColor;
});
metalS.addEventListener("click", (e) => {
    e.preventDefault();

    

    let metalTrack = Number(localStorage.getItem("metalTrack")) || 0;

    if (metalTrack === 0) {
        localStorage.setItem("metalTrack", 1);

        // remove colors
        metals1.forEach(metal => {
            metal.style.backgroundColor =" #F2F2F3";});
        metals2.forEach(metal => {
            metal.style.backgroundColor = " #F2F2F3";
            metal.style.color="black";
        });

    } else {
        localStorage.setItem("metalTrack", 0);

        // restore original colors
        metals1.forEach((metal, index) => {
            metal.style.backgroundColor = originalColors1[index];
        });
        metals2.forEach((metal, index) => {
            metal.style.backgroundColor = originalColors2[index];
            metal.style.color="white";
        });
    }
});
//showing  NON Metal in periodic table
let nmetals1=document.querySelectorAll(".Non_MetalShow1");
let nmetals2=document.querySelectorAll(".Non_MetalShow2");
let nmetalS=document.querySelector(".nmetalN");
let noriginalColors1 = [];
let noriginalColors2= [];

nmetals1.forEach((metal, index) => {
    noriginalColors1[index] = window.getComputedStyle(metal).backgroundColor;
});
nmetals2.forEach((metal, index) => {
    noriginalColors2[index] = window.getComputedStyle(metal).backgroundColor;
});
nmetalS.addEventListener("click", (e) => {
    e.preventDefault();

    

    let nmetalTrack = Number(localStorage.getItem("nmetalTrack")) || 0;

    if (nmetalTrack === 0) {
        localStorage.setItem("nmetalTrack", 1);

        // remove colors
        nmetals1.forEach(metal => {
            metal.style.backgroundColor =" #F2F2F3";});
        nmetals2.forEach(metal => {
            metal.style.backgroundColor = " #F2F2F3";
            metal.style.color="black";
        });

    } else {
        localStorage.setItem("nmetalTrack", 0);
 
        // restore original colors
        nmetals1.forEach((metal, index) => {
            metal.style.backgroundColor = noriginalColors1[index];
        });
        nmetals2.forEach((metal, index) => {
            metal.style.backgroundColor = noriginalColors2[index];
            metal.style.color="white";
        });
    }
});
//common class in table of div and achor
let CommonD=document.querySelectorAll(".boxM");
let CommonA=document.querySelectorAll(".boxM2");
let CoriginalColors1 = [];
let CoriginalColors2= [];
CommonD.forEach((metal, index) => {
    CoriginalColors1[index] = window.getComputedStyle(metal).backgroundColor;
    
});
CommonA.forEach((metal, index) => {
    CoriginalColors2[index] = window.getComputedStyle(metal).backgroundColor;
    
});



//showing  G1 in periodic table
let group1=document.querySelectorAll(".G1");
let group01=document.querySelectorAll(".G01");
let groupA1=document.querySelector(".G1B");
let goriginalColors1 = [];
let goriginalColors01= [];

group1.forEach((metal, index) => {
    goriginalColors1[index] = window.getComputedStyle(metal).backgroundColor;
    
});
group01.forEach((metal, index) => {
    goriginalColors01[index] = window.getComputedStyle(metal).backgroundColor;
});
groupA1.addEventListener("click", (e) => {
    e.preventDefault();

    

    let G1_Track = Number(localStorage.getItem("G1_Track")) || 0;

    if (G1_Track === 0) {

localStorage.setItem("G1_Track", 1);
 
        // restore original colors
        CommonD.forEach((metal, index) => {
           metal.style.backgroundColor =" #F2F2F3";});
        
        CommonA.forEach((metal, index) => {
            metal.style.backgroundColor = " #F2F2F3";
             metal.style.color="black";  });
        group1.forEach((metal, index) => {
            metal.style.backgroundColor = goriginalColors1[index];
            
        });
        group01.forEach((metal, index) => {
            metal.style.backgroundColor = goriginalColors01[index];
            metal.style.color="white";
        
        });

    } else {
        localStorage.setItem("G1_Track", 0);

        // remove colors
        group1.forEach(metal => {
            metal.style.backgroundColor =" #F2F2F3";});
        group01.forEach(metal => {
            metal.style.backgroundColor = " #F2F2F3";
            metal.style.color="black"; });

        CommonD.forEach((metal, index) => {
            metal.style.backgroundColor = CoriginalColors1[index];
            
        });
        CommonA.forEach((metal, index) => {
            metal.style.backgroundColor = CoriginalColors2[index];
            metal.style.color="white"; 
        });

    }
});
//showing  G2 in periodic table
let group2=document.querySelectorAll(".G2");
let group02=document.querySelectorAll(".G02");
let groupA2=document.querySelector(".G2B");
let goriginalColors2 = [];
let goriginalColors02= [];

group2.forEach((metal, index) => {
    goriginalColors2[index] = window.getComputedStyle(metal).backgroundColor;
    
});
group02.forEach((metal, index) => {
    goriginalColors02[index] = window.getComputedStyle(metal).backgroundColor;
});
groupA2.addEventListener("click", (e) => {
    e.preventDefault();

    

    let G2_Track = Number(localStorage.getItem("G2_Track")) || 0;

    if (G2_Track === 0) {

localStorage.setItem("G2_Track", 1);
 
        // restore original colors
        CommonD.forEach((metal, index) => {
           metal.style.backgroundColor =" #F2F2F3";});
        
        CommonA.forEach((metal, index) => {
            metal.style.backgroundColor = " #F2F2F3";
             metal.style.color="black";  });
        group2.forEach((metal, index) => {
            metal.style.backgroundColor = goriginalColors2[index];
            
        });
        group02.forEach((metal, index) => {
            metal.style.backgroundColor = goriginalColors02[index];
            metal.style.color="white";
        
        });

    } else {
        localStorage.setItem("G2_Track", 0);

        // remove colors
        group2.forEach(metal => {
            metal.style.backgroundColor =" #F2F2F3";});
        group02.forEach(metal => {
            metal.style.backgroundColor = " #F2F2F3";
            metal.style.color="black"; });

        CommonD.forEach((metal, index) => {
            metal.style.backgroundColor = CoriginalColors1[index];
            
        });
        CommonA.forEach((metal, index) => {
            metal.style.backgroundColor = CoriginalColors2[index];
            metal.style.color="white"; 
        });

    }
});
//showing  G3 in periodic table
let group3=document.querySelectorAll(".G3");
let group03=document.querySelectorAll(".G03");
let groupA3=document.querySelector(".G3B");
let goriginalColors3 = [];
let goriginalColors03= [];

group3.forEach((metal, index) => {
    goriginalColors3[index] = window.getComputedStyle(metal).backgroundColor;
    
});
group03.forEach((metal, index) => {
    goriginalColors03[index] = window.getComputedStyle(metal).backgroundColor;
});
groupA3.addEventListener("click", (e) => {
    e.preventDefault();

    

    let G3_Track = Number(localStorage.getItem("G3_Track")) || 0;

    if (G3_Track === 0) {

localStorage.setItem("G3_Track", 1);
 
        // restore original colors
        CommonD.forEach((metal, index) => {
           metal.style.backgroundColor =" #F2F2F3";});
        
        CommonA.forEach((metal, index) => {
            metal.style.backgroundColor = " #F2F2F3";
             metal.style.color="black";  });
        group3.forEach((metal, index) => {
            metal.style.backgroundColor = goriginalColors3[index];
            
        });
        group03.forEach((metal, index) => {
            metal.style.backgroundColor = goriginalColors03[index];
            metal.style.color="white";
        
        });

    } else {
        localStorage.setItem("G3_Track", 0);

        // remove colors
        group3.forEach(metal => {
            metal.style.backgroundColor =" #F2F2F3";});
        group03.forEach(metal => {
            metal.style.backgroundColor = " #F2F2F3";
            metal.style.color="black"; });

        CommonD.forEach((metal, index) => {
            metal.style.backgroundColor = CoriginalColors1[index];
            
        });
        CommonA.forEach((metal, index) => {
            metal.style.backgroundColor = CoriginalColors2[index];
            metal.style.color="white"; 
        });

    }
});

//showing  G4 in periodic table
let group4=document.querySelectorAll(".G4");
let group04=document.querySelectorAll(".G04");
let groupA4=document.querySelector(".G4B");
let goriginalColors4 = [];
let goriginalColors04= [];

group4.forEach((metal, index) => {
        goriginalColors4[index] = window.getComputedStyle(metal).backgroundColor;
    
});
group04.forEach((metal, index) => {
    goriginalColors04[index] = window.getComputedStyle(metal).backgroundColor;
});
groupA4.addEventListener("click", (e) => {
    e.preventDefault();

    

    let G4_Track = Number(localStorage.getItem("G4_Track")) || 0;

    if (G4_Track === 0) {

localStorage.setItem("G4_Track", 1);
 
        // restore original colors
        CommonD.forEach((metal, index) => {
           metal.style.backgroundColor =" #F2F2F3";});
        
        CommonA.forEach((metal, index) => {
            metal.style.backgroundColor = " #F2F2F3";
             metal.style.color="black";  });
        group4.forEach((metal, index) => {
            metal.style.backgroundColor = goriginalColors4[index];
            
        });
        group04.forEach((metal, index) => {
            metal.style.backgroundColor = goriginalColors04[index];
            metal.style.color="white";
        
        });

    } else {
        localStorage.setItem("G4_Track", 0);

        // remove colors
        group4.forEach(metal => {
            metal.style.backgroundColor =" #F2F2F3";});
        group04.forEach(metal => {
            metal.style.backgroundColor = " #F2F2F3";
            metal.style.color="black"; });

        CommonD.forEach((metal, index) => {
            metal.style.backgroundColor = CoriginalColors1[index];
            
        });
        CommonA.forEach((metal, index) => {
            metal.style.backgroundColor = CoriginalColors2[index];
            metal.style.color="white"; 
        });

    }
});

//showing  G5 in periodic table
let group5=document.querySelectorAll(".G5");
let group05=document.querySelectorAll(".G05");
let groupA5=document.querySelector(".G5B");
let goriginalColors5 = [];
let goriginalColors05= [];

group5.forEach((metal, index) => {
        goriginalColors5[index] = window.getComputedStyle(metal).backgroundColor;
    
});
group05.forEach((metal, index) => {
    goriginalColors05[index] = window.getComputedStyle(metal).backgroundColor;
});
groupA5.addEventListener("click", (e) => {
    e.preventDefault();

    

    let G5_Track = Number(localStorage.getItem("G5_Track")) || 0;

    if (G5_Track === 0) {

localStorage.setItem("G5_Track", 1);
 
        // restore original colors
        CommonD.forEach((metal, index) => {
           metal.style.backgroundColor =" #F2F2F3";});
        
        CommonA.forEach((metal, index) => {
            metal.style.backgroundColor = " #F2F2F3";
             metal.style.color="black";  });
        group5.forEach((metal, index) => {
            metal.style.backgroundColor = goriginalColors5[index];
            
        });
        group05.forEach((metal, index) => {
            metal.style.backgroundColor = goriginalColors05[index];
            metal.style.color="white";
        
        });

    } else {
        localStorage.setItem("G5_Track", 0);

        // remove colors
        group5.forEach(metal => {
            metal.style.backgroundColor =" #F2F2F3";});
        group05.forEach(metal => {
            metal.style.backgroundColor = " #F2F2F3";
            metal.style.color="black"; });

        CommonD.forEach((metal, index) => {
            metal.style.backgroundColor = CoriginalColors1[index];
            
        });
        CommonA.forEach((metal, index) => {
            metal.style.backgroundColor = CoriginalColors2[index];
            metal.style.color="white"; 
        });

    }
});
//showing  G6 in periodic table
let group6=document.querySelectorAll(".G6");
let group06=document.querySelectorAll(".G06");
let groupA6=document.querySelector(".G6B");
let goriginalColors6 = [];
let goriginalColors06= [];

group6.forEach((metal, index) => {
        goriginalColors6[index] = window.getComputedStyle(metal).backgroundColor;
    
});
group06.forEach((metal, index) => {
    goriginalColors06[index] = window.getComputedStyle(metal).backgroundColor;
});
groupA6.addEventListener("click", (e) => {
    e.preventDefault();

    

    let G6_Track = Number(localStorage.getItem("G6_Track")) || 0;

    if (G6_Track === 0) {

localStorage.setItem("G6_Track", 1);
 
        // restore original colors
        CommonD.forEach((metal, index) => {
           metal.style.backgroundColor =" #F2F2F3";});
        
        CommonA.forEach((metal, index) => {
            metal.style.backgroundColor = " #F2F2F3";
             metal.style.color="black";  });
        group6.forEach((metal, index) => {
            metal.style.backgroundColor = goriginalColors6[index];
            
        });
        group06.forEach((metal, index) => {
            metal.style.backgroundColor = goriginalColors06[index];
            metal.style.color="white";
        
        });

    } else {
        localStorage.setItem("G6_Track", 0);

        // remove colors
        group6.forEach(metal => {
            metal.style.backgroundColor =" #F2F2F3";});
        group06.forEach(metal => {
            metal.style.backgroundColor = " #F2F2F3";
            metal.style.color="black"; });

        CommonD.forEach((metal, index) => {
            metal.style.backgroundColor = CoriginalColors1[index];
            
        });
        CommonA.forEach((metal, index) => {
            metal.style.backgroundColor = CoriginalColors2[index];
            metal.style.color="white"; 
        });

    }
});
//showing  G7 in periodic table
let group7=document.querySelectorAll(".G7");
let group07=document.querySelectorAll(".G07");
let groupA7=document.querySelector(".G7B");
let goriginalColors7 = [];
let goriginalColors07= [];

group7.forEach((metal, index) => {
        goriginalColors7[index] = window.getComputedStyle(metal).backgroundColor;
    
});
group07.forEach((metal, index) => {
    goriginalColors07[index] = window.getComputedStyle(metal).backgroundColor;
});
groupA7.addEventListener("click", (e) => {
    e.preventDefault();

    

    let G7_Track = Number(localStorage.getItem("G7_Track")) || 0;

    if (G7_Track === 0) {

localStorage.setItem("G7_Track", 1);
 
        // restore original colors
        CommonD.forEach((metal, index) => {
           metal.style.backgroundColor =" #F2F2F3";});
        
        CommonA.forEach((metal, index) => {
            metal.style.backgroundColor = " #F2F2F3";
             metal.style.color="black";  });
        group7.forEach((metal, index) => {
            metal.style.backgroundColor = goriginalColors7[index];
            
        });
        group07.forEach((metal, index) => {
            metal.style.backgroundColor = goriginalColors07[index];
            metal.style.color="white";
        
        });

    } else {
        localStorage.setItem("G7_Track", 0);

        // remove colors
        group7.forEach(metal => {
            metal.style.backgroundColor =" #F2F2F3";});
        group07.forEach(metal => {
            metal.style.backgroundColor = " #F2F2F3";
            metal.style.color="black"; });

        CommonD.forEach((metal, index) => {
            metal.style.backgroundColor = CoriginalColors1[index];
            
        });
        CommonA.forEach((metal, index) => {
            metal.style.backgroundColor = CoriginalColors2[index];
            metal.style.color="white"; 
        });

    }
});
   

//showing  G8 in periodic table
let group8=document.querySelectorAll(".G8");
let group08=document.querySelectorAll(".G08");
let groupA8=document.querySelector(".G8B");
let goriginalColors8 = [];
let goriginalColors08= [];

group8.forEach((metal, index) => {
        goriginalColors8[index] = window.getComputedStyle(metal).backgroundColor;
    
});
group08.forEach((metal, index) => {
    goriginalColors08[index] = window.getComputedStyle(metal).backgroundColor;
});
groupA8.addEventListener("click", (e) => {
    e.preventDefault();

    

    let G8_Track = Number(localStorage.getItem("G8_Track")) || 0;

    if (G8_Track === 0) {

localStorage.setItem("G8_Track", 1);
 
        // restore original colors
        CommonD.forEach((metal, index) => {
           metal.style.backgroundColor =" #F2F2F3";});
        
        CommonA.forEach((metal, index) => {
            metal.style.backgroundColor = " #F2F2F3";
             metal.style.color="black";  });
        group8.forEach((metal, index) => {
            metal.style.backgroundColor = goriginalColors8[index];
            
        });
        group08.forEach((metal, index) => {
            metal.style.backgroundColor = goriginalColors08[index];
            metal.style.color="white";
        
        });

    } else {
        localStorage.setItem("G8_Track", 0);

        // remove colors
        group8.forEach(metal => {
            metal.style.backgroundColor =" #F2F2F3";});
        group08.forEach(metal => {
            metal.style.backgroundColor = " #F2F2F3";
            metal.style.color="black"; });

        CommonD.forEach((metal, index) => {
            metal.style.backgroundColor = CoriginalColors1[index];
            
        });
        CommonA.forEach((metal, index) => {
            metal.style.backgroundColor = CoriginalColors2[index];
            metal.style.color="white"; 
        });

    }
});
   
//showing  G9 in periodic table
let group9=document.querySelectorAll(".G9");
let group09=document.querySelectorAll(".G09");
let groupA9=document.querySelector(".G9B");
let goriginalColors9 = [];
let goriginalColors09= [];

group9.forEach((metal, index) => {
        goriginalColors9[index] = window.getComputedStyle(metal).backgroundColor;
    
});
group09.forEach((metal, index) => {
    goriginalColors09[index] = window.getComputedStyle(metal).backgroundColor;
});
groupA9.addEventListener("click", (e) => {
    e.preventDefault();

    

    let G9_Track = Number(localStorage.getItem("G9_Track")) || 0;

    if (G9_Track === 0) {

localStorage.setItem("G9_Track", 1);
 
        // restore original colors
        CommonD.forEach((metal, index) => {
           metal.style.backgroundColor =" #F2F2F3";});
        
        CommonA.forEach((metal, index) => {
            metal.style.backgroundColor = " #F2F2F3";
             metal.style.color="black";  });
        group9.forEach((metal, index) => {
            metal.style.backgroundColor = goriginalColors9[index];
            
        });
        group09.forEach((metal, index) => {
            metal.style.backgroundColor = goriginalColors09[index];
            metal.style.color="white";
        
        });

    } else {
        localStorage.setItem("G9_Track", 0);

        // remove colors
        group9.forEach(metal => {
            metal.style.backgroundColor =" #F2F2F3";});
        group09.forEach(metal => {
            metal.style.backgroundColor = " #F2F2F3";
            metal.style.color="black"; });

        CommonD.forEach((metal, index) => {
            metal.style.backgroundColor = CoriginalColors1[index];
            
        });
        CommonA.forEach((metal, index) => {
            metal.style.backgroundColor = CoriginalColors2[index];
            metal.style.color="white"; 
        });

    }
});
   

//showing  G10 in periodic table
let group10=document.querySelectorAll(".G10");
let group010=document.querySelectorAll(".G010");
let groupA10=document.querySelector(".G10B");
let goriginalColors10 = [];
let goriginalColors010= [];

group10.forEach((metal, index) => {
        goriginalColors10[index] = window.getComputedStyle(metal).backgroundColor;
    
});
group010.forEach((metal, index) => {
    goriginalColors010[index] = window.getComputedStyle(metal).backgroundColor;
});
groupA10.addEventListener("click", (e) => {
    e.preventDefault();

    

    let G10_Track = Number(localStorage.getItem("G10_Track")) || 0;

    if (G10_Track === 0) {

localStorage.setItem("G10_Track", 1);
 
        // restore original colors
        CommonD.forEach((metal, index) => {
           metal.style.backgroundColor =" #F2F2F3";});
        
        CommonA.forEach((metal, index) => {
            metal.style.backgroundColor = " #F2F2F3";
             metal.style.color="black";  });
        group10.forEach((metal, index) => {
            metal.style.backgroundColor = goriginalColors10[index];
            
        });
        group010.forEach((metal, index) => {
            metal.style.backgroundColor = goriginalColors010[index];
            metal.style.color="white";
        
        });

    } else {
        localStorage.setItem("G10_Track", 0);

        // remove colors
        group10.forEach(metal => {
            metal.style.backgroundColor =" #F2F2F3";});
        group010.forEach(metal => {
            metal.style.backgroundColor = " #F2F2F3";
            metal.style.color="black"; });

        CommonD.forEach((metal, index) => {
            metal.style.backgroundColor = CoriginalColors1[index];
            
        });
        CommonA.forEach((metal, index) => {
            metal.style.backgroundColor = CoriginalColors2[index];
            metal.style.color="white"; 
        });

    }
});

//showing  G11 in periodic table
let group11=document.querySelectorAll(".G11");
let group011=document.querySelectorAll(".G011");
let groupA11=document.querySelector(".G11B");
let goriginalColors11 = [];
let goriginalColors011= [];

group11.forEach((metal, index) => {
        goriginalColors11[index] = window.getComputedStyle(metal).backgroundColor;
    
});
group011.forEach((metal, index) => {
    goriginalColors011[index] = window.getComputedStyle(metal).backgroundColor;
});
groupA11.addEventListener("click", (e) => {
    e.preventDefault();

    

    let G11_Track = Number(localStorage.getItem("G11_Track")) || 0;

    if (G11_Track === 0) {

localStorage.setItem("G11_Track", 1);
 
        // restore original colors
        CommonD.forEach((metal, index) => {
           metal.style.backgroundColor =" #F2F2F3";});
        
        CommonA.forEach((metal, index) => {
            metal.style.backgroundColor = " #F2F2F3";
             metal.style.color="black";  });
        group11.forEach((metal, index) => {
            metal.style.backgroundColor = goriginalColors11[index];
            
        });
        group011.forEach((metal, index) => {
            metal.style.backgroundColor = goriginalColors011[index];
            metal.style.color="white";
        
        });

    } else {
        localStorage.setItem("G11_Track", 0);

        // remove colors
        group11.forEach(metal => {
            metal.style.backgroundColor =" #F2F2F3";});
        group011.forEach(metal => {
            metal.style.backgroundColor = " #F2F2F3";
            metal.style.color="black"; });

        CommonD.forEach((metal, index) => {
            metal.style.backgroundColor = CoriginalColors1[index];
            
        });
        CommonA.forEach((metal, index) => {
            metal.style.backgroundColor = CoriginalColors2[index];
            metal.style.color="white"; 
        });

    }
});

//showing  G12 in periodic table
let group12=document.querySelectorAll(".G12");
let group012=document.querySelectorAll(".G012");
let groupA12=document.querySelector(".G12B");
let goriginalColors12 = [];
let goriginalColors012= [];

group12.forEach((metal, index) => {
        goriginalColors12[index] = window.getComputedStyle(metal).backgroundColor;
    
});
group012.forEach((metal, index) => {
    goriginalColors012[index] = window.getComputedStyle(metal).backgroundColor;
});
groupA12.addEventListener("click", (e) => {
    e.preventDefault();

    

    let G12_Track = Number(localStorage.getItem("G12_Track")) || 0;

    if (G12_Track === 0) {

localStorage.setItem("G12_Track", 1);
 
        // restore original colors
        CommonD.forEach((metal, index) => {
           metal.style.backgroundColor =" #F2F2F3";});
        
        CommonA.forEach((metal, index) => {
            metal.style.backgroundColor = " #F2F2F3";
             metal.style.color="black";  });
        group12.forEach((metal, index) => {
            metal.style.backgroundColor = goriginalColors12[index];
            
        });
        group012.forEach((metal, index) => {
            metal.style.backgroundColor = goriginalColors012[index];
            metal.style.color="white";
        
        });

    } else {
        localStorage.setItem("G12_Track", 0);

        // remove colors
        group12.forEach(metal => {
            metal.style.backgroundColor =" #F2F2F3";});
        group012.forEach(metal => {
            metal.style.backgroundColor = " #F2F2F3";
            metal.style.color="black"; });

        CommonD.forEach((metal, index) => {
            metal.style.backgroundColor = CoriginalColors1[index];
            
        });
        CommonA.forEach((metal, index) => {
            metal.style.backgroundColor = CoriginalColors2[index];
            metal.style.color="white"; 
        });

    }
});

//showing  G13 in periodic table
let group13=document.querySelectorAll(".G13");
let group013=document.querySelectorAll(".G013");
let groupA13=document.querySelector(".G13B");
let goriginalColors13 = [];
let goriginalColors013= [];

group13.forEach((metal, index) => {
        goriginalColors13[index] = window.getComputedStyle(metal).backgroundColor;
    
});
group013.forEach((metal, index) => {
    goriginalColors013[index] = window.getComputedStyle(metal).backgroundColor;
});
groupA13.addEventListener("click", (e) => {
    e.preventDefault();

    

    let G13_Track = Number(localStorage.getItem("G13_Track")) || 0;

    if (G13_Track === 0) {

localStorage.setItem("G13_Track", 1);
 
        // restore original colors
        CommonD.forEach((metal, index) => {
           metal.style.backgroundColor =" #F2F2F3";});
        
        CommonA.forEach((metal, index) => {
            metal.style.backgroundColor = " #F2F2F3";
             metal.style.color="black";  });
        group13.forEach((metal, index) => {
            metal.style.backgroundColor = goriginalColors13[index];
            
        });
        group013.forEach((metal, index) => {
            metal.style.backgroundColor = goriginalColors013[index];
            metal.style.color="white";
        
        });

    } else {
        localStorage.setItem("G13_Track", 0);

        // remove colors
        group13.forEach(metal => {
            metal.style.backgroundColor =" #F2F2F3";});
        group013.forEach(metal => {
            metal.style.backgroundColor = " #F2F2F3";
            metal.style.color="black"; });

        CommonD.forEach((metal, index) => {
            metal.style.backgroundColor = CoriginalColors1[index];
            
        });
        CommonA.forEach((metal, index) => {
            metal.style.backgroundColor = CoriginalColors2[index];
            metal.style.color="white"; 
        });

    }
});

//showing  G14 in periodic table
let group14=document.querySelectorAll(".G14");
let group014=document.querySelectorAll(".G014");
let groupA14=document.querySelector(".G14B");
let goriginalColors14 = [];
let goriginalColors014= [];

group14.forEach((metal, index) => {
        goriginalColors14[index] = window.getComputedStyle(metal).backgroundColor;
    
});
group014.forEach((metal, index) => {
    goriginalColors014[index] = window.getComputedStyle(metal).backgroundColor;
});
groupA14.addEventListener("click", (e) => {
    e.preventDefault();

    

    let G14_Track = Number(localStorage.getItem("G14_Track")) || 0;

    if (G14_Track === 0) {

localStorage.setItem("G14_Track", 1);
 
        // restore original colors
        CommonD.forEach((metal, index) => {
           metal.style.backgroundColor =" #F2F2F3";});
        
        CommonA.forEach((metal, index) => {
            metal.style.backgroundColor = " #F2F2F3";
             metal.style.color="black";  });
        group14.forEach((metal, index) => {
            metal.style.backgroundColor = goriginalColors14[index];
            
        });
        group014.forEach((metal, index) => {
            metal.style.backgroundColor = goriginalColors014[index];
            metal.style.color="white";
        
        });

    } else {
        localStorage.setItem("G14_Track", 0);

        // remove colors
        group14.forEach(metal => {
            metal.style.backgroundColor =" #F2F2F3";});
        group014.forEach(metal => {
            metal.style.backgroundColor = " #F2F2F3";
            metal.style.color="black"; });

        CommonD.forEach((metal, index) => {
            metal.style.backgroundColor = CoriginalColors1[index];
            
        });
        CommonA.forEach((metal, index) => {
            metal.style.backgroundColor = CoriginalColors2[index];
            metal.style.color="white"; 
        });

    }
});
   

//showing  G15 in periodic table
let group15=document.querySelectorAll(".G15");
let group015=document.querySelectorAll(".G015");
let groupA15=document.querySelector(".G15B");
let goriginalColors15 = [];
let goriginalColors015= [];

group15.forEach((metal, index) => {
        goriginalColors15[index] = window.getComputedStyle(metal).backgroundColor;
    
});
group015.forEach((metal, index) => {
    goriginalColors015[index] = window.getComputedStyle(metal).backgroundColor;
});
groupA15.addEventListener("click", (e) => {
    e.preventDefault();

    

    let G15_Track = Number(localStorage.getItem("G15_Track")) || 0;

    if (G15_Track === 0) {

localStorage.setItem("G15_Track", 1);
 
        // restore original colors
        CommonD.forEach((metal, index) => {
           metal.style.backgroundColor =" #F2F2F3";});
        
        CommonA.forEach((metal, index) => {
            metal.style.backgroundColor = " #F2F2F3";
             metal.style.color="black";  });
        group15.forEach((metal, index) => {
            metal.style.backgroundColor = goriginalColors15[index];
            
        });
        group015.forEach((metal, index) => {
            metal.style.backgroundColor = goriginalColors015[index];
            metal.style.color="white";
        
        });

    } else {
        localStorage.setItem("G15_Track", 0);

        // remove colors
        group15.forEach(metal => {
            metal.style.backgroundColor =" #F2F2F3";});
        group015.forEach(metal => {
            metal.style.backgroundColor = " #F2F2F3";
            metal.style.color="black"; });

        CommonD.forEach((metal, index) => {
            metal.style.backgroundColor = CoriginalColors1[index];
            
        });
        CommonA.forEach((metal, index) => {
            metal.style.backgroundColor = CoriginalColors2[index];
            metal.style.color="white"; 
        });

    }
});
//showing  G16 in periodic table
let group16=document.querySelectorAll(".G16");
let group016=document.querySelectorAll(".G016");
let groupA16=document.querySelector(".G16B");
let goriginalColors16 = [];
let goriginalColors016= [];

group16.forEach((metal, index) => {
        goriginalColors16[index] = window.getComputedStyle(metal).backgroundColor;
    
});
group016.forEach((metal, index) => {
    goriginalColors016[index] = window.getComputedStyle(metal).backgroundColor;
});
groupA16.addEventListener("click", (e) => {
    e.preventDefault();

    

    let G16_Track = Number(localStorage.getItem("G16_Track")) || 0;

    if (G16_Track === 0) {

localStorage.setItem("G16_Track", 1);
 
        // restore original colors
        CommonD.forEach((metal, index) => {
           metal.style.backgroundColor =" #F2F2F3";});
        
        CommonA.forEach((metal, index) => {
            metal.style.backgroundColor = " #F2F2F3";
             metal.style.color="black";  });
        group16.forEach((metal, index) => {
            metal.style.backgroundColor = goriginalColors16[index];
            
        });
        group016.forEach((metal, index) => {
            metal.style.backgroundColor = goriginalColors016[index];
            metal.style.color="white";
        
        });

    } else {
        localStorage.setItem("G16_Track", 0);

        // remove colors
        group16.forEach(metal => {
            metal.style.backgroundColor =" #F2F2F3";});
        group016.forEach(metal => {
            metal.style.backgroundColor = " #F2F2F3";
            metal.style.color="black"; });

        CommonD.forEach((metal, index) => {
            metal.style.backgroundColor = CoriginalColors1[index];
            
        });
        CommonA.forEach((metal, index) => {
            metal.style.backgroundColor = CoriginalColors2[index];
            metal.style.color="white"; 
        });

    }
});
   
//showing  G17 in periodic table
let group17=document.querySelectorAll(".G17");
let group017=document.querySelectorAll(".G017");
let groupA17=document.querySelector(".G17B");
let goriginalColors17 = [];
let goriginalColors017= [];

group17.forEach((metal, index) => {
        goriginalColors17[index] = window.getComputedStyle(metal).backgroundColor;
    
});
group017.forEach((metal, index) => {
    goriginalColors017[index] = window.getComputedStyle(metal).backgroundColor;
});
groupA17.addEventListener("click", (e) => {
    e.preventDefault();

    

    let G17_Track = Number(localStorage.getItem("G17_Track")) || 0;

    if (G17_Track === 0) {

localStorage.setItem("G17_Track", 1);
 
        // restore original colors
        CommonD.forEach((metal, index) => {
           metal.style.backgroundColor =" #F2F2F3";});
        
        CommonA.forEach((metal, index) => {
            metal.style.backgroundColor = " #F2F2F3";
             metal.style.color="black";  });
        group17.forEach((metal, index) => {
            metal.style.backgroundColor = goriginalColors17[index];
            
        });
        group017.forEach((metal, index) => {
            metal.style.backgroundColor = goriginalColors017[index];
            metal.style.color="white";
        
        });

    } else {
        localStorage.setItem("G17_Track", 0);

        // remove colors
        group17.forEach(metal => {
            metal.style.backgroundColor =" #F2F2F3";});
        group017.forEach(metal => {
            metal.style.backgroundColor = " #F2F2F3";
            metal.style.color="black"; });

        CommonD.forEach((metal, index) => {
            metal.style.backgroundColor = CoriginalColors1[index];
            
        });
        CommonA.forEach((metal, index) => {
            metal.style.backgroundColor = CoriginalColors2[index];
            metal.style.color="white"; 
        });

    }
});
   
//showing  G18 in periodic table
let group18=document.querySelectorAll(".G18");
let group018=document.querySelectorAll(".G018");
let groupA18=document.querySelector(".G18B");
let goriginalColors18 = [];
let goriginalColors018= [];

group18.forEach((metal, index) => {
        goriginalColors18[index] = window.getComputedStyle(metal).backgroundColor;
    
});
group018.forEach((metal, index) => {
    goriginalColors018[index] = window.getComputedStyle(metal).backgroundColor;
});
groupA18.addEventListener("click", (e) => {
    e.preventDefault();

    

    let G18_Track = Number(localStorage.getItem("G18_Track")) || 0;

    if (G18_Track === 0) {

localStorage.setItem("G18_Track", 1);
 
        // restore original colors
        CommonD.forEach((metal, index) => {
           metal.style.backgroundColor =" #F2F2F3";});
        
        CommonA.forEach((metal, index) => {
            metal.style.backgroundColor = " #F2F2F3";
             metal.style.color="black";  });
        group18.forEach((metal, index) => {
            metal.style.backgroundColor = goriginalColors18[index];
            
        });
        group018.forEach((metal, index) => {
            metal.style.backgroundColor = goriginalColors018[index];
            metal.style.color="white";
        
        });

    } else {
        localStorage.setItem("G18_Track", 0);

        // remove colors
        group18.forEach(metal => {
            metal.style.backgroundColor =" #F2F2F3";});
        group018.forEach(metal => {
            metal.style.backgroundColor = " #F2F2F3";
            metal.style.color="black"; });

        CommonD.forEach((metal, index) => {
            metal.style.backgroundColor = CoriginalColors1[index];
            
        });
        CommonA.forEach((metal, index) => {
            metal.style.backgroundColor = CoriginalColors2[index];
            metal.style.color="white"; 
        });

    }
});
//SHOWING periods in periodic table

//showing period 1 in periodic table
let period1=document.querySelectorAll(".P1");
let period01=document.querySelectorAll(".P01");
let periodA1=document.querySelector(".P1B");
let poriginalColors1 = [];
let poriginalColors01= [];

period1.forEach((metal, index) => {
        poriginalColors1[index] = window.getComputedStyle(metal).backgroundColor;
    
});
period01.forEach((metal, index) => {
    poriginalColors01[index] = window.getComputedStyle(metal).backgroundColor;
});
periodA1.addEventListener("click", (e) => {
    e.preventDefault();

    

    let p1_Track = Number(localStorage.getItem("p1_Track")) || 0;

    if (p1_Track === 0) {

localStorage.setItem("p1_Track", 1);
 
        // restore original colors
        CommonD.forEach((metal, index) => {
           metal.style.backgroundColor =" #F2F2F3";});
        
        CommonA.forEach((metal, index) => {
            metal.style.backgroundColor = " #F2F2F3";
             metal.style.color="black";  });
        period1.forEach((metal, index) => {
            metal.style.backgroundColor = poriginalColors1[index];
            
        });
        period01.forEach((metal, index) => {
            metal.style.backgroundColor = poriginalColors01[index];
            metal.style.color="white";
        
        });

    } else {
        localStorage.setItem("p1_Track", 0);

        // remove colors
        period1.forEach(metal => {
            metal.style.backgroundColor =" #F2F2F3";});
        period01.forEach(metal => {
            metal.style.backgroundColor = " #F2F2F3";
            metal.style.color="black"; });

        CommonD.forEach((metal, index) => {
            metal.style.backgroundColor = CoriginalColors1[index];
            
        });
        CommonA.forEach((metal, index) => {
            metal.style.backgroundColor = CoriginalColors2[index];
            metal.style.color="white"; 
        });

    }
});

//showing  period 2 in periodic table
let period2=document.querySelectorAll(".P2");
let period02=document.querySelectorAll(".P02");
let periodA2=document.querySelector(".P2B");
let poriginalColors2 = [];
let poriginalColors02= [];

period2.forEach((metal, index) => {
        poriginalColors2[index] = window.getComputedStyle(metal).backgroundColor;
    
});
period02.forEach((metal, index) => {
    poriginalColors02[index] = window.getComputedStyle(metal).backgroundColor;
});
periodA2.addEventListener("click", (e) => {
    e.preventDefault();

    

    let p2_Track = Number(localStorage.getItem("p2_Track")) || 0;

    if (p2_Track === 0) {

localStorage.setItem("p2_Track", 1);
 
        // restore original colors
        CommonD.forEach((metal, index) => {
           metal.style.backgroundColor =" #F2F2F3";});
        
        CommonA.forEach((metal, index) => {
            metal.style.backgroundColor = " #F2F2F3";
             metal.style.color="black";  });
        period2.forEach((metal, index) => {
            metal.style.backgroundColor = poriginalColors2[index];
            
        });
        period02.forEach((metal, index) => {
            metal.style.backgroundColor = poriginalColors02[index];
            metal.style.color="white";
        
        });

    } else {
        localStorage.setItem("p2_Track", 0);

        // remove colors
        period2.forEach(metal => {
            metal.style.backgroundColor =" #F2F2F3";});
        period02.forEach(metal => {
            metal.style.backgroundColor = " #F2F2F3";
            metal.style.color="black"; });

        CommonD.forEach((metal, index) => {
            metal.style.backgroundColor = CoriginalColors1[index];
            
        });
        CommonA.forEach((metal, index) => {
            metal.style.backgroundColor = CoriginalColors2[index];
            metal.style.color="white"; 
        });

    }
});
//showing  period 3 in periodic table
let period3=document.querySelectorAll(".P3");
let period03=document.querySelectorAll(".P03");
let periodA3=document.querySelector(".P3B");
let poriginalColors3 = [];
let poriginalColors03= [];

period3.forEach((metal, index) => {
        poriginalColors3[index] = window.getComputedStyle(metal).backgroundColor;
    
});
period03.forEach((metal, index) => {
    poriginalColors03[index] = window.getComputedStyle(metal).backgroundColor;
});
periodA3.addEventListener("click", (e) => {
    e.preventDefault();

    

    let p3_Track = Number(localStorage.getItem("p3_Track")) || 0;

    if (p3_Track === 0) {

localStorage.setItem("p3_Track", 1);
 
        // restore original colors
        CommonD.forEach((metal, index) => {
           metal.style.backgroundColor =" #F2F2F3";});
        
        CommonA.forEach((metal, index) => {
            metal.style.backgroundColor = " #F2F2F3";
             metal.style.color="black";  });
        period3.forEach((metal, index) => {
            metal.style.backgroundColor = poriginalColors3[index];
            
        });
        period03.forEach((metal, index) => {
            metal.style.backgroundColor = poriginalColors03[index];
            metal.style.color="white";
        
        });

    } else {
        localStorage.setItem("p3_Track", 0);

        // remove colors
        period3.forEach(metal => {
            metal.style.backgroundColor =" #F2F2F3";});
        period03.forEach(metal => {
            metal.style.backgroundColor = " #F2F2F3";
            metal.style.color="black"; });

        CommonD.forEach((metal, index) => {
            metal.style.backgroundColor = CoriginalColors1[index];
            
        });
        CommonA.forEach((metal, index) => {
            metal.style.backgroundColor = CoriginalColors2[index];
            metal.style.color="white"; 
        });

    }
});

//showing  period 4 in periodic table
let period4=document.querySelectorAll(".P4");
let period04=document.querySelectorAll(".P04");
let periodA4=document.querySelector(".P4B");
let poriginalColors4 = [];
let poriginalColors04= [];

period4.forEach((metal, index) => {
        poriginalColors4[index] = window.getComputedStyle(metal).backgroundColor;
    
});
period04.forEach((metal, index) => {
    poriginalColors04[index] = window.getComputedStyle(metal).backgroundColor;
});
periodA4.addEventListener("click", (e) => {
    e.preventDefault();

    

    let p4_Track = Number(localStorage.getItem("p4_Track")) || 0;

    if (p4_Track === 0) {

localStorage.setItem("p4_Track", 1);
 
        // restore original colors
        CommonD.forEach((metal, index) => {
           metal.style.backgroundColor =" #F2F2F3";});
        
        CommonA.forEach((metal, index) => {
            metal.style.backgroundColor = " #F2F2F3";
             metal.style.color="black";  });
        period4.forEach((metal, index) => {
            metal.style.backgroundColor = poriginalColors4[index];
            
        });
        period04.forEach((metal, index) => {
            metal.style.backgroundColor = poriginalColors04[index];
            metal.style.color="white";
        
        });

    } else {
        localStorage.setItem("p4_Track", 0);

        // remove colors
        period4.forEach(metal => {
            metal.style.backgroundColor =" #F2F2F3";});
        period04.forEach(metal => {
            metal.style.backgroundColor = " #F2F2F3";
            metal.style.color="black"; });

        CommonD.forEach((metal, index) => {
            metal.style.backgroundColor = CoriginalColors1[index];
            
        });
        CommonA.forEach((metal, index) => {
            metal.style.backgroundColor = CoriginalColors2[index];
            metal.style.color="white"; 
        });

    }
});

//showing  period 5 in periodic table
let period5=document.querySelectorAll(".P5");
let period05=document.querySelectorAll(".P05");
let periodA5=document.querySelector(".P5B");
let poriginalColors5 = [];
let poriginalColors05= [];

period5.forEach((metal, index) => {
        poriginalColors5[index] = window.getComputedStyle(metal).backgroundColor;
    
});
period05.forEach((metal, index) => {
    poriginalColors05[index] = window.getComputedStyle(metal).backgroundColor;
});
periodA5.addEventListener("click", (e) => {
    e.preventDefault();

    

    let p5_Track = Number(localStorage.getItem("p5_Track")) || 0;

    if (p5_Track === 0) {

localStorage.setItem("p5_Track", 1);
 
        // restore original colors
        CommonD.forEach((metal, index) => {
           metal.style.backgroundColor =" #F2F2F3";});
        
        CommonA.forEach((metal, index) => {
            metal.style.backgroundColor = " #F2F2F3";
             metal.style.color="black";  });
        period5.forEach((metal, index) => {
            metal.style.backgroundColor = poriginalColors5[index];
            
        });
        period05.forEach((metal, index) => {
            metal.style.backgroundColor = poriginalColors05[index];
            metal.style.color="white";
        
        });

    } else {
        localStorage.setItem("p5_Track", 0);

        // remove colors
        period5.forEach(metal => {
            metal.style.backgroundColor =" #F2F2F3";});
        period05.forEach(metal => {
            metal.style.backgroundColor = " #F2F2F3";
            metal.style.color="black"; });

        CommonD.forEach((metal, index) => {
            metal.style.backgroundColor = CoriginalColors1[index];
            
        });
        CommonA.forEach((metal, index) => {
            metal.style.backgroundColor = CoriginalColors2[index];
            metal.style.color="white"; 
        });

    }
});
   
//showing  period 6 in periodic table
let period6=document.querySelectorAll(".P6");
let period06=document.querySelectorAll(".P06");
let periodA6=document.querySelector(".P6B");
let poriginalColors6 = [];
let poriginalColors06= [];

period6.forEach((metal, index) => {
        poriginalColors6[index] = window.getComputedStyle(metal).backgroundColor;
    
});
period06.forEach((metal, index) => {
    poriginalColors06[index] = window.getComputedStyle(metal).backgroundColor;
});
periodA6.addEventListener("click", (e) => {
    e.preventDefault();

    

    let p6_Track = Number(localStorage.getItem("p6_Track")) || 0;

    if (p6_Track === 0) {

localStorage.setItem("p6_Track", 1);
 
        // restore original colors
        CommonD.forEach((metal, index) => {
           metal.style.backgroundColor =" #F2F2F3";});
        
        CommonA.forEach((metal, index) => {
            metal.style.backgroundColor = " #F2F2F3";
             metal.style.color="black";  });
        period6.forEach((metal, index) => {
            metal.style.backgroundColor = poriginalColors6[index];
            
        });
        period06.forEach((metal, index) => {
            metal.style.backgroundColor = poriginalColors06[index];
            metal.style.color="white";
        
        });

    } else {
        localStorage.setItem("p6_Track", 0);

        // remove colors
        period6.forEach(metal => {
            metal.style.backgroundColor =" #F2F2F3";});
        period06.forEach(metal => {
            metal.style.backgroundColor = " #F2F2F3";
            metal.style.color="black"; });

        CommonD.forEach((metal, index) => {
            metal.style.backgroundColor = CoriginalColors1[index];
            
        });
        CommonA.forEach((metal, index) => {
            metal.style.backgroundColor = CoriginalColors2[index];
            metal.style.color="white"; 
        });

    }
});
   
//showing  period 7 in periodic table
let period7=document.querySelectorAll(".P7");
let period07=document.querySelectorAll(".P07");
let periodA7=document.querySelector(".P7B");
let poriginalColors7 = [];
let poriginalColors07= [];

period7.forEach((metal, index) => {
        poriginalColors7[index] = window.getComputedStyle(metal).backgroundColor;
    
});
period07.forEach((metal, index) => {
    poriginalColors07[index] = window.getComputedStyle(metal).backgroundColor;
});
periodA7.addEventListener("click", (e) => {
    e.preventDefault();

    

    let p7_Track = Number(localStorage.getItem("p7_Track")) || 0;

    if (p7_Track === 0) {

localStorage.setItem("p7_Track", 1);
 
        // restore original colors
        CommonD.forEach((metal, index) => {
           metal.style.backgroundColor =" #F2F2F3";});
        
        CommonA.forEach((metal, index) => {
            metal.style.backgroundColor = " #F2F2F3";
             metal.style.color="black";  });
        period7.forEach((metal, index) => {
            metal.style.backgroundColor = poriginalColors7[index];
            
        });
        period07.forEach((metal, index) => {
            metal.style.backgroundColor = poriginalColors07[index];
            metal.style.color="white";
        
        });

    } else {
        localStorage.setItem("p7_Track", 0);

        // remove colors
        period7.forEach(metal => {
            metal.style.backgroundColor =" #F2F2F3";});
        period07.forEach(metal => {
            metal.style.backgroundColor = " #F2F2F3";
            metal.style.color="black"; });

        CommonD.forEach((metal, index) => {
            metal.style.backgroundColor = CoriginalColors1[index];
            
        });
        CommonA.forEach((metal, index) => {
            metal.style.backgroundColor = CoriginalColors2[index];
            metal.style.color="white"; 
        });

    }
});
   //Lanthanide AND Actinide table element

//showing  Lanthanide  in periodic table
let lanth=document.querySelectorAll(".L1");
let lanth01=document.querySelectorAll(".L01");
let lanthanide=document.querySelector(".L1B");
let L_originalColors = [];
let L_originalColors01= [];

lanth.forEach((metal, index) => {
        L_originalColors[index] = window.getComputedStyle(metal).backgroundColor;
    
});
lanth01.forEach((metal, index) => {
    L_originalColors01[index] = window.getComputedStyle(metal).backgroundColor;
});
lanthanide.addEventListener("click", (e) => {
    e.preventDefault();

    

    let p1_Track = Number(localStorage.getItem("p1_Track")) || 0;

    if (p1_Track === 0) {

localStorage.setItem("p1_Track", 1);
 
        // restore original colors
        CommonD.forEach((metal, index) => {
           metal.style.backgroundColor =" #F2F2F3";});
        
        CommonA.forEach((metal, index) => {
            metal.style.backgroundColor = " #F2F2F3";
             metal.style.color="black";  });
        lanth.forEach((metal, index) => {
            metal.style.backgroundColor = L_originalColors[index];
            
        });
        lanth01.forEach((metal, index) => {
            metal.style.backgroundColor = L_originalColors01[index];
            metal.style.color="white";
        
        });

    } else {
        localStorage.setItem("p1_Track", 0);

        // remove colors
        lanth.forEach(metal => {
            metal.style.backgroundColor =" #F2F2F3";});
        lanth01.forEach(metal => {
            metal.style.backgroundColor = " #F2F2F3";
            metal.style.color="black"; });

        CommonD.forEach((metal, index) => {
            metal.style.backgroundColor = CoriginalColors1[index];
            
        });
        CommonA.forEach((metal, index) => {
            metal.style.backgroundColor = CoriginalColors2[index];
            metal.style.color="white"; 
        });

    }
});
   
//showing  Actinide  in periodic table
let Actin=document.querySelectorAll(".A1");
let Actin01=document.querySelectorAll(".A01");
let Actinide=document.querySelector(".A1B");
let A_originalColors = [];
let A_originalColors01= [];

Actin.forEach((metal, index) => {
        A_originalColors[index] = window.getComputedStyle(metal).backgroundColor;
    
});
Actin01.forEach((metal, index) => {
    A_originalColors01[index] = window.getComputedStyle(metal).backgroundColor;
});
Actinide.addEventListener("click", (e) => {
    e.preventDefault();

    

    let p1_Track = Number(localStorage.getItem("p1_Track")) || 0;

    if (p1_Track === 0) {

localStorage.setItem("p1_Track", 1);
 
        // restore original colors
        CommonD.forEach((metal, index) => {
           metal.style.backgroundColor =" #F2F2F3";});
        
        CommonA.forEach((metal, index) => {
            metal.style.backgroundColor = " #F2F2F3";
             metal.style.color="black";  });
        Actin.forEach((metal, index) => {
            metal.style.backgroundColor = A_originalColors[index];
            
        });
        Actin01.forEach((metal, index) => {
            metal.style.backgroundColor = A_originalColors01[index];
            metal.style.color="white";
        
        });

    } else {
        localStorage.setItem("p1_Track", 0);

        // remove colors
        Actin.forEach(metal => {
            metal.style.backgroundColor =" #F2F2F3";});
        Actin01.forEach(metal => {
            metal.style.backgroundColor = " #F2F2F3";
            metal.style.color="black"; });

        CommonD.forEach((metal, index) => {
            metal.style.backgroundColor = CoriginalColors1[index];
            
        });
        CommonA.forEach((metal, index) => {
            metal.style.backgroundColor = CoriginalColors2[index];
            metal.style.color="white"; 
        });

    }
});
   
// clear filter 


let filter=document.querySelector(".filt");

filter.addEventListener("click", (e) => {
    e.preventDefault();

    
     // remove colors
      
        CommonD.forEach((metal, index) => {
            metal.style.backgroundColor = CoriginalColors1[index];
            
        });
        CommonA.forEach((metal, index) => {
            metal.style.backgroundColor = CoriginalColors2[index];
            metal.style.color="white"; 
        });

    


});

//blocks


//showing  S block  in periodic table
let S_block=document.querySelectorAll(".SBE");
let S_block01=document.querySelectorAll(".SBE01");
let S_blockE=document.querySelector(".SBEB");
let SB_originalColors = [];
let SB_originalColors01= [];

S_block.forEach((metal, index) => {
        SB_originalColors[index] = window.getComputedStyle(metal).backgroundColor;
    
});
S_block01.forEach((metal, index) => {
    SB_originalColors01[index] = window.getComputedStyle(metal).backgroundColor;
});
S_blockE.addEventListener("click", (e) => {
    e.preventDefault();

    

    let p1_Track = Number(localStorage.getItem("p1_Track")) || 0;

    if (p1_Track === 0) {

localStorage.setItem("p1_Track", 1);
 
        // restore original colors
        CommonD.forEach((metal, index) => {
           metal.style.backgroundColor =" #F2F2F3";});
        
        CommonA.forEach((metal, index) => {
            metal.style.backgroundColor = " #F2F2F3";
             metal.style.color="black";  });
        S_block.forEach((metal, index) => {
            metal.style.backgroundColor = SB_originalColors[index];
            
        });
        S_block01.forEach((metal, index) => {
            metal.style.backgroundColor = SB_originalColors01[index];
            metal.style.color="white";
        
        });

    } else {
        localStorage.setItem("p1_Track", 0);

        // remove colors
        S_block.forEach(metal => {
            metal.style.backgroundColor =" #F2F2F3";});
        S_block01.forEach(metal => {
            metal.style.backgroundColor = " #F2F2F3";
            metal.style.color="black"; });

        CommonD.forEach((metal, index) => {
            metal.style.backgroundColor = CoriginalColors1[index];
            
        });
        CommonA.forEach((metal, index) => {
            metal.style.backgroundColor = CoriginalColors2[index];
            metal.style.color="white"; 
        });

    }
});
//showing  P block  in periodic table
let P_block=document.querySelectorAll(".PBE");
let P_block01=document.querySelectorAll(".PBE01");
let P_blockE=document.querySelector(".PBEB");
let PB_originalColors = [];
let PB_originalColors01= [];

P_block.forEach((metal, index) => {
        PB_originalColors[index] = window.getComputedStyle(metal).backgroundColor;
    
});
P_block01.forEach((metal, index) => {
    PB_originalColors01[index] = window.getComputedStyle(metal).backgroundColor;
});
P_blockE.addEventListener("click", (e) => {
    e.preventDefault();

    

    let p1_Track = Number(localStorage.getItem("p1_Track")) || 0;

    if (p1_Track === 0) {

localStorage.setItem("p1_Track", 1);
 
        // restore original colors
        CommonD.forEach((metal, index) => {
           metal.style.backgroundColor =" #F2F2F3";});
        
        CommonA.forEach((metal, index) => {
            metal.style.backgroundColor = " #F2F2F3";
             metal.style.color="black";  });
        P_block.forEach((metal, index) => {
            metal.style.backgroundColor = PB_originalColors[index];
            
        });
        P_block01.forEach((metal, index) => {
            metal.style.backgroundColor = PB_originalColors01[index];
            metal.style.color="white";
        
        });

    } else {
        localStorage.setItem("p1_Track", 0);

        // remove colors
        P_block.forEach(metal => {
            metal.style.backgroundColor =" #F2F2F3";});
        P_block01.forEach(metal => {
            metal.style.backgroundColor = " #F2F2F3";
            metal.style.color="black"; });

        CommonD.forEach((metal, index) => {
            metal.style.backgroundColor = CoriginalColors1[index];
            
        });
        CommonA.forEach((metal, index) => {
            metal.style.backgroundColor = CoriginalColors2[index];
            metal.style.color="white"; 
        });

    }
});



//showing  d block  in periodic table
let D_block=document.querySelectorAll(".DBE");
let D_block01=document.querySelectorAll(".DBE01");
let D_blockE=document.querySelector(".DBEB");
let DB_originalColors = [];
let DB_originalColors01= [];

D_block.forEach((metal, index) => {
        DB_originalColors[index] = window.getComputedStyle(metal).backgroundColor;
    
});
D_block01.forEach((metal, index) => {
    DB_originalColors01[index] = window.getComputedStyle(metal).backgroundColor;
});
D_blockE.addEventListener("click", (e) => {
    e.preventDefault();

    

    let p1_Track = Number(localStorage.getItem("p1_Track")) || 0;

    if (p1_Track === 0) {

localStorage.setItem("p1_Track", 1);
 
        // restore original colors
        CommonD.forEach((metal, index) => {
           metal.style.backgroundColor =" #F2F2F3";});
        
        CommonA.forEach((metal, index) => {
            metal.style.backgroundColor = " #F2F2F3";
             metal.style.color="black";  });
        D_block.forEach((metal, index) => {
            metal.style.backgroundColor = DB_originalColors[index];
            
        });
        D_block01.forEach((metal, index) => {
            metal.style.backgroundColor = DB_originalColors01[index];
            metal.style.color="white";
        
        });

    } else {
        localStorage.setItem("p1_Track", 0);

        // remove colors
        D_block.forEach(metal => {
            metal.style.backgroundColor =" #F2F2F3";});
        D_block01.forEach(metal => {
            metal.style.backgroundColor = " #F2F2F3";
            metal.style.color="black"; });

        CommonD.forEach((metal, index) => {
            metal.style.backgroundColor = CoriginalColors1[index];
            
        });
        CommonA.forEach((metal, index) => {
            metal.style.backgroundColor = CoriginalColors2[index];
            metal.style.color="white"; 
        });

    }
});

//showing  F block  in periodic table
let f_block=document.querySelectorAll(".FBE");
let f_block01=document.querySelectorAll(".FBE01");
let f_blockE=document.querySelector(".FBEB");
let fB_originalColors = [];
let fB_originalColors01= [];

f_block.forEach((metal, index) => {
        fB_originalColors[index] = window.getComputedStyle(metal).backgroundColor;
    
});
f_block01.forEach((metal, index) => {
    fB_originalColors01[index] = window.getComputedStyle(metal).backgroundColor;
});
f_blockE.addEventListener("click", (e) => {
    e.preventDefault();

    

    let p1_Track = Number(localStorage.getItem("p1_Track")) || 0;

    if (p1_Track === 0) {

localStorage.setItem("p1_Track", 1);
 
        // restore original colors
        CommonD.forEach((metal, index) => {
           metal.style.backgroundColor =" #F2F2F3";});
        
        CommonA.forEach((metal, index) => {
            metal.style.backgroundColor = " #F2F2F3";
             metal.style.color="black";  });
        f_block.forEach((metal, index) => {
            metal.style.backgroundColor = fB_originalColors[index];
            
        });
        f_block01.forEach((metal, index) => {
            metal.style.backgroundColor = fB_originalColors01[index];
            metal.style.color="white";
        
        });

    } else {
        localStorage.setItem("p1_Track", 0);

        // remove colors
        f_block.forEach(metal => {
            metal.style.backgroundColor =" #F2F2F3";});
        f_block01.forEach(metal => {
            metal.style.backgroundColor = " #F2F2F3";
            metal.style.color="black"; });

        CommonD.forEach((metal, index) => {
            metal.style.backgroundColor = CoriginalColors1[index];
            
        });
        CommonA.forEach((metal, index) => {
            metal.style.backgroundColor = CoriginalColors2[index];
            metal.style.color="white"; 
        });

    }
});



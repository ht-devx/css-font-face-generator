document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const autofill = document.querySelector("button.autofill");
    const reset = document.querySelector("button[type='reset']");
    const fontName = document.querySelector("#fontName");
    const fontWeight = document.querySelector("#fontWeight");
    const fontStyle = document.querySelector("#fontStyle");
    const loadStyle = document.querySelector("#loadStyle");
    const fontURL = document.querySelector("#fontURL");
    const resultsArea = document.querySelector(".results-area");

    /*-------- AUTOFILL BTN --------*/
    autofill.addEventListener("click", e => {
        e.preventDefault();
        fontName.value = "Instrument Sans";
        fontWeight.value = 400;
        fontStyle.value = "normal";
        loadStyle.value = "swap";
        fontURL.value = "https://file.garden/ZRt8jW_MomIqlrfn/fonts/InstrumentSans-Regular.ttf";
    })

    /*-------- RESET BTN --------*/
    reset.addEventListener("click", () => {
        resultsArea.matches(".show") ? resultsArea.classList.remove("show") : null;
    })

    /*-------- GO BTN --------*/
    form.addEventListener("submit", e => {
        e.preventDefault();
        
        resultsArea.matches(".show") ? null : resultsArea.classList.add("show");
        
        let fw = fontWeight.value == 400 ? "" : fontWeight.value.toString();
        let fs = fontStyle.value == "auto" || fontStyle.value == "normal" ? "" : fontStyle.value.toString();
        let ls = loadStyle.value == "auto" ? "" : loadStyle.value.toString();
        
        const res = `@font-face { font-family: "${fontName.value}";${fw !== "" ? " font-weight: " + fw + ";" : ""}${fs !== "" ? " font-style: " + fs + ";" : ""}${ls !== "" ? " font-display: " + ls + ";" : ""} src: url("${fontURL.value}"); }`
        
        
        let y = resultsArea.querySelector(".y");
        y ? y.textContent = res : null;	
        
        
        let a = 350;
        let b = Date.now();
            
        let c = setInterval(() => {
            if(Date.now() - b > 350){
                clearInterval(c)
            } else {
                window.scrollTo(0, document.body.scrollHeight);
            }
        },0)
    })
})//end loaded

popify({
    button: ".crd button",
    popup_selector: ".popup",
    fade_speed: 400,
    exit_options: {
        exit_button: ".close-popup",
        click_outside_to_exit: true,
        escape_key_to_exit: true
    }
})

// Main DOM items

const colorSchemeList = document.getElementById("color-scheme")
const colorPicker = document.getElementById("color-picker")


colorSchemeList.addEventListener("change",function(){
    updateColorBoxes()
})

colorPicker.addEventListener("input",function(){
    updateColorBoxes()
})

// Functions
function updateColorBoxes(){
    let colorValue = colorPicker.value.substring(1)
    let colorscheme = colorSchemeList.value  
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorValue}&mode=${colorscheme}`)
    .then(res => res.json())
    .then(data => {
        const colorMain = document.getElementById("generated-colors")
        colorMain.innerHTML= data.colors.reduce(function(result, colorObject){
            return result += `
                <div class="color-item" style="background-color:${colorObject.hex.value}">
                        <div class="hex-info"> <h4> ${colorObject.hex.value} </h4>
                        </div>
                </div>
            `
        },'')
    })
}

// Initialisation on page load
updateColorBoxes()


var button = document.getElementById("find")
button.addEventListener("click", findCEP)

async function findCEP(){ 
    var cep = document.getElementById("cep")
    try{
        const formattedCep = cep.value.replace(/[^0-9]/g, '')
        const response = await fetch(`https://viacep.com.br/ws/${formattedCep}/json`)
        const data = await response.json()
        print(data)
        return data   
    }catch(error){
        print("erro")
        console.error(error)
    }
}

function print(data){
    var infosBox = document.getElementById("infos")
    infosBox.innerHTML = ""
    if(data == "erro"){
        var errorBox = document.createElement("div") 
        errorBox.className = "err" 
        errorBox.innerText = "CEP inválido"
        infosBox.appendChild(errorBox)
        return
    }
    var cepBox = document.createElement("div") 
    var cepInfos = document.createElement("div") 
    cepInfos.className = "infos" 
    
    cepInfos.innerText = `${data.cep}, ${data.bairro} - ${data.logradouro} -  ${data.localidade} - ${data.uf}`  
         
    cepBox.appendChild(cepInfos)

    infosBox.appendChild(cepBox)
    return    
}
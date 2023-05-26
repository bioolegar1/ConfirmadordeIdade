function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano')
  var res = document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano) {
  		window.alert('Verifique os dados e tente novamente')
    } else {
      	var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ``
        var img = document.createElement(`img`)
        img.setAttribute(`id`, `foto`)

        if (fsex[0].checked) {
          genero = `Homem`;

          if (idade >= 0 && idade < 10) {
            // criança
            img.setAttribute(`src`, `Criança-h.png`);
          } else if (idade < 22) {
            // Jovem
            img.setAttribute(`src`, `jovem-h.png`);
          } else if (idade < 50) {
            // aduto
            img.setAttribute(`src`, `adulto-h.png`);
          } else {
            // Idoso
            img.setAttribute(`src`, `idoso-h.png`);
          }
        } else if (fsex[1].checked) {
          genero = `Mulher`

          if (idade >=0 && idade < 10) {
            // criança
            img.setAttribute(`src`,`criança-m.png`)
          } else if (idade < 22) {
            // Jovem
            img.setAttribute(`src`, `jovem-m.png`)
          } else if (idade < 50) {
            // aduto
            img.setAttribute(`src`, `adulto-m.png`)
          } else  {
            // Idoso
            img.setAttribute(`src`, `idoso-m.png`)
          }
        }
				res.style.textAlign = `center`
				res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
				res.appendChild(img)
   		}
}


//alert('olá!')
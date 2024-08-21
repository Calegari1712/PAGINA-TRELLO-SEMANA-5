function deletar(idRecebido){
  const petsAtuaisNaMemoria = JSON.parse(localStorage.getItem('pets'))
const petsFiltrados = petsAtuaisNaMemoria.filter((item) => item.id !== idRecebido )
localStorage.setItem('pets', JSON.stringify(petsFiltrados))

document.getElementById('dadosTabela').innerText = ''

carregarDados()
}

function carregarDados() {

   const petsNaMemoria = JSON.parse(localStorage.getItem('pets'))
   const dadosTabela = document.getElementById('dadosTabela')

   
      petsNaMemoria.forEach((pet) => {

         const tr = document.createElement('tr')

         const url = document.createElement('img')
         url.setAttribute('widht', '100px')
         url.setAttribute('height', '100px')
         url.setAttribute('src', pet.foto)
         const tdimagem = document.createElement('td')
         tdimagem.append(url)
         tr.append(tdimagem)

         const tdnome = document.createElement('td')
         tdnome.innerText = pet.nome
         tr.append(tdnome)

         const tdidade = document.createElement('td')
         tdidade.innerText = pet.idade
         tr.append(tdidade)

         const tddescricao = document.createElement('td')
         tddescricao.innerText = pet.descricao
         tr.append(tddescricao)

         const tdespecie = document.createElement('td')
         tdespecie.innerText = pet.especie
         tr.append(tdespecie)

         const tdautor = document.createElement('td')
         tdautor.innerText = 'Admin'
         tr.append(tdautor)

         const tddata = document.createElement('td')
         const dataPostagem = new Date(pet.id)
         tddata.innerText = dataPostagem.toLocaleDateString()
         tr.append(tddata)

         const tdbotao = document.createElement('td')
         const button = document.createElement('button')
         button.onclick = () => deletar(pet.id)
         button.classList.add('botaoTabela')
         tr.append(tdbotao)
         tdbotao.append(button)
         const url_l = document.createElement('img')
         url_l.classList.add('lixeira')
         url_l.setAttribute('src', "assets/lixeira.png")
         button.append(url_l)

         document.getElementById('dadosTabela').append(tr)

         dadosTabela.append(tr)
      })

     
}

   document.addEventListener('DOMContentLoaded', carregarDados)
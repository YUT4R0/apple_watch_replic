const img_view = document.getElementById("imagem-visualizacao")
const product_title = document.getElementById("titulo-produto")
const color_title = document.getElementById("nome-cor-selecionada")
const thumb_0 = document.getElementById("0-imagem-miniatura")
const thumb_1 = document.getElementById("1-imagem-miniatura")
const thumb_2 = document.getElementById("2-imagem-miniatura")

const azul_inverno = {
  name: "Azul-inverno",
  folder: "imagens-azul-inverno"
}
const estelar = {
  name: "Estelar",
  folder: "imagens-estelar"
}
const meia_noite = {
  name: "Meia-noite",
  folder: "imagens-meia-noite"
}
const rosa_claro = {
  name: "Rosa-claro",
  folder: "imagens-rosa-claro"
}
const verde_cipreste = {
  name: "Verde-cipreste",
  folder: "imagens-verde-cipreste"
}
const colors = [verde_cipreste, azul_inverno, meia_noite, estelar, rosa_claro]
const sizes = [41, 45]

let selected_img = 1
let selected_size = 1
let selected_color = 1

function changeImg() {
  const selected_opt_id = document.querySelector('[name="opcao-imagem"]:checked').id
  selected_img = selected_opt_id.charAt(0)
  img_view.src = `./imagens/opcoes-cores/${colors[selected_color].folder}/imagem-${selected_img}.jpeg`
} 

function changeSize() {
  const selected_opt_id = document.querySelector('[name="opcao-tamanho"]:checked').id
  selected_size = selected_opt_id.charAt(0)
  product_title.innerText = `Pulseira loop esportiva ${colors[selected_color].name} para caixa de ${sizes[selected_size]} mm`
  sizes[selected_size] === sizes[0]
  ? img_view.classList.add('caixa-pequena')
  : img_view.classList.remove('caixa-pequena');
}

function changeColor() {
  const selected_opt_id = document.querySelector('[name="opcao-cor"]:checked').id
  selected_color = selected_opt_id.charAt(0)
  product_title.innerText = `Pulseira loop esportiva ${colors[selected_color].name} para caixa de ${sizes[selected_size]} mm`
  color_title.innerText = `Cor - ${colors[selected_color].name}`
  thumb_0.src = `./imagens/opcoes-cores/${colors[selected_color].folder}/imagem-0.jpeg`
  thumb_1.src = `./imagens/opcoes-cores/${colors[selected_color].folder}/imagem-1.jpeg`
  thumb_2.src = `./imagens/opcoes-cores/${colors[selected_color].folder}/imagem-2.jpeg`
  img_view.src = `./imagens/opcoes-cores/${colors[selected_color].folder}/imagem-${selected_img}.jpeg`
}
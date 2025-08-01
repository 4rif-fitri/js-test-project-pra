var brandlist = new Array("porsche", "volkswagen", "audi", "bmw");
let bilangan_customer = 1
function newClient() {
  if(bilangan_customer == 11) return
  bilangan_customer++
  var preference = Math.floor(Math.random() * 4);
  var time = Math.floor(Math.random() * 10 + 1);
  var client = Math.floor(Math.random() * 10 + 1);
  $("#clients_queue").append(
    '<div class="client client_' +
      client +
      '"><span class="preference">Client for ' +
      brandlist[preference] +
      "</span></div>"
  );
  setTimeout(function () {
    newClient();
  }, time);
}

let bilangan_kereta = {porsche:4, volkswagen:6, audi:5, bmw:3}
let harga_kereta = {porsche:1000, volkswagen:2000, audi:3000, bmw:4000}

let arr_petak_kereta, arr_sold
let customer
let seleced, car_seleced
let pop_up_container,pop_up_content,h2,ok
let petak_kaunter
let tanya_content, h3,yes,no,tanya_container
let exit
function beri_info(){
  arr_petak_kereta.forEach((element,index) => {
    element.addEventListener("dragover", e=>e.preventDefault())
    element.addEventListener("drop", drop)

    element.dataset.index = index
    if(index < 4){
      element.dataset.jenama = "porsche"
    }else if(index < 10){
      element.dataset.jenama = "volkswagen"
    }else if(index < 15){
      element.dataset.jenama = "audi"
    }else if(index < 18){
      element.dataset.jenama = "bmw"
    }
    // console.log(element);
    
  });
}
function dragstart(e){
  seleced = e.target
  car_seleced = seleced.textContent.split(" ")[2]
  if(seleced.dataset.view == null){
    seleced.dataset.view = false  
    seleced.dataset.index = null
    seleced.dataset.jenama = null
  }
  
  // console.log("view" + seleced.dataset.view);
  // console.log("index" + seleced.dataset.index);
  // console.log("jenama" + seleced.dataset.jenama);
}
function dragend(){

}
function mesej(display,text){
  pop_up_container.style.display = display
  h2.textContent = text
  ok.addEventListener("click",tutup_pop_up)
}
function tutup_pop_up(){
pop_up_container.style.display = "none"  
}
function box_kecik(display,text){
  tanya_container.style.display = display
  tanya_content.style.display = display
  h3.textContent = text
}
function get_cus(){
  customer = document.querySelector(".client")
  customer.addEventListener("dragstart",dragstart)
  customer.addEventListener("dragend",dragend)
  customer.draggable = "true"
}

function drop(e){
  let kereta_target_jenama = e.target.dataset.jenama
  let kereta_target_index = e.target.dataset.index
  let bilangn = bilangan_kereta[car_seleced]
  console.log({car_seleced});
  console.log({kereta_target_index});
  console.log({kereta_target_jenama});
  console.log({bilangn});
  
  
  if(bilangan_kereta[car_seleced] <= 0 && kereta_target_jenama != car_seleced){
    e.target.append(seleced)
    seleced.dataset.view = true 
    seleced.dataset.index = kereta_target_index
    seleced.dataset.jenama = kereta_target_jenama

    // console.log("view" + seleced.dataset.view);
    // console.log("index" + seleced.dataset.index);
    // console.log("jenama" + seleced.dataset.jenama);
    newClient()
    bilangan_customer--
    get_cus()
    mesej("flex","Sila ke kaunter")
  }else if(bilangan_kereta[car_seleced] != 0 && kereta_target_jenama == car_seleced){
    e.target.append(seleced)
    seleced.dataset.view = true 
    seleced.dataset.index = kereta_target_index
    seleced.dataset.jenama = kereta_target_jenama
    newClient()
    bilangan_customer--
    // console.log("view" + seleced.dataset.view);
    // console.log("index" + seleced.dataset.index);
    // console.log("jenama" + seleced.dataset.jenama);
    get_cus()
    mesej("flex","Sila ke kaunter")
  }else{
    mesej("flex","Salah Tempat")
  }
}
function keluar(){
  seleced.remove()
  newClient()
  bilangan_customer--
  get_cus()
}
function animimate_keluar(){
  seleced.style.transform = "translate(0,-20rem)"
  setTimeout(()=>{
    keluar()
  },500)
}
function bayar(){
  box_kecik("none")
  let index = seleced.dataset.index
  seleced.dataset.jenama

  bilangan_kereta[car_seleced]--
  arr_petak_kereta[index].style.display = "none"
  arr_sold[index].style.display = "flex"
  animimate_keluar()
}
function drop_kaunter(e){
  if(seleced.dataset.view == "true"){
    box_kecik("inline","nak beli")
    seleced.style.zIndex = 30
    e.target.append(seleced)

    yes.addEventListener("click",bayar)
    yes.addEventListener("click",animimate_keluar)

  }else{
    mesej("flex","Sila ke kereta dulu")
  }
}
function main(){
  newClient();
  arr_petak_kereta = document.querySelectorAll(".petak")
  arr_sold = document.querySelectorAll("#sold")
  customer = document.querySelector(".client")

  pop_up_container = document.querySelector(".pop_up_container")
  pop_up_content = document.querySelector(".pop_up_content")
  h2 = document.getElementById("h2")
  ok = document.getElementById("ok")
  ok.removeEventListener("click",tutup_pop_up)

  petak_kaunter = document.querySelector(".petak_cashier")
  petak_kaunter.addEventListener("dragover", e=> e.preventDefault())
  petak_kaunter.addEventListener("drop",drop_kaunter)

  tanya_container = document.querySelector(".pop_kecik_container")
  tanya_content = document.querySelector(".tanya_content")
  h3 = document.getElementById("h3")
  yes = document.getElementById("yes")
  no = document.getElementById("no")

  exit = document.getElementById("exit")
  exit.addEventListener("dragover",e=> e.preventDefault())
  exit.addEventListener("drop",keluar)
  let koordinat = exit.getBoundingClientRect()
  beri_info()
  console.log("Top:", koordinat.top);
console.log("Left:", koordinat.left);
console.log("Bottom:", koordinat.bottom);
console.log("Right:", koordinat.right);
  get_cus()
}

$("document").ready(function (e) {
  main()
});

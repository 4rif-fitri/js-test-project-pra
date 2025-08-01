var brandlist = new Array("Porsche", "Volkswagen", "Audi", "BMW");
let number_car = [1,3,2,5]
let stati = [0,0,0]
let sum = 0, temp_sum = 0
let i = 0;

function newClient(){
	if(i == 10){
		return;
	} 
	i++
	var preference = Math.floor((Math.random()*4));
	var time = Math.floor((Math.random()*10000)+1);
	// var time = 500;
	var client = Math.floor((Math.random()*10)+1);
	$("#clients_queue").append('<div class="client client_'+client+'"><span class="preference">Client for '+brandlist[preference]+'</span></div>');
	setTimeout(function(){newClient();},time);
}

function update_ui(){
  document.querySelector("#box_porsche").innerHTML = `${number_car[0]}`;
	$("#box_porsche").html(`${number_car[0]}`);
	$("#box_volkswagen").html(`${number_car[1]}`);
	$("#box_audi").html(`${number_car[2]}`);
	$("#box_bmw").html(`${number_car[3]}`);

	$("#clients_served").html(`${stati[0]} clients`);
	$("#cars_sold").html(`${stati[1]} cars`);
	$("#amount").html(`Rm ${stati[2]}`);
}
function remove(cus_dalam) {
  stati[0]++;
	i--
	newClient();
	setTimeout(()=>{
		cus_dalam.remove();
	},2000) 
}

function move_keluar(cus_dalam){
	setTimeout(()=>{
		update_ui();
		cus_dalam.style.transform = `translate(-50px,150px)`;
	},1000)
	remove(cus_dalam);
}

function move_kaunter(cus_dalam) {
  setTimeout(() => {
    cus_dalam.style.transform = `translate(-50px,400px)`;
  }, 1000);
  setTimeout(() => {
    move_keluar(cus_dalam);
  }, 1000);
}

function buat_buat_pilihan(cus_dalam, nama_car) {
  console.log("fikir");

  let random = Math.random() * 1;
  // console.log(random);

  if (random == 0) {
    console.log("more");
    move_keluar(cus_dalam);
  } else {
    // console.log(number_car[0]);
    if (nama_car == "Porsche") {
      number_car[0]--;
      stati[2] += 650000;
    } else if (nama_car == "Volkswagen") {
      number_car[1]--;
      stati[2] += 180000;
    } else if (nama_car == "Audi") {
      number_car[2]--;
      stati[2] += 300000;
    } else if (nama_car == "BMW") {
      number_car[3]--;
      stati[2] += 250000;
    }

    stati[1]++;
    // update_ui();
    move_kaunter(cus_dalam);
    // move_keluar(cus_dalam, y);
  }
  // cus_dalam.style.transform = `translate(-50px,150px)`;
}

function bergerak_ke_kereta_spesifik(cus_dalam, car) {
  let y;
  let x = -190 - 50;

  if (car == "Porsche") {
    y = -60;
    cus_dalam.style.transform = `translate(${x}px,${y}px)`;
console.log("done move");


  } else if (car == "Volkswagen") {
    y = 90;
    cus_dalam.style.transform = `translate(${x}px,${y}px)`;


  } else if (car == "Audi") {
    y = 240;
    cus_dalam.style.transform = `translate(${x}px,${y}px)`;


  } else if (car == "BMW") {
    y = 400;
    cus_dalam.style.transform = `translate(${x}px,${y}px)`;


  }
  return
}

function move_ke_car_yang_lain(cus_dalam,car){

  if (number_car[0] != 0) {
    car = "Porsche";
  } else if (number_car[1] != 0) {
    car = "Volkswagen";
  } else if (number_car[2] != 0) {
    car = "Audi";
  } else if (number_car[3] != 0) {
    car = "BMW";
  }else {
    alert("car habis")
    return;
  }
  console.log("f_move_car_spesifik");
  console.log(car);
  setTimeout(()=>{bergerak_ke_kereta_spesifik(cus_dalam, car)},1000)
  setTimeout(()=>{buat_buat_pilihan(cus_dalam, car);},1000)
}

function move_ke_car(get_car,cus_dalam) {
  // console.log({ cus_dalam });
  // document.querySelector().textContent
  // console.log(get_car);

  let sumcar = 0;

  //   number_car.forEach(function (element) {
  //     sumcar+=element;
  // });
  // console.log(sumcar);
  // if(sumcar === 0){
  // 	move_keluar(cus_dalam);
  // 	return
  // }

  // if (get_car == "Porsche" && number_car[0] == 0 ||
  // 	get_car == "Volkswagen" && number_car[1] == 0 ||
  // 	get_car == "Audi" && number_car[2] == 0 ||
  // 	get_car == "BMW" && number_car[3] == 0){
  // 	tuka(cus_dalam,get_car, x);
  // 	return
  // 	}
  //------------------------------------------
  // if (get_car == "Porsche") {
  //   y = -60;
  //   cus_dalam.style.transform = `translate(${x}px,${y}px)`;
  //   if (number_car[0] == 0) {
  //     setTimeout(() => {
  //       move_ke_car("Volkswagen", cus_dalam);
  //     }, 2000);
  //   } else {
  //     buat_buat_pilihan(cus_dalam, get_car);
  //   }
  // }

  // if (get_car == "Volkswagen") {
  //   y = 90;
  //   cus_dalam.style.transform = `translate(${x}px,${y}px)`;
  //   if (number_car[1] == 0) {
  //     setTimeout(() => {
  //       move_ke_car("Audi", cus_dalam);
  //     }, 2000);
  //   } else {
  //     buat_buat_pilihan(cus_dalam, get_car);
  //   }
  // }

  // if (get_car == "Audi") {
  //   y = 240;
  //   cus_dalam.style.transform = `translate(${x}px,${y}px)`;
  //   if (number_car[2] == 0) {
  //     setTimeout(() => {
  //       move_ke_car("BMW", cus_dalam);
  //     }, 2000);
  //   } else {
  //     buat_buat_pilihan(cus_dalam, get_car);
  //   }
  // }

  // if (get_car == "BMW") {
  //   y = 400;
  //   cus_dalam.style.transform = `translate(${x}px,${y}px)`;
  //   if (number_car[3] == 0) {
  //     setTimeout(() => {
  //       move_ke_car("Porsche", cus_dalam);
  //     }, 2000);
  //   } else {
  //     buat_buat_pilihan(cus_dalam, get_car);
  //   }
  // }
  //--------------------------------------------

  //===============================
// console.log(get_car);

  if(get_car == "Porsche"){
    setTimeout(()=>{
      bergerak_ke_kereta_spesifik(cus_dalam, get_car)
      
      setTimeout(()=>{
        if (number_car[0] == 0) {
          setTimeout(()=>{
            move_ke_car_yang_lain(cus_dalam, get_car);
          },1000) 
    
        }else{
          // buat_buat_pilihan(cus_dalam, "Porsche");
          setTimeout(()=>{buat_buat_pilihan(cus_dalam, get_car)},1000) 
        }
      },1000)
    },1000) 
  
  }else if(get_car == "Volkswagen"){
    
    setTimeout(() => {
      bergerak_ke_kereta_spesifik(cus_dalam, get_car);

      setTimeout(() => {
        if (number_car[1] == 0) {
          setTimeout(() => {
            move_ke_car_yang_lain(cus_dalam, get_car);
          }, 1000);
        } else {
          // buat_buat_pilihan(cus_dalam, "Porsche");
          setTimeout(() => {
            buat_buat_pilihan(cus_dalam, get_car);
          }, 1000);
        }
      }, 1000);
    }, 1000); 
  
  }else if(get_car == "Audi"){
    setTimeout(() => {
      bergerak_ke_kereta_spesifik(cus_dalam, get_car);

      setTimeout(() => {
        if (number_car[2] == 0) {
          setTimeout(() => {
            move_ke_car_yang_lain(cus_dalam, get_car);
          }, 1000);
        } else {
          // buat_buat_pilihan(cus_dalam, "Porsche");
          setTimeout(() => {
            buat_buat_pilihan(cus_dalam, get_car);
          }, 1000);
        }
      }, 1000);
    }, 1000); 

  }else if (get_car == "BMW") {
    setTimeout(() => {
      bergerak_ke_kereta_spesifik(cus_dalam, get_car);

      setTimeout(() => {
        if (number_car[3] == 0) {
          setTimeout(() => {
            move_ke_car_yang_lain(cus_dalam, get_car);
          }, 1000);
        } else {
          // buat_buat_pilihan(cus_dalam, "Porsche");
          setTimeout(() => {
            buat_buat_pilihan(cus_dalam, get_car);
          }, 1000);
        }
      }, 1000);
    }, 1000); 
  }

  //===============================
  // console.log("move");
  // move_keluar(cus_dalam,y)
}

function move_masuk(){
	let masuk = document.getElementById("enter");
	let cus_dalam = masuk.querySelector(".client");
  	console.log(cus_dalam);
	  let get_car = cus_dalam.textContent.split(" ")[2];
	setTimeout(move_ke_car(get_car,cus_dalam), 1000);
}

function masuk_kedai(){
	let masuk = document.getElementById("enter")
	let ambil_satu = document.querySelectorAll(".client");
	
	let kotak_masuk = masuk.querySelector(".client");
	if (kotak_masuk == null){
		masuk.appendChild(ambil_satu[0])
		
		setTimeout(()=>{move_masuk()},1000)
	} 
	// console.log(kotak_masuk);
	// console.log(masuk);
	// console.log(ambil_satu);
	
	setTimeout(masuk_kedai,1000)	
}

$("document").ready(function(e) {

	update_ui()
	newClient();
	masuk_kedai();
});

import { RandomControl } from "./control";

let index;
let hak;
let kontrol;
const karthazirla = () => {
	hak = 0;
	kontrol = true;
	document.getElementById("kazandiId").style.display = 'none';
	document.getElementById("kaybettiId").style.display = 'none';
	document.getElementById("0").src = "kart.jpg";
	document.getElementById("1").src = "kart.jpg";
	document.getElementById("2").src = "kart.jpg";
}

export const basla = () => {
	karthazirla();
	index = Math.floor(Math.random() * 3);
	const cont = RandomControl(index);
}
export const resimsec = (deger) => {
	if (kontrol) {

		hak++;
		if (index == deger) {
			document.getElementById(deger).src = "kedi.jpg";
			document.getElementById("kazandiId").innerHTML = "Tebrikler Kazandın :) Tekrar başlamak için <span onclick=\"Secim.basla()\" class=\"link\" => buraya</span> tıkla"
			document.getElementById("kazandiId").style.display = 'block';
			kontrol = false;
		} else {
			document.getElementById(deger).src = "kopek.jpg";
			if (hak == 2) {
				document.getElementById("kaybettiId").innerHTML = "Kaybettin :( Tekrar başlamak için <span onclick=\"Secim.basla()\" class=\"link\" => buraya</span> tıkla"
				document.getElementById("kaybettiId").style.display = 'block';
				kontrol = false;
			}
		}
	}
}




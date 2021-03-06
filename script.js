const productos = [
	{
		id: 0,
		descripcion: "Producto 1",
		precio: 1250,
		stock: 83,
	},
	{
		id: 1,
		descripcion: "Producto 2",
		precio: 2399,
		stock: 34,
	},
	{
		id: 2,
		descripcion: "Producto 3",
		precio: 1699,
		stock: 56,
	},
];

// Enlaces de variables a referencias HTML

const stock1 = document.querySelector("#stock1");
const stock2 = document.querySelector("#stock2");
const stock3 = document.querySelector("#stock3");

const precio1 = document.querySelector("#precio1");
const precio2 = document.querySelector("#precio2");
const precio3 = document.querySelector("#precio3");

const btnSumarProd1 = document.querySelector("#sumarProd1");
const btnSumarProd2 = document.querySelector("#sumarProd2");
const btnSumarProd3 = document.querySelector("#sumarProd3");

const btnRestarProd1 = document.querySelector("#restarProd1");
const btnRestarProd2 = document.querySelector("#restarProd2");
const btnRestarProd3 = document.querySelector("#restarProd3");

const btnRestarProd1disabled = document.querySelector("#restarProd1disabled");
const btnRestarProd2disabled = document.querySelector("#restarProd2disabled");
const btnRestarProd3disabled = document.querySelector("#restarProd3disabled");

const total = document.querySelector("#total");

// variables generales

const stocksIniciales = [
	{ stockInicial: productos[0].stock },
	{ stockInicial: productos[1].stock },
	{ stockInicial: productos[2].stock },
];

const producto1 = productos[0];
const producto2 = productos[1];
const producto3 = productos[2];

let cantTotal = 0;

// Al cargar la pagina, se inicializan los valores

stock1.innerText = productos[0].stock;
stock2.innerText = productos[1].stock;
stock3.innerText = productos[2].stock;

precio1.innerText = productos[0].precio;
precio2.innerText = productos[1].precio;
precio3.innerText = productos[2].precio;

// Funciones

const sumarAlStock = (index, cant) => {
	productos[index].stock += cant;
	restarAlTotal(cant, productos[index].precio);
	total.innerText = cantTotal.toString();

	switch (index) {
		case 0:
			stock1.innerText = productos[0].stock;
			break;
		case 1:
			stock2.innerText = productos[1].stock;
			break;
		case 2:
			stock3.innerText = productos[2].stock;
			break;
	}
	checkStock(index);
};

const restarAlStock = (index, cant) => {
	productos[index].stock -= cant;
	sumarAlTotal(cant, productos[index].precio);
	total.innerText = cantTotal.toString();

	switch (index) {
		case 0:
			stock1.innerText = productos[0].stock;
			break;
		case 1:
			stock2.innerText = productos[1].stock;
			break;
		case 2:
			stock3.innerText = productos[2].stock;
			break;
	}
	checkStock(index);
};

const sumarAlTotal = (cant, precio) => {
	cantTotal += cant * precio;
};

const restarAlTotal = (cant, precio) => {
	cantTotal -= cant * precio;
};

const checkStock = (index) => {
	stocksIniciales[index].stockInicial <= productos[index].stock ? showDisabled(index) : showEnabled(index);
};

const showDisabled = (index) => {
	switch (index) {
		case 0:
			btnRestarProd1disabled.style.display = "flex";
			btnRestarProd1.style.display = "none";
			break;
		case 1:
			btnRestarProd2disabled.style.display = "flex";
			btnRestarProd2.style.display = "none";
			break;
		case 2:
			btnRestarProd3disabled.style.display = "flex";
			btnRestarProd3.style.display = "none";
			break;
	}
};

const showEnabled = (index) => {
	switch (index) {
		case 0:
			btnRestarProd1disabled.style.display = "none";
			btnRestarProd1.style.display = "flex";
			break;
		case 1:
			btnRestarProd2disabled.style.display = "none";
			btnRestarProd2.style.display = "flex";
			break;
		case 2:
			btnRestarProd3disabled.style.display = "none";
			btnRestarProd3.style.display = "flex";
			break;
	}
};

// esta es la forma de hacer que sume o reste al hacer clic en los botones, solo que usando el eventListener de JS en lugar de la propiedad onlick del HTML

// btnSumarProd1.addEventListener('click', () => {
// 	console.log(sumarAlStock(0, 1));
// });
// btnSumarProd2.addEventListener('click', () => {
// 	sumarAlStock(1, 1);
// });
// btnSumarProd3.addEventListener('click', () => {
// 	sumarAlStock(2, 1);
// });

// btnRestarProd1.addEventListener('click', () => {
// 	restarAlStock(0, 1);
// });
// btnRestarProd2.addEventListener('click', () => {
// 	restarAlStock(1, 1);
// });
// btnRestarProd3.addEventListener('click', () => {
// 	restarAlStock(2, 1);
// });

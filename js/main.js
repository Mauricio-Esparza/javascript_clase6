class Producto {
    constructor(id, nombre, precio, stock) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }

    aplicarDescuento(porcentaje) {
        const descuento = this.precio * (porcentaje / 100);
        this.precio -= descuento;
        console.log(`se aplico un ${porcentaje}% de descuento a "${this.nombre}". nuevo precio: ${this.precio}`);
        alert(`se aplico un ${porcentaje}% de descuento a "${this.nombre}". nuevo precio: ${this.precio}`);
    }
}

const productos = [
    new Producto(1, "vela de lavanda", 1500, 10),
    new Producto(2, "vela de vainilla", 1800, 5),
    new Producto(3, "vela de canela", 2500, 3),
    new Producto(4, "vela de rosa", 2500, 3),
    new Producto(5, "vela de jazmin", 1200, 12),
];

function mostrarCatalogo() {
    let mensaje = "catalgo de productos:\n";
    productos.forEach(p => {
        mensaje += `ID: ${p.id} | ${p.nombre} | Precio: $${p.precio} | Stock: ${p.stock}\n`;
    });
    console.log(mensaje);
    alert(mensaje);
}

function filtrarPorPrecioMinimo() {
    const minimo = parseInt(prompt("ingresa el precio minimo:"));
    const filtrados = productos.filter(p => p.precio >= minimo);
    let mensaje = `productos con precio mayor o igual a $${minimo}:\n`;
    filtrados.forEach(p => mensaje += `${p.nombre} - $${p.precio}\n`);
    console.log(mensaje);
    alert(mensaje);
}

function buscarPorId() {
    const id = parseInt(prompt("ingresa el ID del producto:"));
    const encontrado = productos.find(p => p.id === id);
    if (encontrado) {
        const mensaje = `producto encontrado: ${encontrado.nombre} - $${encontrado.precio}`;
        console.log(mensaje);
        alert(mensaje);
    } else {
        console.log("no existe un producto con ese ID.");
        alert("no existe un producto con ese ID.");
    }
}

function calcularTotalStock() {
    const total = productos.reduce((accum, p) => accum + (p.precio * p.stock), 0);
    const mensaje = `valor total del stock: $${total}`;
    console.log(mensaje);
    alert(mensaje);
}

function menu() {
    let opcion;
    do {
        opcion = prompt(
            "Bienvenido a Genova Velas de Soja\n" +
            "1 ver catalogo\n" +
            "2 filtrar productos por precio minimo\n" +
            "3 buscar producto por ID\n" +
            "4 calcular valor total del stock\n" +
            "5 salir\n" +
            "Elegi una opcion:"
        );

        switch (opcion) {
            case "1":
                mostrarCatalogo();
                break;
            case "2":
                filtrarPorPrecioMinimo();
                break;
            case "3":
                buscarPorId();
                break;
            case "4":
                calcularTotalStock();
                break;
            case "5":
                console.log("gracias por visitarnos!");
                alert("gracias por visitarnos!");
                break;
            default:
                console.log("opcion invalida, intenta nuevamente");
                alert("opcion invalida, intenta nuevamente");
        }
    } while (opcion !== "5");
}

menu();

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
        const mensaje = "Se aplico un " + porcentaje + "% de descuento a " + this.nombre + ". Nuevo precio: " + this.precio;
        console.log(mensaje);
        alert(mensaje);
    }
}

const productos = [
    new Producto(1, "Vela de Lavanda", 1500, 10),
    new Producto(2, "Vela de Vainilla", 1800, 5),
    new Producto(3, "Vela de Canela", 2500, 3),
    new Producto(4, "Vela de Rosa", 2500, 3),
    new Producto(5, "Vela de Jazmin", 1200, 12),
];

function mostrarCatalogo() {
    let mensaje = "Catalogo de productos:\n";
    productos.forEach(function(p) {
        mensaje += "ID: " + p.id + " | " + p.nombre + " | Precio: $" + p.precio + " | Stock: " + p.stock + "\n";
    });
    console.log(mensaje);
    alert(mensaje);
}

function filtrarPorPrecioMinimo() {
    const minimo = parseInt(prompt("Ingresa el precio minimo:"));
    const filtrados = productos.filter(function(p) {
        return p.precio >= minimo;
    });
    let mensaje = "Productos con precio mayor o igual a $" + minimo + ":\n";
    filtrados.forEach(function(p) {
        mensaje += p.nombre + " - $" + p.precio + "\n";
    });
    console.log(mensaje);
    alert(mensaje);
}

function buscarPorId() {
    const id = parseInt(prompt("Ingresa el ID del producto:"));
    const encontrado = productos.find(function(p) {
        return p.id === id;
    });
    if (encontrado) {
        const mensaje = "Producto encontrado: " + encontrado.nombre + " - $" + encontrado.precio;
        console.log(mensaje);
        alert(mensaje);
    } else {
        console.log("No existe un producto con ese ID.");
        alert("No existe un producto con ese ID.");
    }
}

function calcularTotalStock() {
    const total = productos.reduce(function(accum, p) {
        return accum + (p.precio * p.stock);
    }, 0);
    const mensaje = "Valor total del stock: $" + total;
    console.log(mensaje);
    alert(mensaje);
}

function menu() {
    let opcion;
    do {
        opcion = prompt(
            "Bienvenido a Genova Velas de Soja\n" +
            "1 - Ver catalogo\n" +
            "2 - Filtrar productos por precio minimo\n" +
            "3 - Buscar producto por ID\n" +
            "4 - Calcular valor total del stock\n" +
            "5 - Salir\n" +
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
                console.log("Gracias por visitarnos!");
                alert("Gracias por visitarnos!");
                break;
            default:
                console.log("Opcion invalida, intenta nuevamente.");
                alert("Opcion invalida, intenta nuevamente.");
        }
    } while (opcion !== "5");
}

menu();

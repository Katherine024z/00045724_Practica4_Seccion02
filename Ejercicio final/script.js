function obtenerActividad(dia) {
    const actividades = {
        lunes: "Atender a un cliente específico.",
        martes: "Visitar una agencia fuera de la ciudad.",
        miércoles: "Llevar a tu hija al ballet.",
        jueves: "Priorizar entregas de desarrollo.",
        viernes: "Atender problemas de manera remota.",
        sábado: "Hacer lo que tu esposa quiera.",
    };

    dia = dia.trim().toLowerCase(); // usado para evitar errores por mayúsculas o espacios al inicio y final
    dia = dia.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // usado para quitar tildes

    const diasValidos = {
        lunes: "lunes",
        martes: "martes",
        miercoles: "miércoles",
        jueves: "jueves",
        viernes: "viernes",
        sabado: "sábado",
    };

    const diaLaboral = diasValidos[dia];
    return diaLaboral ? actividades[diaLaboral] : null; //si no hay valor devuelve null
}

function mostrarActividad() {
    const input = document.getElementById("ingresoDia").value;
    const resultadoDiv = document.getElementById("resultado");
    const mensajePersonalizado = "¡No lo olvides!";

    const actividad = obtenerActividad(input);

    if (actividad) {
        resultadoDiv.innerText = `Hoy tienes que: \n${actividad}\n${mensajePersonalizado}`;
        resultadoDiv.style.display = "block";
    } else {
        resultadoDiv.innerText = "Por favor ingresa un dia laboral especifico de la semana (lunes a sábado).";
        resultadoDiv.style.display = "block";
    }
}
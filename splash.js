// Esperar a que el DOM esté listo para insertar el Splash Screen
document.addEventListener("DOMContentLoaded", () => {
    // 1. Crear el contenedor principal del Splash
    const splash = document.createElement("div");
    splash.id = "splash-screen";

    // 2. Crear la imagen del logo
    const logo = document.createElement("img");
    logo.src = "ideoLogo.png";
    logo.alt = "Cargando...";

    // 3. Estilos CSS dinámicos (Usan las mismas variables de fondo de tu index)
    const estilos = document.createElement("style");
    estilos.textContent = `
                #splash-screen {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, var(--bg1), var(--bg2), var(--bg3), var(--bg1));
            background-size: 200% 200%;
            animation: movimientoCromatico 10s ease-in-out infinite;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 999999; /* ◄ Aumentado para asegurar que tape CUALQUIER elemento */
            transition: opacity 0.5s ease, visibility 0.5s;
        }

        #splash-screen img {
            max-width: 170px; /* Ajusta el tamaño de tu logo aquí */
            height: auto;
            margin-top: -70px; /* ◄ SUBE EL LOGO ( entre más cerca a cero sube mas -50px, -70px, etc.) */
            filter: brightness(0) invert(1); /* Fuerza el logo a ser completamente blanco */
            animation: pulsoLogo 1.5s ease-in-out infinite;
        }
        
        @keyframes pulsoLogo {
            0% { transform: translateY(-10px) scale(0.95); opacity: 0.8; }
            50% { transform: translateY(0px) scale(1); opacity: 1; }
            100% { transform: translateY(-10px) scale(0.95); opacity: 0.8; }
        }

    `;

    // 4. Armar e insertar los elementos en el cuerpo de la página
    splash.appendChild(logo);
    document.head.appendChild(estilos);
    document.body.appendChild(splash);

    // 5. Desvanecer y eliminar el Splash tras 2 segundos
    setTimeout(() => {
        splash.style.opacity = "0";
        splash.style.visibility = "hidden";
        
        // Borrar el elemento del HTML tras la animación de salida
        setTimeout(() => splash.remove(), 500);
    }, 2000);
});

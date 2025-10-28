function traer(tip){
    let divP = document.querySelector('#display')

    divP.removeChild(divP.firstChild)

    let pH = document.createElement('p')
    pH.setAttribute('id','displayInfo')

    if (tip == 'tip1') {
        pH.textContent = 'Implementamos y desarrollamos soluciones ERP a medida que integran todas las áreas clave de tu negocio: compras, ventas, producción, logística, finanzas y más. Nuestros sistemas centralizan la información en tiempo real, optimizan procesos y mejoran la toma de decisiones. Ofrecemos plataformas escalables y seguras, adaptadas a las necesidades de empresas industriales, comerciales y de servicios.'
    }
    if (tip == 'tip2'){
        pH.textContent = 'Ofrecemos soluciones avanzadas de localización en tiempo real para flotas terrestres y marítimas. Nuestros sistemas combinan tecnología GPS/GNSS y conectividad IoT para monitorear la posición, el rendimiento y las condiciones de cada vehículo o embarcación. Brindamos herramientas de análisis y reportes que mejoran la seguridad, optimizan rutas, reducen costos operativos y facilitan la gestión eficiente de activos.'
    }
    if (tip == 'tip3'){
        pH.textContent = 'Diseñamos plataformas integrales para la detección, monitoreo y respuesta ante incidentes críticos. Nuestros sistemas centralizan la información en tiempo real, permiten coordinar equipos de respuesta, optimizan la comunicación y agilizan la toma de decisiones. Ideales para entornos industriales, comerciales y de servicios, mejoran la seguridad, reducen tiempos de reacción y ayudan a proteger personas, bienes e infraestructura.'
    }
    if (tip == 'tip4'){
        pH.textContent = 'Desarrollamos una aplicación móvil que permite enviar alertas inmediatas en situaciones de riesgo o emergencia. Con solo un toque, el usuario notifica a contactos predefinidos o a centros de asistencia, compartiendo su ubicación en tiempo real. La app ofrece comunicación rápida, geolocalización precisa y opciones de personalización para distintos entornos: empresas, instituciones educativas, espacios públicos o uso personal, fortaleciendo la seguridad y la respuesta ante cualquier incidente.'
    }
    if (tip == 'tip5'){
        pH.textContent = 'Desarrollamos plataformas a medida para supervisar y gestionar procesos productivos en tiempo real. Nuestro software integra sensores, dispositivos IoT y sistemas de automatización, ofreciendo visualización de datos, alarmas tempranas y reportes detallados. Estas soluciones mejoran la eficiencia operativa, reducen tiempos de inactividad y facilitan la toma de decisiones estratégicas en entornos industriales exigentes.'
    }

    divP.appendChild(pH)
}

traer('tip1')
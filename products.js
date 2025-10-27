function traer(tip){
    let divP = document.querySelector('#display')

    divP.removeChild(divP.firstChild)

    let pH = document.createElement('p')
    pH.setAttribute('id','displayInfo')

    if (tip == 'tip1') {
        pH.textContent = 'We implement and develop customized ERP solutions that integrate all key areas of your business: purchasing, sales, production, logistics, finance, and more. Our systems centralize real-time information, optimize processes, and improve decision-making. We offer scalable and secure platforms tailored to the needs of industrial, commercial, and service companies.'
    }
    if (tip == 'tip2'){
        pH.textContent = 'We offer advanced real-time location solutions for land and maritime fleets. Our systems combine GPS/GNSS technology and IoT connectivity to monitor the position, performance, and condition of each vehicle or vessel. We provide analysis and reporting tools that improve safety, optimize routes, reduce operating costs, and facilitate efficient asset management.'
    }
    if (tip == 'tip3'){
        pH.textContent = 'We design comprehensive platforms for detecting, monitoring, and responding to critical incidents. Our systems centralize real-time information, allow for the coordination of response teams, optimize communication, and streamline decision-making. Ideal for industrial, commercial, and service environments, they improve security, reduce reaction times, and help protect people, property, and infrastructure.'
    }
    if (tip == 'tip4'){
        pH.textContent = 'We developed a mobile app that allows immediate alerts to be sent in risk or emergency situations. With just one touch, the user notifies predefined contacts or assistance centers, sharing their location in real time. The app offers rapid communication, precise geolocation, and customization options for different environments: businesses, educational institutions, public spaces, or personal use, strengthening security and the response to any incident.'
    }
    if (tip == 'tip5'){
        pH.textContent = 'We develop custom platforms to monitor and manage production processes in real time. Our software integrates sensors, IoT devices, and automation systems, offering data visualization, early warnings, and detailed reports. These solutions improve operational efficiency, reduce downtime, and facilitate strategic decision-making in demanding industrial environments.'
    }

    divP.appendChild(pH)
}

traer('tip1')
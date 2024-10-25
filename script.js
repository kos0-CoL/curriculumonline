function generatePDF(e) {
    e.preventDefault()
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Obtener la imagen de la foto (si se cargó)
    const photoInput = document.getElementById('photo');
    if (photoInput.files && photoInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const imgData = e.target.result;

            // Datos del formulario
            const nombre = document.getElementById('nombre').value;
            const apellido = document.getElementById('apellido').value;
            const edad = document.getElementById('edad').value;
            const telefono = document.getElementById('telefono').value;
            const correo = document.getElementById('correo').value;
            const experiencia = document.getElementById('experiencia').value;
            const estudios = document.getElementById('estudios').value;
            const aptitudes = document.getElementById('aptitudes').value;
            const idiomas = document.getElementById('idiomas').value;
            const referencias = document.getElementById('referencias').value;

            // Título
            doc.setFontSize(22);
            doc.text('Currículum Vitae', 105, 20, { align: 'center' });

            // Insertar la imagen
            doc.addImage(imgData, 'JPEG', 160, 40, 40, 40); // Inserta la imagen en el PDF (ajusta tamaño y posición según sea necesario)

            // Información personal
            doc.setFontSize(16);
            doc.text('Información Personal', 20, 40);
            doc.setFontSize(12);
            doc.text(`Nombre: ${nombre} ${apellido}`, 20, 50);
            doc.text(`Edad: ${edad}`, 20, 60);
            doc.text(`Teléfono: ${telefono}`, 20, 70);
            doc.text(`Correo: ${correo}`, 20, 80);

            // Experiencia laboral
            doc.setFontSize(16);
            doc.text('Experiencia Laboral', 20, 100);
            doc.setFontSize(12);
            doc.text(experiencia, 20, 110);

            // Estudios
            doc.setFontSize(16);
            doc.text('Estudios', 20, 140);
            doc.setFontSize(12);
            doc.text(estudios, 20, 150);

            // Aptitudes
            doc.setFontSize(16);
            doc.text('Aptitudes', 20, 180);
            doc.setFontSize(12);
            doc.text(aptitudes, 20, 190);

            // Idiomas (opcional)
            if (idiomas) {
                doc.setFontSize(16);
                doc.text('Idiomas', 20, 220);
                doc.setFontSize(12);
                doc.text(idiomas, 20, 230);
            }

            // Referencias (opcional)
            if (referencias) {
                doc.setFontSize(16);
                doc.text('Referencias', 20, 250);
                doc.setFontSize(12);
                doc.text(referencias, 20, 260);
            }

            // Guardar PDF
            doc.save(`${nombre}_${apellido}_CV.pdf`);
        };
        reader.readAsDataURL(photoInput.files[0]);
    } else {
        alert("Por favor, sube una foto para incluirla en el CV.");
    }
}
<a href="https://www.freecounterstat.com" title="free stat counter"><img src="https://counter6.optistats.ovh/private/freecounterstat.php?c=yrute7h246q643l3qfukwug6b8za7dh1" border="0" title="free stat counter" alt="free stat counter"></a>

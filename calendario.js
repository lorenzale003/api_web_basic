// Espera a que el contenido del DOM esté completamente cargado antes de ejecutar el código
document.addEventListener('DOMContentLoaded', function() {
    
    // Array con los nombres de los meses del año
    const months = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];

    // Array con los días de la semana en español
    const weekdays = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];

    // Obtiene el contenedor principal del calendario desde el HTML
    const calendarContainer = document.getElementById('calendar-container');

    // Función que genera el contenido de un mes
    function generateMonth(month, year) {
        // Crear el div para el mes
        const monthDiv = document.createElement('div');
        monthDiv.classList.add('month');  // Se le agrega una clase para poder estilizarlo

        // Crear el título del mes y agregarlo al div del mes
        const monthTitle = document.createElement('h2');
        monthTitle.textContent = month;  // El texto es el nombre del mes
        monthDiv.appendChild(monthTitle);  // Se agrega el título al div

        // Crear la fila para los días de la semana (Lun, Mar, Mié, etc.)
        const daysOfWeekDiv = document.createElement('div');
        daysOfWeekDiv.classList.add('days-of-week');  // Se le da una clase para estilizarlo
        // Iterar sobre el array de días de la semana
        weekdays.forEach(day => {
            const dayDiv = document.createElement('div');
            dayDiv.textContent = day;  // Cada día de la semana se añade como texto
            daysOfWeekDiv.appendChild(dayDiv);  // Se añade el día al contenedor de los días de la semana
        });
        monthDiv.appendChild(daysOfWeekDiv);  // Añadir los días de la semana al mes

        // Obtener el primer día del mes (es decir, en qué día de la semana comienza)
        const firstDay = new Date(year, months.indexOf(month), 1).getDay();
        // Obtener el número de días que tiene el mes
        const numDays = new Date(year, months.indexOf(month) + 1, 0).getDate();

        // Crear un contenedor para los días del mes
        const daysDiv = document.createElement('div');
        daysDiv.classList.add('days');  // Se le agrega una clase para los días del mes
        
        // Añadir los días vacíos al principio del mes (si el mes no empieza en lunes)
        for (let i = 0; i < firstDay; i++) {
            const emptyDay = document.createElement('div');
            emptyDay.classList.add('day');  // Añadimos la clase "day" a las celdas vacías
            daysDiv.appendChild(emptyDay);  // Añadir el espacio vacío
        }

        // Añadir los días reales del mes
        for (let i = 1; i <= numDays; i++) {
            const dayDiv = document.createElement('div');
            dayDiv.classList.add('day');  // Añadimos la clase "day" a cada día
            dayDiv.textContent = i;  // El texto de cada div será el número del día
            daysDiv.appendChild(dayDiv);  // Añadimos cada día al contenedor de días
        }

        // Finalmente, añadir todos los días del mes al div del mes
        monthDiv.appendChild(daysDiv);
        
        // Devolver el div completo del mes
        return monthDiv;
    }

    // Generar el calendario para cada mes
    months.forEach(month => {
        // Llamar a la función `generateMonth` para generar cada mes
        const monthDiv = generateMonth(month, 2025);
        // Añadir el div de cada mes al contenedor principal del calendario
        calendarContainer.appendChild(monthDiv);
    });
});

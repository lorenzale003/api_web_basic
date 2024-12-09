async function fetchCountries() {
    try {
      const response = await fetch('https://restcountries.com/v3.1/region/europe');
      const countries = await response.json();
  
      // Contenedor donde vamos a situar la tabla
      const container = document.getElementById('countries_tabla');
  
      // Crear tabla para los artículos
      const table = document.createElement('table');
  
      // Crear encabezado de la tabla
      const headerRow = document.createElement('tr');
      const headers = ['Bandera', 'Nombre del País', 'Enlace'];
      headers.forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
      });
      table.appendChild(headerRow);
  
      // Crear filas para cada país
      countries.forEach(country => {
        const row = document.createElement('tr');
  
        // Columna de la bandera
        const flagCell = document.createElement('td');
        const flagImg = document.createElement('img');
        flagImg.src = country.flags.png;
        flagImg.alt = `Bandera de ${country.name.common}`;
        flagCell.appendChild(flagImg);
        row.appendChild(flagCell);
  
        // Columna del nombre del país
        const nameCell = document.createElement('td');
        nameCell.textContent = country.name.common;
        row.appendChild(nameCell);
  
        // Columna del enlace
        const linkCell = document.createElement('td');
        const link = document.createElement('a');
        link.textContent = 'Ver artículo';
        link.href = `article.html?name=${encodeURIComponent(country.name.common.text)}`;
        linkCell.appendChild(link);
        row.appendChild(linkCell);
  
        // Añadir fila a la tabla
        table.appendChild(row);
      });
  
      // Añadir tabla al contenedor
      container.appendChild(table);
  
    } catch (error) {
      console.error('Error fetching countries:', error);
    }
  }
  
  // Llamar a la función para cargar los datos al cargar la página
  fetchCountries();
  
async function fetchCountries() {
    try {
      const response = await fetch('https://restcountries.com/v3.1/region/europe');
      const countries = await response.json();
  
      const container = document.getElementById('countries_tabla');
  
      // Crear la tabla con encabezados
      container.innerHTML = `
        <table>
          <thead>
            <tr>
              <th>Bandera</th>
              <th>Nombre del País</th>
              <th>Enlace</th>
            </tr>
          </thead>
          <tbody>
            ${countries.map(country => `
              <tr>
                <td><img src="${country.flags.png}" alt="Bandera de ${country.name.common}" width="50"></td>
                <td>${country.name.common}</td>
                <td><a href="article.html?name=${encodeURIComponent(country.name.common)}&flag=${encodeURIComponent(country.flags.png)}">Ver artículo</a></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      `;
    } catch (error) {
      console.error('Error fetching countries:', error);
    }
  }
  
  // Llamar a la función para cargar los datos al cargar la página
  fetchCountries();
  
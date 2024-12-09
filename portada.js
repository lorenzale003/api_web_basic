async function fetchCountries() {
    try {
      const response = await fetch('https://restcountries.com/v3.1/region/europe');
      const countries = await response.json();

      // Contenedor de las tarjetas
      const container = document.getElementById('countries-container');

      // Crear tarjetas para cada país
      countries.forEach(country => {
        const card = document.createElement('div');
        card.className = 'card';

        // Elementos de la tarjeta
        const img = document.createElement('img');
        img.src = country.flags.png;
        img.alt = `Flag of ${country.name.common}`;

        const title = document.createElement('h2');
        title.textContent = country.name.common;

        const description = document.createElement('p');
        description.textContent = `Capital: ${country.capital ? country.capital[0] : 'N/A'}`;

        const link = document.createElement('a');
        link.href = country.maps.googleMaps;
        link.target = '_blank';
        link.textContent = 'View on Map';

        // Añadir elementos a la tarjeta
        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(link);

        // Añadir tarjeta al contenedor
        container.appendChild(card);
      });
    } catch (error) {
      console.error('Error fetching countries:', error);
    }
  }

  // Llamar a la función para cargar los datos al cargar la página
  fetchCountries();
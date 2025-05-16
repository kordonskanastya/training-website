import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Photo() {
  const images = [
    { src: '/images/1200px-haas-in-het-grasjpg.webp', alt: 'Зайці в траві' },
    { src: '/images/1200px-hasebeioberwerbejpg.webp', alt: 'Зайці в полі' },
    { src: '/images/european-hare-6121jpg.webp', alt: 'Європейський заєць' },
    { src: '/images/fFKuESpf7VTCGBNPscig.webp', alt: 'Зайці на лузі' },
    { src: '/images/halljnes.webp', alt: 'Зайці в лісі' },
    { src: '/images/zu6YRoYqGYVyExZ54dDT.webp', alt: 'Зайці на лузі' }
  ];

  return (
    <main class="container py-4">
      <div id="pandaCarousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#pandaCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#pandaCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#pandaCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <a href="https://upload.wikimedia.org/wikipedia/commons/0/0f/Grosser_Panda.JPG" target="_blank">
              <img src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Grosser_Panda.JPG" class="d-block w-100" alt="Велика панда сидить" />
            </a>
          </div>
          <div class="carousel-item active">
            <a href="https://upload.wikimedia.org/wikipedia/commons/0/0f/Grosser_Panda.JPG" target="_blank">
              <img src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Grosser_Panda.JPG" class="d-block w-100" alt="Велика панда сидить" />
            </a>
          </div>
          <div class="carousel-item">
            <a href="https://www.wwf.de/fileadmin/_processed_/9/a/preview_18bea5afb6_Panda-Loop.jpg" target="_blank">
              <img src="https://www.wwf.de/fileadmin/_processed_/9/a/preview_18bea5afb6_Panda-Loop.jpg"
                class="d-block w-100" alt="Панда з заповідника Волун" />
            </a>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#pandaCarousel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#pandaCarousel" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </main>

  );
}

export default Photo;
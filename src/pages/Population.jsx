import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Population() {
  return (
    <main className="container px-4 py-4">
      <div className="row">
        <aside className="col-md-3">
          <nav className="sticky-top pt-3" aria-label="Зміст сторінки">
            <h2 className="h4">Зміст</h2>
            <ul className="nav flex-column">
              <a href="#continentsList" className="nav-link" data-bs-toggle="collapse">Континенти</a>
              <a href="#subcontinentsList" className="nav-link" data-bs-toggle="collapse">Субконтиненти</a>
              <a href="#countriesList" className="nav-link" data-bs-toggle="collapse">Країни</a>
              <a href="#introducedList" className="nav-link" data-bs-toggle="collapse">Інтродуковані в</a>
              <a href="#biogeographicList" className="nav-link" data-bs-toggle="collapse">Біогеографічні зони</a>
              <a href="#biomesList" className="nav-link" data-bs-toggle="collapse">WWF Біоми</a>
            </ul>
          </nav>
        </aside>

        <article class="mt-4">
          <section id="continents">
            <h3>
              <button class="btn btn-success w-100 text-start" type="button" data-bs-toggle="collapse" data-bs-target="#continentsList">
                Континенти
              </button>
            </h3>
            <div class="collapse" id="continentsList">
              <ul class="list-group mb-3">
                <li class="list-group-item">Європа</li>
                <li class="list-group-item">Азія</li>
                <li class="list-group-item">Північна Америка</li>
              </ul>
            </div>
          </section>

          <section id="subcontinents">
            <h3>
              <button class="btn btn-success w-100 text-start" type="button" data-bs-toggle="collapse" data-bs-target="#subcontinentsList">
                Субконтиненти
              </button>
            </h3>
            <div class="collapse" id="subcontinentsList">
              <ul class="list-group mb-3">
                <li class="list-group-item">Західна Азія</li>
                <li class="list-group-item">Центральна Азія</li>
              </ul>
            </div>
          </section>

          <section id="countries">
            <h3>
              <button class="btn btn-success w-100 text-start" type="button" data-bs-toggle="collapse" data-bs-target="#countriesList">
                Країни
              </button>
            </h3>
            <div class="collapse" id="countriesList">
              <ul class="list-group mb-3">
                <li class="list-group-item">Китай</li>
                <li class="list-group-item">Тайвань</li>
                <li class="list-group-item">США</li>
                <li class="list-group-item">Канада</li>
                <li class="list-group-item">Мексика</li>
                <li class="list-group-item">Франція</li>
                <li class="list-group-item">Німеччина</li>
                <li class="list-group-item">Іспанія</li>
                <li class="list-group-item">Велика Британія</li>
                <li class="list-group-item">Бельгія</li>
                <li class="list-group-item">Австрія</li>
                <li class="list-group-item">Нідерланди</li>
                <li class="list-group-item">Японія</li>
                <li class="list-group-item">Південна Корея</li>
                <li class="list-group-item">Таїланд</li>
                <li class="list-group-item">Індонезія</li>
                <li class="list-group-item">Малайзія</li>
                <li class="list-group-item">Сінгапур</li>
                <li class="list-group-item">Австралія</li>
                <li class="list-group-item">Катар</li>
                <li class="list-group-item">ОАЕ</li>
              </ul>
            </div>
          </section>

          <section id="introduced">
            <h3>
              <button class="btn btn-success w-100 text-start" type="button" data-bs-toggle="collapse" data-bs-target="#introducedList">
                Інтродуковані в
              </button>
            </h3>
            <div class="collapse" id="introducedList">
              <ul class="list-group mb-3">
                <li class="list-group-item">Китай</li> 
                <li class="list-group-item">Тайвань</li>
                <li class="list-group-item">США</li> 
                <li class="list-group-item">Канада</li> 
                <li class="list-group-item">Мексика</li> 
                <li class="list-group-item">Франція</li> 
                <li class="list-group-item">Німеччина</li> 
                <li class="list-group-item">Іспанія</li> 
                <li class="list-group-item">Велика Британія</li> 
                <li class="list-group-item">Бельгія</li> 
                <li class="list-group-item">Австрія</li> 
                <li class="list-group-item">Нідерланди</li> 
                <li class="list-group-item">Японія</li> 
                <li class="list-group-item">Південна Корея</li> 
                <li class="list-group-item">Таїланд</li> 
                <li class="list-group-item">Індонезія</li> 
                <li class="list-group-item">Малайзія</li> 
                <li class="list-group-item">Сінгапур</li> 
                <li class="list-group-item">Австралія</li> 
                <li class="list-group-item">Катар</li> 
                <li class="list-group-item">Об’єднані Арабські Емірати</li> 
              </ul>
            </div>
          </section>

          <section id="biogeographic">
            <h3>
              <button class="btn btn-success w-100 text-start" type="button" data-bs-toggle="collapse" data-bs-target="#biogeographicList">
                Біогеографічні зони
              </button>
            </h3>
            <div class="collapse" id="biogeographicList">
              <ul class="list-group mb-3">
                <li class="list-group-item">Палеарктична зона</li>
                <li class="list-group-item">Індомалайська зона</li>
                <li class="list-group-item">Неарктична зона</li>
                <li class="list-group-item">Австралійська зона</li>
              </ul>
            </div>
          </section>

          <section id="biomes">
            <h3>
              <button class="btn btn-success w-100 text-start" type="button" data-bs-toggle="collapse" data-bs-target="#biomesList">
                WWF Біоми
              </button>
            </h3>
            <div class="collapse" id="biomesList">
              <ul class="list-group">
                <li class="list-group-item">Помірні широколистяні та мішані ліси</li>
                <li class="list-group-item">Гірські луки та чагарники</li>
                <li class="list-group-item">Субтропічні широколистяні ліси</li>
              </ul>
            </div>
          </section>
        </article>
      </div>
    </main>
  );
}

export default Population;
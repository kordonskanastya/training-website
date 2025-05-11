function Morphology() {
  return (
    <main className="container px-4 py-4">
      <article>
        <section>
          <h3 class="h3 text-success">Зовнішній вигляд</h3>
          <p>Велика панда — це велика, масивна тварина з характерним чорно-білим забарвленням. Вона має круглу морду, короткий хвіст і густе хутро.</p>
        </section>
        <section>
          <h3 class="h3 text-success">Особливості будови</h3>
          <ul>
            <li>Довжина тіла 120—180 см, хвіст короткий — 10–15 см, вага дорослої особини 70–160 кг.</li>
            <li>Передні й задні кінцівки майже однакової довжини, що забезпечує стійкість на землі.</li>
            <li>На передніх лапах є псевдовеликий палець — видозмінена кістка зап'ястя, яка допомагає тримати бамбук.</li>
          </ul>
        </section>
        <figure class="text-center">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Grosser_Panda.JPG" alt="Велика панда сидить" class="img-fluid rounded my-4" />
          <figcaption class="text-muted">Велика панда у природному середовищі</figcaption>
        </figure>
    </article>
    </main>
  );
}

export default Morphology;
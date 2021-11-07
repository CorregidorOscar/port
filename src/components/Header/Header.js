export default function Header() {
  return (
    <div className="container">
      <div className="container__image">
        <img
          src="https://previews.123rf.com/images/jemastock/jemastock1707/jemastock170704337/81629882-retrato-persona-joven-estudiante-persona-ilustración-vectorial.jpg"
          alt="retrato"
        />
      </div>
      <div className="container__info">
        <span>Welcome to my World</span>
        <h1>
          Hi, I’m Jone Doe
          <br />
          <ul class="container__info__list">
            <li class="container__info__list__item">UX Designer.</li>
            <li class="container__info__list__item">Content Writter</li>
            <li class="container__info__list__item">UI Designer.</li>
          </ul>
        </h1>
        <h2>based in Cafayate</h2>
      </div>
    </div>
  );
}

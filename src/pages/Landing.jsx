function Landing() {
  return (
    <main>
      <nav>
        <img src="/images/logo.svg" alt="logo" className="logo" />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Job <span>tracking</span> app
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo
            dolore voluptas harum ipsum at labore libero magnam placeat dolorum
            necessitatibus?
          </p>
          <button className="btn btn-hero">Login/Register</button>
        </div>
        <img src="/images/main.svg" alt="logo" className="job people" />
      </div>
    </main>
  );
}

export default Landing;

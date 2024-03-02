import React from 'react'

function Footer() {
  return (
    <div>
      <>
  <section id="contact">
    <div className="container">
      <h1>Let's work together...</h1>
      <p>Need help with your project? Just ask!</p>
      <div className="social">
        <div>
          <a target="_blank" href="https://www.facebook.com/secure.afif">
            <i className="fab fa-facebook fa-1x" />
            Facebook
          </a>
          <a
            id="profile-link"
            target="_blank"
            href="https://www.github.com/afifone"
          >
            <i className="fab fa-github fa-1x" />
            Github
          </a>
          <a target="_blank" href="https://twitter.com/helloafif">
            <i className="fab fa-twitter fa-1x" />
            Twitter
          </a>
          <a href="#">
            <i className="fas fa-envelope-open-text fa-1x" />
            Mail
          </a>
          <a href="#">
            <i className="fas fa-phone fa-1x" />
            Call Me
          </a>
        </div>
      </div>
    </div>
  </section>
  {/* FOOTER SECTION */}
  <footer id="main-footer">
    <div className="container">
      <p>© Copyright Free</p>
      <p id="creator">
        This site recreated by{" "}
        <a href="https://github.com/FreeCodeCamp-Solutions/">
          FreeCodeCamp-Solutions
        </a>
      </p>
    </div>
  </footer>
</>

    </div>
  )
}

export default Footer

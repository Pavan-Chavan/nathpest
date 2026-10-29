import Form from './Form';

function Contacts() {
  return (
    <main>
      <section className="container py-5" aria-labelledby="contact-heading">
        <div className="text-center mb-5">
          <h1 className="display-5 mb-3" id="contact-heading">
            Contact Nath Pest Management
          </h1>
          <p className="fs-5">
            Get in touch to ask about residential and commercial pest control
            services in Pune and Ahmednagar, Maharashtra.
          </p>
        </div>
        <div className="row g-4 justify-content-center">
          <div className="col-lg-5">
            <h2 className="h4">Pune Office</h2>
            <address>
              Sr. No 58/4, Pathare Wasti, near Ganesh Park,
              <br />
              Lohegaon, Pune 411047, Maharashtra
            </address>
            <p>
              Phone: <a href="tel:+918482869086">+91 84828 69086</a>
            </p>
            <p>
              Phone: <a href="tel:+918983009086">+91 89830 09086</a>
            </p>
            <p>
              Email:{' '}
              <a href="mailto:nathpestcontrol@gmail.com">
                nathpestcontrol@gmail.com
              </a>
            </p>
            <h2 className="h4 mt-4">Ahmednagar Office</h2>
            <address>
                Eknira Chowk, near Balaji Super Market, Gawade Mala,
                <br />
                Savedi, Ahmednagar 414003, Maharashtra
            </address>
          </div>
          <div className="col-lg-7">
            <h2 className="h4">Request pest control information</h2>
            <Form />
          </div>
        </div>
      </section>
    </main>
  )
}

export default Contacts;
import { Link } from 'react-router-dom'
import Footer from './Footer'
const CTA: React.FC = () => {
  return (
    <>
      <section className="cta">
        <p className="cta-text">
          Have a project in mind? <br className="sm:block hidden" />
          Let’s build something together!
        </p>
        <Link to="/contact" className="btn">
          Contact
        </Link>
      </section>
      <Footer />
    </>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export default CTA

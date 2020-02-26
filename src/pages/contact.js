import React from "react"
import Layout from "../components/layout"
import contactStyles from "./contact.module.scss"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <h1>Contact</h1>
    <form
      className={contactStyles.contactForm}
      name="contact"
      method="POST"
      data-netlify-recaptcha="true"
      data-netlify="true"
    >
      <div className={contactStyles.hidden}>
        <label>
          Please ignore this field if you're human: <input name="bot-field" />
        </label>
      </div>

      <div className={contactStyles.formGroup}>
        <label for="name">Your Name</label>
        <input
          className={contactStyles.formControl}
          id="name"
          type="text"
          name="name"
          placeholder="Your name"
        />
      </div>

      <div className={contactStyles.formGroup}>
        <label for="email">Your Email</label>
        <input
          className={contactStyles.formControl}
          id="email"
          type="email"
          name="email"
          placeholder="Your email"
          required
        />
      </div>

      <div className={contactStyles.formGroup}>
        <label for="message">Message</label>
        <textarea
          className={contactStyles.formControl}
          id="message"
          name="message"
          placeholder="Your message"
        ></textarea>
      </div>

      <div data-netlify-recaptcha="true"></div>

      <div className={contactStyles.formGroup}>
        <button type="submit">Send</button>
      </div>
    </form>
  </Layout>
)

export default ContactPage

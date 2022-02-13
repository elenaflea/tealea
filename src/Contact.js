import ContactForm from "./ContactForm";

function Contact () {
    

    return (
        <div className='App'>
            <br/>
            <p className='back'>Contact /</p>
            <h3 className='tete'>Des questions?</h3>
            <p className="about">Nous sommes joignables par e-mail à hello@tealea.com, ou n'hésitez pas à remplir simplement le formulaire ci-dessous. Nous faisons de notre mieux pour répondre dans les 24 heures.</p>

            <p className="about">Vous pouvez téléphoner directement à notre équipe du lundi au vendredi de 8h à 15h au <br/> +33-7-81-20-54-01.</p>
          
            <br/> 
            <h3 className='tete'>Contactez-nous</h3>
            <ContactForm />

            <br/> <br/>
          </div>
    )
}

export default Contact;
import './Contact.css';


function Contact() {
    return (
        <div className='contacts' id="id-contact">
            <div className='contact-header'>
                <p className='contact-h1'>Let’s make something awsome together</p>
                <p className='contact-h2'>Get in touch</p>
            </div>


            <div className="row contact-form">
                <form className="col s12 m12 l12">
                    <div className="row">
                        <div className="input-field col s12 m12 l12 center-align">
                            <i className="material-icons prefix light-blue-text text-darken-4">account_circle</i>
                            <input id="icon_name" type="text" className="validate"></input>
                            <label htmlFor="icon_name">Name</label>
                        </div>
                        <div className="input-field col s12 m12 l12">
                            <i className="material-icons prefix light-blue-text text-darken-4">announcement</i>
                            <input id="icon_subject" type="tel" className="validate"></input>
                            <label htmlFor="icon_subject">Subject</label>
                        </div>
                        <div className="input-field col s12 m12 l12">
                            <i className="material-icons prefix light-blue-text text-darken-4">email</i>
                            <input id="icon_message" type="tel" className="validate"></input>
                            <label htmlFor="icon_message">Message</label>
                        </div>
                        <div className='input-buttons col s12 m6 l6'>
                            <button className="waves-effect waves-light btn-large light-blue darken-4">Send
                            <i className="material-icons left">email</i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>


        </div>
    );
};

export default Contact;
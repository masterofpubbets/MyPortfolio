import './Contact.css';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function Contact() {
    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [errorCss, setErrorCss] = useState('col s12 m6 l6 AppColorLightRed hide-div');
    const [errorMes, setErrorMes] = useState('');
    const navigate = useNavigate();

    const sendMail = async (mail) => {
        try {
            const url = 'https://trprojectssolutions.com/eslamalyonline/sendeslamcontact.php';
            const urlParams = url + '?to=' + mail.to + '&fromFullName=' + mail.fromFullName + '&mes=' + mail.mes
            const result = await axios.get(urlParams);
            return (result);
        } catch (error) {

        }

    };

    const handleTextChange = (e) => {
        setErrorCss('col s12 m6 l6 AppColorLightRed hide-div')
        if (e.target.id === 'icon_name') {
            setName(e.target.value)
        }
        if (e.target.id === 'icon_subject') {
            setSubject(e.target.value)
        }
        if (e.target.id === 'icon_message') {
            setMessage(e.target.value)
        }
    };

    const handleOnClick = (e) => {
        e.preventDefault();
        if (name === null | name.trim() === '') {
            setErrorCss('col s12 m6 l6 AppColorLightRed')
            setErrorMes('Missing Name!')
            return ('error')
        }
        if (subject === null | subject.trim() === '') {
            setErrorCss('col s12 m6 l6 AppColorLightRed')
            setErrorMes('Missing Subject!')
            return ('error')
        }
        if (message === null | message.trim() === '') {
            setErrorCss('col s12 m6 l6 AppColorLightRed')
            setErrorMes('Missing Message!')
            return ('error')
        }
        const result = sendMail({ to: 'eslam@eslamaly.online', fromFullName: name, mes: message });
        navigate('/sended');
    };

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
                            <input id="icon_name" type="text" className="validate" value={name} onChange={handleTextChange}></input>
                            <label htmlFor="icon_name">Name</label>
                        </div>
                        <div className="input-field col s12 m12 l12">
                            <i className="material-icons prefix light-blue-text text-darken-4">announcement</i>
                            <input id="icon_subject" type="text" className="validate" value={subject} onChange={handleTextChange}></input>
                            <label htmlFor="icon_subject">Subject</label>
                        </div>
                        <div className="input-field col s12 m12 l12">
                            <i className="material-icons prefix light-blue-text text-darken-4">email</i>
                            <input id="icon_message" type="text" className="validate" value={message} onChange={handleTextChange}></input>
                            <label htmlFor="icon_message">Message</label>
                        </div>
                        <div className='input-buttons col s12 m6 l6'>
                            <button className="waves-effect waves-orange btn-large light-blue darken-4" onClick={handleOnClick}>Send
                                <i className="material-icons left">email</i>
                            </button>
                        </div>
                        <div className={errorCss}>{errorMes}</div>
                    </div>
                </form>
            </div>


        </div>
    );
};

export default Contact;
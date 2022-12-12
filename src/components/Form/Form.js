import styles from './Form.module.scss';
import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import emailjs from '@emailjs/browser';

const Form = () => {
        const form = useRef();

        const [name, setName] = useState('');
        const [email, setEmail] = useState('');
        const [content, setContent] = useState('');

        
        /*
        
        const sendEmail = e => {
            e.preventDefault();
            
        };  
        */
        const dispatch = useDispatch();

        const handleSubmit = (e) => {
            e.preventDefault();

            dispatch({ type: 'ADD_COLUMN', payload: {name, email, content} });
            setName('');
            setEmail('');
            setContent('');

            emailjs.sendForm('service_oa6ztvg', 'template_8angwzr', form.current, 'IKJ3O56SnKbljYjL4')
                .then((result) => {
                    console.log(result.text, "SUCCESS: email został wysłany!");
                }, (error) => {
                    console.log(error.text, "ERROR: email nie został wysłany!");
                });
            e.target.reset();
        }

    return(
        <div className={styles.container}>
            <form className={styles.form} ref={form} onSubmit={handleSubmit}>
                <fieldset className={styles.left}>
                    <h4 className={styles.title}>Imię i nazwisko</h4>

                    <input type='text' placeholder='Jan Kowalski' name='name' value={name} onChange={e => setName(e.target.value)} required></input>

                    <h4 className={styles.title}>e-mail</h4>

                    <input type='email' placeholder='exampleEmail@site.com' name='email' value={email} onChange={e => setEmail(e.target.value)} required></input>

                    <h4 className={styles.title}>Treść wiadomości</h4>

                    <textarea placeholder='W czym mogę pomóc?' name='content' value={content} onChange={e => setContent(e.target.value)} required></textarea>

                    <button type='reset' className={styles.reset} >Reset</button> 
                </fieldset>
                <fieldset className={styles.agreements}>
                        <div className={styles.first}>
                            <input type="checkbox" name="pets_preference" value="dogs" required></input>
                            <span>Wyrażam zgodę na otrzymywanie telefonicznych połączeń przychodzących i/lub wiadomości SMS inicjowanych przez Instytut Zdrowia i Urody Sansey prowadzony przez NZOZ BIF-MED S.C. z siedzibą w Bytomiu, ul. Stefana Żeromskiego 18, 41-902 Bytom w celach handlowych i marketingowych zgodnie z art. 172 ustawy prawo telekomunikacyjne (Dz.U. z 2017 r. poz. 1907).</span>
                        </div>
                        <div className={styles.second}>
                            <input type="checkbox" name="pets_preference" value="cats" required></input>
                            <span>Wyrażam zgodę na otrzymywanie informacji środkami komunikacji elektronicznej zawierających informacje handlowe w rozumieniu ustawy z dn. 18 lipca 2002 r. o świadczeniu usług drogą elektroniczną (t.j. Dz.U.2017.1219) od Instytutu Zdrowia i Urody Sansey prowadzony przez NZOZ BIF-MED S.C. z siedzibą w Bytomiu, ul. Stefana Żeromskiego 18, 41-902 Bytom.</span>
                        </div>
                        <div className={styles.third}>
                            <input type="checkbox" name="pets_preference" value="guinea_pigs" required></input>
                            <span>Administratorem danych osobowych podanych powyżej jest Rafaelo prowadzony przez Rafała Plewinskiego z siedzibą w Lublinie, ul. .............. , 20-.... Lublin. Podane wyżej dane osobowe będą przetwarzane w celu nawiązania kontaktu w związku z oferowaną usługą. Podstawą prawną przetwarzania danych jest art. 6 ust. 1 lit. f RODO. Prawnie uzasadnionym interesem przetwarzania jest marketing bezpośredni towarów lub usług administratora danych lub producentów rozwiązań i usług znajdujących się w ofercie administratora. Podanie ww. danych jest dobrowolne, ale konieczne do realizacji usługi. Zostałem poinformowany o tym, że przysługuje mi prawo do sprzeciwu na przetwarzanie danych osobowych. Dodatkowo mam prawo dostępu do treści moich danych osobowych, ich sprostowania, usunięcia („Prawo do zapomnienia”), ograniczenia przetwarzania, przenoszenia danych i wniesienia skargi do organu nadzorczego – Prezesa Urzędu Ochrony Danych. Podane wyżej dane będą przetwarzane do czasu wyrażenia sprzeciwu przez osobę, której dane dotyczą. Sansey, na podstawie art. 37 RODO wyznacza Inspektora Ochrony Danych, wskazując następujące dane kontaktowe: tel: 32 283 30 16, adres e-mail: biuro@sansey.pl. Dodatkowe informacje znajdują się <a href="http://sansey.bytom.pl/polityka-prywatnosci-i-polityka-cookies/">tutaj</a>.</span>
                        </div>  
                </fieldset>
                <div className={styles.buttonDiv}>
                    <button type='submit' className={styles.send}>Wyślij</button>  
                </div>
            </form>        
        </div>
    )
}

export default Form;

/*
return(
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <fieldset className={styles.left}>
                    <h4 className={styles.title}>Imię i nazwisko</h4>

                    <input type='text' placeholder='Jan Kowalski' value={name} onChange={e => setName(e.target.value)} required></input>

                    <h4 className={styles.title}>e-mail</h4>

                    <input type='email' placeholder='exampleEmail@site.com' value={email} onChange={e => setEmail(e.target.value)} required></input>

                    <h4 className={styles.title}>Treść wiadomości</h4>
                    <textarea placeholder='W czym mogę pomóc?' value={content} onChange={e => setContent(e.target.value)}  required></textarea>
                    <button type='reset' className={styles.reset} >Reset</button> 
                </fieldset>
                <fieldset className={styles.agreements}>
                        <div className={styles.first}>
                            <input type="checkbox" name="pets_preference" value="dogs" required></input>
                            <span>Wyrażam zgodę na otrzymywanie telefonicznych połączeń przychodzących i/lub wiadomości SMS inicjowanych przez Instytut Zdrowia i Urody Sansey prowadzony przez NZOZ BIF-MED S.C. z siedzibą w Bytomiu, ul. Stefana Żeromskiego 18, 41-902 Bytom w celach handlowych i marketingowych zgodnie z art. 172 ustawy prawo telekomunikacyjne (Dz.U. z 2017 r. poz. 1907).</span>
                        </div>
                        <div className={styles.second}>
                            <input type="checkbox" name="pets_preference" value="cats" required></input>
                            <span>Wyrażam zgodę na otrzymywanie informacji środkami komunikacji elektronicznej zawierających informacje handlowe w rozumieniu ustawy z dn. 18 lipca 2002 r. o świadczeniu usług drogą elektroniczną (t.j. Dz.U.2017.1219) od Instytutu Zdrowia i Urody Sansey prowadzony przez NZOZ BIF-MED S.C. z siedzibą w Bytomiu, ul. Stefana Żeromskiego 18, 41-902 Bytom.</span>
                        </div>
                        <div className={styles.third}>
                            <input type="checkbox" name="pets_preference" value="guinea_pigs" required></input>
                            <span>Administratorem danych osobowych podanych powyżej jest Rafaelo prowadzony przez Rafała Plewinskiego z siedzibą w Lublinie, ul. .............. , 20-.... Lublin. Podane wyżej dane osobowe będą przetwarzane w celu nawiązania kontaktu w związku z oferowaną usługą. Podstawą prawną przetwarzania danych jest art. 6 ust. 1 lit. f RODO. Prawnie uzasadnionym interesem przetwarzania jest marketing bezpośredni towarów lub usług administratora danych lub producentów rozwiązań i usług znajdujących się w ofercie administratora. Podanie ww. danych jest dobrowolne, ale konieczne do realizacji usługi. Zostałem poinformowany o tym, że przysługuje mi prawo do sprzeciwu na przetwarzanie danych osobowych. Dodatkowo mam prawo dostępu do treści moich danych osobowych, ich sprostowania, usunięcia („Prawo do zapomnienia”), ograniczenia przetwarzania, przenoszenia danych i wniesienia skargi do organu nadzorczego – Prezesa Urzędu Ochrony Danych. Podane wyżej dane będą przetwarzane do czasu wyrażenia sprzeciwu przez osobę, której dane dotyczą. Sansey, na podstawie art. 37 RODO wyznacza Inspektora Ochrony Danych, wskazując następujące dane kontaktowe: tel: 32 283 30 16, adres e-mail: biuro@sansey.pl. Dodatkowe informacje znajdują się <a href="http://sansey.bytom.pl/polityka-prywatnosci-i-polityka-cookies/">tutaj</a>.</span>
                        </div>  
                </fieldset>
                <div className={styles.buttonDiv}>
                    <button type='submit' className={styles.send}>Wyślij</button>  
                </div>
            </form>        
        </div>
    )
*/
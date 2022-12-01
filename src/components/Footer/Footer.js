import styles from './Footer.module.scss';

const Footer = () => {
    return(
        <div className={styles.container}>
            <form className={styles.form}>
                <fieldset className={styles.left}>
                   <h4 className={styles.title}>Imię i nazwisko</h4>
                    <input type='text' placeholder='Jan Kowalski' required></input>
                    <h4 className={styles.title}>e-mail</h4>
                    <input type='email' placeholder='exampleEmail@site.com' required></input>
                    <h4 className={styles.title}>Treść wiadomości</h4>
                    <textarea placeholder='W czym mogę pomóc?' required></textarea>
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
            <footer className={styles.footer}>
                <p className={styles.author}>Stronę wykonał Michał Bielecki</p>  
                <p className={styles.update}>Ostatnia aktualizacja strony: 1.12.2022</p> 
                <p className={styles.rights}>Wszelkie prawa zastrzeżone</p> 
            </footer>  
        </div>
    )
}

export default Footer;
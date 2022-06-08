/* 
- Chiedere all'utente la sua email
- Controllare che sia nella lista di chi puo' accedere
- Stampare messaggio di esito positivo o negativo
*/ 

// Email del nostro server
const serverEmails = ['federico@gmail.com', 'meccanica-srl@gmail.com', 'everest&co@gmail.com', 'pizzicotto@gmail.com', 'cuthair@gmail.com', 'marilisacostanza@gmail.com', 'calcioclub@gmail.com', 'barilla@gmail.com', 'campoestivo@gmail.com', 'istitutoalbert@gmail.com', 'mariafrancesca@gmail.com', 'teatrocastiglione@gmail.com', 'ottica@gmail.com', 'hotpot@gmail.com', 'torinocomics@gmail.com', 'cottoemangiato@gmail.com', 'acespagni@gmail.com']

// Al click del bottone Invia controllare la presenza dell'email dell'utete nel nostro server
const submitButton = document.getElementById('submit');
submitButton.addEventListener( 'click', 
    function() {
        // Dare un valore ai dati inseriti dall'utente
        const userEmail = document.getElementById('user-email').value;

        // Creare variabile con default false per poi sovvrascriverla in true quando userEmail === singleEmail
        let emailFound = false;

        // Scorrere la lista email del nostro server e accertarci se l'email dell'utente e' presente
        for( let i = 0; i < serverEmails.length; i++ ) {
            const singleEmail = serverEmails[i];

             // Se e' presente emailFound diventera' da false a true
            if( userEmail === singleEmail ) {
                emailFound = true;
            }
        }

        // Creare messaggiio per l'utente esito positivo o negativo
        const userMessage = document.querySelector('.email-verify'); 

        if(emailFound === true) {
            userMessage.innerHTML = `<span>Benvenut* nella tua email!</span>`
        } else {
            userMessage.innerHTML = `<span>Spiacenti, l'email inserita e' inesistente.</span>`
        }
    }
)


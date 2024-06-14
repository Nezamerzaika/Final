function reg() {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxH9O5-FmTOtdfpeD2adxFBhwFmg94GrWo3MNZ5G1Yq0jeraHVgfmtWR2vkVMookzjdyw/exec'
    const form = document.forms['form']


        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => console.log('Success!', response))
            .catch(error => console.error('Error!', error.message))
}

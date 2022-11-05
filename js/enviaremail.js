// Enviar correo

const $form = document.querySelector('#form')
    const $buttonMailto = document.querySelector('#mailto')

    $form.addEventListener('submit', handleSubmit)

    function handleSubmit(event) {
      event.preventDefault()
      const form = new FormData(this)
      $buttonMailto.setAttribute('href', `mailto:micaelamujica@ilpla.edu.ar?subject= nombre${form.get('name')}  teléfono ${form.get('number')}  correo ${form.get('email')}&body=${form.get('message')}`)
      $buttonMailto.click()
    }
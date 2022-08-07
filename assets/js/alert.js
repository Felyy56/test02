(async () => {

    const { value: accept } = await Swal.fire({                                //url here
      title: 'Do you accept our <a style="text-decoration:none; color: green;" href="">Terms of Service</a> ',
      input: 'checkbox',
      inputValue: 1,
      allowEnterKey: false,
      allowEscapeKey: false,
      allowOutsideClick: false,
      inputPlaceholder:
        'I accept the terms of services!',
      confirmButtonText:
        'Continue <i class="fa fa-arrow-right"></i>',
      inputValidator: (result) => {
        return !result && 'You need to accept our Terms of Service!'
      }
    })
    
    if (accept) {
      Swal.fire('You accepted our Terms of Service', '', 'success')
    }
    
    })()
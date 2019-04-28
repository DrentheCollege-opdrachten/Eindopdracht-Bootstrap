
  let regex = [
    /[a-z]+( [a-z]+)*/i,
    /([a-z1-9]+\.?)*(@){1}([a-z]+\.[a-z]+)/i
  ]

/////////////////// AUTOSCROLL TO A "FILE" ///////////////////
  function scrollTo (id) {
    document.getElementById(id).scrollInToView()

  }

//////////////// REGEX COMPARE FUNCTION //////////////////////
  function checkFields (ev) {

    let naam = $('#naam').val();
    let mail = $('#mail').val();
    let veldenCorrect = 2


    if (!regex[0].test(naam) && $('#naam').val().length === 0) {
      veldenCorrect--;
    }
    if (!regex[1].test(mail)) {
      veldenCorrect--;
    }

    if (veldenCorrect === 2) {
      // TODO: redirect to the home page
      console.log("ALL FIELDS CORRECT");
      ev.preventDefault();
      window.location.replace('./Homepage.html')
    }
  }

  function commitComment() {

      $('#txtarea').val("")
      $('#ondrwrp').val("")
      $('#naam').val("")

      alert("Deze knop doet niks.\nOmdat ik niet van php hou")
  }

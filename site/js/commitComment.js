let regex_velden = /[a-z]+/i

$(document).ready(function() {
  /////////////// DETECTING IF THE BUTTON IS CLICKED /////////////////////
  $('#commit').click( function () {
    const comment = {
      naam: $('#naam').val(),
      onderwerp: $('#ondrwrp').val(),
      txt: $('#txtarea').val()
    }
    //////////// CHECKING IF THE FIELDS ARE ALL FILLED ///////////////////
    if (checkFields(comment)) {
    } else {
      createComment(comment)
    }
  });
});
/////////////// MAKE THE ERROR MESSAGE IF A FIELD IS INCORRECT //////////
function error (fieldsWrong) {
  const lng = fieldsWrong.length;
  let str = "";
  console.log(lng);

  if (lng > 1) {
    str += "De velden "
  }
  if (lng === 1) {
    str += "Het veld "
  }

  for (var i = 0; i < lng; i++) {
    if (i < lng - 1) {
      str += fieldsWrong[i]
      if (i < lng - 2) {
        str += ", "
      } else {
        str += " "
      }
    } else if (lng > 1){
      str += "en " + fieldsWrong[i] + " zijn verkeerd ingevuld"
    } else if (lng === 1) {
      str = fieldsWrong[i] + " is verkeerd ingevuld"
    }
  }

  alert(str)
}
/////////////// CREATE THE HTML FOR THE COMMENT ///////////////////
function createComment (input) {
  // TODO: MAKE THE COMMENT HTML 
  console.log(input);
}

/////////////// CHECK IF THE FIELDS ARE CORRECT //////////////////
function checkFields (input) {
  let bool = true;
  let fieldsWrong = [];
  console.log(input);
  if(!regex_velden.test(input.naam)) {
    document.getElementById('naam').style.borderColor = 'red';
    bool = false;
    fieldsWrong.push('naam')

  }if(!regex_velden.test(input.onderwerp)) {
    document.getElementById('ondrwrp').style.borderColor = 'red';
    bool = false;
    fieldsWrong.push('onderwerp')

  }if(input.txt.length === 0) {
    document.getElementById('txtarea').style.borderColor = 'red';
    bool = false;
    fieldsWrong.push('reactie')
  }

  error(fieldsWrong)
  return bool;

}

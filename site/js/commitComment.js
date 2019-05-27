///////////////// MAKING TH VARIABLES /////////////////////////////////////////
let regex_velden = /[a-z]+/i

$(document).ready(function() {
///////////////// DETECTING IF THE BUTTON IS CLICKED //////////////////////////
  $('#commit').click( function () {
    const comment = {
      naam: $('#naam').val(),
      onderwerp: $('#ondrwrp').val(),
      txt: $('#txtarea').val()
    }
///////////////// CHECKING IF THE FIELDS ARE ALL FILLED ///////////////////////
    if (!checkFields(comment)) {} else {
      createComment(comment)
    }
  });
});

///////////////// MAKE THE ERROR MESSAGE IF A FIELD IS INCORRECT //////////////
function error (fieldsWrong) {
  const lng = fieldsWrong.length;
  let str = "";

  if (lng > 1) {
    str += "De velden \""
  }
  if (lng === 1) {
    str += "Het veld "
    console.log('hi');
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
      str += "en " + fieldsWrong[i] + "\" zijn verkeerd ingevuld"
    } else if (lng === 1) {
      str += fieldsWrong[i] + "\" is verkeerd ingevuld"
    }
  }

  alert(str)
}

///////////////// CREATE THE HTML FOR THE COMMENT /////////////////////////////
///////////////// AND CLEARING THE FIELDS /////////////////////////////////////
function createComment (input) {
  resetFields();

  let cmd = `
    <div class="comment">\n
      <h6 class="card-title"> ${input.naam} </h6>\n
      <h6 class="card-subtitle text-muted"> ${input.onderwerp} </h6>\n
      <p class="card-text cmd_text"> ${input.txt} </p>\n
      </div>\n
  `
  let msg = document.createElement('div')
  msg.className = "card col-xl-3 col-lg-4 col-md-5 col-sm-12";
  msg.style = "margin: 7.5px; background-color: #FAFAFA";
  msg.innerHTML = cmd;
  document.getElementById('comments').appendChild(msg)
}

///////////////// CLEARING THE FIELDS AND MAKING THE GRAY AGAIN ///////////////
function resetFields () {
  $('#naam').val("");
  document.getElementById('naam').style.borderColor = "#6C757D";
  $('#ondrwrp').val("");
  document.getElementById('ondrwrp').style.borderColor = "#6C757D";
  $('#txtarea').val("");
  document.getElementById('txtarea').style.borderColor = "#6C757D";
}

///////////////// CHECK IF THE FIELDS ARE CORRECT /////////////////////////////
function checkFields (input) {
  let bool = true;
  let fieldsWrong = [];
  if(input.naam.length === 0) {
    document.getElementById('naam').style.borderColor = 'red';
    bool = false;
    fieldsWrong.push('naam')

  }if(input.onderwerp.length === 0) {
    document.getElementById('ondrwrp').style.borderColor = 'red';
    bool = false;
    fieldsWrong.push('onderwerp')

  }if(input.txt.length === 0) {
    document.getElementById('txtarea').style.borderColor = 'red';
    bool = false;
    fieldsWrong.push('reactie')
  }
  if (!bool) {
    error(fieldsWrong)
  }
  return bool;
}

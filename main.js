// The Form Data
let formData = [
  // For demonstration purposes,
  // the first form element has been added to the HTML file as a comment
  // compare the input in the HTML file with the contents of this first object
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current Website URL",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobile Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];

// HINTS:
// As you can see, we access the first element in the array
// with [0] and then grab the property "label" using the "." operator
( function(){
  // Select the first element from the array
  let first = formData[ 0 ];
  // Log the first object
  console.log( first );
  // Log the string "First Name"
  console.log( first.label );
} )();


// -------- Your Code Goes Below this Line --------

// declare variable to hold #fields
let form = document.getElementById('fields');

for (let i = 0; i < formData.length; i++) {
  if (formData[i].type === "textarea") {
    buildTextArea(i);
  } else if (formData[i].type === "select") {
    buildSelect(i);
  } else {
    buildInput(i);
  }

}

function buildTextArea(x) {
  // create an element called input
  let textarea = document.createElement('textarea');
  // give the input three attributes: type, id, and placeholder
  textarea.setAttribute('type', formData[x].type);
  textarea.setAttribute('id', formData[x].id);
  textarea.setAttribute('placeholder', formData[x].label);
  // append the input element as a child to the div with id = fields
  form.appendChild(textarea);
}

function buildInput(x) {
  // create an element called input
  let input = document.createElement('input');
  // give the input three attributes: type, id, and placeholder
  input.setAttribute('type', formData[x].type);
  input.setAttribute('id', formData[x].id);
  input.setAttribute('placeholder', formData[x].label);
  // append the input element as a child to the div with id = fields
  form.appendChild(input);
}

function buildSelect(x) {
  // create an element called input
  let select = document.createElement('select');
  // give the input three attributes: type, id, and placeholder
  select.setAttribute('type', formData[x].type);
  select.setAttribute('id', formData[x].id);
  // create a loop to make it do this for each item in options array
  for (let i = 0; i < formData[x].options.length; i++) {
    //create an option tag for an option in the option array
    let option = document.createElement('option');
    // add value attribute to option
    option.setAttribute('value', formData[x].options[i].value);
    //create a node for the content of each option tag
    let optionContent = document.createTextNode(formData[x].options[i].label);
    // append the input element as a child to the div with id = fields
    form.appendChild(select);
    //append the option node to the select node
    select.appendChild(option);
    //append the content node to the option node
    option.appendChild(optionContent);
    // set placeholder text as "Select Language"
    // option.setAttribute('label', formData[x].label);
  }
}
// create an if statement that checks each item in the formData array and constructs different forms based on if options is an empty array or not

// should I abstract the code and create two separate constructor functions and then run each function?
//

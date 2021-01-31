
$(document).ready( function() {
  init();
});


init = function () {
   /* when find button clicked, 
  make api call and display suggestion */
  $('.activity').click( getRandomAct );

  /* when add button clicked,
  add suggestion as a list item */
  $('.add').click( function() {
    const suggestion = $('.suggestion').text();
    $('.list ul').append(`<li>  ${suggestion} </li>`);
  });
}


getRandomAct = function() {
  const url = 'https://www.boredapi.com/api/activity'
  let activity;
  fetch(url)
    .then( response => {
      if (response.status !== 200) {
        throw response.status;
      } else {
        return response.json();
      }
    }).then( data => {
      $('.suggestion').text(data.activity);
    }).catch(
      error => {
        $(`.suggestion').text('Error Occured: ${error}`);
        console.log(error);
      }
    );
}

initCache = function(key, value) {
  if (!key) {
    key = JSON.stringify( [value] );
  } else {
    const newkey = JSON.parse(key).append(value);
    key = JSON.stringify( newkey );
  }
}

/* TODAY: DOM/API CALL */
/* Sunday: JS testing */
/* Monday: DOM/event binding*/
/* Tuesday: Accessibility, build basic app */
/* Wed: build basic app */
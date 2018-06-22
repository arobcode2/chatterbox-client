// YOUR CODE HERE:
//http://parse.atx.hackreactor.com/chatterbox/classes/messages

//let myData = [];
let app = {};











$(document).ready(function(){
  $.ajax({
    url: 'http://parse.atx.hackreactor.com/chatterbox/classes/messages',
    type: 'GET',
    contentType: 'application/json',
    success: function (data) {
      myData = data.results;
      //$("#chats").append("<div></div>").text(data.results[0].objectId);
      //console.log(data.results);
    },
    error: function (data) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('chatterbox: Failed to get message', data);
    }
  });
  //console.log('mydata ' + myData);
});
// 

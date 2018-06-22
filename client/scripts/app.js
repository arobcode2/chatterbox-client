// YOUR CODE HERE:
//http://parse.atx.hackreactor.com/chatterbox/classes/messages

//let myData = [];
class App {

  constructor() {
    this.server = 'http://parse.atx.hackreactor.com/chatterbox/classes/messages';
  }

  init() {
  
  }

  send(message) {
    $.ajax({
    // This is the url you should use to communicate with the parse API server.
    url: 'http://parse.atx.hackreactor.com/chatterbox/classes/messages',
    type: 'POST',
    data: JSON.stringify(message),
    contentType: 'application/json',
    success: function (data) {
      console.log('chatterbox: Message sent');
    },
    error: function (data) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('chatterbox: Failed to send message', data);
    }
    });
  }

  fetch() {
    $.ajax({
    url: 'http://parse.atx.hackreactor.com/chatterbox/classes/messages',
    type: 'GET',
    
    success: function (data) {
      //App.server = this.url;
      console.log(data);
    },
    error: function (data) {
      console.error('chatterbox: Failed to get message', data);
    }
    
    });
  }
};

const app = new App();

var message = {
  username: 'titan',
  text: 'trololo',
  roomname: '4chan'
};

$(document).ready(function() {
  app.send(message);
  app.fetch();
});









// $(document).ready(function(){
//   $.ajax({
//     url: 'http://parse.atx.hackreactor.com/chatterbox/classes/messages',
//     type: 'GET',
//     contentType: 'application/json',
//     success: function (data) {
//       myData = data.results;
//       //$("#chats").append("<div></div>").text(data.results[0].objectId);
//       //console.log(data.results);
//     },
//     error: function (data) {
//       // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
//       console.error('chatterbox: Failed to get message', data);
//     }
//   });
//   //console.log('mydata ' + myData);
// });
// 

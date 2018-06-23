// YOUR CODE HERE:
//http://parse.atx.hackreactor.com/chatterbox/classes/messages

//let myData = [];
class App {

  constructor() {
    this.server = 'http://parse.atx.hackreactor.com/chatterbox/classes/messages';
    //this.data = [];
    App.pointer = this;
  }

  init() {
    console.log('made it in the init');
    $(document).ready(function() {
      $('.username').click(App.pointer.handleUsernameClick);
      $('.submit').click(App.pointer.handleSubmit);
      $('.refresh').on('click', App.pointer.fetch);
    });
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
        //pointer.data = data.results;
        for (var i = 0; i < data.results.length; i++) {
          App.pointer.renderMessage(data.results[i]);
        }
        console.log(data);
      },
      error: function (data) {
        console.error('chatterbox: Failed to get message', data);
      }
    });
  }

  clearMessages() {
    $('#chats').empty();
  }

  renderMessage(message) {
    //.css("font-weight", "Bold")
    $('#chats').append(`<div> <div>${message.username}:<div/> <div>${message.text}<div/> <div/> <br>`);
  }

  renderRoom(roomname) {
    $('#roomSelect').append(`<div> ${roomname} <div/>`);
  }

  handleUsernameClick(username) {
    $('#main').append(`<div> ${username} <div/>`);
  }

  handleSubmit() {
    this.send(message);
  }

  renderAllMessages() {
    
  } 
};

const app = new App();
app.init();

var message = {
  username: 'titan',
  text: 'trololo',
  roomname: '4chan'
};

$(document).ready(function() {
  console.log(app.data);
  app.send(message);
  //app.fetch();
  //app.renderMessage(message);
  //app.clearMessages();
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

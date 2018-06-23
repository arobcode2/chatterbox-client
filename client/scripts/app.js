// YOUR CODE HERE:
//http://parse.atx.hackreactor.com/chatterbox/classes/messages

class App {

  constructor() {
    this.server = 'http://parse.atx.hackreactor.com/chatterbox/classes/messages';
    App.pointer = this;
    App.rooms = {};
  }

  init() {
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
        App.pointer.clearMessages();
        for (var i = 0; i < data.results.length; i++) {
          App.pointer.renderMessage(data.results[i]);
          App.rooms[data.results[i].roomname] = data.results[i].roomname;
        }
        App.pointer.renderRoom();
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
    for (let key in App.rooms) {
      $('.roomsDrop').append(`<option> ${key} </option>`);
    }
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
  //console.log(app.data);
  //app.send(message);
  //console.log(App.rooms);
  //app.fetch();
  //app.renderMessage(message);
  //app.clearMessages();
});

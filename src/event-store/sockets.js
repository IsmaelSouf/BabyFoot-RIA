class gameSocket {
  //Creating a Socket constructor
  constructor() {
    this.game_socket = [];
    //This is where we are connecting to with sockets
  }

  generateSocket(key, socket) {
    this.game_socket[key] = socket;
  }

  //Change data with socket in our table
  updateSocket(change_data) {
    for (const key in this.game_socket) {
      this.game_socket[key].emit("change_data", change_data);
    }
  }

  //Function to delete the socket in our table
  removeSocket(key) {
    delete this.game_socket[key];
  }
}

module.exports = new gameSocket();

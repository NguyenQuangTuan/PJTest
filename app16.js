var person = {
    firstName: 'Hoang',
    lastName: 'Pham',
    showName: function() {
      console.log(this.firstName + ' ' + this.lastName);
    }
  };
  
  //Ở đây this sẽ là object person
  person.showName(); //Hoang Pham.
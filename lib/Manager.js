const Employee = require('./Employee');

class Manager extends Employee {
	constructor(name, id, email, officeNumber) {
		super(name, id, email, 'Manager')
		this.office = officeNumber;
	}
  getOfficeNumber(){
    return this.officeNumber;
  }
  getRole(){
    return 'Manager';
  }
}

module.exports = Manager;

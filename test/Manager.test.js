// require manager module - which we will be testing in this suite
const Manager = require('../lib/manager');

// describe manager
describe('Manager', () => {
  describe('Initialization', () => {
    it('returns an object that is an instance of the Manager class when called with the new keyword', () => {
      const manager = new Manager();
      expect(manager instanceof Manager).toBe(true);
    })

    it('it sets the name property based on constructor argument', () => {
      const name = "Cas";
      const manager = new Manager(name);

      expect(manager.name).toBe(name);
    });

    it('it sets the id property based on constructor argument', () => {
      const id = 1;
      const manager = new Manager("", id);

      expect(manager.id).toBe(id);
    });

    it('it sets the email property based on constructor argument', () => {
      const email = 'test@email.com';
      const manager = new Manager("", 0, email);

      expect(manager.email).toBe(email);
    });
  })

  describe('getName', () => {
    it('returns the name property when the getName() method is called', () => {
      const name = "Cas";
      const manager = new Manager(name);

      expect(manager.getName()).toBe(name);
    });
  })

  describe( 'getId', () => {
    it('returns the id property when the getId() method is called', () => {
      const id = 1;
      const manager = new Manager("", id);

      expect(manager.getId()).toBe(id);
    });
  });

  describe('getEmail', () => {
    it('returns the email property when the getEmail() method is called', () => {
      const email = 'test@email.com';
      const manager = new Manager("", 0, email);

      expect(manager.getEmail()).toBe(email);
    });
  });


  describe('getRole', () => {
    it("returns 'Manager' when the getRole() method is called", () => {
      const manager = new Manager();

      expect(manager.getRole()).toBe('Manager');
    });
  });

  describe('getOfficeNumber', () => {
    it("returns 'officeNumber' when the getOfficeNumber() method is called", () => {
      const officeNumber = '123';
      const manager = new Manager("", 0, 'test@email.com', officeNumber);

      expect(manager.getOfficeNumber()).toBe(officeNumber);
    });
  });

});

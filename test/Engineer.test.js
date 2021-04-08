// require Engineer module - which we will be testing in this suite
const Engineer = require('../lib/Engineer');

// describe Engineer
describe('Engineer', () => {
  describe('Initialization', () => {
    it('returns an object that is an instance of the Engineer class when called with the new keyword', () => {
      const engineer = new Engineer();
      expect(engineer instanceof Engineer).toBe(true);
    })

    it('it sets the name property based on constructor argument', () => {
      const name = "Cas";
      const engineer = new Engineer(name);

      expect(engineer.name).toBe(name);
    });

    it('it sets the id property based on constructor argument', () => {
      const id = 1;
      const engineer = new Engineer("", id);

      expect(engineer.id).toBe(id);
    });

    it('it sets the email property based on constructor argument', () => {
      const email = 'test@email.com';
      const engineer = new Engineer("", 0, email);

      expect(engineer.email).toBe(email);
    });
  })

  describe('getName', () => {
    it('returns the name property when the getName() method is called', () => {
      const name = "Cas";
      const engineer = new Engineer(name);

      expect(engineer.getName()).toBe(name);
    });
  })

  describe( 'getId', () => {
    it('returns the id property when the getId() method is called', () => {
      const id = 1;
      const engineer = new Engineer("", id);

      expect(engineer.getId()).toBe(id);
    });
  });

  describe('getEmail', () => {
    it('returns the email property when the getEmail() method is called', () => {
      const email = 'test@email.com';
      const engineer = new Engineer("", 0, email);

      expect(engineer.getEmail()).toBe(email);
    });
  });


  describe('getRole', () => {
    it("returns 'Engineer' when the getRole() method is called", () => {
      const engineer = new Engineer();

      expect(engineer.getRole()).toBe('Engineer');
    });
  });

  describe('getGithub', () => {
    it("returns 'Engineer' when the getGithub() method is called", () => {
      const github = 'https://www.github.com/';
      const engineer = new Engineer("", 0, 'test@email.com', github);

      expect(engineer.getGithub()).toBe(github);
    });
  });

});

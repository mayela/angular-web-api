import { Department } from './department';
describe('Department', () => {
  
  let department = null;

  /**
  * beforeEach will create fresh copy of User object
  * before each unit test. We also can define User object once 
  * and run unit tests against it, but in general it's a good practice
  * to work on a new instance of an object to avoid modifications from
  * the previous test run.
  */
  beforeEach(() => {
    department = new Department();
    department.id = '5abc4549bdf';
    department.name = 'IT'
  });

  it('should be initialized', () => {
    expect(department).toBeTruthy();
  });
  it('should have keys', () => {
    const propertiesActual = Object.keys(department);
    const propertiesExpected = [
      'id',
      'name'
    ];
    expect(propertiesActual).toEqual(propertiesExpected);
  });
});

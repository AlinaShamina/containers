export default class ErrorRepository {
  constructor() {
    this.errors = new Map([
      [100, 'Not Found'],
      [200, 'OK'],
      [400, 'Bad Request'],
    ]);
  }

  translate(code) {
    return this.errors.get(code) || 'Unknown error';
  }
}

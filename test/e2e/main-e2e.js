describe('angularjs homepage todo list', function() {
  it('should add a todo', function() {
    browser.get('/#');

    // element(by.model('todoText')).sendKeys('write a protractor test');
    // element(by.css('[value="add"]')).click();

    // var todoList = element.all(by.repeater('todo in todos'));
    // expect(todoList.count()).toEqual(3);
    expect('test').toEqual('write a protractor test');
  });
});
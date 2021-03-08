import { ListElement } from './list-element';

describe('ListElement', () => {
  it('should create an instance', () => {
    expect(new ListElement("", "", new Date(), false)).toBeTruthy();
  });
});

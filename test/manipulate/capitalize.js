import v from '../voca';
import { expect } from 'chai';

describe('capitalize', function() {

  it('should capitalize the first character in a string', function() {
    expect(v.capitalize('apple')).to.be.equal('Apple');
    expect(v.capitalize('APPLE')).to.be.equal('Apple');
    expect(v.capitalize('яблоко')).to.be.equal('Яблоко');
    expect(v.capitalize('f')).to.be.equal('F');
    expect(v.capitalize('')).to.be.equal('');
    expect(v.capitalize('100')).to.be.equal('100');
    expect(v.capitalize('  ')).to.be.equal('  ');
  });

  it('should capitalize the first character in a string and keep the rest unmodified', function() {
    expect(v.capitalize('APPLE', false)).to.be.equal('APPLE');
    expect(v.capitalize('apple', false)).to.be.equal('Apple');
    expect(v.capitalize('macBook', false)).to.be.equal('MacBook');
    expect(v.capitalize('f', false)).to.be.equal('F');
    expect(v.capitalize('', false)).to.be.equal('');
    expect(v.capitalize('*apple', false)).to.be.equal('*apple');
  });

  it('should capitalize the first character in a string representation of an object', function() {
    expect(v.capitalize(['grape'])).to.be.equal('Grape');
    expect(v.capitalize({
      toString: function() {
        return 'oRaNgE';
      }
    }, false)).to.be.equal('ORaNgE');
  });

  it('should not modify numbers', function() {
    expect(v.capitalize(100)).to.be.equal('100');
    expect(v.capitalize(812, false)).to.be.equal('812');
  });

  it('should return an empty string for null or undefined', function() {
    expect(v.capitalize()).to.be.equal('');
    expect(v.capitalize(undefined)).to.be.equal('');
    expect(v.capitalize(null)).to.be.equal('');
    expect(v.capitalize(undefined, true)).to.be.equal('');
    expect(v.capitalize(undefined, false)).to.be.equal('');
  });

});
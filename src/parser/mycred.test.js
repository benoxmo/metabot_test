const parseMyCred = require('./mycred')

describe('mycred handler tests', () => {
  test('It should error if a string is not provided', () =>
    expect(() => parseMyCred(undefined)).toThrow(/type/))

  test('It should error if an empty string is passed in', () =>
    expect(() => parseMyCred('')).toThrow(/empty/))

  test('It should error if not enough arguments are provided', () =>
    expect(() => parseMyCred ('!ac mycred')).toThrow(/arguments/))

  test('It should properly pass a well formed message', () =>
    expect(
      parseAddAddress(
        '!ac mycred myname(github or discord or discourse)',
      ),
    ).toEqual('myname(github or discord or discourse)'))
})

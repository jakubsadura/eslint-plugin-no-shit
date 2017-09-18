const {RuleTester} = require('eslint')
const rule = require('./no-shit').rules['be-polite']

const ruleTester = new RuleTester()
ruleTester.run('no-shit', rule, {
  valid: [
    '"no sht"',
    '"NO FCK"',
    'console.log(123)',
    {code: 'var shhhh = 1', options: [{nsfw: true}]},
  ],
  invalid: [
    invalid('"FUCK"'),
    invalid('"SHIT"'),
    invalid('"no shit"'),
    invalid('function noFuck() {}'),
    {
      code: `
        var shit = 'foo'
        var bat = 'fuck'
      `,
      errors: 2,
    },
    {
      code: 'var shit = 1',
      options: [
        {nsfw: true},
      ],
      errors: [
        {message: 'It would be great if you could be more polite my darling...'},
      ],
    },
  ],
})

function invalid(code, output) {
  const invalidTest = {
    code,
    errors: [{message: 'Watch your language, motherfucker!'}],
  }
  if (output) {
    invalidTest.output = output
  }
  return invalidTest
}

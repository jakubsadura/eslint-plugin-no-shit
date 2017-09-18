const isOffensive = text => typeof text === 'string' && /(shit|fuck)/.test(text.toLowerCase())
const reportWith = message => (context, node) => context.report(node, message)

const bePoliteRule = {
  meta: {
    docs: {
      description: 'Disallow use of offensive language',
      category: 'Best Practices',
      recommended: true,
    },
    schema: [
      {
        type: 'object',
        properties: {
          nsfw: {
            type: 'boolean',
          },
        },
      },
    ],
  },
  create(context) {
    const config = context.options[0] || {}
    const {nsfw} = config
    const message = nsfw ?
      'It would be great if you could be more polite my darling...' :
      'Watch your language, motherfucker!'
    const report = reportWith(message)
    return {
      Literal(node) {
        isOffensive(node.value) && report(context, node)
      },
      Identifier(node) {
        isOffensive(node.name) && report(context, node)
      },
      TemplateElement(node) {
        isOffensive(node.value.raw) && report(context, node)
      },
      Program(node) {
        node.comments
          .filter(c => c.type !== 'Shebang')
          .forEach(c => {
            isOffensive(c.value) && report(context, c)
          })
      },
    }
  },
}

module.exports.rules = {
  'be-polite': bePoliteRule,  
}

import { transformSync } from '@swc/core'
import { createRequire } from 'module'
import { strict as assert } from 'node:assert'
var resolve = createRequire(
  typeof __filename !== 'undefined' ? __filename : import.meta.url
).resolve

const code = `
import { Trans } from '@lingui/macro';
export const App = (): anyOk => {
  return (
    <Trans>hi</Trans>
  );
};
`

const plugins = [['@lingui/swc-plugin', {}]].map((el) => [
  resolve(el[0]),
  el[1],
])

const transformed = transformSync(code, {
  jsc: {
    parser: {
      syntax: 'typescript',
      tsx: true,
    },
    target: 'esnext',
    experimental: { plugins },
  },
})

console.log(transformed.code)
assert.equal(
  transformed.code,
  `import { Trans } from "@lingui/react";
export const App = ()=>{
    return /*#__PURE__*/ React.createElement(Trans, {
        message: "hi",
        id: "yy8ap6"
    });
};
`
)

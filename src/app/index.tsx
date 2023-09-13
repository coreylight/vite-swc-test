import { Trans } from '@lingui/macro'
import { useBoot } from './hooks/useBoot'

export const App = (): anyOk => {
  useBoot()
  return (
    <div css={{ margin: 100, fontSize: 40, color: 'red' }}>
      <Trans>hi</Trans>
    </div>
  )
}

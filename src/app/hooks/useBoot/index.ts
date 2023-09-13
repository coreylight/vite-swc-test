import { useMount } from 'react-use'

/** useBoot signifies to the boot shell that the application is ready. */
export const useBoot = (): void => {
  useMount(() => {
    document.querySelector('#root')?.classList.remove('loading')
  })
}

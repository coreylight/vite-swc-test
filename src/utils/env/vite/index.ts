import { ImportMetaEnv, ModeType } from '../util'

export const MODE: ModeType = (import.meta as any).env.MODE as ModeType

export const TYPE = 'vite'

export const ENV_VARS = (import.meta as any).env as unknown as ImportMetaEnv

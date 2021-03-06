interface OptionConfig {
  default?: any
  type?: any[]
}
export default class Option {
  rawName: string
  description: string
  /** Option name */
  name: string
  /** Option name and aliases */
  names: string[]
  isBoolean?: boolean
  required?: boolean
  config: OptionConfig
  negated: boolean
  constructor(rawName: string, description: string, config?: OptionConfig)
}
export { OptionConfig }

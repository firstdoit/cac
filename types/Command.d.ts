import CAC from './CAC'
import Option, { OptionConfig } from './Option'
interface CommandArg {
  required: boolean
  value: string
  variadic: boolean
}
interface HelpSection {
  title?: string
  body: string
}
interface CommandConfig {
  allowUnknownOptions?: boolean
  ignoreOptionDefaultValue?: boolean
}
declare type HelpCallback = (sections: HelpSection[]) => void
declare type CommandExample = ((bin: string) => string) | string
declare class Command {
  rawName: string
  description: string
  config: CommandConfig
  cli: CAC
  options: Option[]
  aliasNames: string[]
  name: string
  args: CommandArg[]
  commandAction?: (...args: any[]) => any
  usageText?: string
  versionNumber?: string
  examples: CommandExample[]
  helpCallback?: HelpCallback
  globalCommand?: GlobalCommand
  constructor(
    rawName: string,
    description: string,
    config: CommandConfig,
    cli: CAC
  )
  usage(text: string): this
  allowUnknownOptions(): this
  ignoreOptionDefaultValue(): this
  version(version: string, customFlags?: string): this
  example(example: CommandExample): this
  /**
   * Add a option for this command
   * @param rawName Raw option name(s)
   * @param description Option description
   * @param config Option config
   */
  option(rawName: string, description: string, config?: OptionConfig): this
  alias(name: string): this
  action(callback: (...args: any[]) => any): this
  /**
   * Check if a command name is matched by this command
   * @param name Command name
   */
  isMatched(name: string): boolean
  get isDefaultCommand(): boolean
  get isGlobalCommand(): boolean
  /**
   * Check if an option is registered in this command
   * @param name Option name
   */
  hasOption(name: string): Option | undefined
  outputHelp(): void
  outputVersion(): void
  checkRequiredArgs(): void
  /**
   * Check if the parsed options contain any unknown options
   *
   * Exit and output error when true
   */
  checkUnknownOptions(): void
  /**
   * Check if the required string-type options exist
   */
  checkOptionValue(): void
}
declare class GlobalCommand extends Command {
  constructor(cli: CAC)
}
export { HelpCallback, CommandExample, CommandConfig, GlobalCommand }
export default Command

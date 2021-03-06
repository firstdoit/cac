/// <reference types="node" />
import { EventEmitter } from 'events'
import Command, {
  GlobalCommand,
  CommandConfig,
  HelpCallback,
  CommandExample
} from './Command'
import { OptionConfig } from './Option'
interface ParsedArgv {
  args: ReadonlyArray<string>
  options: {
    [k: string]: any
  }
}
declare class CAC extends EventEmitter {
  /** The program name to display in help and version message */
  name: string
  commands: Command[]
  globalCommand: GlobalCommand
  matchedCommand?: Command
  matchedCommandName?: string
  /**
   * Raw CLI arguments
   */
  rawArgs: string[]
  /**
   * Parsed CLI arguments
   */
  args: ParsedArgv['args']
  /**
   * Parsed CLI options, camelCased
   */
  options: ParsedArgv['options']
  private showHelpOnExit
  private showVersionOnExit
  /**
   * @param name The program name to display in help and version message
   */
  constructor(name?: string)
  /**
   * Add a global usage text.
   *
   * This is not used by sub-commands.
   */
  usage(text: string): this
  /**
   * Add a sub-command
   */
  command(
    rawName: string,
    description?: string,
    config?: CommandConfig
  ): Command
  /**
   * Add a global CLI option.
   *
   * Which is also applied to sub-commands.
   */
  option(rawName: string, description: string, config?: OptionConfig): this
  /**
   * Show help message when `-h, --help` flags appear.
   *
   */
  help(callback?: HelpCallback): this
  /**
   * Show version number when `-v, --version` flags appear.
   *
   */
  version(version: string, customFlags?: string): this
  /**
   * Add a global example.
   *
   * This example added here will not be used by sub-commands.
   */
  example(example: CommandExample): this
  /**
   * Output the corresponding help message
   * When a sub-command is matched, output the help message for the command
   * Otherwise output the global one.
   *
   */
  outputHelp(): void
  /**
   * Output the version number.
   *
   */
  outputVersion(): void
  private setParsedInfo
  /**
   * Parse argv
   */
  parse(
    argv?: any[],
    {
      /** Whether to run the action for matched command */
      run
    }?: {
      run?: boolean | undefined
    }
  ): ParsedArgv
  private mri
  runMatchedCommand(): any
}
export default CAC

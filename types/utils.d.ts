import Option from './Option'
export declare const removeBrackets: (v: string) => string
export declare const findAllBrackets: (
  v: string
) => {
  required: boolean
  value: string
  variadic: boolean
}[]
interface MriOptions {
  alias: {
    [k: string]: string[]
  }
  boolean: string[]
}
export declare const getMriOptions: (options: Option[]) => MriOptions
export declare const findLongest: (arr: string[]) => string
export declare const padRight: (str: string, length: number) => string
export declare const camelcase: (input: string) => string
export declare const setDotProp: (
  obj: {
    [k: string]: any
  },
  keys: string[],
  val: any
) => void
export declare const setByType: (
  obj: {
    [k: string]: any
  },
  transforms: {
    [k: string]: any
  }
) => void
export declare const getFileName: (input: string) => string
export declare const camelcaseOptionName: (name: string) => string
export declare class CACError extends Error {
  constructor(message: string)
}
export {}

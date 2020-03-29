function main(input: string, opts: Partial<Opts> = {}): void {
  if (typeof input !== 'string') {
    throw new TypeError(`Expected a string, got ${typeof input}`)
  }

  return `${input} & ${opts.postfix || 'rainbows'}`
}

export default main

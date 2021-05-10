class Transcriptor {
  toRna(dnaStrand: string): string {
    return [...dnaStrand.toUpperCase()].map(c => this.mapNucleotide(c)).join("")
  }

  mapNucleotide(dna:string): string {
    if (RNA_COMPLEMENT.has(dna)) {
      return RNA_COMPLEMENT.get(dna)!
    }
    throw new Error("Invalid input DNA.")
  }
}

export default Transcriptor

const RNA_COMPLEMENT: Map<string, string> = new Map([
  ["G", "C"],
  ["C", "G"],
  ["T", "A"],
  ["A", "U"],
])

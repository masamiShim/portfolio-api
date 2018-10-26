export enum Category {
    Language,
    Framework,
    Tool
}

export interface ISkill {
    readonly category: Category
    readonly name: string
}

export class Language implements ISkill {

    readonly category: Category = Category.Language
    readonly name: string

    constructor (name: string) {
        this.name = name
    }
}

export class Framework implements ISkill {
    readonly category: Category = Category.Framework
    readonly name: string

    constructor (name: string) {
        this.name = name
    }
}

export class Tool implements ISkill {
    readonly category: Category = Category.Tool
    readonly name: string

    constructor (name: string) {
        this.name = name
    }
}



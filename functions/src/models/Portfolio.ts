enum Category {
    Skill,
    Framework,
    Tool
}
export class Skill {
    readonly id: number;
    readonly category: Category = Category.Skill
    readonly name: string;

    constructor(id:number, name:string){
        this.id = id;
        this.name = name;
    }

    getName() {
        return this.name
    }
}

export class Tool {
    readonly id: number;
    readonly category: Category = Category.Tool
    readonly name: string;

    constructor(id:number, name:string){
        this.id = id;
        this.name = name;
    }

    getName() {
        return this.name
    }
}

export class Framework {
    readonly id: number;
    readonly category: Category = Category.Framework
    readonly name: string;

    constructor(id:number, name:string){
        this.id = id;
        this.name = name;
    }

    getName() {
        return this.name
    }
}



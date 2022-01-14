
export interface StaticSkillProperties {
    name: SkillName
    subgroup?: string
    xp_cost: number
}

enum SkillName {
    Name = 'Skill'
}

export interface ISkill {
    source: string
    
}

export const abstractSkillStaticProperties = new Map<SkillName, StaticSkillProperties>();

export abstract class AbstractSkill {
    
    private readonly staticProperties: StaticSkillProperties;

    constructor(staticProperties: StaticSkillProperties) {
        let staticInstance = abstractSkillStaticProperties.get(staticProperties.name)
        if (staticInstance === undefined) {
            abstractSkillStaticProperties.set(staticProperties.name, staticProperties);
            staticInstance = staticProperties;
        }
        this.staticProperties = staticInstance
    }
}

export class SkillClass extends AbstractSkill implements ISkill {
    constructor() {
       super({
           name: SkillName.Name,

       }) 
    }
}

let sc = new SkillClass()

sc
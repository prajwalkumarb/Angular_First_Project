import { Ingrediente } from "../shared/ingrediente.model";

export class Recipe {
    public name : string;
    public description : string;
    public imagesPaths : string;
    public ingredientes:Ingrediente[];
    
    constructor(name :string ,desc : string,imagePath:string , ingredientes:Ingrediente[]){
        this.name= name;
        this.description=desc;
        this.imagesPaths=imagePath;
        this.ingredientes=ingredientes
    }
}
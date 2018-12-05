/* tslint:disable */

declare var Object: any;
export interface RestInterface {
  "name"?: string;
  "id"?: number;
}

export class Rest implements RestInterface {
  "name": string;
  "id": number;
  constructor(data?: RestInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Rest`.
   */
  public static getModelName() {
    return "Rest";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Rest for dynamic purposes.
  **/
  public static factory(data: RestInterface): Rest{
    return new Rest(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Rest',
      plural: 'Rests',
      path: 'Rests',
      idName: 'id',
      properties: {
        "name": {
          name: 'name',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}

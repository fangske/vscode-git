/* tslint:disable */

declare var Object: any;
export interface Vehicle-modelsInterface {
  "id"?: any;
  "class": string;
  "make": string;
  "dealerId": string;
}

export class Vehicle-models implements Vehicle-modelsInterface {
  "id": any;
  "class": string;
  "make": string;
  "dealerId": string;
  constructor(data?: Vehicle-modelsInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Vehicle-models`.
   */
  public static getModelName() {
    return "Vehicle-models";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Vehicle-models for dynamic purposes.
  **/
  public static factory(data: Vehicle-modelsInterface): Vehicle-models{
    return new Vehicle-models(data);
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
      name: 'Vehicle-models',
      plural: 'Vehicle-models',
      path: 'Vehicle-models',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'any'
        },
        "class": {
          name: 'class',
          type: 'string'
        },
        "make": {
          name: 'make',
          type: 'string'
        },
        "dealerId": {
          name: 'dealerId',
          type: 'string'
        },
      },
      relations: {
      }
    }
  }
}

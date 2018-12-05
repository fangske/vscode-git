/* tslint:disable */

declare var Object: any;
export interface MlabInterface {
  "name"?: string;
  "foo"?: string;
  "bar"?: string;
  "hello"?: string;
  "id"?: any;
}

export class Mlab implements MlabInterface {
  "name": string;
  "foo": string;
  "bar": string;
  "hello": string;
  "id": any;
  constructor(data?: MlabInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Mlab`.
   */
  public static getModelName() {
    return "Mlab";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Mlab for dynamic purposes.
  **/
  public static factory(data: MlabInterface): Mlab{
    return new Mlab(data);
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
      name: 'Mlab',
      plural: 'Mlabs',
      path: 'Mlabs',
      idName: 'id',
      properties: {
        "name": {
          name: 'name',
          type: 'string'
        },
        "foo": {
          name: 'foo',
          type: 'string'
        },
        "bar": {
          name: 'bar',
          type: 'string'
        },
        "hello": {
          name: 'hello',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
      },
      relations: {
      }
    }
  }
}

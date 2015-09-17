import Store from './store';
import AppDispatcher from '../dispatcher/appDispatcher';
import GeneratorConstants from '../constants/generatorConstants';

let blueprint = null;

class GeneratorStore extends Store {
  getBlueprint() {
    return blueprint;
  }
}

let _generatorStore = new GeneratorStore();

export default _generatorStore;

AppDispatcher.register((payload) => {

    switch(payload.actionType) {
      case GeneratorConstants.PARSE_INPUT:
        blueprint = payload.data;
        generateBlueprint(payload.data);
        _generatorStore.emitChange();
        break;
    
      default:
        break;
    }
});

function generateBlueprint(data) {
  let variantWeight = 100 - data.distribution;
  console.log(data.distribution);
  blueprint = `name: ${data.experimentName}
endpoints:
  default.port: ${data.publicEndpoint}
clusters:
  ${data.experimentName}:
    services: # services is now a list of breeds
      -
        breed:
          name: ${data.controlName }
          deployable: ${data.controlDeployable}
          ports:
            port: ${data.controlPort}
        scale:
          cpu: 0.2
          memory: 256
          instances: 1
        routing:
          weight: ${data.distribution}  # weight in percentage
      -
        breed:
          name: ${data.variantName} # a new version of our service
          deployable: ${data.variantDeployable}
          ports:
            port: ${data.variantPort}
        scale:
          cpu: 0.2
          memory: 256
          instances: 1
        routing:
          weight: ${variantWeight}`;
}

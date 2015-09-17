import AppDispatcher from '../dispatcher/appDispatcher';
import GeneratorConstants from '../constants/generatorConstants';

export default {
  
  generate: (userInput) => {
  	console.log(userInput);
		AppDispatcher.dispatch({
      actionType: GeneratorConstants.PARSE_INPUT,
      data: userInput
    });
  }
}
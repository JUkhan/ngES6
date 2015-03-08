
export default function config(stateprovider, routeProvider){
	routeProvider.otherwise('masterLayout/studentHistory/StudentHistoryNav');


}
config.$inject=['$stateProvider', '$urlRouterProvider'];

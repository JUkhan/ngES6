
export default function config(stateprovider, routeProvider){

	stateprovider.state('nav1',{url:'/nav1',templateUrl:'Templates/Widgets/widget1.html',controller:'widget1Ctrl as vm'});
}
config.$inject=['$stateProvider', '$urlRouterProvider'];

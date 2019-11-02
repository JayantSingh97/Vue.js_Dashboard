import Vue from 'vue';
import Router from 'vue-router'; 
import Country from '../components/Country';
import table from '../components/VueTable';
import HelloWorld from '../components/HelloWorld';
  
Vue.use(Router)
  
export default new Router({
  routes: [
    {
      path:'/Dashboard',
      name:'Dashboard',
      component:HelloWorld
    },
    {
      path:'/table',
      name:'table',
      component:table
      
    }, 
    {
      path: '/Country', 
      name: 'Country',
      component: Country
    }, 
    
  ]
})

Vue.filter('shorttoupper',function(value){
    
    return value = value.stringify()
});

// router.beforeEach((to, from, next) => {
//   // redirect to login page if not logged in and trying to access a restricted page
//   const publicPages = ['/login', '/register'];
//   const authRequired = !publicPages.includes(to.path);
//   const loggedIn = localStorage.getItem('user');

//   if (authRequired && !loggedIn) {
//     return next('/login');
//   }

//   next();
// })

// function handleResponse(response) {
//   return response.text().then(text => {
//       const data = text && JSON.parse(text);
//       if (!response.ok) {
//           if (response.status === 401) {
//               // auto logout if 401 response returned from api
//               logout();
//               location.reload(true);
//           }

//           const error = (data && data.message) || response.statusText;
//           return Promise.reject(error);
//       }

//       return data;
//   })};
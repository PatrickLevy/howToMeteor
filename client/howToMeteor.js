


//The following routing call will render the template 'home' when the browser is pointed to '/'.  A string
//is being passed as data during the function call.
Router.route('/', function () {
  this.render('home', {data: {title: 'This data can be accessed with a spacebars call to title'}});
});

Router.route('/pageOne', function () {
  this.render('pageOne');
}); 

Router.route('/pageTwo', function () {
  this.render('pageTwo');
}); 

Router.route('/pageThree', function () {
  this.render('pageThree');
}); 

Router.route('/pageFour', function () {
  this.render('pageFour');
}); 

Router.route('/pageFive', function () {
  this.render('pageFive');
}); 




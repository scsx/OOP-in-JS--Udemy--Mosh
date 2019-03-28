function Circle(radius) {

    this.radius = radius;

    // Instead of member (this.) its just a local var, closed from outside:
    let defaultLocation = {
        x: 0,
        y: 0
    };
    // Instead of member (this.) its just a local var, closed from outside:
    let computeOptimumLocation = function(factor) {
        console.log("factor is " + factor);
    }

    this.draw = function() {
        // Now the above vars which should have be lost because of scope, are in memory because of closure in this function
        computeOptimumLocation(0.1);
        console.log('The radius is ' + this.radius + 'px.');
    }

}
const circle = new Circle(16);
circle.draw(); // Now these are the only
circle.radius; // available mmembers

/*
ex: nas notas : https://www.evernote.com/client/web?login=true#?anb=true&b=8c038c62-0ce6-4831-8806-755e054580a6&n=7b38c943-43a4-44fe-8f25-e8d7bf5c0051&s=s693&
function User() {
     var username, password;
     function doLogin(user, pw) {
          username = user;
          password = pw;
          // do the rest of the login work
          console.log("Olá " + username + ". Não esqueça o raio da password: " + password);
      }
      var publicAPI = {
          login: doLogin
       };
       return publicAPI;
}
// create a `User` module instance
var fred = User();
fred.login("fred", "12Battery34!");
var george = User();
fred.login("geooooorge", "56415615!");

console.log( typeof(fred.publicAPI) );
*/
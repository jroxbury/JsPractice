var customerData = {
  'Joe': {
    visits: 1
  },
  'Carol': {
    visits: 2
  },
  'Howard': {
    visits: 3,
  },
  'Carrie': {
    visits: 4
  }
};

function greetCustomer(firstName) {
  var greeting = '';

  for(person in customerData){

      if (person === firstName){

        if(customerData[person].visits === 1){
          greeting = "Welcome back, " + person + "! We're glad you liked us the first time!";
        }else if(customerData[person].visits > 1){
          greeting = "Welcome back, " + person + "! So glad to see you again!";
        }
        return greeting;
      }else {
        greeting = "Welcome! Is this your first time?";
      }
  }
	
  return greeting;
}


// Testing
console.log(greetCustomer('Mike'))
console.log(greetCustomer('Carol'))
console.log(greetCustomer('Joe'))
console.log(greetCustomer('Carrie'))
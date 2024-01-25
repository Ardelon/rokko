const obj = {
    param1:"param1Value",
    param2:"param2Value",
    param3:"param3Value",
}

function toQueryString(obj) {
    return Object.keys(obj)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`)
      .join('&');
  }
  
  const params = {
    name: 'John',
    age: 30,
    email: 'john@example.com'
  };

  console.log(toQueryString(params)); 
  console.log(toQueryString(obj)); 
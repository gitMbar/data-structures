var makeStack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below
  someInstance.push = function(value){
    storage[size] = value;
    size++;
  };

  someInstance.pop = function(){
    if(size > 0){
      size--;
      var value = storage[size];
      delete storage[size];
      return value;
    }
  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};

var magaStack = {};
for(var i = 0; i< 1000000; i++){
  magaStack[i] = makeStack();
}

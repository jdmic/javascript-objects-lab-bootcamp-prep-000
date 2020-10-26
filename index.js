var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
  var obj = object.slice();
  obj[key]=value;
  return obj;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key]=value;
  return object;
}

function deleteFromObjectByKey(object, key){
  
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object;
}
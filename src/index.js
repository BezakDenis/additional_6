module.exports = function zeros(expression) {
  let items = expression.slice(0,-1).split('!*');
  let index;
  let attribute;
  let result = {
    countTwo: 0,
    countFive: 0
  };

  if(!expression) 
    return -1;

  while(items.length){
    index = items.length - 1;

    switch(items[index][items[index].length - 1]){
      case '!':{
        attribute = +items[index].slice(0, -1);

        if(attribute%2){
           while(attribute%5){
              attribute -= 2;
            }

            localCount(attribute, 10, result);
        }
        else{
            localCount(attribute, 2, result); 
        }
      }break;

      default:{
        localCount(+items[index], 1, result);
      }break;
    }

    items.pop();
  }

  return result.countTwo > result.countFive ? 
  result.countFive : result.countTwo;
}

function localCount(number, step, result){  
  while(number > 1){
    if(!(number%2) || !(number%5)){
      result.countTwo += countOf(2, number);
      result.countFive += countOf(5, number);
    }
    number -= step;
  }
}

function countOf(item, number){
  let result = 0;
  while(!(number%item)){
    number /= item;
    result++;
  }

  return result;
}
// Closure;

function outerFunction(){
    function  innerFunction(){
      console.log('Hello World!');
    }

    return innerFunction();
}

outerFunction();

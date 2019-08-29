function outerFunc(){

    function innerFunc(){
        console.log('I am inner function');
    }
    innerFunc()
    console.log('I am outer function')
}
outerFunc();
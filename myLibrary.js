function isTouching(object1=car,object2=wall){

    if(object1.x - object2.x < object2.width/2 + object1.width/2 
    && object2.x - object1.x < object2.width/2 + object1.width){

    return true;
    }

    else{
    return false;
    }

}


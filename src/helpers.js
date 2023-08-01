function Choice(items){
    return items[Math.floor(Math.random() * items.length )];
};

function Remove(items, item){
    let index = items.indexOf(item);
    if (index > - 1){
        items.splice(index,1);
        return item;
    }
    else{
        return undefined;
    }
};

export {Remove, Choice};
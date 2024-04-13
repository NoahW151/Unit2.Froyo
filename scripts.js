function promptUser()
{
    const order = prompt("Enter your froyo order");
    const flavorsArray = order.split(",");
    flavors = countFlavors(flavorsArray);
    console.log(
    `Vanilla: ${flavors.vanilla}
    Strawberry: ${flavors.strawberry}
    Coffee: ${flavors.coffee}`
    );
}

function countFlavors(array)
{
    const flavors = {
        vanilla: 0,
        strawberry: 0,
        coffee: 0
    };
    for(let i = 0; i < array.length; i++)
    {
        if(array[i].toLowerCase() == "vanilla")
        {
            flavors.vanilla += 1;
        }
        else if(array[i].toLowerCase() == "strawberry")
        {
            flavors.strawberry += 1;
        }
        else if(array[i].toLowerCase() == "coffee")
        {
            flavors.coffee += 1;
        }
    }
    return flavors;
}

promptUser();
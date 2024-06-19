
function List() {
    
    const fruits = [
        {id: 1, name: "apple", calories: 95}, 
        {id: 2, name: "orange", calories: 17}, 
        {id: 3, name: "banana", calories: 20}, 
        {id: 4, name: "coconut", calories: 40}
    ]

    // Sort String Array
    fruits.sort();

    // THIS HELPS YOU SET THE KEY,"<li key={fruit.id}>" IT COULD RESLOVE ALOT OF PROBLEMS
    // FOR SPACE "&nbsp;"
    const list_Item = fruits.map(fruit => <li key={fruit.id}>{fruit.name}: &nbsp;
                                             <b>{fruit.calories}</b></li>)
    
    return (<ul>{list_Item}</ul>);
}

export default List







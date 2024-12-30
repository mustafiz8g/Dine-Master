


const MenuItem = ({item}) => {
    const { image, price, recipe, name} = item;
    return (
        <div className="flex space-x-4 mb-4">
             <img className="w-[100px] h-[100] rounded-e-full rounded-es-full" src={image} alt="" />
            <div >
                <h3>{name}------</h3>
                <p>{recipe}</p>
                <p className="text-green-600">{price}</p>

            </div>
        </div>
    );
};

export default MenuItem;
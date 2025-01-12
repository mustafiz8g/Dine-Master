import { useForm } from "react-hook-form";
import Section_Title from "../../Components/Section_Title";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../hooks/useAxiosPublic"
import useAxiosSecure from "../../hooks/useAxiosSecure"
import Swal from "sweetalert2";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddItems = () => {
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure();
    const { register, handleSubmit, formState: { errors }, reset} = useForm();

    const onSubmit = async (data) => {
        console.log(data);
        // image upolad to imgbb and then get an url
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        if (res.data.success) {
            //now send the menu item data to the serverwith th image
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }
            const menuRes = await axiosSecure.post('/menu', menuItem);
            console.log(menuRes.data)
            if(menuRes.data.insertedId) {
                reset();
                Swal.fire({
                    title: "Added Successful",
                    icon: "success"
                });
            }
        }
        console.log('with image url', res.data)

    };

    return (
        <div className="max-w-4xl mx-auto bg-gray-100 p-6 rounded-md shadow-md">
            <Section_Title heading={"Add an Item"} subHeading={"What's new"} />
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name Field */}
                <div>
                    <label className="label">
                        Recipe Name*
                    </label>
                    <input
                        type="text"

                        {...register("name", { required: "Recipe Name is required" })}
                        placeholder="Enter your name"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    {errors.name && (
                        <p className="text-red-600 text-sm">{errors.name.message}</p>
                    )}
                </div>

                {/* category  */}
                <div>
                    <label className="label">Category</label>
                    <select {...register('category')} className="w-full select-md rounded-md focus:ring-blue-500 focus:outline-none focus:ring-2" defaultValue={'default'}>
                        <option value="default" disabled className="text-gray-400">Pick one category</option>
                        <option value="salad">Salad</option>
                        <option value="pizza">Pizza</option>
                        <option value="dessert">Dessert</option>
                        <option value="soup">Soup</option>
                        <option value="drinks">Drinks</option>
                    </select>
                </div>

                {/* price  */}
                <div>
                    <label className="lebel">
                        Price*
                    </label>
                    <input
                        type="number"

                        {...register("price", { required: "Recipe price is required" })}
                        placeholder="Enter Price"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    {errors.price && (
                        <p className="text-red-600 text-sm">{errors.price.message}</p>
                    )}
                </div>


                {/* Recipe Details */}
                <div>
                    <label className="label">
                        Recipe Details*
                    </label>
                    <textarea

                        {...register("recipe", { required: "recipe is required" })}
                        placeholder="Write your message here"
                        rows="3"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                    ></textarea>
                    {errors.message && (
                        <p className="text-red-600 text-sm">{errors.message.message}</p>
                    )}
                </div>
                <div>
                    <input {...register('image', { required: 'Image is required' })} type="file" className="file-input w-full" />
                </div>



                {/* Submit Button */}
                <button
                    type="submit"
                    className="px-6 py-2 text-white bg-yellow-500 rounded-md hover:bg-yellow-600"
                >
                    Add Item <FaUtensils className="inline-block"></FaUtensils>
                </button>
            </form>
        </div>
    );
};

export default AddItems;

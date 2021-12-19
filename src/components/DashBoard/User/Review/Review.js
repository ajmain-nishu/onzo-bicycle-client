import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import useAuth from '../../../../hooks/useAuth';


// dashboard review section
const Review = () => {
    const { register, handleSubmit, reset} = useForm();
    const { user } = useAuth();
    const onSubmit = (data) => {
        data.photoURL = user.photoURL;

        // form
        axios.post('https://still-sands-78439.herokuapp.com/addReview', data)
        .then(res => {
            alert('Are You Add This Review ?');
            reset();
        })
    }
    return (
        <div className=" p-5">

            <h2 className="py-4">Please Provide Your Review</h2>
            <div className="col-lg-4 col-12">

                {/* form */}
                <form onSubmit={handleSubmit(onSubmit)}>

                    {/* email input */}
                    <input
                        className="form-control form-control-lg my-2"
                        name="email"
                        value={user?.email}
                        type="email"
                        placeholder="email address"
                        {...register("email", { required: true })}
                    />

                    {/* email name input */}
                    <input
                        className="form-control form-control-lg my-2"
                        value={user?.displayName}
                        type="text"
                        placeholder="email name"
                        {...register("displayName", { required: true })}
                    />

                    {/* ratin input */}
                    <input
                        className="form-control form-control-lg my-2"
                        name="rating"
                        placeholder="rating (between 0.0 - 5.0)"
                        type="number"
                        step="0.1"
                        min="0"
                        max="5"
                        {...register("rating", { required: true })}
                    />

                    {/* comment input */}
                    <input
                        className="form-control form-control-lg my-2"
                        name="comments"
                        placeholder="Comments"
                        {...register("comments", { required: true })}
                    />
                    <br />

                    {/* button */}
                    <input
                        className="btn btn-secondary mt-3"
                        type="submit"
                        value="Review Submit"
                    />
                </form>
            </div>


        </div>
    );
};

export default Review;
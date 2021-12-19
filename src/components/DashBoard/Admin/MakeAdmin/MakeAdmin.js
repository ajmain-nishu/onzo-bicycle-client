import React from 'react';
import { useForm } from 'react-hook-form';


// dashboard make admin section
const MakeAdmin = () => {
    const { register, handleSubmit, reset } = useForm();

    //form
    const onSubmit = (data) => {
        const processed = window.confirm('Are you sure ?')
        if (processed) {
            fetch("https://still-sands-78439.herokuapp.com/makeAdmin", {
                method: "PUT",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(data),

            })
                .then((res) => res.json())
                .then((result) => {
                    reset()
                });
        }

    };
    return (
        <div className="p-5">
            <h1>Here Make As Admin</h1>
            <div className="col-md-6 col-12">

                {/* form */}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        className="form-control form-control-lg w-75"
                        name="email"
                        placeholder="Email Address"
                        type="email"
                        required
                        {...register("email", { required: true })}
                    />
                    <br />

                    <input
                        className="btn btn-danger mt-3"
                        type="submit"
                        value="Make Admin"
                    />
                </form>
            </div>
        </div>
    );
};



export default MakeAdmin;
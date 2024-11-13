import React from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const frameworks = ["React", "Angular", "NodeJs", "Spring"];

  useForm;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log(data);
    console.log("form submitted!");
  };

  return (
    <>
      <div className="container">
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <h3 className="form-header">My Form</h3>
          <div className="form-row">
            <label htmlFor="name" className="form-label">
              Name :
            </label>
            <input
              {...register("name", {
                required: true,
                minLength: {
                  value: 4,
                  message: "The minimum lenght should be atleast 4",
                },
                maxLength: 10,
              })}
              type="text"
              className="form-input"
              id="name"
            />
            {errors.name && (
              <p style={{ color: "red" }}>{errors.name.message}</p>
            )}
          </div>

          <div className="form-row">
            <label htmlFor="email" className="form-label">
              Email ID :
            </label>
            <input
              {...register("email")}
              type="email"
              className="form-input"
              id="email"
            />
          </div>

          <div className="form-row">
            <label htmlFor="password" className="form-label">
              Password :
            </label>
            <input
              {...register("password", { pattern: /^[A-Za-z]+$/i })}
              type="password"
              className="form-input"
              id="password"
              autoComplete="on"
            />
          </div>

          <div className="form-row">
            <p style={{ display: "inline" }}>Gender : </p>
            <label htmlFor="male">Male :</label>
            <input
              {...register("gender")}
              type="radio"
              id="male"
              name="gender"
              value="Male"
            />
            &nbsp;&nbsp;
            <label htmlFor="female">Female :</label>
            <input
              {...register("gender")}
              type="radio"
              id="female"
              name="gender"
              value="Female"
            />
            &nbsp;&nbsp;
            <label htmlFor="others">Others :</label>
            <input
              {...register("gender")}
              type="radio"
              id="others"
              name="gender"
              value="Others"
            />
          </div>

          <div className="form-row">
            <input
              type="checkbox"
              id="cs"
              name="cs_bg"
              {...register("cs_bg")}
            />
            &nbsp;&nbsp;
            <label htmlFor="cs">Do you have a CS background</label>
          </div>

          <div className="form-row">
            <label htmlFor="framework" className="form-label">
              Choose A Framework &darr;
            </label>
            <select name="framework" id="framework" {...register("framework")}>
              {frameworks.map((framework) => {
                return (
                  <option key={framework} value={framework}>
                    {framework}
                  </option>
                );
              })}
            </select>
          </div>
          <input
            type="submit"
            className="btn btn-block"
            disabled={isSubmitting}
            value={isSubmitting ? "Submitting" : "Submit"}
          />
        </form>
      </div>
    </>
  );
};

export default Form;

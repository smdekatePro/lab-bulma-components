// src/components/SignupForm.js
import React from "react";
import Navbar from "./Navbar";
import FormField from "./FormField";
import "bulma/css/bulma.css";

function SignupForm() {
  return (
    <div>
      {/* Navbar at the top */}
      <Navbar />

      {/* Main container for form */}
      <div
        className="container"
        style={{ marginTop: "20px", maxWidth: "500px" }}
      >
        <form>
          <FormField label="Name" type="text" placeholder="e.g. Alex Smith" />
          <FormField
            label="Email"
            type="email"
            placeholder="e.g. alexsmith@gmail.com"
          />
          <FormField label="Password" type="password" placeholder="********" />

          <CoolButton isPrimary type="submit">
            Sign Up
          </CoolButton>
        </form>
      </div>
    </div>
  );
}

export default SignupForm;

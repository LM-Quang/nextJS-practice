"use client";

import React from "react";
import { useFormStatus } from "react-dom";

const MealsFormSubmission = () => {
   const { pending } = useFormStatus();

   return <button disabled={pending}>{pending ? "Submitting..." : "Share Meal"}</button>;
};

export default MealsFormSubmission;

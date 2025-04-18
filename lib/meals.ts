import { dummyMeals } from "@/data/meals";

export const getMeals = async () => {
   // To simulate API calling time
   await new Promise((resolve) => setTimeout(resolve, 2000));
   return dummyMeals;
};

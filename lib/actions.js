"use server";

async function shareMeal(formData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    created_email: formData.get("email"),
    creator: formData.get("name"),
    image: formData.get("image"),
  };
}

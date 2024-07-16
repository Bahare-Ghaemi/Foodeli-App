type TMealType =
  | "Lunch"
  | "Snack"
  | "Snacks"
  | "Dessert"
  | "Dinner"
  | "Side Dish"
  | "Appetizer"
  | "Breakfast"
  | "Beverage";

type TProductItem = {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: string;
  cuisine: string;
  caloriesPerServing: number;
  tags: string[];
  userId: number;
  image: string;
  rating: number;
  reviewCount: number;
  mealType: TMealType[];
};

export default TProductItem;

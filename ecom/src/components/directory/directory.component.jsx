import CategoryItem from "../category-item/category-component.component";
import "./categories.styles.scss";

const Directroy = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directroy;

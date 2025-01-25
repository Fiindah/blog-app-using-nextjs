import { useEffect, useState } from 'react';
import { fetchFoodData } from './api/hello';

const Home = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const getFoodData = async () => {
      const data = await fetchFoodData();
      setFoods(data);
    };
    getFoodData();
  }, []);

  return (
    <div className="container">
      <h1>Daftar Resep Makanan</h1>
      <div className="food-list">
        {foods.map(food => (
          <div key={food.idMeal} className="food-item">
            <h2>{food.strMeal}</h2>
            <img src={food.strMealThumb} alt={food.strMeal} />
            <p>{food.strInstructions.substring(0, 150)}...</p>
            <button>Selengkapnya</button>
            </div>
        ))}
      </div>
      <style jsx>{`
        .container {
          max-width: 800px;
          margin: auto;
          padding: 2rem;
        }
        .food-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
        }
        .food-item {
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 1rem;
          text-align: center;
        }
        img {
          max-width: 100%;
          height: auto;
          border-radius: 8px;
        }
        p {
          text-align: justify;
        }
      `}</style>
    </div>
  );
};

export default Home;

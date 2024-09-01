export default function MealDeatilsPage({ params }) {
  return (
    <main>
      <h1>Meal Details</h1>
      <p>slug: {params.slug}</p>
    </main>
  )
}
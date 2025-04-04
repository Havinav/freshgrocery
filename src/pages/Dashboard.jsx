import React from 'react'
import Cards from './Cards'
import Catagrioes from './Catagrioes'
import Slides from './Slides'
const sdata = [
"https://img.freepik.com/free-photo/front-view-vegetable_140725-103355.jpg?ga=GA1.1.447089327.1731502911&semt=ais_hybrid&w=740",
"https://img.freepik.com/free-vector/milk-advertising-realistic-poster_1284-26187.jpg?ga=GA1.1.447089327.1731502911&semt=ais_hybrid&w=740", 
"https://media.istockphoto.com/id/1077256900/photo/vegetables-greengrocery-in-supermarket-colors-for-food-background.jpg?s=612x612&w=0&k=20&c=V5vpMu1y-j7vo2apdYFGD1g7RBPGeEOJARlyonkrb38=",
"https://media.istockphoto.com/id/494729006/photo/shopman-at-the-greengrocer.jpg?s=612x612&w=0&k=20&c=ogwUr3EJw7XXdGtCDlVmxX5RpOCSdfGHo3FJ2maigPg=",
"https://media.istockphoto.com/id/1138648269/photo/vitality-is-about-feeding-your-body-with-healthy-foods.jpg?s=612x612&w=0&k=20&c=W9d8F-d2aaBCTYUNR06hkGkwEO9vBdyeXQ1AIc6bSGE=",
"https://img.freepik.com/free-photo/ingredient-bags-full-flour_23-2149482548.jpg?ga=GA1.1.447089327.1731502911&semt=ais_hybrid&w=740",
"https://img.freepik.com/premium-photo/beef-roast-pothu-ulartheyadu-kerala-special-dish_527904-1390.jpg?ga=GA1.1.447089327.1731502911&semt=ais_hybrid&w=740",
"https://img.freepik.com/free-photo/three-fresh-drinks-marble-table_114579-24947.jpg?ga=GA1.1.447089327.1731502911&semt=ais_hybrid&w=740"
] 
const Dashboard = () => {
  return (
    <div className='p-3'>
        <div className='text-black mt-20'>
          <Slides/>
        </div><br/>
        <Cards/>
        <Catagrioes/>
    </div>
  )
}

export default Dashboard
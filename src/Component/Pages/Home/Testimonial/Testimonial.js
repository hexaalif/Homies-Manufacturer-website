import React from 'react';
import Review from '../Review/Review';
import user from '../../../../Images/user.png'

const Testimonial = () => {
    const reviews =[
        {
            _id: 1, name: 'Marshall Thompson', reviews: 'Free shippiing for your large business? No worries, Homies can make out through this', img: user
        },
        {
            _id: 2, name: 'Getum mui', reviews: 'Not finding good collection of home accessories? Search and go with Homies, they will make you special', img: user
        },
        {
            _id: 3, name: 'Kristin Ruiz', reviews: 'Homies is the best. Their products always give pleasures', img: user
        },
    ]
    return (
        <section>
            <h1 className='text-5xl text-primary font-bold text-center my-28'>Reviews</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-28'>
                {
                    reviews.map(review => <Review
                    key={review._id}
                    review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonial;
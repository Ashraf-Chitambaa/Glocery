
const Features = () => {
  const data = [
    {
      image: 'image/feature-img-1.png',
      title: 'Fresh and Organic',
    },
    {
      image: 'image/feature-img-2.png',
      title: 'Free Delivery',
    },
    {
      image: 'image/feature-img-3.png',
      title: 'Easy Payments',
    },

  ]
  return (
    <div className="container-fluid pt-4 pb-5">
      <section className="features" id="features">
        <h2 className="fs-2 text-center">
          Our <span className="cliped_text px-4 py-2">features</span>
        </h2>
        <div className="center_container container-fluid">
          <div className="row">
            {
              data.map(feature => {
                return (
                  <div className="col-12 col-sm-6 col-md-4 mt-4 mt-sm-2" key={feature.title}>
                    <div className="shadow-lg p-2 px-lg-3 py-5 feature_card text-center rounded-2">
                      <img src={feature.image} width={150} height={150} className='rounded-circle' alt="product" />
                      
                      <h4 className="fs-5">{feature.title}</h4>
                      <p>Lorem, ipsum dolor sit amet consectetur<br /> adipisicing elit. Deserunt, earum!</p>
                      <button className="btn btn-sm btn-outline-dark px-4 fw-bold">Read More</button>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
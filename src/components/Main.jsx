import React, {useEffect, useState} from 'react';
import Header from './Header';
import Footer from './Footer';

const Main = () => {
    const [products, setProducts] = useState([]);
    const [isIsotopeReady, setIsIsotopeReady] = useState(false);

    useEffect(() => {
        fetch('/products.json') // adjust the path as needed
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setIsIsotopeReady(true);
            });
    }, []);

    useEffect(() => {
        if (isIsotopeReady && products.length > 0) {
            const iso = new Isotope('.product-grid', {
                itemSelector: '.product-item',
                layoutMode: 'fitRows'
            });

            $('.grid_sorting_button').click(function () {
                setTimeout(() => {
                    initFixProductBorder();
                }, 500);

                $('.grid_sorting_button.active').removeClass('active');
                $(this).addClass('active');

                const selector = $(this).attr('data-filter');
                iso.arrange({ filter: selector });

                return false;
            });
        }
    }, [isIsotopeReady, products]);

    const initFixProductBorder = () => {
        // Your border fix logic if needed
        console.log('Borders fixed');
    };
    return (
        <div className="super_container">
            <Header/>
            <div className="content">
                <div className="main_slider" style={{ backgroundImage: "url(/src/assets/images/slider_1.jpg)" }}>
                    <div className="container fill_height">
                        <div className="row align-items-center fill_height">
                            <div className="col">
                                <div className="main_slider_content">
                                    <h6>Spring / Summer Collection 2017</h6>
                                    <h1>Get up to 30% Off New Arrivals</h1>
                                    <div className="red_button shop_now_button"><a href="#">shop now</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="banner">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="banner_item align-items-center"
                                     style={{ backgroundImage: "url(/src/assets/images/banner_1.jpg)" }}>
                                    <div className="banner_category">
                                        <a href="categories.html">women's</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="banner_item align-items-center"
                                     style={{ backgroundImage: "url(/src/assets/images/banner_2.jpg)" }}>
                                    <div className="banner_category">
                                        <a href="categories.html">accessories's</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="banner_item align-items-center"
                                     style={{ backgroundImage: "url(/src/assets/images/banner_3.jpg)" }}>
                                    <div className="banner_category">
                                        <a href="categories.html">men's</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="new_arrivals">
                    <div className="container">
                        <div className="row">
                            <div className="col text-center">
                                <div className="section_title new_arrivals_title">
                                    <h2>New Arrivals</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col text-center">
                                <div className="new_arrivals_sorting">
                                    <ul className="arrivals_grid_sorting clearfix button-group filters-button-group">
                                        <li className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center active is-checked"
                                            id="allBtn"
                                            data-filter="*">all
                                        </li>
                                        <li className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center"
                                            data-filter=".women">women's
                                        </li>
                                        <li className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center"
                                            data-filter=".accessories">accessories
                                        </li>
                                        <li className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center"
                                            data-filter=".men">men's
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="product-grid"
                                     data-isotope='{ "itemSelector": ".product-item", "layoutMode": "fitRows" }'>
                                    {products.map(product => (
                                        <div className={`product-item ${product.category}`} key={product.id}>
                                            <div
                                                className={`product ${product.old_price ? 'discount' : ''} product_filter`}>
                                                <div className="product_image">
                                                    <img src={product.image} alt=""/>
                                                </div>
                                                <div className="favorite favorite_left"></div>

                                                {product.badge && (
                                                    <div
                                                        className={`product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center`}>
                                                        <span>{product.badge}</span>
                                                    </div>
                                                )}

                                                <div className="product_info">
                                                    <h6 className="product_name">
                                                        <a href="single.html">{product.name}</a>
                                                    </h6>
                                                    <div className="product_price">
                                                        ${product.price}.00
                                                        {product.old_price && <span>${product.old_price}.00</span>}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="red_button add_to_cart_button">
                                                <a href="#">add to cart</a>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="deal_ofthe_week">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="deal_ofthe_week_img">
                                    <img src="/src/assets/images/deal_ofthe_week.png" alt=""/>
                                </div>
                            </div>
                            <div className="col-lg-6 text-right deal_ofthe_week_col">
                                <div
                                    className="deal_ofthe_week_content d-flex flex-column align-items-center float-right">
                                    <div className="section_title">
                                        <h2>Deal Of The Week</h2>
                                    </div>
                                    <ul className="timer">
                                        <li className="d-inline-flex flex-column justify-content-center align-items-center">
                                            <div id="day" className="timer_num">03</div>
                                            <div className="timer_unit">Day</div>
                                        </li>
                                        <li className="d-inline-flex flex-column justify-content-center align-items-center">
                                            <div id="hour" className="timer_num">15</div>
                                            <div className="timer_unit">Hours</div>
                                        </li>
                                        <li className="d-inline-flex flex-column justify-content-center align-items-center">
                                            <div id="minute" className="timer_num">45</div>
                                            <div className="timer_unit">Mins</div>
                                        </li>
                                        <li className="d-inline-flex flex-column justify-content-center align-items-center">
                                            <div id="second" className="timer_num">23</div>
                                            <div className="timer_unit">Sec</div>
                                        </li>
                                    </ul>
                                    <div className="red_button deal_ofthe_week_button"><a href="#">shop now</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="best_sellers">
                    <div className="container">
                        <div className="row">
                            <div className="col text-center">
                                <div className="section_title new_arrivals_title">
                                    <h2>Best Sellers</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="product_slider_container">
                                    <div className="owl-carousel owl-theme product_slider">


                                        <div className="owl-item product_slider_item">
                                            <div className="product-item">
                                                <div className="product discount">
                                                    <div className="product_image">
                                                        <img src="/src/assets/images/product_1.png" alt=""/>
                                                    </div>
                                                    <div className="favorite favorite_left"></div>
                                                    <div
                                                        className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center">
                                                        <span>-$20</span></div>
                                                    <div className="product_info">
                                                        <h6 className="product_name"><a href="single.html">Fujifilm
                                                            X100T 16 MP Digital Camera (Silver)</a></h6>
                                                        <div className="product_price">$520.00<span>$590.00</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="owl-item product_slider_item">
                                            <div className="product-item women">
                                                <div className="product">
                                                    <div className="product_image">
                                                        <img src="/src/assets/images/product_2.png" alt=""/>
                                                    </div>
                                                    <div className="favorite"></div>
                                                    <div
                                                        className="product_bubble product_bubble_left product_bubble_green d-flex flex-column align-items-center">
                                                        <span>new</span></div>
                                                    <div className="product_info">
                                                        <h6 className="product_name"><a href="single.html">Samsung CF591
                                                            Series Curved 27-Inch FHD Monitor</a></h6>
                                                        <div className="product_price">$610.00</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="owl-item product_slider_item">
                                            <div className="product-item women">
                                                <div className="product">
                                                    <div className="product_image">
                                                        <img src="/src/assets/images/product_3.png" alt=""/>
                                                    </div>
                                                    <div className="favorite"></div>
                                                    <div className="product_info">
                                                        <h6 className="product_name"><a href="single.html">Blue Yeti USB
                                                            Microphone Blackout Edition</a></h6>
                                                        <div className="product_price">$120.00</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="owl-item product_slider_item">
                                            <div className="product-item accessories">
                                                <div className="product">
                                                    <div className="product_image">
                                                        <img src="/src/assets/images/product_4.png" alt=""/>
                                                    </div>
                                                    <div
                                                        className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center">
                                                        <span>sale</span></div>
                                                    <div className="favorite favorite_left"></div>
                                                    <div className="product_info">
                                                        <h6 className="product_name"><a href="single.html">DYMO
                                                            LabelWriter 450 Turbo Thermal Label Printer</a></h6>
                                                        <div className="product_price">$410.00</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="owl-item product_slider_item">
                                            <div className="product-item women men">
                                                <div className="product">
                                                    <div className="product_image">
                                                        <img src="/src/assets/images/product_5.png" alt=""/>
                                                    </div>
                                                    <div className="favorite"></div>
                                                    <div className="product_info">
                                                        <h6 className="product_name"><a href="single.html">Pryma
                                                            Headphones, Rose Gold & Grey</a></h6>
                                                        <div className="product_price">$180.00</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="owl-item product_slider_item">
                                            <div className="product-item accessories">
                                                <div className="product discount">
                                                    <div className="product_image">
                                                        <img src="/src/assets/images/product_6.png" alt=""/>
                                                    </div>
                                                    <div className="favorite favorite_left"></div>
                                                    <div
                                                        className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center">
                                                        <span>-$20</span></div>
                                                    <div className="product_info">
                                                        <h6 className="product_name"><a href="single.html">Fujifilm
                                                            X100T 16 MP Digital Camera (Silver)</a></h6>
                                                        <div className="product_price">$520.00<span>$590.00</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="owl-item product_slider_item">
                                            <div className="product-item women">
                                                <div className="product">
                                                    <div className="product_image">
                                                        <img src="/src/assets/images/product_7.png" alt=""/>
                                                    </div>
                                                    <div className="favorite"></div>
                                                    <div className="product_info">
                                                        <h6 className="product_name"><a href="single.html">Samsung CF591
                                                            Series Curved 27-Inch FHD Monitor</a></h6>
                                                        <div className="product_price">$610.00</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="owl-item product_slider_item">
                                            <div className="product-item accessories">
                                                <div className="product">
                                                    <div className="product_image">
                                                        <img src="/src/assets/images/product_8.png" alt=""/>
                                                    </div>
                                                    <div className="favorite"></div>
                                                    <div className="product_info">
                                                        <h6 className="product_name"><a href="single.html">Blue Yeti USB
                                                            Microphone Blackout Edition</a></h6>
                                                        <div className="product_price">$120.00</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="owl-item product_slider_item">
                                            <div className="product-item men">
                                                <div className="product">
                                                    <div className="product_image">
                                                        <img src="/src/assets/images/product_9.png" alt=""/>
                                                    </div>
                                                    <div
                                                        className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center">
                                                        <span>sale</span></div>
                                                    <div className="favorite favorite_left"></div>
                                                    <div className="product_info">
                                                        <h6 className="product_name"><a href="single.html">DYMO
                                                            LabelWriter 450 Turbo Thermal Label Printer</a></h6>
                                                        <div className="product_price">$410.00</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="owl-item product_slider_item">
                                            <div className="product-item men">
                                                <div className="product">
                                                    <div className="product_image">
                                                        <img src="/src/assets/images/product_10.png" alt=""/>
                                                    </div>
                                                    <div className="favorite"></div>
                                                    <div className="product_info">
                                                        <h6 className="product_name"><a href="single.html">Pryma
                                                            Headphones, Rose Gold & Grey</a></h6>
                                                        <div className="product_price">$180.00</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div
                                        className="product_slider_nav_left product_slider_nav d-flex align-items-center justify-content-center flex-column">
                                        <i className="fa fa-chevron-left" aria-hidden="true"></i>
                                    </div>
                                    <div
                                        className="product_slider_nav_right product_slider_nav d-flex align-items-center justify-content-center flex-column">
                                        <i className="fa fa-chevron-right" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="benefit">
                    <div className="container">
                        <div className="row benefit_row">
                            <div className="col-lg-3 benefit_col">
                                <div className="benefit_item d-flex flex-row align-items-center">
                                    <div className="benefit_icon"><i className="fa fa-truck" aria-hidden="true"></i>
                                    </div>
                                    <div className="benefit_content">
                                        <h6>free shipping</h6>
                                        <p>Suffered Alteration in Some Form</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 benefit_col">
                                <div className="benefit_item d-flex flex-row align-items-center">
                                    <div className="benefit_icon"><i className="fa fa-money" aria-hidden="true"></i>
                                    </div>
                                    <div className="benefit_content">
                                        <h6>cach on delivery</h6>
                                        <p>The Internet Tend To Repeat</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 benefit_col">
                                <div className="benefit_item d-flex flex-row align-items-center">
                                    <div className="benefit_icon"><i className="fa fa-undo" aria-hidden="true"></i>
                                    </div>
                                    <div className="benefit_content">
                                        <h6>45 days return</h6>
                                        <p>Making it Look Like Readable</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 benefit_col">
                                <div className="benefit_item d-flex flex-row align-items-center">
                                    <div className="benefit_icon"><i className="fa fa-clock-o" aria-hidden="true"></i>
                                    </div>
                                    <div className="benefit_content">
                                        <h6>opening all week</h6>
                                        <p>8AM - 09PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="blogs">
                    <div className="container">
                        <div className="row">
                            <div className="col text-center">
                                <div className="section_title">
                                    <h2>Latest Blogs</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row blogs_container">
                            <div className="col-lg-4 blog_item_col">
                                <div className="blog_item">
                                    <div className="blog_background"
                                         style={{ backgroundImage: "url(/src/assets/images/blog_1.jpg)" }}></div>
                                    <div
                                        className="blog_content d-flex flex-column align-items-center justify-content-center text-center">
                                        <h4 className="blog_title">Here are the trends I see coming this fall</h4>
                                        <span className="blog_meta">by admin | dec 01, 2017</span>
                                        <a className="blog_more" href="#">Read more</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 blog_item_col">
                                <div className="blog_item">
                                    <div className="blog_background" style={{ backgroundImage: "url(/src/assets/images/blog_2.jpg)" }}></div>
                                    <div
                                        className="blog_content d-flex flex-column align-items-center justify-content-center text-center">
                                        <h4 className="blog_title">Here are the trends I see coming this fall</h4>
                                        <span className="blog_meta">by admin | dec 01, 2017</span>
                                        <a className="blog_more" href="#">Read more</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 blog_item_col">
                                <div className="blog_item">
                                    <div className="blog_background"
                                         style={{ backgroundImage: "url(/src/assets/images/blog_3.jpg)" }}></div>
                                    <div
                                        className="blog_content d-flex flex-column align-items-center justify-content-center text-center">
                                        <h4 className="blog_title">Here are the trends I see coming this fall</h4>
                                        <span className="blog_meta">by admin | dec 01, 2017</span>
                                        <a className="blog_more" href="#">Read more</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="newsletter">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div
                                    className="newsletter_text d-flex flex-column justify-content-center align-items-lg-start align-items-md-center text-center">
                                    <h4>Newsletter</h4>
                                    <p>Subscribe to our newsletter and get 20% off your first purchase</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <form action="https://preview.colorlib.com/theme/coloshop/post">
                                    <div
                                        className="newsletter_form d-flex flex-md-row flex-column flex-xs-column align-items-center justify-content-lg-end justify-content-center">
                                        <input id="newsletter_email" type="email" placeholder="Your email"
                                               required="required" data-error="Valid email is required."/>
                                        <button id="newsletter_submit" type="submit"
                                                className="newsletter_submit_btn trans_300" value="Submit">subscribe
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Main;

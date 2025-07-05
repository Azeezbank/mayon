'use client';
import React, { useState } from "react";
import mayon from '../../public/mayon.png';
import Image from 'next/image';
import { Menu, X, ArrowDownWideNarrow, MonitorSmartphone } from 'lucide-react';
import Styles from './page.module.css';
import Marquee from "react-fast-marquee";
import gateway from '../../public/gateway.png';
import welcome from '../../public/two-phones.png';
import global from '../../public/global.png';
import cripto from '../../public/cripto.png';
import hero_image from '../../public/hero-image.png';
import papii from '../../public/papii.jpg';
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";


const Nav = () => {
    const [isNav, setIsnav] = useState(false);
    const [ref1, view1] = useInView({ threshold: 1, triggerOnce: true });
    const [ref2, view2] = useInView({ threshold: 1, triggerOnce: false });
    const [ref3, view3] = useInView({ threshold: 1, triggerOnce: false });
    const [ref4, view4] = useInView({ threshold: 1, triggerOnce: false });
    const [ref5, view5] = useInView({ threshold: 1, triggerOnce: false });
    const [ref6, view6] = useInView({ threshold: 1, triggerOnce: false });
    const [ref7, view7] = useInView({ threshold: 1, triggerOnce: true });
    const [ref8, view8] = useInView({ threshold: 1, triggerOnce: true });
    const [ref9, view9] = useInView({ threshold: 1, triggerOnce: true });
    const [ref10, view10] = useInView({ threshold: 1, triggerOnce: true });
    const [ref11, view11] = useInView({ threshold: 1, triggerOnce: false });
    const [ref12, view12] = useInView({ threshold: 1, triggerOnce: true });
    const [ref13, view13] = useInView({ threshold: 1, triggerOnce: true });
    const [ref14, view14] = useInView({ threshold: 1, triggerOnce: true });
    const [ref15, view15] = useInView({ threshold: 1, triggerOnce: true });
    const [ref16, view16] = useInView({ threshold: 1, triggerOnce: true });
    const [ref17, view17] = useInView({ threshold: 1, triggerOnce: true });
    const [ref18, view18] = useInView({ threshold: 1, triggerOnce: true });
    const [ref19, view19] = useInView({ threshold: 1, triggerOnce: true });
    const [ref20, view20] = useInView({ threshold: 1, triggerOnce: false });
    const [ref21, view21] = useInView({ threshold: 1, triggerOnce: false });
    const [ref22, view22] = useInView({ threshold: 1, triggerOnce: false });
    return (
        <>
            <div className="home-page">
                <aside className={`aside ${isNav ? 'nav-visible' : 'nav-hidden'}`}>
                    <div className="d-flex justify-content-center">
                        <Image src={mayon} alt="logo" className="nav_visibleLogo" />
                    </div>
                    <ul className="nav_menu">
                        <li><a href="#home"><i className="bi bi-house"></i> Home</a></li>
                        <li><a href="#service"><i className="bi bi-award"></i> Service</a></li>
                        <li><a href="#about"><i className="bi bi-file-person"></i> About</a></li>
                        <li><a href="#contact"><i className="bi bi-telephone"></i> Contact</a></li>
                        <li><a href="#company"><i className="bi bi-buildings"></i> Company</a></li>
                    </ul>
                </aside>

                <nav>
                    <div className="nav-flex">
                        <Image src={mayon} alt="Mayon" className='nav_logo' />
                        <div className="hamburger">
                            <button type={"button"} className='nav-btn' onClick={() => setIsnav(!isNav)}>
                                {isNav ? <X /> : <Menu />}
                            </button>
                        </div>

                        <ul className="large_menu">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#service">Service</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#contact">Contact</a></li>
                            <li><a href="#company">Company</a></li>
                        </ul>
                    </div>
                </nav>
                <video autoPlay loop muted playsInline className={Styles.stock}>
                    <source src="stockk.mp4" type="video/mp4" />
                </video>

                <main className={Styles.main_page} id="home">

                    <div className={Styles.grid_main}>
                        <div className="text-white pt-5 hero-head">
                            <motion.h3 ref={ref1} initial={{ opacity: 0, y: -40 }} animate={view1 ? { opacity: 1, y: 0 } : { opacity: 0, y: -40 }} transition={{ duration: 1, ease: "easeIn" }}>Powering Ideas Through Tech.</motion.h3>
                            <p>We design and build apps. websites, and custom tech solutions to turn your to scalable digital products.</p>
                            <button className={Styles.work_with_us} type="button">Work with us <i className="bi bi-arrow-right"></i>  </button>
                        </div>
                        <div className={Styles.heroImgDiv}>
                            <Image src={hero_image} className={Styles.heroImg} alt="hero image" />
                        </div>
                    </div>
                </main>
                <div className="bg-black pb-5 ps-3 pe-3 pt-5" id="service">
                    <div className="large-padd">
                        <motion.div ref={ref2} initial={{ opacity: 0, y: 50 }} animate={view2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} transition={{ duration: 1, ease: "easeIn" }} className={Styles.servicesDiv}>
                            <span></span>
                            <h3 className="text-white ps-3 pe-3">Our Services</h3>
                            <span></span>
                        </motion.div>
                        <div className={Styles.grid_service}>
                            <motion.div ref={ref3} initial={{ opacity: 0, y: 50 }} animate={view3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} transition={{ duration: 1, ease: "easeIn" }} className={Styles.service_box}>
                                <h3 className={Styles.service_emoji}><i className={"bi bi-ui-checks me-3"}></i></h3>
                                <div>
                                    <h5>Wireframing & Prototyping</h5>
                                    <p>Clear visual plan before development begins</p>
                                </div>
                            </motion.div>

                            <motion.div ref={ref4} initial={{ opacity: 0, y: 50 }} animate={view4 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} transition={{ duration: 1, ease: "easeIn" }} className={Styles.service_box}>
                                <h3 className={Styles.service_emoji}><i className="me-3"><ArrowDownWideNarrow /></i></h3>
                                <div>
                                    <h5>UI/UX Design</h5>
                                    <p>Beautiful, intuitive designs built for real users.</p>
                                </div>
                            </motion.div>

                            <motion.div ref={ref5} initial={{ opacity: 0, y: 50 }} animate={view5 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} transition={{ duration: 1, ease: "easeIn" }} className={Styles.service_box}>
                                <h3 className={Styles.service_emoji}><i className={"me-3"}><MonitorSmartphone /></i></h3>
                                <div>
                                    <h5>App & Web Development</h5>
                                    <p>secure-responsive and scalable buils for all platforms.</p>
                                </div>
                            </motion.div>

                            <motion.div ref={ref6} initial={{ opacity: 0, y: 50 }} animate={view6 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} transition={{ duration: 1, ease: "easeIn" }} className={Styles.service_box}>
                                <h3 className={Styles.service_emoji}><i className={"bi bi-rocket-takeoff me-3"}></i></h3>
                                <div>
                                    <h5>Launching and maintenance</h5>
                                    <p>Post-launch support to ensure everything runs smoothly</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>

                <div className="bg-black">
                    <Marquee>
                        <h2 className="pt-3 pb-3 ">
                            <span className={Styles.about_text}>ABOUT US</span>
                            <span className="text-primary ps-4 pe-4">ABOUT US</span>
                            <span className={Styles.about_text}>ABOUT US</span>
                            <span className="text-primary ps-4 pe-4">ABOUT US</span>
                            <span className={Styles.about_text}>ABOUT US</span>
                            <span className="text-primary ps-4 pe-4">ABOUT US</span>
                            <span className={Styles.about_text}>ABOUT US</span>
                            <span className="text-primary ps-4 pe-4">ABOUT US</span>
                            <span className={Styles.about_text}>ABOUT US</span>
                            <span className="text-primary ps-4 pe-4">ABOUT US</span>
                        </h2>
                    </Marquee>

                    <div className="large-padd">
                        <div className="ps-3 pe-3">
                            <div className={Styles.grid_about}>
                                <motion.p ref={ref7} initial={{ opacity: 0, scale: 0.2 }} animate={view7 ? { opacity: 1, scale: 1 } : { opacity: 0, y: 0.2 }} transition={{ duration: 1, ease: "easeIn" }} className={Styles.aboutCont}>Mayon innobvation and technology is a forward thinking digital company dedicated to transforming
                                    ideas into impactful technology solutions. We specialize in UI/UX design, web and mobile app development, wireframing and prototyping,
                                    product launches, and long-term maintenance, helping bussinesses and individuals turn their visions into reality.
                                </motion.p>
                                <motion.p ref={ref8} initial={{ opacity: 0, scale: 0.2 }} animate={view8 ? { opacity: 1, scale: 1 } : { opacity: 0, y: 0.2 }} transition={{ duration: 1, ease: "easeIn" }} className={Styles.aboutCont}>We are founded with a mission to make technology accessible, scalable and purposeful, Mayon brings a fresh perspectfull to the digital space.
                                    We are not just developer or designers, we are creative problem-solvers who work at the intersection of design, functionality and innovation. whether
                                    you are launching a new digital product, improving an existing system, or building from the ground up, our team provides the expertise, agility and support you need.
                                </motion.p>
                            </div>
                            <div className="mt-3 d-flex justify-content-center">
                                <motion.p ref={ref9} initial={{ opacity: 0, scale: 0.2 }} animate={view9 ? { opacity: 1, scale: 1 } : { opacity: 0, y: 0.2 }} transition={{ duration: 1, ease: "easeIn" }} className={`${Styles.aboutCont} ${Styles.aboutCont_third}`}>At Mayonm we believe that great technology start with understanding people. That is why our process begins with deep user reserch, thoughtfull UX design, and strategic planning. we dont cut corners, we
                                    colaborate closelywith our client to ensure every solution we deliver is intuitive, scalable and visually striking.
                                    We also understand that launching is just the begining . That is why we offer post lkaunch maintenance, perfomance optimization, and product updates, so you can stay competitive and relevant in the fast-moving digital world.
                                </motion.p>
                            </div>
                        </div>

                        <div className={Styles.happy}>
                            <div>
                                <h1 className="text-primary">50+</h1>
                                <h6 className="text-white">Happy Clients</h6>
                            </div>
                            <div>
                                <h1 className="text-danger">50+</h1>
                                <h6 className="text-white">Project delivered</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-black pe-3 ps-3" id="about">
                <div className={Styles.more_about}>
                    <motion.h4 ref={ref10} initial={{ opacity: 0, x: -100 }} animate={view10 ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }} transition={{ duration: 1, ease: "easeIn" }} >More About us</motion.h4>
                </div>

                <motion.p ref={ref11} initial={{ opacity: 0, y: 50 }} animate={view11 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} transition={{ duration: 1, ease: "easeIn" }} className="text-white text-center pb-3">We followed structured, human-centered approach to ensure every product we build is functional, user friendly and impactful.</motion.p>
                <div className={Styles.grid_more_about}>
                    <motion.div ref={ref19} initial={{ opacity: 0, scale: 0.2 }} animate={view19 ? { opacity: 1, scale: 1 } : { opacity: 0, y: 0.2 }} transition={{ duration: 1, ease: "easeIn" }} className={Styles.discovery}>
                        <h5 className="text-center pb-3">Discovery & Research</h5>
                        <p>We begin understanding your goals, target users, competitors, and project scope. this helps us define the right strategy from the start.</p>
                    </motion.div>
                    <motion.div ref={ref12} initial={{ opacity: 0, scale: 0.2 }} animate={view12 ? { opacity: 1, scale: 1 } : { opacity: 0, y: 0.2 }} transition={{ duration: 1, ease: "easeIn" }} className={Styles.discovery}>
                        <h5 className="text-center pb-3">Wireframing & Prototyping</h5>
                        <p>We create Wireframe and interactive prototypes to visualize the structure and flow of your productt before developmrnt begins. </p>
                    </motion.div>
                    <motion.div ref={ref13} initial={{ opacity: 0, scale: 0.2 }} animate={view13 ? { opacity: 1, scale: 1 } : { opacity: 0, y: 0.2 }} transition={{ duration: 1, ease: "easeIn" }} className={Styles.discovery}>
                        <h5 className="text-center pb-3">Planning and strategy</h5>
                        <p>We outline the user flow, technical requirements and design roadmap. This phase sets the foundation for the designs and development begins. </p>
                    </motion.div>
                    <motion.div ref={ref14} initial={{ opacity: 0, scale: 0.2 }} animate={view14 ? { opacity: 1, scale: 1 } : { opacity: 0, y: 0.2 }} transition={{ duration: 1, ease: "easeIn" }} className={Styles.discovery}>
                        <h5 className="text-center pb-3">UI/UX Design</h5>
                        <p>We design clean, modern and user-friendly interface that align with your brand and deliver a smooth user experience. </p>
                    </motion.div>
                    <motion.div ref={ref15} initial={{ opacity: 0, scale: 0.2 }} animate={view15 ? { opacity: 1, scale: 1 } : { opacity: 0, y: 0.2 }} transition={{ duration: 1, ease: "easeIn" }} className={Styles.discovery}>
                        <h5 className="text-center pb-3">Development</h5>
                        <p>our developrs bring the design to life with clean responsive and scalable code for both web and mobile platform. </p>
                    </motion.div>
                    <motion.div ref={ref16} initial={{ opacity: 0, scale: 0.2 }} animate={view16 ? { opacity: 1, scale: 1 } : { opacity: 0, y: 0.2 }} transition={{ duration: 1, ease: "easeIn" }} className={Styles.discovery}>
                        <h5 className="text-center pb-3">Testing and quality assurance</h5>
                        <p>We rigorousely test the product across devices and scenarios to ensure everything workd perfectly before launch. </p>
                    </motion.div>
                    <motion.div ref={ref17} initial={{ opacity: 0, scale: 0.2 }} animate={view17 ? { opacity: 1, scale: 1 } : { opacity: 0, y: 0.2 }} transition={{ duration: 1, ease: "easeIn" }} className={Styles.discovery}>
                        <h5 className="text-center pb-3">Launch & Development</h5>
                        <p>We deploy your product to the live environment and ensure it is ready for users with full functionality and performance optimization. </p>
                    </motion.div>
                    <motion.div ref={ref18} initial={{ opacity: 0, scale: 0.2 }} animate={view18 ? { opacity: 1, scale: 1 } : { opacity: 0, y: 0.2 }} transition={{ duration: 1, ease: "easeIn" }} className={Styles.discovery}>
                        <h5 className="text-center pb-3">Post-Launch Support</h5>
                        <p>We provide ongoing support, updates fix bugs and improvement to ensure your product continues to evolve and perform well. </p>
                    </motion.div>
                </div>
            </div>
            <div className="bg-black pe-3 ps-3 pt-5" id="company">
                <div className="large-padd pt-4">
                    <motion.div ref={ref20} initial={{ opacity: 0, y: -50 }} animate={view20 ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }} transition={{ duration: 1, ease: "easeIn" }} className={Styles.servicesDiv}>
                        <span></span>
                        <h2 className="text-white ps-3 pe-3">Our Work</h2>
                        <span></span>
                    </motion.div>

                    <div className={Styles.work_container}>
                        <div className={Styles.work_border}>
                            <div className={Styles.work_text}>
                                <h4 className="text-center">Easy Travel</h4>
                                <p className="text-center">EASY TRAVEL is a simple and user-friendly traveling website for exploring destination and booking with ease</p>
                                <div className="d-flex justify-content-center pt-4"><button className={Styles.btn_hover} type="button">Show Case Study</button></div>
                            </div>
                            <div className={Styles.ease_imgDiv}>
                                <Image className={Styles.ease_img} src={gateway} alt="Travel Ease" />
                            </div>
                        </div>
                        <div className={Styles.work_border}>
                            <div className={Styles.work_text}>
                                <h4 className="text-center">Global VPN</h4>
                                <p className="text-center">GLOBAL VPN is a fast and secure mobile app that allows users browse privately and access content from anywhere.</p>
                                <div className="d-flex justify-content-center pt-4"><button className={Styles.btn_hover} type="button">Show Case Study</button></div>
                            </div>
                            <div className={Styles.ease_imgDiv}>
                                <Image className={Styles.ease_img} src={global} alt="Travel Ease" />
                            </div>
                        </div>
                        <div className={Styles.work_border}>
                            <div className={Styles.work_text}>
                                <h4 className="text-center">Music Play</h4>
                                <p className="text-center">MUSIC PLAY is a sleek music app build to let user easily play, organize and enjoy their favorite song anytime, it features a clean interface,
                                </p>
                                <div className="d-flex justify-content-center pt-4"><button className={Styles.btn_hover} type="button">Show Case Study</button></div>
                            </div>
                            <div className={Styles.ease_imgDiv}>
                                <Image className={Styles.ease_img} src={welcome} alt="Travel Ease" />
                            </div>
                        </div>
                        <div className={Styles.work_border}>
                            <div className={Styles.work_text}>
                                <h4 className="text-center">Cryptra Website</h4>
                                <p className="text-center">CRIPTRA is a secure website for trading and managing digital assets.
                                </p>
                                <div className="d-flex justify-content-center pt-4"><button className={Styles.btn_hover} type="button">Show Case Study</button></div>
                            </div>
                            <div className={Styles.ease_imgDiv}>
                                <Image className={Styles.ease_img} src={cripto} alt="Travel Ease" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="large-padd pt-5 pb-4">
                    <motion.h1 ref={ref21}
                    initial={{ opacity: 0, y: 50 }} animate={view21 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} transition={{ duration: 1, ease: "easeIn" }}
                    className="text-white text-center pt-5">At the Helm of Mayon</motion.h1>
                    <div className={Styles.grid_passport}>
                        <div>
                            <h2 className="text-primary">Saliu Johnson</h2>
                            <h5 className="text-white">CEO & Founder, Mayon Innovation and Technology</h5>
                            <p className="text-white">As the founder and CEO of Mayon innovation and technology, I am driving by passion for transforming bold ideas into meaningful digital solution. At Mayon, we did not just build products,
                                we focus on innovation, simplicity and scalability. Our mission is clear: to help bussinesses grow by delivering fast, reliable and user-focusedtech solution that truly work. Whether it is through design, develpment
                                or ongoing support, we are here to turn vission into value, one project at a time.
                            </p>
                        </div>
                        <div className={Styles.mayonImgDiv}>
                            <Image src={papii} alt="CEO Image" className={Styles.mayonImg} />
                        </div>
                    </div>
                    <div className="d-flex justify-content-center pt-5 pb-4"><button type="button" className={Styles.meet}>Meet The Team</button></div>
                </div>
            </div>

            <div className="bg-dark text-white pt-4 ps-3 pe-3 pb-3" id="contact">
                <div className="large-padd pt-5 pb-5">
                    <div className={Styles.grid_question}>
                        <div>
                            <motion.h2 ref={ref22} initial={{ opacity: 0, y: 50 }} animate={view22 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} transition={{ duration: 1, ease: "easeIn" }} className="text-primary pb-4">Have Questions? Reach Out</motion.h2>
                            <p>We will love to hear from you. Fill out the form and we will get back to you soon.</p>
                            <div className="d-flex">
                                <i className="bi bi-telephone pe-2 text-primary"></i>
                                <p>+234 810 340 0258</p>
                            </div>
                            <div className="d-flex">
                                <i className="bi bi-envelope pe-2 text-primary"></i>
                                <p>Mayoninnovation@gmail.com</p>
                            </div>
                            <div className="d-flex">
                                <i className="bi bi-instagram pe-3 fs-3"></i>
                                <i className="bi bi-facebook pe-3 fs-3"></i>
                                <i className="bi bi-telegram fs-3"></i>
                            </div>
                        </div>
                        <div>
                            <form className={Styles.form}>
                                <label htmlFor="email">Email Address</label> <br />
                                <input type="email" id="email" placeholder="Enter Email Address" /> <br />
                                <label htmlFor="topic">Your Topic</label> <br />
                                <input type="text" id="topic" placeholder="Enter Your Topic" /> <br />
                                <button type="button" className="btn btn-primary">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <footer className={Styles.footer}>
                <div className="large-padd">
                    <div className={Styles.grid_footer}>
                        <h4 className={Styles.mayon_f_logo}>
                            <span className={Styles.mayon_m}>M</span>
                            <div className={Styles.Tech}>
                                <p className={Styles.mayon_w}>MAYON</p>
                                <span className={Styles.innovation}>INNOVATION & TECHNOLOGY</span>
                            </div>
                        </h4>
                        <div>
                            <h5>Services</h5>
                            <p>Company</p>
                            <p>Features</p>
                            <p>Career</p>
                        </div>
                        <div>
                            <h5>About</h5>
                            <p>Customer Support</p>
                            <p>Terms</p>
                            <p>Privacy</p>
                            <p>FAQ</p>
                        </div>
                        <div>
                            <h5>Contact</h5>
                            <p>React to us easily</p>
                            <p>Mayoninnovation@gmail.com</p>
                            <p>+234 810 340 0258</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
};

export default Nav;
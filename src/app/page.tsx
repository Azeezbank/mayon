'use client';
import React, { useState, useEffect } from "react";
import Image from 'next/image';
import { Grip, X, ArrowDownWideNarrow, MonitorSmartphone, Rocket, LayoutList } from 'lucide-react';
import Styles from './page.module.css';
import gateway from '../../public/gateway.png';
import welcome from '../../public/two-phones.png';
import global from '../../public/global.png';
import cripto from '../../public/cripto.png';
import papii from '../../public/papii.jpg';
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";


const Nav = () => {
    const [isNav, setIsnav] = useState(false);
    const [ref10, view10] = useInView({ threshold: 1, triggerOnce: true });
    const [ref20, view20] = useInView({ threshold: 1, triggerOnce: false });
    const [ref21, view21] = useInView({ threshold: 1, triggerOnce: false });
    const [ref22, view22] = useInView({ threshold: 1, triggerOnce: false });

    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);
    const { ref, inView } = useInView({ threshold: 1 });
    const [ref1, view1] = useInView({ threshold: 1 });

    useEffect(() => {
        if (inView) {
            const start = 1;
            const end = 50;
            const duration = 1000; // in ms
            const stepTime = duration / (end - start);

            const interval = setInterval(() => {
                setCount(prev => {
                    if (prev < end) return prev + 1;
                    clearInterval(interval);
                    return end;
                });
            }, stepTime);
        }
    }, [inView]);

    useEffect(() => {
        if (view1) {
            const start = 1;
            const end = 50;
            const duration = 1000; // in ms
            const stepTime = duration / (end - start);

            const interval1 = setInterval(() => {
                setCount1(prev => {
                    if (prev < end) return prev + 1;
                    clearInterval(interval1);
                    return end;
                });
            }, stepTime);
        }
    }, [view1]);
    return (
        <>
            <div className="home-page">
                <aside className={`aside ${isNav ? 'nav-visible' : 'nav-hidden'}`}>
                    <div className="nav_lo">
                        <h1>M</h1>
                        <div className="menu_inno">
                            <h4>MAYON</h4>
                            <h6>INNOVATION & TECHNOLOGY</h6>
                        </div>
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
                        <div className="nav_lo">
                            <h1>M</h1>
                            <div className="menu_inno">
                                <h4>MAYON</h4>
                                <h6>INNOVATION & TECHNOLOGY</h6>
                            </div>
                        </div>
                        <div className="hamburger">
                            <button type={"button"} className='nav-btn' onClick={() => setIsnav(!isNav)}>
                                {isNav ? <X /> : <Grip />}
                            </button>
                        </div>

                        <ul className="large_menu">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#service">Service</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#contact">Contact</a></li>
                            <li><a href="#company">Company</a></li>
                            <li className="text-white ps-2">{<Grip />}</li>
                        </ul>
                    </div>
                </nav>

                <div className="bg-black pb-5 ps-2 pe-2" id="service">
                    <div className="large-padd">
                        <main className={Styles.main_page} id="home">
                            <div className={Styles.grid_main}>
                                <div className="text-white hero-head">
                                    <motion.h3 initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 1, ease: "easeIn" }}>Powering Ideas <br /> Through Tech.</motion.h3>
                                    <p>We design and build apps. websites, and custom tech solutions to turn your to scalable digital products.</p>
                                    <button className={Styles.work_with_us} type="button">Work with us <i className="bi bi-arrow-right pt-1 fw-bold"></i>  </button>
                                </div>
                            </div>
                        </main>
                        <motion.div className={Styles.servicesDiv}>
                            <h3 className="text-white ps-3 pe-3">Our Services</h3>
                        </motion.div>
                        <div className={Styles.grid_service}>
                            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 1, ease: "easeIn" }} className={Styles.service_box}>
                                <h3 className={`${Styles.service_emoji}`}><i className="me-3"><LayoutList /></i></h3>
                                <div className="ms-2">
                                    <h5>Wireframing & Prototyping</h5>
                                    <p>Clear visual plan before development begins</p>
                                </div>
                            </motion.div>

                            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 1, ease: "easeIn" }} className={Styles.service_box}>
                                <h3 className={`${Styles.service_emoji}`}><i className="me-3"><ArrowDownWideNarrow /></i></h3>
                                <div className="ms-2">
                                    <h5>UI/UX Design</h5>
                                    <p>Beautiful, intuitive designs built for real users.</p>
                                </div>
                            </motion.div>

                            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 1, ease: "easeIn" }} className={Styles.service_box}>
                                <h3 className={Styles.service_emoji}><i className={"me-3"}><MonitorSmartphone /></i></h3>
                                <div className="ms-2">
                                    <h5>App & Web Development</h5>
                                    <p>secure-responsive and scalable buils for all platforms.</p>
                                </div>
                            </motion.div>

                            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 1, ease: "easeIn" }} className={Styles.service_box}>
                                <h3 className={`${Styles.service_emoji}`}><i className="me-3"><Rocket /></i></h3>
                                <div className="ms-2">
                                    <h5>Launching and maintenance</h5>
                                    <p>Post-launch support to ensure everything runs smoothly</p>
                                </div>
                            </motion.div>
                        </div>


                        <div className="bg-black">
                            <h2 className={Styles.about_sp}>
                                <h3>ABOUT US</h3>

                            </h2>

                            {/* <div className="large-padd"> */}
                            <div className="ps-2 pe-2">

                                <p className="text-white">Mayon Innovation and Technology is a forward thinking digital company dedicated to transforming ideas into impactful technology solutions. We specialize in UI/UX design, web and mobile app development, wireframing and prototyping, product launches, and long-term maintenance, helping businesses and individuals turn their visions into reality. <br />
                                    Founded with a mission to make technology accessible, scalable, and purposeful, Mayon brings a fresh perspective to the digital space. We’re not just developers or designers, we’re creative problem-solvers who work at the intersection of design, functionality, and innovation. Whether you’re launching a new digital product, improving an existing system, or building from the ground up, our team provides the expertise, agility, and support you need.
                                    At Mayon, we believe that great technology starts with understanding people. That is why our process begins with deep user research, thoughtful UX design, and strategic planning. We don’t cut corners, we collaborate closely with our clients to ensure every solution we deliver is intuitive, scalable, and visually striking. <br />
                                    We also understand that launching is just the beginning. That’s why we offer post-launch maintenance, performance optimization, and product updates, so you can stay competitive and relevant in a fast-moving digital world.</p>
                            </div>

                            <div className={Styles.happy}>
                                <div>
                                    <motion.h1 ref={ref} initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} className="text-primary text-center">{count} +</motion.h1>
                                    <h6 className="text-white">Happy Clients</h6>
                                    {/* <div className={Styles.shadow_blue_client}>
                                        <span></span>
                                    </div> */}
                                    {/* <div></div> */}
                                </div>
                                <div>
                                    <motion.h1 ref={ref1} initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} className="text-danger text-center">{count1} +</motion.h1>
                                    <h6 className="text-white">Project delivered</h6>
                                </div>
                            </div>
                            {/* </div> */}
                        </div>
                    </div>
                    <div className="bg-black relative" id="about">
                        <div className={Styles.more_about}>
                            <motion.h2 ref={ref10} initial={{ opacity: 0, y: 50 }} animate={view10 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} transition={{ duration: 1, ease: "easeIn" }} >More About us</motion.h2>
                        </div>

                        <motion.p initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} transition={{ duration: 1, ease: "easeIn" }} className="text-white text-center pb-3">We followed structured, human-centered approach to ensure every product we build is functional, user friendly and impactful.</motion.p>
                        <div className={Styles.grid_more_about}>
                            <motion.div initial={{ opacity: 0, scale: 0.2 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: false }} transition={{ duration: 1, ease: "easeIn" }} className={Styles.discovery}>
                                <h5 className="text-center pb-3">Discovery & Research</h5>
                                <p>We begin understanding your goals, target users, competitors, and project scope. this helps us define the right strategy from the start.</p>
                            </motion.div>
                            <motion.div initial={{ opacity: 0, scale: 0.2 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: false }} transition={{ duration: 1, ease: "easeIn" }} className={Styles.discovery}>
                                <h5 className="text-center pb-3">Wireframing & Prototyping</h5>
                                <p>We create Wireframe and interactive prototypes to visualize the structure and flow of your productt before developmrnt begins. </p>
                            </motion.div>
                            <motion.div initial={{ opacity: 0, scale: 0.2 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: false }} transition={{ duration: 1, ease: "easeIn" }} className={Styles.discovery}>
                                <h5 className="text-center pb-3">Planning and strategy</h5>
                                <p>We outline the user flow, technical requirements and design roadmap. This phase sets the foundation for the designs and development begins. </p>
                            </motion.div>
                            <motion.div initial={{ opacity: 0, scale: 0.2 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: false }} transition={{ duration: 1, ease: "easeIn" }} className={Styles.discovery}>
                                <h5 className="text-center pb-3">UI/UX Design</h5>
                                <p>We design clean, modern and user-friendly interface that align with your brand and deliver a smooth user experience. </p>
                            </motion.div>
                            <motion.div initial={{ opacity: 0, scale: 0.2 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: false }} transition={{ duration: 1, ease: "easeIn" }} className={Styles.discovery}>
                                <h5 className="text-center pb-3">Development</h5>
                                <p>our developrs bring the design to life with clean responsive and scalable code for both web and mobile platform. </p>
                            </motion.div>
                            <motion.div initial={{ opacity: 0, scale: 0.2 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: false }} transition={{ duration: 1, ease: "easeIn" }} className={Styles.discovery}>
                                <h5 className="text-center pb-3">Testing and quality assurance</h5>
                                <p>We rigorousely test the product across devices and scenarios to ensure everything workd perfectly before launch. </p>
                            </motion.div>
                            <motion.div initial={{ opacity: 0, scale: 0.2 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: false }} transition={{ duration: 1, ease: "easeIn" }} className={Styles.discovery}>
                                <h5 className="text-center pb-3">Launch & Development</h5>
                                <p>We deploy your product to the live environment and ensure it is ready for users with full functionality and performance optimization. </p>
                            </motion.div>
                            <motion.div initial={{ opacity: 0, scale: 0.2 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: false }} transition={{ duration: 1, ease: "easeIn" }} className={Styles.discovery}>
                                <h5 className="text-center pb-3">Post-Launch Support</h5>
                                <p>We provide ongoing support, updates fix bugs and improvement to ensure your product continues to evolve and perform well. </p>
                            </motion.div>
                        </div>
                    </div>
                    <div className="bg-black pt-5" id="company">
                        {/* <div className="large-padd pt-4"> */}
                        <motion.div ref={ref20} initial={{ opacity: 0, y: -50 }} animate={view20 ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }} transition={{ duration: 1, ease: "easeIn" }} className={Styles.servicesDiv}>
                            <h2 className="text-white ps-3 pe-3">Our Work</h2>
                        </motion.div>

                        <div className={Styles.work_container}>
                            <div className={Styles.work_border}>
                                {/* <div className={Styles.shadow_blue}>
                                    <span></span>
                                </div> */}
                                <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} transition={{ duration: 1.5, ease: "easeInOut" }} className={Styles.work_text}>
                                    <h4 className="text-center">Easy Travel</h4>
                                    <p className="text-center">EASY TRAVEL is a simple and user-friendly traveling website for exploring destination and booking with ease</p>
                                    <div className="d-flex justify-content-center pt-4"><button className={Styles.btn_hover} type="button">Show Case Study</button></div>
                                </motion.div>
                                <motion.div initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} transition={{ duration: 1.5, ease: "easeInOut" }} className={Styles.ease_imgDiv}>
                                    <Image className={Styles.ease_img} src={gateway} alt="Travel Ease" />
                                </motion.div>
                            </div>
                            <div className={Styles.work_border}>
                                <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} transition={{ duration: 1.5, ease: "easeInOut" }} className={Styles.work_text}>
                                    <h4 className="text-center">Global VPN</h4>
                                    <p className="text-center">GLOBAL VPN is a fast and secure mobile app that allows users browse privately and access content from anywhere.</p>
                                    <div className="d-flex justify-content-center pt-4"><button className={Styles.btn_hover} type="button">Show Case Study</button></div>
                                </motion.div>
                                <motion.div initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} transition={{ duration: 1.5, ease: "easeInOut" }} className={Styles.ease_imgDiv}>
                                    <Image className={Styles.ease_img} src={global} alt="Travel Ease" />
                                </motion.div>
                            </div>
                            <div className={Styles.work_border}>
                                {/* <div className={Styles.shadow_blue_music}>
                                    <span></span>
                                </div> */}
                                <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} transition={{ duration: 1.5, ease: "easeInOut" }} className={Styles.work_text}>
                                    <h4 className="text-center">Music Play</h4>
                                    <p className="text-center">MUSIC PLAY is a sleek music app build to let user easily play, organize and enjoy their favorite song anytime, it features a clean interface,
                                    </p>
                                    <div className="d-flex justify-content-center pt-4"><button className={Styles.btn_hover} type="button">Show Case Study</button></div>
                                </motion.div>
                                <motion.div initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} transition={{ duration: 1.5, ease: "easeInOut" }} className={Styles.ease_imgDiv}>
                                    <Image className={Styles.ease_img} src={welcome} alt="Travel Ease" />
                                </motion.div>
                            </div>
                            <div className={Styles.work_border}>
                                <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} transition={{ duration: 1.5, ease: "easeInOut" }} className={Styles.work_text}>
                                    <h4 className="text-center">Cryptra Website</h4>
                                    <p className="text-center">CRYPTRA is a secure website for trading and managing digital assets.
                                    </p>
                                    <div className="d-flex justify-content-center pt-4"><button className={Styles.btn_hover} type="button">Show Case Study</button></div>
                                </motion.div>
                                <motion.div initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} transition={{ duration: 1.5, ease: "easeInOut" }} className={Styles.ease_imgDiv}>
                                    <Image className={Styles.ease_img} src={cripto} alt="Travel Ease" />
                                </motion.div>
                            </div>
                        </div>
                        {/* </div> */}
                        {/* <div className="large-padd pt-5 pb-4"> */}
                        <motion.h1 ref={ref21}
                            initial={{ opacity: 0, y: 50 }} animate={view21 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} transition={{ duration: 1, ease: "easeIn" }}
                            className="text-white text-center pt-5">At the Helm of Mayon</motion.h1>
                        <div className={Styles.grid_passport}>
                            <div>
                                <h2 className="text-primary">Saliu Johnson</h2>
                                <p className="text-white">CEO & Founder, Mayon Innovation and Technology </p>
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
                        {/* </div> */}
                    </div>

                    <div className="bg-dark text-white pt-4 ps-3 pe-3 pb-3" id="contact">
                        {/* <div className="large-padd pt-5 pb-5"> */}

                        <div className={Styles.grid_question}>
                            {/* <div className={Styles.shadow_blue_question}>
                                <span></span>
                            </div> */}
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
                                <div className="d-flex insta-div">
                                    <div className="insta-bg"><i className="bi bi-instagram text-black"></i></div>
                                    <i className="bi bi-facebook pe-3 ps-3 fs-3"></i>
                                    <i className="bi bi-telegram fs-3"></i>
                                </div>
                            </div>
                            <div>
                                <form className={Styles.form}>
                                    <label htmlFor="email">Email Address</label> <br />
                                    <input type="email" id="email" placeholder="Enter Email Address" /> <br />
                                    <label htmlFor="topic">Your Topic</label> <br />
                                    <input type="email" id="email" placeholder="Enter Your Topic" /> <br />
                                    <button type="button" className="btn btn-primary">Send Message</button>
                                </form>
                            </div>
                        </div>
                        {/* </div> */}
                    </div>
                    <footer className={Styles.footer}>
                        {/* <div className="large-padd"> */}
                        <div className={Styles.grid_footer}>
                            <h4 className={Styles.mayon_f_logo}>
                                <h1 className={Styles.mayon_m}>M</h1>
                                <div className={Styles.Tech}>
                                    <h4 className={Styles.mayon_w}>MAYON</h4>
                                    <h6 className={Styles.innovation}>INNOVATION & TECHNOLOGY</h6>
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
                                <p>Reach out to us easily</p>
                                <p>Mayoninnovation@gmail.com</p>
                                <p>+234 810 340 0258</p>
                            </div>
                        </div>
                        {/* </div> */}
                    </footer>
                </div>
            </div>
        </>
    )
};

export default Nav;

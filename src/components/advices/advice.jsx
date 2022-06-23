
import './advice.css'
import img from '../../assets/baby.jfif'
const Advice = () => {
    return (
        <>
            <section className="slide-top image-advice">
                <div className="content shadow">
                    <span>Healthy Living</span>
                    <h3 className="header">General & Pregnancies Advices</h3>
                </div>
            </section>
            <section className='showAdvices'>
                <div className="container">
                    <div className="advicesContent">
                        <div className="frist line">
                            <div className="box one">Getting 150 minutes weekly</div>
                            <div className='emp'></div>
                            <div className="box one">Getting 150 minutes weekly</div>
                            <div className='emp'></div>
                            <div className="box one">Getting 150 minutes weekly</div>
                            <div className='emp'></div>
                            <div className="box one">Getting 150 minutes weekly</div>
                            <div className='emp'></div>
                            <div className="box one">Getting 150 minutes weekly</div>
                            <div className='emp'></div>
                        </div>
                        <div className="frist">
                            <div className="box two">
                                <img src={img} alt="" />
                                <p>Getting 150 minutes weekly</p>
                            </div>
                            <div className='emp'></div>
                            <div className="box two">
                                <img src={img} alt="" />
                                <p>Getting 150 minutes weekly</p>
                            </div>
                            <div className='emp'></div>
                            <div className="box two">
                                <img src={img} alt="" />
                                <p>Getting 150 minutes weekly</p>
                            </div>
                            <div className='emp'></div>
                            <div className="box two">
                                <img src={img} alt="" />
                                <p>Getting 150 minutes weekly</p>
                            </div>
                            <div className='emp'></div>
                            <div className="box two">
                                <img src={img} alt="" />
                                <p>Getting 150 minutes weekly</p>
                            </div>
                            <div className='emp'></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Advice;
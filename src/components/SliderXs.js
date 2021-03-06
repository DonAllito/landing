import React,{Component} from'react';
import { Swiper, Slide } from 'react-dynamic-swiper'
import 'react-dynamic-swiper/lib/styles.css';
import '../css/Demo.css';
import Scrollchor from 'react-scrollchor';



const OPTION_KEYS = ['navigation', 'pagination', 'scrollBar', 'loop'];

export default class SliderXs extends Component {


    render() {
        return (
            <div id="What people say" className="Demo" style={{backgroundColor:'white', paddingTop:'%',paddingBottom:'%',textAlign:'center'}}>
                <div className="backColor" style={{ height: '30vh' , backgroundColor:'black'}} >


                    <div class="row center-xs">
                        <div class="col-xs-8 col-sm-12  ">
                            <div class="box">
                                <div class="box" style={{paddingTop:'7%'}}>

                                    <Scrollchor   to="#What people say"  className="hbtn hb-fill-middle-bg-br hbor4 hpill hpad2 " > نمای درون اپلیکیشن</Scrollchor>


                                </div>

                            </div>
                        </div>
                    </div>

                </div>


                <div className="Demo-swiper">
                    <Swiper
                        swiperOptions={{scrollbarHide: false}}

                        navigation={true}
                        pagination={false}
                        scrollBar={true}
                        loop={true}

                    >

                        <Slide className="Demo-swiper__slide" >
                            <img src={require('./../image/Fitex-screen/photo5850280052187574690.jpg')}                         style={{width:'50%',paddingTop:'15px'}}
                            />

                        </Slide><Slide className="Demo-swiper__slide" >
                        <img src={require('./../image/Fitex-screen/photo5850280052187574691.jpg')}                         style={{width:'50%',paddingTop:'15px'}}
                        />

                    </Slide><Slide className="Demo-swiper__slide" >
                        <img src={require('./../image/Fitex-screen/photo5850280052187574692.jpg')}                         style={{width:'50%',paddingTop:'15px'}}
                        />

                    </Slide><Slide className="Demo-swiper__slide" >
                        <img src={require('./../image/Fitex-screen/photo5850280052187574693.jpg')}                         style={{width:'50%',paddingTop:'15px'}}
                        />

                    </Slide><Slide className="Demo-swiper__slide" >
                        <img src={require('./../image/Fitex-screen/photo5850280052187574694.jpg')}                         style={{width:'50%',paddingTop:'15px'}}
                        />

                    </Slide>
                        <Slide className="Demo-swiper__slide" >
                            <img src={require('./images/screen1.jpg')}                         style={{width:'50%',paddingTop:'15px'}}
                            />

                        </Slide>
                        <Slide className="Demo-swiper__slide" >
                            <img src={require('./images/screen3.jpg')}                         style={{width:'50%',paddingTop:'15px'}}
                            />

                        </Slide>

                        <Slide className="Demo-swiper__slide" >
                            <img src={require('./images/screen2.jpg')}                         style={{width:'50%',paddingTop:'15px'}}
                            />

                        </Slide>



                    </Swiper>
                </div>


            </div>
        )
    }
}
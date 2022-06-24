import { useEffect, useState } from 'react';
import axios from "axios";
import { GlobalVar } from '../context/GlobalVar';
import '../css/Home.css';


let Home = props => {
    console.log(GlobalVar);

    return (
        <div>
            <img id = "home-main-image" src="https://i0.wp.com/xboxera.com/wp-content/uploads/2020/02/Ring.jpg?resize=780%2C470ssl=1" className="rounded mx-auto d-block"></img>
                    <h1>Welcome to Halo Online!</h1>
                <div className='container'>
                <div className ='rounded row mt-5 ml-5'>

                <div id="carouselSlidesOnly" className="carousel slide" data-ride="carousel">
                    <ol className="bg-transparent carousel-indicators ">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img className="rounded d-block w-50px h-50px" src="https://i.redd.it/icnaf128ck851.jpg" alt="Shop Special" />
                        <div className="carousel-caption bg-transparent d-none d-md-block">
                      <h5 className="carousel-captiony bg-transparent">Covenant Sword</h5>
                      <a className="link" href="/Special">
                      Shop Specialty Items
                    </a>
                    </div>
                    </div>
                        </div>
                        <div className="carousel-item ">
                        <img className="rounded d-block" src="https://i.redd.it/6e16qh7arq521.jpg" alt="Shop Vehicles" />
                        <div className="carousel-caption bg-transparent d-none d-md-block">
                      <h5 className="carousel-captiony bg-transparent">Banshee</h5>
                      <a className="link" href="/Vehicles">
                      Shop Vehicles Items
                    </a>
                    </div>
                        </div>
                        <div className="carousel-item">
                        <img className="rounded d-block " src="https://i.redd.it/y4pahwhbmlv61.png" alt="Shop Weapons" />
                        <div className="carousel-caption d-none d-md-block">
                      <h5 className="carousel-captiony bg-transparent">Needler</h5>
                      <a className="link" href="/Weapons">
                      Shop Weapons Items
                    </a>
                    </div> 
                </div>
            

         <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
          </div>
          </div>
    </div>
</div>
        
    )
}

export default Home;
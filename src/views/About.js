import { useEffect, useState } from 'react';
import axios from "axios";
import { GlobalVar } from '../context/GlobalVar';



let About = props => {
    console.log(GlobalVar);

    return (
        <div>
            <img id = "home-main-image" src="https://i.redd.it/7tjdokuj6z691.jpg" className="rounded mx-auto d-block"></img>
                    <h1>The story so far</h1>
                    <div className=' ml-5 mr-5 bg-transparent'>
                    <div className=" row">
                    <div className="bg-transparent col-sm-6">
                        <div className="w-70 card">
                        <div id="card-body" className="card-body">
                            <h5 className="font-weight-bold text-center card-title">Halo: Combat Evolved</h5>
                            <p className="card-text">Mankind is being destroyed by a conglomerate of alien races all under the flag of the Covenant. A human spaceship is under attack and has no chance to survive, and now the only hope for mankind is for the Spartan-II forged Master Chief to make sure the Covenant do not get a hold of the ship's AI, and thus discovering the location of Earth. But the survivors of the ship are stranded on a strange alien planet called Halo, and everything is stacked against them. It becomes a desperate battle as the brave crew, 
          lead by the Master Chief and the AI Cortana, try to survive the Covenant's assault..</p>
                            <a href="https://www.xbox.com/en-US/games/store/halo-combat-evolved-anniversary/9nwqmvsb63n4" className="btn btn-info">Halo 1 for Purchase</a>
                        </div>
                        </div>
                    </div>
                    <div className="bg-transparent col-sm-6">
                        <div className="w-80 card">
                        <div className=" card-body">
                            <h5 className="font-weight-bold text-center card-title">Halo 2</h5>
                            <p className="card-text">The last protectorates of the outer colonies are destroyed; now Earth is all alone. 
      After the destruction of Halo, the Master Chief and Cortana heads home for Earth. And the Covenant finds their way to earth to eliminate the human race. The Master Chief is their last hope</p>
                            <a href="https://www.xbox.com/en-us/games/store/halo-2-anniversary/9p5739g419ld" className="btn btn-info">Halo 2 for Purchase</a>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="row">
                    <div className="bg-transparent col-sm-6">
                        <div className="mt-5 w-60 card">
                        <div className="card-body">
                            <h5 className="font-weight-bold text-center card-title">Halo 3</h5>
                            <p className="card-text">Master Cheif returns to a Covenant Dominated Earth on a mission to kill the final alien leader. Meanwhile, the Arbiter, Johnson, and Keyes form a loose alliance and escape from Delta Halo. The Covenant is ripped in civil war, and the Elites along with a handful of other alien races become sympathetic to the human cause. 
      Delta Halo's impromptu dis-activation has brought all of the Halos to a "remote activation phase". They can be activated from a facility called the ark, which happens to be on Earth.
    </p>
                            <a href="https://www.xbox.com/en-US/games/store/halo-3/9pgl2z1h9m4r" className="btn btn-info">Halo 3 for Purchase</a>
                        </div>
                        </div>
                    </div>
                    <div className="bg-transparent col-sm-6">
                        <div className="w-80 card">
                        <div className="card-body">
                            <h5 className="font-weight-bold text-center card-title">Halo 4</h5>
                            <p className="card-text">4 years after the destruction of the final Halo and the ending of the Covenant,
       Master Chief is woken by Cortana. The war is over, he Covenant has been reformed, and there are new Spartans. The Covenant boards the ship, and Master Chief is forced to retreat. He crashes on a new planet populated by a new race of warriors- the Forerunners. Now, these surviving Forerunner Machines and the Covenant begin attacking the UNSC, and the Master Chief is forced to do his job- leading the UNSC's forces against these new enemies. History and secrets will be revealed, another new enemy will come to light, and the Chief will do his best to save humanity, again.
    </p>
                            <a href="https://www.amazon.com/Halo-4-Xbox-Standard-Game-microsoft/dp/B0050SYX8W" className="btn btn-info">Halo 4 for Purchase</a>
                        </div>
                        </div>
                    </div>
                    </div>
                    </div>
     </div>
    )
}

export default About;
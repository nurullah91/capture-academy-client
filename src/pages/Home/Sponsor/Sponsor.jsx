import Marquee from "react-fast-marquee";
import sponsor from '../../../assets/sponsors/sponsor.jpg'
import sponsor0 from '../../../assets/sponsors/sponsor0.jpg'
import sponsor1 from '../../../assets/sponsors/sponsor1.jpg'
import sponsor2 from '../../../assets/sponsors/sponsor2.jpg'
import sponsor3 from '../../../assets/sponsors/sponsor3.jpg'
import sponsor4 from '../../../assets/sponsors/sponsor4.jpg'
import sponsor5 from '../../../assets/sponsors/sponsor5.jpg'
import sponsor6 from '../../../assets/sponsors/sponsor6.jpg'
import sponsor7 from '../../../assets/sponsors/sponsor7.jpg'
import sponsor8 from '../../../assets/sponsors/sponsor8.jpg'
import sponsor9 from '../../../assets/sponsors/sponsor9.jpg'
import sponsor10 from '../../../assets/sponsors/sponsor10.jpg'
import sponsor11 from '../../../assets/sponsors/sponsor11.jpg'
import sponsor12 from '../../../assets/sponsors/sponsor12.jpg'
import sponsor13 from '../../../assets/sponsors/sponsor13.jpg'
import sponsor14 from '../../../assets/sponsors/sponsor14.jpg'

const Sponsor = () => {
    return (
        <div className="">
            <h2 className="text-4xl font-bold mb-5 text-center">Our Sponsors</h2>

<Marquee direction="right">
    <h3 className="text-slate-400 text-4xl font-bold mx-3">Sony</h3>
    <h3 className="text-slate-400 text-4xl font-bold mx-3">Nikon</h3>
    <h3 className="text-slate-400 text-4xl font-bold mx-3">Canon</h3>
    <h3 className="text-slate-400 text-4xl font-bold mx-3">FUJIFILM</h3>
    <h3 className="text-slate-400 text-4xl font-bold mx-3">PENTAX</h3>
    <h3 className="text-slate-400 text-4xl font-bold mx-3">Kodak</h3>
    <h3 className="text-slate-400 text-4xl font-bold mx-3">Leica</h3>
    <h3 className="text-slate-400 text-4xl font-bold mx-3">Go Pro</h3>
    <h3 className="text-slate-400 text-4xl font-bold mx-3">Panasonic</h3>
    <h3 className="text-slate-400 text-4xl font-bold mx-3">Hasselblad</h3>
    <h3 className="text-slate-400 text-4xl font-bold mx-3">OLYMPUS</h3>
    <h3 className="text-slate-400 text-4xl font-bold mx-3">MINOLTA</h3>
    <h3 className="text-slate-400 text-4xl font-bold mx-3">Polaroid</h3>
    <h3 className="text-slate-400 text-4xl font-bold mx-3">Sigma</h3>
    <h3 className="text-slate-400 text-4xl font-bold mx-3">Konica</h3>
    <h3 className="text-slate-400 text-4xl font-bold mx-3">RICOH</h3>
</Marquee>


            <Marquee pauseOnClick={true} speed={100}>
                <div><img className="w-3/4 scale-75" src={sponsor} alt="Sponsor image" /></div>
                <div><img className="w-3/4 scale-75" src={sponsor0} alt="Sponsor image" /></div>
                <div><img className="w-3/4 scale-75" src={sponsor1} alt="Sponsor image" /></div>
                <div><img className="w-3/4 scale-75" src={sponsor2} alt="Sponsor image" /></div>
                <div><img className="w-3/4 scale-75" src={sponsor3} alt="Sponsor image" /></div>
                <div><img className="w-3/4 scale-75" src={sponsor4} alt="Sponsor image" /></div>
                <div><img className="w-3/4 scale-75" src={sponsor5} alt="Sponsor image" /></div>
                <div><img className="w-3/4 scale-75" src={sponsor6} alt="Sponsor image" /></div>
                <div><img className="w-3/4 scale-75" src={sponsor7} alt="Sponsor image" /></div>
                <div><img className="w-3/4 scale-75" src={sponsor8} alt="Sponsor image" /></div>
                <div><img className="w-3/4 scale-75" src={sponsor9} alt="Sponsor image" /></div>
                <div><img className="w-3/4 scale-75" src={sponsor10} alt="Sponsor image" /></div>
                <div><img className="w-3/4 scale-75" src={sponsor11} alt="Sponsor image" /></div>
                <div><img className="w-3/4 scale-75" src={sponsor12} alt="Sponsor image" /></div>
                <div><img className="w-3/4 scale-75" src={sponsor13} alt="Sponsor image" /></div>
                <div><img className="w-3/4 scale-75" src={sponsor14} alt="Sponsor image" /></div>
            </Marquee>
        </div>
    );
};

export default Sponsor;
import './marvel.css';

function Hero (props) {
    return (
        <div className="hero-card">
            <img src ={props.photo} alt="HeroPhoto"></img>
            <div className="hero-name">{props.name}</div>
            <div class="information-part">
            <div className="hero-universe"><span class="title-small">Universe:</span> {props.universe}</div>
            <div className="hero-ego"><span class="title-small">Alter ego: </span> {props.ego}</div>
            <div class="hero-activity"><span class="title-small">Activity: </span> {props.activity}</div>
            <div className="hero-friends"><span class="title-small">Frieinds: </span> {props.friends}</div>
            <div className="hero-superpower"><span class="title-small">Superpower: </span> {props.superpower}</div>
            <div class="hero-info"><span class="title-small">Information: </span> {props.info}</div>
            <div class="hero-id">{props.id}</div>
            </div>
        </div>
    );
}
export default Hero;

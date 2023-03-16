import aboutUsImage from '../assets/images/aboutUsImage.png';

export const AboutUs = () => {
    return (
        <div className="py-52 px-12 bg-opacity-50" style={{"backgroundImage": `url(${aboutUsImage})`}}>
            <span className="font-londrinaShadow text-8xl text-sky-600 "> Who we are? </span>
            <p className='w-1/2 text-2xl'> We are a community of believers who believe in the simple yet powerful truth that every person is important to God. Regardless of your background, experiences, or doubts, God desires a relationship with you, and we share that same desire. We welcome all individuals to join us in this journey of faith and discovery of God's love for us. </p>
        </div>
    );
}
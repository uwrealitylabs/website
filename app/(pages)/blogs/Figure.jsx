import Image from "next/image";
import PropTypes from 'prop-types';

export default function Figure({ img, descrip, number }) {
    return (
        <div>
            <a href={img.src} target="_blank" rel="noopener noreferrer" className="flex justify-center">
                <Image src={img} alt={descrip} />
            </a>
            <p className="text-center italic mt-2 mb-6">
                Fig. {number}: {descrip}
            </p>
        </div>
    );
}

Figure.propTypes = {
    img: PropTypes.object.isRequired,
    descrip: PropTypes.string.isRequired,
    number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};

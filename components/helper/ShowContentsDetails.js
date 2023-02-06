const Logo = require('../../assets/no_image.jpg');

function ShowContentsDetails({ title, description, tags }) {
    return (
        <div>
            <h1 className="text-4xl font-semibold text-white leading-tight mb-2">{title}</h1>
            <div className="flex flex-wrap items-center text-gray-400 text-sm mb-4">
                {tags && tags.map(tag => (
                    <span key={""} className="mr-4">{tag}</span>
                ))}
            </div> 
            {/* <div className="flex items-center text-gray-400 text-sm mb-4">
                <svg className="fill-current text-orange-500 w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h14v24H0z" fill="none"/><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <span>6</span>
            </div> */}
            <p className="text-gray-300 text-base leading-relaxed mb-4">{description}</p>
        </div>
    );
}

export default ShowContentsDetails
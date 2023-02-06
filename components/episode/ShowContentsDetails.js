const Logo = require('../../assets/no_image.jpg');

function ShowContentsDetails({ title, content, small}) {
    return (
        <div>
            <h1 className="text-4xl font-semibold text-white leading-tight mb-2">{title}</h1>
            {/* style={{fontSize: 14}} */}
            <p className="text-gray-300 text-base leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: content ? content : ""}} />
        </div>
    );
}

export default ShowContentsDetails
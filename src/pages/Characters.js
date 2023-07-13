const Characters = () => {
    const unicodeCharacters = Array.from({ length: 5010 }, (_, index) => String.fromCharCode(index + 12000));
    const unicodeString = unicodeCharacters.join(' ');


    return (
        <div className="card-container">

            <p style={{ fontFamily: 'Source Sans Pro', fontSize: '16px' }}>{unicodeString}</p>
        </div>
    );
     
}

export default Characters;
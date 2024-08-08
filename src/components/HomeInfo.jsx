import React from 'react';

const renderContent = {
    1: (
        <h1 className="neo-brutalism-blue py-4 px-8 mx-5 text-white text-center sm:text-xl sm:leading-snug">
            Ahoj, ja som <span className="font-semibold">Andrej</span> 👋
            <br />
            <p>Software developer pre firmu innovis</p>
        </h1>
    ),
    2: (
        <h1>2</h1>
    ),
    3: (
        <h1>3</h1>
    ),
    4: (
        <h1>4</h1>
    )
}

function HomeInfo({currentStage}) {
    return renderContent[currentStage] || null;
}

export default HomeInfo;
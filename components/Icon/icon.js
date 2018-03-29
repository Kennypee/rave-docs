const Icon = (props) => {
    if(props.name === '') return null;

    try{
        const Image = require(`./svg/${props.name}`).default;

        if(Image) {
            return (
                <Image 
                    {...props}
                />
            );
        }
    } catch(error) {
        console.error('Icon not found!!', error.message);
        return null;
    }
}

export default Icon;
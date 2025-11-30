
const ContactCard = ({title, data , icon: Icon}) => {
    return(
        <div className="flex flex-col gap-1 items-center md:items-start">
                            <div className="flex gap-2 items-center text-center md:text-left">
                            <Icon className="text-indigo-400 text-lg" />
                            <h2 className="font-bold text-white "> {title} </h2>
                            </div>
                            
                            <p className="font-light text-base text-neutral-400"> {data} </p>
                        
                        </div>
    );
}
export default ContactCard;
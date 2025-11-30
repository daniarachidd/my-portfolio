const SkillCard = ({name, icon}) => {
    return(
        <div className="flex flex-col items-center justify-center p-5 rounded-xl border border-white/20 hover:bg-white/30 hover:shadow-lg 
        hover:-translate-y-1 transition-all duration-300 w-32 md:w-52 md:h-32 bg-white/10 shadow-md ">
            
            <img src={icon} alt={name}  className="w-12 h-12 mb-3" />
      <p className="font-mono text-neutral-200 text-md md:text-lg font-bold"> {name} </p>
        </div>
    );
}
export default SkillCard;
function TeamCard({ member }) {
  return (
    <div className="overflow-hidden bg-white">
      <div className="flex items-center justify-center bg-white">
        <img
          src={member.image}
          alt={member.name}
          className="h-[280px] w-full object-cover object-center md:h-[240px]"
        />
      </div>

      <div className="flex flex-col items-center px-4 py-5">
        <h3 className="text-center text-[16px] font-bold leading-6 text-[#252B42]">
          {member.name}
        </h3>

        <p className="mt-2 text-center text-[14px] font-bold leading-6 text-[#23A6F0]">
          {member.role}
        </p>
      </div>
    </div>
  );
}

export default TeamCard;
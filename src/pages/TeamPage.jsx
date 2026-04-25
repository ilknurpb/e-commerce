import TeamCard from "../components/TeamCard";
import { teamData } from "../data/teamData";

function TeamPage() {
  return (
    <main className="bg-[#FAFAFA]">
      <section className="mx-auto max-w-[1100px] px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-[500px] text-center">
          <h1 className="text-[40px] font-bold leading-[50px] text-[#252B42]">
            Meet Our Team
          </h1>

          <p className="mx-auto mt-4 max-w-[320px] text-[14px] leading-5 text-[#737373] md:max-w-[470px]">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-8 md:mt-16 md:flex-row md:flex-wrap md:justify-center md:gap-6">
          {teamData.map((member) => (
            <div key={member.id} className="w-full md:w-[220px]">
              <TeamCard member={member} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default TeamPage;
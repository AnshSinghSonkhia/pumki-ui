import { InteractiveTooltip } from '@/components/pumki-ui/tooltip/tooltip-1';

    const teamMembers = [
        {
            id: 1,
            name: "Miguel Prewitt",
            designation: "Dr. Fix",
            image: "https://randomuser.me/api/portraits/men/21.jpg"
        },
        {
            id: 2,
            name: "Mark Frank",
            designation: "Paranoid-in-Chief",
            image: "https://randomuser.me/api/portraits/men/22.jpg"
        },
        {
            id: 3,
            name: "Fredrick Noyes",
            designation: "Chief Geek",
            image: "https://randomuser.me/api/portraits/men/24.jpg"
        }
    ];

  export const InteractiveTooltipDemo = () => {
    return (
        <div className="flex items-center justify-center min-h-[200px] p-8">
            <div className="flex items-center">
                <InteractiveTooltip items={teamMembers} />
            </div>
        </div>
    );
};
import Info from "./info";
import ModulePage from "./module/page";
import ViewGradeButton from "./viewgradebutton";

export default function CoursePage({ params }) {
    return (
        <div className="w-full p-4 mb-8">
            <ViewGradeButton id={params.id}></ViewGradeButton>
            <Info id={params.id} />

            <div className="my-4">
                <h2 className="text-xl font-bold mb-2">Modules</h2>
                <ModulePage params={params} />
            </div>
        </div>
    );
}

import ThreadForm from './ThreadForm';

export const metadata = {
    title: "Create Forum Thread",
};

export default function CreateThread() {
    return (
        <div>
            <h1>Create Forum Thread</h1>
            <ThreadForm />
        </div>
    );
}
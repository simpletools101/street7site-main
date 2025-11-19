
interface ICrcBtnProps {
    description:string;
    children:React.ReactNode;
}

export default function CrcBtn(props:ICrcBtnProps) {
    return (
        <button
            role="button"
            aria-description={props.description}
            className="border w-10 h-10 rounded-full border-black flex items-center justify-center"
        >
            {props.children}
        </button>
    )
}

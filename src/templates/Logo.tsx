import {useRouter} from "next/router";
type ILogoProps = {
    xl?: boolean;
};

const Logo = (props: ILogoProps) => {
    const router = useRouter();

    const size = props.xl ? '1.75' : '1';
    const fontStyle = props.xl
        ? 'font-semibold text-3xl'
        : 'font-semibold text-xl';

    return (
        <span className={`text-gray-900 inline-flex items-center ${fontStyle}`}>
           <img src={`${router.basePath}assets/images/ecoopzone.svg`} alt='ecoopzone' style={{height: `${size}em`}} />
         </span>
    );
};

export {Logo};

import { ReactNode } from 'react';
import {useRouter} from "next/router";

type IBackgroundProps = {
  children: ReactNode;
  color: string;
};

const Background = (props: IBackgroundProps) => {
    const router = useRouter();

    return (

        <div className={props.color}>
            {props.children}
            <style jsx>
                {`
                  background-image: url(${router.basePath}assets/images/bg_intro.png);
                  background-repeat: no-repeat;
                  background-position: right;
                  
                  @media only screen and (max-width:768px) {
                    [class*="col-"] {
                        width: 100%
                    }
                    background-image: none;
                  }
                `}
            </style>

        </div>
    );
}


export { Background };
